import HomeLayout from "layout/HomeLayout";
import JobsCard from "../../components/JobsCard";
import JobsHeader from "../../components/JobsHeader";

const JobsPage = (): JSX.Element => (
  <HomeLayout>
  <main className="font-comforta">
    {/* HEADER */}
    <JobsHeader />

    {/* HERO PROJECT */}
    <section className=" flex flex-row items-center justify-between responsive-padx-container mx-auto gap-5 lg:gap-10 mt-20">
      <div className="flex justify-start ...">
       <input type="text" className="rounded-[10px] border-2 border-[#ddd] h-[50px] w-[270px] p-[5%]" placeholder="Search"/>
      </div>
      <div className="flex justify-end ... w-[500px]">
        <div className="w-[100%]">
          {/* <div className="relative inline-block text-left">
            <div>
              <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Options
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
              <div className="py-1" role="none">
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" id="menu-item-3">Sign out</button>
                </form>
              </div>
            </div>

          </div> */}
            <select name="" id="" className='bg-[#fff] px-5 py-2  font-medium text-sm outline-0'>
              <option value="apple">Job Type</option>
              <option value="calabar">Programmer</option>
            </select>
            <select name="" id="" className='bg-[#fff] px-5 py-2  font-medium text-sm outline-0'>
              <option value="apple">Salary</option>
              <option value="calabar">400k</option>
            </select>
            <select name="" id="" className='bg-[#fff] px-5 py-2  font-medium text-sm  outline-0'>
              <option value="apple">Location</option>
              <option value="calabar">Calabar</option>
            </select>

<button className='bg-[#edb866] px-5 py-2 rounded-[5px] font-medium text-sm ml-[2%]'> Find</button>
        </div>
        {/* <div>02</div>
        <div>03</div> */}
      </div>
    </section>

    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32 gap-x-4 gap-y-20 px-16">
      {[...Array(6)].map(() => {
        return <div><JobsCard /></div>;
      })}
    </section>
  </main>
  </HomeLayout>
);

export default JobsPage;
