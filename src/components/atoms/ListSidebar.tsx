import React from "react";
import { List } from "@/types/sidebartypes";
import classNames from "classnames";
//color blue  #151DE0

const ListSidebar = ({ icon, title, className, ...props }: List) => {
  return (
    <div
      {...props}
      className={classNames("flex flex-row items-center gap-4 text-custom-black-450", className)}
    >
      <div className="w-6 h-6 inline-flex justify-center">{icon}</div>
      <p className="text-xs font-medium">{title}</p>
    </div>
  );
};

export default ListSidebar;
