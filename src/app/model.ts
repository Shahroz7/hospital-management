export class LoginModel{
    public username: string;
    public password: string;
}

export class RoleModel{
    public roleName: string;
}

export class ClinicianForm{
    clinicianId: string;
    fullname: string;
    age: string;
    gender: string;
    email: string;
    phone: string;
    specialization: string;
    experience: string;
    address: string;
    availability: string
}

export class PatientForm{
    public patientId: string;
    public fullname: string;
    public age: number;
    public gender: string;
    public email: string;
    public phone: number;
    public address: string;
    public appointment: string;
}