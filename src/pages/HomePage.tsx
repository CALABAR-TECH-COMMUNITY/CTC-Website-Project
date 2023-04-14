import HomeLayout from "layout/HomeLayout";
import { Link } from "react-router-dom";
import routes from "navigation/routes";

const HomePage = (): JSX.Element => {
  return (
    <HomeLayout>
    <main className="flex flex-col gap-10 justify-center items-center  bg-white h-screen ">
      <h4 className=" font-bold text-3xl">Home Page</h4>

      <Link to={routes.PROJECTS_PAGE} className="text-2xl font-semibold ">
        Click me to go to projects page
      </Link>
      <Link to={routes.ABOUT_PAGE} className="text-2xl font-semibold ">
        Click me to go to about page
      </Link>  
      <Link to={routes.EVENTS_PAGE} className="text-2xl font-semibold ">
        Click me to go to events page
      </Link>
      <Link to={routes.VIEW_EVENT_DETAILS_PAGE} className="text-2xl font-semibold ">
        Click me to go to view event details page
      </Link>
      
    </main>
    </HomeLayout>
  );
};

export default HomePage;
