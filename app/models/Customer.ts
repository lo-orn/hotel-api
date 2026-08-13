//GET
export type Customer = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    bookingCount: number;
}

//POST/PUT
export type CustomerDataForm = {
    firstName: string;
    lastName: string;
    email: string;
}