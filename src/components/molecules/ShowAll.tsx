import React from "react";
import classNames from "classnames";
import Image from "next/image";

const ShowAll = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={classNames(
        "flex justify-between items-center w-full",
        className
      )}
    >
      <p className="text-customBlue font-normal text-base">See all Projects</p>
      <Image src="/images/arrow.png" alt="arrow" width={10} height={10} />
    </button>
  );
};

export default ShowAll;
