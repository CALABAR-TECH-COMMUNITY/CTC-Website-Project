import HomeLayout from "layout/HomeLayout";
import JobsHeader from "../../components/JobsHeader";

const JobsDetailsPage = (): JSX.Element => {
  return (
    <HomeLayout>
      <main className="font-comforta h-screen">
        {/* HEADER */}
        <JobsHeader />
        Job Details
      </main>
    </HomeLayout>
  );
};

export default JobsDetailsPage;
