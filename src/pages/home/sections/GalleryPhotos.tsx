import Carousel, { ResponsiveType, CarouselProps } from "react-multi-carousel";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
// react-multi-carousel css files
import "react-multi-carousel/lib/styles.css";

import GalleryImage1 from "assets/images/landingPage/gallery-1.svg";
import GalleryImage2 from "assets/images/landingPage/gallery-2.svg";
import GalleryImage3 from "assets/images/landingPage/gallery-3.svg";
import GalleryImage4 from "assets/images/landingPage/gallery-4.svg";
import EllipseIcon from "assets/images/landingPage/ellipse.svg";
import Ellipse1Icon from "assets/images/landingPage/ellipse-1.svg";
import Ellipse2Icon from "assets/images/landingPage/ellipse-2.svg";

const images = [GalleryImage2, GalleryImage3, GalleryImage2, GalleryImage4];

const responsive: ResponsiveType = {
  allBreakPoints: {
    breakpoint: { max: 40000, min: 0 },
    items: 1,
  },
};
const options: CarouselProps = {
  autoPlay: true,
  rewind: true,
  rewindWithAnimation: true,
  swipeable: true,
  draggable: true,
  showDots: true,
  arrows: false,
  responsive,
  children: null,
  autoPlaySpeed: 6000,
};

const GalleryPhotos = (): JSX.Element => {
  const [isModalOpen, setModalVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("photo-show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".photo-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []);

  const toggleModal = () => {
    setModalVisibility(!isModalOpen);
  };
  return (
    <>
      <section className="responsive-padx-container  bg-appGray500 relative  ">
        <img
          className="absolute -right-10 h-36 w-36"
          src={EllipseIcon}
          alt="ellipse"
          draggable={false}
        />
        <img
          className="absolute bottom-0 right-0 "
          src={Ellipse1Icon}
          alt="ellipse"
          draggable={false}
        />
        <img
          className="absolute bottom-0 right-0 "
          src={Ellipse2Icon}
          alt="ellipse"
          draggable={false}
        />

        <div className="pb-52 pt-32">
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-weight-700 text-center  ">
            Gallery Photos
          </h4>

          <figure className="grid md:grid-cols-2 gap-2 md:gap-4 mt-20 ">
            <img
              onClick={toggleModal}
              draggable={false}
              className="object-contain rounded-2xl   photo-list photo-hidden"
              src={GalleryImage1}
              alt="Gallery"
            />

            <figure className="grid grid-cols-2 gap-2 md:gap-4">
              {images.map((src, index) => {
                return (
                  <img
                    key={index}
                    draggable={false}
                    className="object-contain rounded-2xl photo-list photo-hidden"
                    src={src}
                    alt={`Gallery + ${index}`}
                  />
                );
              })}
            </figure>
          </figure>
        </div>
      </section>

      <div
        className={`fixed  z-[100] items-center justify-center top-0 right-0 left-0 bottom-0 transition-all   ${
          !isModalOpen && "translate-y-full"
        } `}
      >
        <Carousel {...options}>
          <div className="h-[3000px]  w-[400px]  z-[102]  relative">
            <IoCloseCircleOutline
              onClick={toggleModal}
              className="text-appYellow100 text-5xl absolute right-3 top-3 z-[105] cursor-pointer animate-pulse"
            />
            <img
              draggable={false}
              src={GalleryImage2}
              className=" w-full h-full object-contain "
              alt="Photo Gallery"
            />
          </div>
        </Carousel>

        <button
          type="button"
          onClick={toggleModal}
          className="bg-appYellow200 absolute top-0 right-0 left-0 bottom-0 opacity-50 z-[101] "
        />
      </div>
    </>
  );
};

export default GalleryPhotos;
