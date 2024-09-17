import { jwtDecode } from "jwt-decode";
import { $host } from ".";

export const registration = async (user: {
  email: string;
  password: string;
}) => {
  const { data } = await $host.post("api/user/registration", {
    email: user.email,
    password: user.password,
    role: "USER",
  });
  localStorage.setItem("token", data.token);
  const decoded = jwtDecode(data.token);
  return decoded;
};

export const login = async (user: { email: string; password: string }) => {
  const { data } = await $host.post("api/user/login", {
    email: user.email,
    password: user.password,
  });
  localStorage.setItem("token", data.token);
  const decoded = jwtDecode(data.token);
  return decoded;
};
