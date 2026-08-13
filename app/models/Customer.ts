//GET
export type Customer = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    bookingCount: number;
}

//POST/put
export type CustomerDataForm = {
    firstName: string;
    lastName: string;
    email: string;
}