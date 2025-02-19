import Star from "./Star";

const RecentCard = ({ icon, photo, title, countryName, desc1, desc2 }) => {
  return (
    <>
      <div className="w-[457px] h-[500px] bg-[#F8F8F8] rounded-[14px] mt-10 p-5">
        <div className="flex items-center gap-2.5">
          <div className="size-[59px] bg-white rounded-full flex justify-center items-center">
            <img className="" src={icon} alt="" />
          </div>
          <div>
            <h3 className="text-xl font-roboto font-semibold leading-[24.61px]">
              {title}
            </h3>
            <p className="text-base font-roboto font-normal leading-[19.34px] text-acent2 ">
              {countryName}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 my-7">
          <div className="flex justify-center items-center gap-1">
            {Array.from(Array(5).keys()).map((el) => (
              <Star key={el} />
            ))}
          </div>
          <p className="text-sm text-secondary font-roboto font-normal">
            10/20/2024
          </p>
        </div>
        <div className="space-y-5">
          <p className="text-base text-[#5E5E5E] font-roboto leading-[18.75px]">
            {desc1}
          </p>
          <p className="text-base text-[#5E5E5E] font-roboto leading-[18.75px]">
            {desc2}
          </p>
        </div>
        <div className="flex justify-start items-center gap-3 mt-7">
          <img className="size-28" src="/recent1.png" alt="" />
          <img className="size-28" src="/recent2.png" alt="" />
          <img className="size-28" src="/recent3.png" alt="" />
        </div>
        <div className="mt-5">
          <a
            href="#"
            className="text-[17px] font-lexend font-[500] leading-[21.25px] underline"
          >
            Discover
          </a>
        </div>
      </div>
    </>
  );
};

export default RecentCard;
