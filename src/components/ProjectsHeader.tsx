const ProjectsHeader = (): JSX.Element => {
  return (
    <header className='h-32 md:h-36 lg:h-40 bg-[url("assets/images/projects-header.svg")] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center '>
      <h1 className="text-appBlue100 text-2xl sm:text-3xl md:text-5xl font-bold ml-11 md:ml-12 lg:ml-14 ">
        Projects
      </h1>
    </header>
  );
};

export default ProjectsHeader;
