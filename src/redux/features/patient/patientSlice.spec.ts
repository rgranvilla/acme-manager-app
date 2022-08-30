import { v4 as uuidV4 } from "uuid";
import { useAppDispatch } from "../../app/hooks";
import { store } from "../../app/store";

import patientsReducer, {
  createPatient,
  PatientState,
  sortPatients,
  updatePatient,
} from "./patientsSlice";

describe("patients reducer", () => {
  const initialState: PatientState[] = [
    {
      id: uuidV4(),
      name: "Vito Corleone",
      bornDate: new Date(1891, 12, 7),
      documentId: "11111111111",
      gender: "male",
      address: "110 Longfellow Avenue, Staten Island, New York(NY) 10301",
      status: "Ativo",
    },
  ];

  const newPatient = {
    name: "John Doe",
    bornDate: new Date(1990, 1, 1),
    documentId: "11111111111",
    gender: "male",
    address: "120 Baseline Rd, South Haven, Michigan(MI), 49090",
  };

  it("should handle initial state", () => {
    expect(patientsReducer(undefined, { type: "unknown" })).toEqual([]);
  });

  it("should handle create a new patient", () => {
    const { name, bornDate, documentId, gender, address } = newPatient;

    const actual = patientsReducer(
      initialState,
      createPatient(name, bornDate, documentId, gender, address),
    );
    expect(actual.length).toBe(2);
    expect(actual[1]).toHaveProperty("id");
    expect(actual[1].status).toBe("Ativo");
  });

  it("should handle sort patient state", () => {
    const { name, bornDate, documentId, gender, address } = newPatient;

    let actual = patientsReducer(
      initialState,
      createPatient(name, bornDate, documentId, gender, address),
    );
    actual = patientsReducer(actual, sortPatients());

    expect(actual[0].name).toBe("John Doe");
  });

  it("should handle update a patient", () => {
    const { id, bornDate, documentId, gender, address, status } =
      initialState[0];
    const updateName = "Don Vito Corleone";
    const newData = {
      id,
      name: updateName,
      bornDate,
      documentId,
      gender,
      address,
      status,
    };

    const actual = patientsReducer(initialState, updatePatient(newData));

    expect(actual[0].name).toBe("Don Vito Corleone");
  });
});
