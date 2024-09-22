import axios from "axios";
import {
  loginUserFailed,
  loginUserRequest,
  loginUserSuccess,
  logOut,
  updateUsernameFailed,
  updateUsernameRequest,
  updateUsernameSuccess,
} from "./reducer";

export const loginUser = (body, dispatch) => {
  dispatch(loginUserRequest());
  return axios
    .post("http://localhost:3001/api/v1/user/login", body)
    .then((res) => {
      if (body.rememberMe) {
        localStorage.setItem("token", res.data.body.token);
      }
      else {
        sessionStorage.setItem("token", res.data.body.token);
      }
      getUser(res.data.body.token, dispatch);
    })
    .catch((error) => {
      console.error("Erreur lors de la connexion : ", error);
      alert("Un problème a été rencontré lors de la connexion.");
      dispatch(loginUserFailed(error.message));
    });
};

export const registerUser = (body, goToSignIn, clearLoading) => {
  return axios
    .post("http://localhost:3001/api/v1/user/signup", body)
    .then(() => {
      goToSignIn();
      clearLoading();
      alert("Utilisateur ajouté");
    })
    .catch(() => {
      clearLoading();
      alert("Un problème a été rencontré");
    });
};

export const getUser = (token, dispatch) => {
  dispatch(loginUserRequest());
  return axios
    .post("http://localhost:3001/api/v1/user/profile", null, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      const payload = { user: res.data.body, token };
      dispatch(loginUserSuccess(payload));
      return res.data.body;
    })
    .catch((error) => {
      console.error("Erreur lors de la connexion : ", error);
      alert("Un problème a été rencontré lors de la connexion.");
      dispatch(loginUserFailed(error.message));
    });
};

export const logOutUser = (dispatch) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  dispatch(logOut());
};

export const updateUsername = (newUsername, token) => (dispatch) => {
  dispatch(updateUsernameRequest());

  return axios
    .put(
      "http://localhost:3001/api/v1/user/profile",
      { userName: newUsername },
      { headers: { Authorization: "Bearer " + token } }
    )
    .then((response) => {
      dispatch(updateUsernameSuccess({ userName: newUsername }));
    })
    .catch((error) => {
      console.error(
        "Erreur lors de la mise à jour du nom d'utilisateur : ",
        error
      );
      dispatch(updateUsernameFailed(error.message));
      alert(
        "Un problème à été rencontré lors de la mise à jour du nom d'utilisateur."
      );
    });
};
