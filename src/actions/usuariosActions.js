import axios from "axios";
import { CARGANDO, ERROR, TRAER_TODOS } from "../types/usuariosTypes";

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: TRAER_TODOS,
      payload: response.data,
    });
  } catch (error) {
    console.error(new Error(error));
    dispatch({
      type: ERROR,
      payload: "Ha ocurrido un error, intenta de nuevo",
    });
  }
};
