import FAQCard from "../components/FAQCard";

const FAQ = (): JSX.Element => {
  return (
    <section className="pt-16 pb-14 responsive-padx-container relative">
      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-appGray200 font-weight-700 text-center ">
        Frequently Asked Questions
      </h4>

      <ul className="grid  md:grid-cols-2 gap-y-10 gap-x-11 mt-16 ">
        {[...Array(4)].map((_, index) => {
          return <FAQCard key={index} />;
        })}
      </ul>

      <button
        className="font-poppins font-medium py-3 text-sm px-5 rounded-lg bg-appYellow200 mt-12 mx-auto flex hover:scale-110 transition-all"
        type="button"
      >
        Send us a mail
      </button>
    </section>
  );
};

export default FAQ;
