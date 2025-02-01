export interface PatientContact {
    phone1: string;
    phone2: string;
    email: string;
    address: string;
  }
  
  export interface PatientOverview {
    // overview: any;
    gender: string;
    dateOfBirth: string;
    nextOfKin: string;
    previousVisit: string;
    allergies: string;
    disease: string;
  }
  
  export interface HealthResult {
    HealthResults: any;
    name: string;
    size: string;
    type: string;
  }
  
  export interface Patient {
    id: string;
    name: string;
    image: string;
    contact: PatientContact;
  }

  export interface HealthResultData {
    HealthResults: HealthResult[];
  }
  
  