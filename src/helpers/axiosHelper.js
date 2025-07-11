import axios from "axios";

export const apiProcessor = async ({url, method, payload}) => {
   try {
    const response = await axios ({
        url,
        method,
        data: payload
    });
    console.log(response)
    return (response)
   } catch (error) {
    console.log(error);
    return error.message || {data: {status: "error", message: "Network error"}};
   }
};