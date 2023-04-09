import HomeLayout from "layout/HomeLayout";


const HomePage = (): JSX.Element => {
  return (
    <HomeLayout>
    <main className="flex flex-col gap-10 justify-center items-center  bg-white h-screen ">
      <h4 className=" font-bold text-3xl">Home Page</h4>

 
    </main>
    </HomeLayout>
  );
};

export default HomePage;
