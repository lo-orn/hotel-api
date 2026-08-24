import { Customer, CustomerDataForm } from "../models/Customer";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getCustomers = async (): Promise<Customer[]> => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  const response = await fetch(`${API_URL}/customers`, {
    headers: {
      "X-API-Key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Could not fetch customers");
  }
  
  const data = await response.json();
  return data;
}; 

export const createCustomer = async (customer: CustomerDataForm) => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  const headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY,
  };

  const createResponse = await fetch(`${API_URL}/customers`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email: customer.email,
      firstName: customer.firstName,
      id: 0,
      lastName: customer.lastName,
    }),
  });

if (!createResponse.ok) {
  throw new Error("Could not create customer");
}

  const createdCustomer = await createResponse.json();

  const patchResponse = await fetch(`${API_URL}/customers/${createdCustomer.id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      id: createdCustomer.id,
    }),
  });

  if (!patchResponse.ok) {
    throw new Error("Could not update customer ID");
  }
};

export const updateCustomer = async (id: string, customer: Partial<CustomerDataForm>) => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  const response = await fetch(`${API_URL}/customers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify(customer),
  });

  if (!response.ok) {
    throw new Error("Could not update customer");
  }
};

export const deleteCustomer = async (id: string) => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  const response = await fetch(`${API_URL}/customers/${id}`, {
    method: "DELETE",
    headers: {
      "X-API-Key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Could not delete customer");
  }
};