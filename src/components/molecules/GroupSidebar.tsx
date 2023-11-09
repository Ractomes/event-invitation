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
  Bookmark_Book,
} from "@/icon";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// color={"#151DE0"}
const GroupSidebar = () => {
  const data: Data[] = [
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
    <div>
      {data.map(({ list, title }, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2 className="text-black/500 font-medium text-sm inline-flex">
                {title}
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col gap-7">
                {list.map(({ icon, title }, i) => {
                  return <ListSidebar key={i} icon={icon} title={title} />;
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default GroupSidebar;
