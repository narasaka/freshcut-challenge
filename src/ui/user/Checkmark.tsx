import { ComponentPropsWithoutRef } from "react";

interface CheckmarkProps extends ComponentPropsWithoutRef<"svg"> {}

const Checkmark: React.FC<CheckmarkProps> = ({ className }) => {
  return (
    <svg
      className={`fill-yellow-500 w-8 h-8 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 98.4 100"
    >
      <path d="m49.2 0 13.9 15.1 16.6-8.7-3.2 18.4 18.6 8.5L85 51.2l13.4 13.1L79.9 67l-2.3 20.4-20.1-4.1-8.3 16.7-8.3-16.8-20.1 4.1-2.3-20.4L0 64.2l13.4-13.1L3.3 33.3 22 24.8 18.8 6.4l16.6 8.7L49.2 0zm-7.9 67.5 32.2-32.2-6.4-6.4-25.8 25.8-9.8-9.8-6.4 6.4 16.2 16.2z"></path>
      <path
        fill="#151417"
        d="M73.5 35.3 41.3 67.5 25.1 51.3l6.4-6.4 9.8 9.8 25.8-25.8 6.4 6.4z"
      ></path>
    </svg>
  );
};

export default Checkmark;
