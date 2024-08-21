import { Auth } from "@/models/auth";
import { Observable } from "rxjs";
import { createObservable, createObservableStream } from "../util/observable";
import { PatientResponse } from "../proto/patients/patients_pb";

export async function get_all_patient_data(auth: Auth) {
  const { HLAServiceClient } = await import(
    "../proto/patients/patients_grpc_web_pb"
  );

  const metadata = {
    token: auth.token,
  };
  const patientServiceClient = new HLAServiceClient(
    "test"
  );
  const request = new PatientResponse();

  const stream = patientServiceClient.getAllPatientData(request, metadata)
  return createObservableStream(stream)
}

export async function get_patient_data(auth: Auth, id: string) {
    const { HLAServiceClient } = await import(
      "../proto/patients/patients_grpc_web_pb"
    );
  
    const metadata = {
      token: auth.token,
    };
    const patientServiceClient = new HLAServiceClient(
      "test"
    );
    const request = new PatientResponse();
    request.setId(id)
    return new Observable((subscriber: any) => {
      patientServiceClient.getPatientData(
        request,
        metadata,
        function (err, response) {
          return createObservable(subscriber, response, err);
        }
      );
    });
  }

export async function update_patient_data(
  auth: Auth,
  data: PatientResponse.AsObject
) {
  const { HLAServiceClient } = await import(
    "../proto/patients/patients_grpc_web_pb"
  );

  const metadata = {
    token: auth.token,
  };
  const patientServiceClient = new HLAServiceClient(
    "test"
  );
  const request = new PatientResponse();
  request.setId(data.id);
  request.setName(data.name);
  request.setMedical(data.medical);
  request.setMedicalnumber(data.medicalnumber);

  return new Observable((subscriber) => {
    patientServiceClient.updatePatientData(
      request,
      metadata,
      function (err, response) {
        return createObservable(subscriber, response, err);
      }
    );
  });
}
