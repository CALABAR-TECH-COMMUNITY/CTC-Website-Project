import routes from "navigation/routes";
import { Link } from "react-router-dom";

const JobsCard = (): JSX.Element => {
  return (
    <div className="shadow-projectCardShadow rounded-2xl p-6 relative">
       <div className='bg-white'>
          <p className='font-medium text-base'>Frontend Developer (React)</p>
          <div className='text-gray-600 py-2'>
            <p>Company Name</p>
            <p>Location: Remote Job</p>
            <p>Type: Full Time</p>
          </div>
          <p className='font-semibold text-lg'>NGN400,000 - NGN 500,000</p>
          <div className='flex justify-between pt-6 flex-wrap-reverse gap-5 item-center'>
            <Link
              to={routes.JOBS_DETAILS_PAGE}
              className='bg-[#edb866] px-5 py-2 rounded-full font-medium text-sm'
            >
              <p>See more</p>
            </Link>
            <p className='text-gray-600'>Posted Jan 21, 2023</p>
          </div>
        </div>
    </div>
  );
};

export default JobsCard;
