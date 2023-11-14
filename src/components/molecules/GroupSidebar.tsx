"use client";

import React, { useState } from "react";
import ListSidebar from "../atoms/ListSidebar";
import classNames from "classnames";

//type
import { Data } from "@/types/sidebartypes";

//icon
import {
  Overview,
  Manage_Task,
  Guest_Category,
  Guest_Statistics,
  System,
  Templates,
  Bookmark_Book,
} from "@/icon";

//mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// color={"#151DE0"}
const GroupSidebar = (
  { className, ...props }: React.HTMLAttributes<HTMLDivElement>,
  data?: Data[]
) => {
  const dataDummy: Data[] = [
    {
      title: "Home",
      list: [
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
      ],
    },
    {
      title: "Projects",
      list: [
        {
          title: "Wedding of safa & daniel",
          icon: <Bookmark_Book />,
        },
        {
          title: "Wedding of marissa & Antonius",
          icon: <Bookmark_Book />,
        },
        {
          title: "Wedding of Bega & Marshel",
          icon: <Bookmark_Book />,
        },
        {
          title: "Wedding of Bega & Marshel",
          icon: <Bookmark_Book />,
        },
        {
          title: "Wedding of Bega & Marshel",
          icon: <Bookmark_Book />,
        },
      ],
    },
  ];

  return (
    <div {...props} className={classNames("", className)}>
      {dataDummy.map(({ list, title }, index) => {
        return (
          <Accordion key={index} disableGutters={true}>
            <AccordionSummary
              className="relative left-4"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2 className="text-custom-black-450 font-medium text-sm relative right-8">
                {title}
              </h2>
            </AccordionSummary>
            <AccordionDetails className="relative right-2 flex flex-col gap-7">
              {list.map(({ icon, title }, i) => {
                return <ListSidebar key={i} icon={icon} title={title} />;
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default GroupSidebar;
