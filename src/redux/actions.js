import axios from "axios";
export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: 'ADD_FAV',
        payload: data,
      });
    } catch (error) {
      console.error(error);
      alert("Error al agregar a favoritos.");
    }
  };
  // axios.post(ENDPOINT, character).then(({ data }) => {
  //   return dispatch({
  //     type: ADD_FAV,
  //     payload: data,
  //   });
  // });
};
export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint =`http://localhost:3001/rickandmorty/fav/${id}`;
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: 'REMOVE_FAV',
        payload: data,
      });
    } catch (error) {
      console.error(error);
      alert("Error al quitar de favoritos.");
    }
  };
  // return (dispatch) => {
  //   axios.delete(${ENDPOINT}/${id}).then(({ data }) => {
  //     return dispatch({
  //       type: "REMOVE_FAV",
  //       payload: data,
  //     });
  //   });
  // };
}

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};
