import HomeLayout from "layout/HomeLayout";
import volunteerHero from "assets/images/volunteer_hero.jpg";

const Volunteer = () => {
  return (
    <HomeLayout>
      <div className="bg-darkblue text-white">
        <header 
          className="relative h-80 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${volunteerHero})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <h1 className="relative text-5xl font-bold">Become a Volunteer</h1>
        </header>

        <section className="py-20 responsive-padx-container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Us in Making a <span className="text-appYellow200">Difference</span>
          </h2>
          <p className="text-lg text-lightash mx-auto max-w-3xl">
            Volunteering is a rewarding way to give back to the community, develop new skills, and connect with like-minded individuals. At Calabar Tech Community, our volunteers are the heart of our operations, and we are always looking for passionate people to join our team.
          </p>
        </section>

        <section className="bg-darkash py-20 responsive-padx-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why <span className="text-appYellow200">Volunteer?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-darkblue p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-appYellow200 mb-4">Gain Experience</h3>
              <p className="text-lightash">
                Contribute to projects, lead workshops, and gain hands-on experience in a supportive environment.
              </p>
            </div>
            <div className="bg-darkblue p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-appYellow200 mb-4">Expand Your Network</h3>
              <p className="text-lightash">
                Connect with tech professionals, mentors, and peers who share your passion for technology.
              </p>
            </div>
            <div className="bg-darkblue p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-appYellow200 mb-4">Give Back</h4>
              <p className="text-lightash">
                Empower the next generation of tech talent and make a lasting impact on the Calabar tech ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 responsive-padx-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Sign Up to <span className="text-appYellow200">Volunteer</span>
          </h2>
          <div className="max-w-xl mx-auto">
            <form className="bg-darkash p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-lightash mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-darkblue text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-appYellow200" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-lightash mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-darkblue text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-appYellow200" />
              </div>
              <div className="mb-6">
                <label htmlFor="interest" className="block text-lg font-medium text-lightash mb-2">Area of Interest</label>
                <select id="interest" className="w-full bg-darkblue text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-appYellow200">
                  <option>Event Planning</option>
                  <option>Mentorship</option>
                  <option>Content Creation</option>
                  <option>Social Media</option>
                </select>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-8 py-4 bg-appYellow200 text-appBlack hover:bg-appYellow100 transition-all font-poppins font-bold rounded-full text-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default Volunteer;
