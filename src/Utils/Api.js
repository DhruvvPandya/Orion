import axios from "axios";

export const getApicall = (url, payload, success) => {
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
