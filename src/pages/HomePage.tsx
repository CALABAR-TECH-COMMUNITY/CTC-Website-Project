import routes from "navigation/routes";
import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => {
  return (
    <main className="flex flex-col gap-10 justify-center items-center h-screen bg-white ">
      <h4 className=" font-bold text-3xl">Home Page</h4>

      <Link to={routes.PROJECTS_PAGE} className="text-2xl font-semibold ">
        Click me to go to projects page
      </Link>
    </main>
  );
};

export default HomePage;
