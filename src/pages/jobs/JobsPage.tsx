import JobsCard from "../../components/JobsCard";
import JobsHeader from "../../components/JobsHeader";

const JobsPage = (): JSX.Element => {
  return (
    <main className="font-comforta">
      {/* HEADER */}
      <JobsHeader />

      {/* HERO PROJECT */}
      <section className=" flex flex-col items-center md:grid grid-cols-2 responsive-padx-container mx-auto gap-5 lg:gap-10 mt-20">
       <p>
        Eyo
       </p>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32 gap-x-4 gap-y-20 px-16">
        {[...Array(6)].map(() => {
          return <div ><JobsCard/></div>
        })}
      </section>
    </main>
  );
};

export default JobsPage;
