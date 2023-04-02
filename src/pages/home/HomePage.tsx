import FAQ from "./sections/FAQ";
import FeaturedJobs from "./sections/FeaturedJobs";
import Sponsors from "./sections/Sponsors";

const HomePage = (): JSX.Element => {
  return (
    <main className="font-comforta">
      <Sponsors />
      <FeaturedJobs />
      <FAQ />
    </main>
  );
};

export default HomePage;
