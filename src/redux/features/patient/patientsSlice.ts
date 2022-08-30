import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";
import { PatientDTO } from "../../../dtos/PatientsDTO";
import type { RootState } from "../../app/hooks";

export type PatientState = PatientDTO;

export const patientsSlice = createSlice({
  name: "patients",
  initialState: [] as PatientState[],
  reducers: {
    createPatient: {
      reducer: (state, action: PayloadAction<Omit<PatientState, "status">>) => {
        state.push(action.payload);
      },
      prepare: (
        name: string,
        bornDate: Date,
        documentId: string,
        gender: string,
        address: string,
      ) => {
        const id = uuidV4();
        const status = "Ativo";

        const patient = {
          id,
          name,
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
    sortPatients: (state, action: PayloadAction<undefined>) => {
      const newState = state;
      newState.sort((a, b) => a.name.localeCompare(b.name));

      Object.assign(state, newState);
    },
    updatePatient: (state, action: PayloadAction<PatientState>) => {
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
export const selectPatientsFilterByName = (state: RootState, name: string) => {
  const filteredPatients = state.patients.filter((patient) =>
    patient.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
  );

  if (filteredPatients) return filteredPatients;

  return null;
};

const { actions, reducer } = patientsSlice;

export const { createPatient, sortPatients, updatePatient } = actions;

export default reducer;
