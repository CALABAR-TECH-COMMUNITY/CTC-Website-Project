import GDSCLogo from "assets/images/landingPage/gdsc-logo.svg";
import StackOverflowLogo from "assets/images/landingPage/stack-overflow-logo.svg";
import PayPalLogo from "assets/images/landingPage/paypal-logo.svg";
import SlackLogo from "assets/images/landingPage/slack-logo.svg";
import NugiLogo from "assets/images/landingPage/nugi-logo.svg";

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  {
    alt: "Google Development Student Clubs",
    src: GDSCLogo,
  },
  {
    alt: "Stack Overflow",
    src: StackOverflowLogo,
  },
  {
    alt: "Paypal",
    src: PayPalLogo,
  },
  {
    alt: "Slack",
    src: SlackLogo,
  },
  {
    alt: "Nugi Technologies",
    src: NugiLogo,
  },
];

const Sponsors = (): JSX.Element => {
  return (
    <section className="responsive-padx-container md:px-0 pt-32 pb-28 ">
      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-appGray200 font-weight-700 text-center  ">
        Sponsors
      </h4>

      <figure className="  flex flex-wrap gap-x-4 gap-y-8 max-w-4xl mx-auto justify-center lg:justify-start mt-14">
        {images.map(({ alt, src }, index) => {
          return (
            <div
              key={index}
              className="sponsors-list home-hidden bg-white h-24 w-44 md:w-48 md:h-28  lg:h-32 lg:w-52 shadow-sponsorsCardShadow flex items-center justify-center rounded-lg border-t-8 border-t-appGray200"
            >
              <img
                className="w-[70%] mx-auto object-contain"
                src={src}
                alt={alt}
              />
            </div>
          );
        })}
        <div className="sponsors-list home-hidden bg-appYellow200 h-24 w-44 md:w-48 md:h-28  lg:h-32 lg:w-52 shadow-sponsorsCardShadow flex items-center justify-center rounded-lg">
          <p className="font-poppins font-semibold text-appGray200 text-lg w-4/5 text-center">
            Become a Sponsor
          </p>
        </div>
      </figure>
    </section>
  );
};

export default Sponsors;
