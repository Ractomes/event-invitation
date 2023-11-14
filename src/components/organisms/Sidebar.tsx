import React from "react";
import GroupSidebar from "../molecules/GroupSidebar";
import ShowAll from "../molecules/ShowAll";
import HeadSidebar from "../molecules/HeadSidebar";

const Sidebar = () => {
  return (
    <aside className="w-fit gap-4 inline-flex px-4 border-r-custom-black-50 items-center justify-center flex-col relative">
      <div className="w-56 flex flex-col gap-7">
        <HeadSidebar />
        <GroupSidebar />
        <ShowAll />
      </div>
      <p className="text-customBlue font-normal text-base">
        Guide To Using the dashboard
      </p>
    </aside>
  );
};

export default Sidebar;
