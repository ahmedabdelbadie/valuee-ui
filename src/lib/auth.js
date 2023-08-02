// import { initReactQueryAuth } from "react-query-auth";
import { configureAuth } from "react-query-auth";
import { Spinner } from "./../components/Spinner";
import { loginWithEmailAndPassword } from "../features/auth";
import storage from "../utils/storage";

async function handleUserResponse(data) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  //   if (storage.getToken()) {
  //     const data = await getUser();
  //     return data;
  //   }
  //   return null;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("user data");
    }, 100);
  });
}

async function loginFn(data) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("user has been register");
    }, 100);
  });
  //   const response = await registerWithEmailAndPassword(data);
  //   const user = await handleUserResponse(response);
  //   return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  },
};

export const { useUser, useLogin, useRegister, useLogout } = configureAuth(
  authConfig
);
