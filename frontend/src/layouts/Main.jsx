import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";
import { fetchData } from "../helpers";
import Footer from "../components/Footer";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <main>
        <Nav userName={userName} />
        <Outlet />
      </main>
    </div>
  );
};
export default Main;
