import axios from "axios";

const url = "https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/orders";
const headers = {
  "x-api-key": "N7XoQ47Fo41xu6GXgp1ZK801Uq6CWR0T4GtVoMhi",
};

export const createOrderAxios = async (body = {}) => {
  try {
    const reqOrder = await axios.post(url, body, {
      headers,
    });

    return reqOrder;
  } catch (error) {
    console.log("Error", error);
  }
};
