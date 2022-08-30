/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";
import { PatientDTO, PatientReducerDTO } from "../../../dtos/PatientsDTO";
import type { RootState } from "../../app/hooks";

export const patientsSlice = createSlice({
  name: "patients",
  initialState: [] as PatientDTO[],
  reducers: {
    createPatient: {
      reducer: (state, action: PayloadAction<PatientReducerDTO>) => {
        console.log(action.payload);
        state.push(action.payload);
      },
      prepare: ({
        patientName,
        bornDate,
        documentId,
        gender,
        address,
      }: PatientDTO) => {
        const id = uuidV4();
        const status = "Ativo";

        const patient = {
          id,
          patientName,
          bornDate,
          documentId,
          gender,
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
    updatePatient: (state, action: PayloadAction<PatientDTO>) => {
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
