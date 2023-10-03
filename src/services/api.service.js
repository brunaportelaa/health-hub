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
    const { data } = await api.get(`/Patient?identifier=cpf|${cpf}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getMedicalRegistrationByCpf = async (cpf) => {
  try {
    const { data } = await api.get(`/Bundle?identifier=cpf|${cpf}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const createMedicalRegistration = async (bundle) => {
  try {
    const { data } = await api.post(`/Bundle`, {
      resourceType: "Bundle",
      type: "document",
      identifier: [
        {
          system: "cpf",
          value: bundle.cpf,
        },
      ],
      entry: [
        {
          resource: {
            resourceType: "Condition",
            clinicalStatus: {
              coding: [
                {
                  system: "http://hl7.org/fhir/ValueSet/condition-clinical",
                  code: bundle.condition.clinicalStatus,
                },
              ],
            },
            verificationStatus: {
              coding: [
                {
                  system: "http://hl7.org/fhir/ValueSet/condition-ver-status",
                  code: bundle.condition.verificationStatus,
                },
              ],
            },
            recordedDate: bundle.condition.recordedDate,
            abatementDateTime: bundle.condition.abatementDateTime,
            note: [
              {
                text: bundle.condition.note,
              },
            ],
          },
        },
        ...bundle.procedures.map((procedure) => ({
          resource: {
            resourceType: "Procedure",
            status: procedure.status,
            category: [
              {
                coding: [
                  {
                    system: "http://hl7.org/fhir/ValueSet/procedure-category",
                    code: procedure.category,
                  },
                ],
              },
            ],
            note: [
              {
                text: procedure.note,
              },
            ],
            performedDateTime: procedure.performedDateTime,
          },
        })),
        ...bundle.medications.map((medication) => ({
          resource: {
            resourceType: "MedicationAdministration",
            status: medication.status,
            note: [
              {
                text: medication.note,
              },
            ],
            effectiveDateTime: medication.effectiveDateTime,
            dosage: {
              text: medication.dosage,
            },
          },
        })),
      ],
    });

    return data;
  } catch (error) {
    throw error;
  }
};
