import { AiOutlinePlus } from "react-icons/ai";

import ElipsesIcon from "assets/images/landingPage/ellipses.svg";
import { URLS } from "assets/data/dummyURLs";

const Stories = (): JSX.Element => {
  return (
    <section className="relative pt-20 pb-44">
      <img
        className="absolute h-56 md:h-60 lg:h-64 w-56 md:w-60 lg:w-64 -left-14"
        src={ElipsesIcon}
        draggable={false}
        alt="ellipse"
      />
      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-appGray200 font-weight-700 text-center  ">
        Stories
      </h4>

      <div className="responsive-padx-container blurr-hidden flex flex-wrap gap-10 lg:gap-5 lg:grid grid-cols-6 mt-16 ">
        <article className="col-span-2 ">
          <p className="font-bold font-comforta text-appGray200 text-sm md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur. Magna donec urna egestas in
            non. Iaculis diam augue congue sagittis sapien. Id nisl vitae magna
            amet facilisis diam ornare vitae sit. Vivamus venenatis curabitur
            lobortis fusce. Eget tellus dictumst scelerisque elementum mauris
            pellentesque ullamcorper. Viverra vestibulum diam lorem
          </p>

          <span className="text-appYellow100 text-sm mt-6 font-bold flex gap-2 items-center cursor-pointer">
            <AiOutlinePlus />

            <button type="button">Connect now</button>
          </span>
        </article>

        <section className="col-span-4 font-poppins flex gap-3 overflow-scroll pb-5 ">
          {[...Array(7)].map((_, index) => {
            return (
              <figure
                key={index}
                className="w-64 flex-shrink-0 hover:bg-appYellow200 rounded-t-xl overflow-hidden rounded-b-lg text-appGray100 hover:text-appGray900 hover:scale-95 transition-all cursor-pointer"
              >
                <img
                  className="h-52 w-full object-cover "
                  src={index % 2 === 0 ? URLS.man : URLS.woman}
                  alt="man"
                />

                <figcaption className="px-4 pt-3 pb-8  text-xs">
                  <h5 className="text-base font-semibold">Bolaji Adams</h5>
                  <h6 className="font-medium">Mobile Software Engineer</h6>
                  <p className="font-normal mb-2">Best Technologies</p>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet consectetur. Vel aliquet
                    fermentum sociis et. Odio tellus tempor dictumst
                    scelerisque. Facilisi sit non dui sapien.
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Stories;
