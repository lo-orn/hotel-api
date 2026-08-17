export type Customer = {
  id: string;
  createdAt: string;
  updatedAt: string;
  database: string;
  resource: string;
  data: CustomerData;
};

export type CustomerData = {
  email: string;
  firstName: string;
  lastName: string;
};

export type CustomerDataForm = {
  email: string;
  firstName: string;
  lastName: string;
}