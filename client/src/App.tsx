import { Content } from "antd/es/layout/layout";
import AppHeader from "./components/AppHeader";
import AppRoutes from "./components/AppRoutes";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  return (
    <>
      {isAuth ? (
        <AppHeader username={user?.email} isAdmin={user?.role === "ADMIN"} />
      ) : (
        <></>
      )}
      <Content>
        <AppRoutes isAuth={isAuth} />
      </Content>
    </>
  );
}

export default App;
