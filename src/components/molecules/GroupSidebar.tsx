import React from "react";
import ListSidebar from "../atoms/ListSidebar";
import { Data } from "@/types/sidebartypes";
import {
  Overview,
  Manage_Task,
  Guest_Category,
  Guest_Statistics,
  System,
  Templates,
} from "@/icon";

// color={"#151DE0"}
const GroupSidebar = () => {
  const data = [
    {
      title: "Overview",
      icon: <Overview />,
    },
    {
      title: "Manage Task",
      icon: <Manage_Task />,
    },
    {
      title: "System",
      icon: <System />,
    },
    {
      title: "Guest Category",
      icon: <Guest_Category />,
    },
    {
      title: "Guest Statistics",
      icon: <Guest_Statistics />,
    },
    {
      title: "Templates",
      icon: <Templates />,
    },
  ];

  return (
    <div className="flex flex-col gap-7">
      {data.map(({ icon, title }, i) => {
        return <ListSidebar key={i} icon={icon} title={title} />;
      })}
    </div>
  );
};

export default GroupSidebar;
