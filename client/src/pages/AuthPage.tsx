import { Layout, message, Row } from "antd";
import { FC, useEffect, useState } from "react";
import AuthForm from "../components/AuthForm";
import { loginUser, registerUser } from "../store/slices/authSlice";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const AuthPage: FC = () => {
  const [authType, setAuthType] = useState("login");
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });

  const { isAuth, error } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const loginSubmit = () => {
    dispatch(loginUser(userCred));
  };

  const registerSubmit = () => {
    dispatch(registerUser(userCred));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }

    if (error) {
      errorMessage(error);
    }
  }, [isAuth, error]);

  const errorMessage = (error: string) => {
    messageApi.open({
      type: "error",
      content: error,
    });
  };

  return (
    <>
      {contextHolder}
      <Layout>
        <Row align={"middle"} justify={"center"} className="h100">
          <AuthForm
            userCred={userCred}
            setUserCred={setUserCred}
            setType={setAuthType}
            type={authType}
            submit={authType === "login" ? loginSubmit : registerSubmit}
          />
        </Row>
      </Layout>
    </>
  );
};

export default AuthPage;
