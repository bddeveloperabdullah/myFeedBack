import { cn } from "../utility/cn";

const CardTitle = ({ children, className }) => {
  return (
    <>
      <h3
        className={cn(
          `text-base md:text-[22px] font-semibold text-accent font-roboto 
          leading-[25.78px]`,
          className
        )}
      >
        {children}
      </h3>
    </>
  );
};

export default CardTitle;
