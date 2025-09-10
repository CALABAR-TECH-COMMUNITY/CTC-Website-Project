import GalleryImage1 from "assets/images/landingPage/gallery-1.svg";
import GalleryImage2 from "assets/images/landingPage/gallery-2.svg";
import GalleryImage3 from "assets/images/landingPage/gallery-3.svg";
import GalleryImage4 from "assets/images/landingPage/gallery-4.svg";

const images = [GalleryImage1, GalleryImage2, GalleryImage3, GalleryImage4];

const GalleryPhotos = (): JSX.Element => {
  return (
    <section className="bg-darkblue py-20">
      <div className="responsive-padx-container">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our <span className="text-appYellow200">Gallery</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <img
                src={src}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPhotos;
