import { cn } from "../utility/cn";

const Button = ({ children, className }) => {
  return (
    <>
      <button
        className={cn(
          "bg-secondary text-white w-[160px] md:w-[233px] h-[32px] md:h-[47px] rounded-full cursor-pointer font-roboto text-xs md:text-base",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
