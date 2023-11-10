import React from "react";
import GroupSidebar from "../molecules/GroupSidebar";
import ShowAll from "../molecules/ShowAll";
import HeadSidebar from "../molecules/HeadSidebar";

const Sidebar = () => {
  return (
    <div className="w-fit gap-4 flex items-center justify-center flex-col relative">
      <div className="w-56 flex flex-col gap-7">
        <HeadSidebar />
        <GroupSidebar />
        <ShowAll />
      </div>
      <p className="text-customBlue font-normal text-base">
        Guide To Using the dashboard
      </p>
    </div>
  );
};

export default Sidebar;
