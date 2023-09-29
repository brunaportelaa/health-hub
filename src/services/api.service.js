import api from "./api";

export const metadata = async () => {
  return api
    .get("/metadata")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const listBundles = async () => {
  return api
    .get("/Bundle")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const createPatient = async (patient) => {
  return api
    .post("/Patient", {
      resourceType: "Patient",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient",
        ],
      },
      identifier: [
        {
          system: "cpf",
          value: patient.cpf,
        },
      ],
      name: [
        {
          use: "official",
          text: `${patient.firstName} ${patient.lastName}`,
          family: patient.lastName,
          given: [patient.firstName],
        },
      ],
      telecom: [
        {
          system: "phone",
          value: patient.contactNumber,
          use: "mobile",
        },
      ],
      gender: patient.gender,
      birthDate: patient.birthDate,
    })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const getPatientByCpf = async (cpf) => {
    try {
        const {data} = await api.get(`/Patient?identifier=cpf|${cpf}`);

        return data;
    } catch (error) {
        throw error;
    }
};
