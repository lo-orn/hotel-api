const API_URL = "https://aspcode.net/api/db/HotelAPI";
const API_KEY =
  "jsonsrv_13315a4a470dd57817cb978cfe887090e4268517b1d4e84ca99223d51c1d32f8";

  export const getCustomers = async () => {
    const response = await fetch(`${API_URL}/customers`, {
      headers: {
        "X-API-Key": API_KEY,
      },
    });
  
    const data = await response.json();
    return data;
  }; 