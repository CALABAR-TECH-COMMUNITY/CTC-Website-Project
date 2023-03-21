import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

import PageNotFoundAnimation from "assets/page-not-found.json";
import { useNavigationHistoryStore } from "store/navigationHistoryStore";
import routes from "navigation/routes";

const PageNotFound = (): JSX.Element => {
  const { history } = useNavigationHistoryStore();
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (history.length > 1) {
      navigate(-1);
    } else {
      window.location.replace(routes.HOME_PAGE);
    }
  };

  return (
    <main className="bg-white  min-h-screen flex flex-col items-center justify-center container">
      <h1 className=" text-2xl md:text-3xl font-bold">Sorry page not found</h1>
      <Lottie
        className="w-[60%] md:w-[50%] lg:w-[40%]"
        animationData={PageNotFoundAnimation}
        loop={true}
      />
      <span className="text-lg md:text-xl font-semibold text-center">
        Let's get you back
        <button className="ml-3" onClick={handleNavigation} type="button">
          Home fdd
        </button>
      </span>
    </main>
  );
};

export default PageNotFound;
