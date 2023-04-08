const JobsCard = (): JSX.Element => {
  return (
    <li className="py-7 px-10 rounded-2xl bg-white shadow-jobsCardShadow text-sm text-appGray100 gap-y-1 flex flex-col font-bold transition-all hover:scale-105">
      <h5 className="text-appGray200 mb-1  text-base">
        Frontend Developer (React)
      </h5>

      <p>Company name</p>
      <data value="Remote">Location: Remote Job</data>
      <data value="Full Time">Type: Full time</data>

      <data
        value="NGN400,000 - NGN 500,000"
        className="text-appGray200 text-base mt-2 mb-4"
      >
        NGN400,000 - NGN 500,000
      </data>

      <div className="flex items-center flex-wrap-reverse gap-3 justify-between">
        <button
          className="py-2 px-4 font-roboto text-sm font-semibold bg-appYellow200 rounded-full hover:scale-105"
          type="button"
        >
          See more
        </button>

        <time dateTime="Jan 21, 2023">Posted: Jan 21, 2023</time>
      </div>
    </li>
  );
};

export default JobsCard;
