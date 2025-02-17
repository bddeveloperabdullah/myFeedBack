import { cn } from "../utility/cn";

const SectionTitle = ({ children, className }) => {
  return (
    <>
      <h1
        className={cn(
          "text-2xl lg:text-[32px] font-[800] font-lexend leading-5 lg:leading-1 text-secondary",
          className
        )}
      >
        {children}
      </h1>
    </>
  );
};

export default SectionTitle;
