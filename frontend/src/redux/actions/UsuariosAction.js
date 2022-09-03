import axios from "axios";
const UserAction = {
  signInUser: (logedUser) => {
      return async (dispatch, getState) => {
        const user = await axios.post(
          "http://localhost:4000/api/iniciosesion",
        logedUser,
        )
        if (user.data.success) {
          localStorage.setItem("token", user.data.response.token);
          /* console.log(user.data.success)  */
          dispatch({ type: "user", payload: user.data.response.userData });
        }
        dispatch({
          type: "message",
          payload: {
            view: true,
            message: user.data.message,
            success: user.data.success,
          },
        });
      };
  },
  VerificarToken: (token) => {
    return async (dispatch, getState) => {
      const user = await axios.get(
        "http://localhost:4000/api/auth/signintoken",
        {
          headers: {
            "Authorization": "Bearer " + token,
          },
        },
      );
      if (user.data.success) {
        dispatch({ type: "user", payload: user.data.response });
        dispatch({
          type: "message",
          payload: {
            view: true,
            message: user.data.message,
            success: user.data.success,
          },
        });
      } else {
        localStorage.removeItem("token");
      }
    };
  },
  signUpUser: (userData) => {
    console.log(userData)
    return async (dispatch, getState) => {
        const res = await axios.post('http://localhost:4000/api/usuarios',  userData)
        dispatch({type: 'message', 
                   payload: {view: true,
                             message: "Usuario registrado exitosamente",
                             success: true}});
    }
  }
}
export default UserAction