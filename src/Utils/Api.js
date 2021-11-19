import axios from "axios";
import { getSessionData } from "src/Utils/asyncStorage";

export const LOGIN_KEY = "LoginToken";

export const postApicall = (url, payload, success) => {
  axios
    .post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (success) {
        success(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getApicall = async (url, success) => {
  const token = await getSessionData(LOGIN_KEY);
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (success) {
        success(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
