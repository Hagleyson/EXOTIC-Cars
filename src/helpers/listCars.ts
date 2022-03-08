import API from "src/helpers/api";
import { toast } from "react-toastify";

export const fetchCar = async () => {
  try {
    let response = await API.get(`car`);
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
    throw new Error();
  } catch (error) {
    toast.error(`Erro ${error}`);
    return false;
  }
};
