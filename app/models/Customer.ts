
export type Customer = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    bookingCount: number;
}

export type CustomerDataForm = {
    firstName: string;
    lastName: string;
    email: string;
}