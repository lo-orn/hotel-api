const API_URL =
  "https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net";

export const getHotels = async () => {
  const response = await fetch(`${API_URL}/hotels`);
  const data = await response.json();
  return data;
};

export const getCustomers = async () => {
  const response = await fetch(`${API_URL}/customers`);
  const data = await response.json();
  return data;
};

export const getBookings = async () => {
  const response = await fetch(`${API_URL}/bookings`);
  const data = await response.json();
  return data;
};
