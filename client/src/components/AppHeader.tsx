import { FC } from "react";
import { Button, Flex, Layout } from "antd";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { logout } from "../store/slices/authSlice";
const { Header } = Layout;

interface AppHeaderProps {
  isAdmin: boolean;
  username: string | undefined;
}

const AppHeader: FC<AppHeaderProps> = ({ isAdmin, username }) => {
  const dispatch = useAppDispatch();

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Flex
        style={{ width: "100%" }}
        justify={"space-between"}
        align={"center"}
      >
        <Flex gap={10} align={"center"}>
          <Button>
            <NavLink to={"/busket"}>Busket</NavLink>
          </Button>

          {isAdmin ? (
            <Button>
              <NavLink to={"/admin"}>Admin Panel</NavLink>
            </Button>
          ) : (
            <></>
          )}
        </Flex>
        <Flex gap={10} align={"center"}>
          <span style={{ color: "white" }}>Hi, {username}</span>
          <Button onClick={() => dispatch(logout())}>Log out</Button>
        </Flex>
      </Flex>
    </Header>
  );
};

export default AppHeader;
