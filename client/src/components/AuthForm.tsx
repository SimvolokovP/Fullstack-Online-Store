import { Button, Flex, Form, Input } from "antd";
import { FC } from "react";
import { rulesUtils } from "../utils/utils";

interface AuthFormProps {
  submit: () => void;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setUserCred: (user: { email: string; password: string }) => void;
  userCred: { email: string; password: string };
}

const AuthForm: FC<AuthFormProps> = ({
  submit,
  type,
  setType,
  setUserCred,
  userCred,
}) => {
  return (
    <>
      <Form onFinish={submit}>
        <h3>{type === "login" ? "Вход" : "Регистрация"}</h3>
        <Form.Item
          label="Эл. почта"
          name={"email"}
          rules={[rulesUtils.required("Please input your username!")]}
        >
          <Input
            type={"email"}
            onChange={(e) =>
              setUserCred({ ...userCred, email: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name={"password"}
          rules={[rulesUtils.required("Please input your password!")]}
        >
          <Input.Password
            onChange={(e) =>
              setUserCred({ ...userCred, password: e.target.value })
            }
          />
        </Form.Item>
        <Flex align={"center"} justify={"space-between"} gap={30}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {type === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}
            <Button
              type={"link"}
              onClick={
                type === "login"
                  ? () => setType("register")
                  : () => setType("login")
              }
            >
              {type === "login" ? "Зарегистрируйся" : "Войти"}
            </Button>
          </div>

          <Button htmlType={"submit"} type={"primary"}>
            {type === "login" ? "Войти" : "Зарегистрироваться"}
          </Button>
        </Flex>
      </Form>
    </>
  );
};

export default AuthForm;
