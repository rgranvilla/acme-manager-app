/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { v4 as uuidV4 } from "uuid";
import {
  NormalizedPatientDTO,
  PatientReducerDTO,
  StatusEnum,
} from "../../../dtos/PatientsDTO";
import type { RootState } from "../../app/hooks";

export const patientsSlice = createSlice({
  name: "patients",
  initialState: [] as NormalizedPatientDTO[],
  reducers: {
    createPatient: {
      reducer: (state, action: PayloadAction<NormalizedPatientDTO>) => {
        state.push(action.payload);
        state.map((patient) => console.log(patient));
      },
      prepare: ({
        patientName,
        bornDate,
        documentId,
        gender,
        address,
      }: PatientReducerDTO) => {
        const id = uuidV4();
        const status = StatusEnum.actived;
        const normalizedGender = gender;
        const normalizedDate = format(bornDate, "dd/MM/yyyy");

        const patient = {
          id,
          patientName,
          bornDate: normalizedDate,
          documentId,
          gender: normalizedGender,
          address,
          status,
        };

        return {
          payload: { ...patient },
        };
      },
    },
    sortPatients: (state) => {
      const newState = state;
      newState.sort((a, b) => a.patientName.localeCompare(b.patientName));

      Object.assign(state, newState);
    },
    updatePatient: (state, action: PayloadAction<NormalizedPatientDTO>) => {
      const newState = state;
      const { id } = action.payload;

      const index = newState.findIndex((entity) => entity.id === id);
      newState.splice(index, 1, action.payload);

      Object.assign(state, newState);
    },
  },
});

export const selectAllPatients = (state: RootState) => state.patients;
export const selectPatientById = (state: RootState, id: string) => {
  return state.patients.find((entity) => entity.id === id);
};
export const selectPatientsFilterByName = (
  state: RootState,
  patientName: string,
) => {
  const filteredPatients = state.patients.filter((patient) =>
    patient.patientName
      .toLocaleLowerCase()
      .includes(patientName.toLocaleLowerCase()),
  );

  if (filteredPatients) return filteredPatients;

  return null;
};

const { actions, reducer } = patientsSlice;

export const { createPatient, sortPatients, updatePatient } = actions;

export default reducer;
