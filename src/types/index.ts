export type Patient = {
    id: string,
    name: string,
    caretaker: string,
    email: string,
    date: Date,
    symtons: string
}

// Omite el id
export type DraftPatient = Omit<Patient, 'id'>