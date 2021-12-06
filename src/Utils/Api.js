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
      console.log('success', res)
      if (success) {
        success(res.data);
      }
    })
    .catch((err) => {
      console.log('err',err);
    });
};

export const postApicallToken = async (url, payload, success) => {
  console.log('payload', url, payload)
  const token = await getSessionData(LOGIN_KEY);
  axios
    .post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log('success postApicallToken', res)
      if (success) {
        success(res.data);
      }
    })
    .catch((err) => {
      console.log('err',err);
    });
}

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
