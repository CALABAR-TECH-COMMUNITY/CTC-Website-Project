import { useEffect } from "react";

import { useModalStore } from "store/modalStore";
import FAQ from "./sections/FAQ";
import FeaturedJobs from "./sections/FeaturedJobs";
import GalleryPhotos from "./sections/GalleryPhotos";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Sponsors from "./sections/Sponsors";
import Stories from "./sections/Stories";
import UpcomingEvents from "./sections/UpcomingEvents";

const HomePage = (): JSX.Element => {
  const { isModalOpen } = useModalStore();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("home-show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".home-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("blurr-show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".blurr-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-comforta relative overflow-x-hidden">
      <Hero />
      <UpcomingEvents />
      <Journey />
      <GalleryPhotos />
      <Sponsors />
      <Stories />
      <FeaturedJobs />
      <FAQ />
    </main>
  );
};

export default HomePage;
