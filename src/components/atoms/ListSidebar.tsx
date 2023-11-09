import Image from "next/image";
import React from "react";
import { List } from "@/types/sidebartypes";
import Overview from "@/icon/Overview";
import Manage_Task from "@/icon/Manage_Task";

//color blue  #151DE0

const ListSidebar = ({ icon, title }: List) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="w-6 h-6 inline-flex justify-center">{icon}</div>
      {/* <Image src={imgSrc} alt="" width={25} height={25} /> */}
      {/* <Image src={"/svgs/Manage_Task.svg"} alt="s" width={25} height={25} /> */}
      <p className="text-xs font-medium">{title}</p>
    </div>
  );
};

export default ListSidebar;
