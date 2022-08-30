import { v4 as uuidV4 } from "uuid";
import { GenderEnum, PatientDTO, StatusEnum } from "../../../dtos/PatientsDTO";

import patientsReducer, {
  createPatient,
  sortPatients,
  updatePatient,
} from "./patientsSlice";

describe("patients reducer", () => {
  const initialState: PatientDTO[] = [
    {
      id: uuidV4(),
      patientName: "Vito Corleone",
      bornDate: new Date(1891, 12, 7),
      documentId: "11111111111",
      gender: GenderEnum.male,
      address: "110 Longfellow Avenue, Staten Island, New York(NY) 10301",
      status: StatusEnum.actived,
    },
  ];

  const newPatient = {
    patientName: "John Doe",
    bornDate: new Date(1990, 1, 1),
    documentId: "11111111111",
    gender: GenderEnum.male,
    address: "120 Baseline Rd, South Haven, Michigan(MI), 49090",
  };

  it("should handle initial state", () => {
    expect(patientsReducer(undefined, { type: "unknown" })).toEqual([]);
  });

  it("should handle create a new patient", () => {
    const actual = patientsReducer(initialState, createPatient(newPatient));
    expect(actual.length).toBe(2);
    expect(actual[1]).toHaveProperty("id");
    expect(actual[1].status).toBe("Ativo");
  });

  it("should handle sort patient state", () => {
    let actual = patientsReducer(initialState, createPatient(newPatient));
    actual = patientsReducer(actual, sortPatients());

    expect(actual[0].patientName).toBe("John Doe");
  });

  it("should handle update a patient", () => {
    const { id, bornDate, documentId, gender, address, status } =
      initialState[0];
    const updateName = "Don Vito Corleone";
    const newData = {
      id,
      patientName: updateName,
      bornDate,
      documentId,
      gender,
      address,
      status,
    };

    const actual = patientsReducer(initialState, updatePatient(newData));

    expect(actual[0].patientName).toBe("Don Vito Corleone");
  });
});
