"use client"
import React from 'react'

//mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// type
import { DropdownType } from '@/types/dropdown';

const Dropdown = ({Data}:DropdownType) => {
  
  return (
    <div className=''>
          <Accordion disableGutters={true}>
              <AccordionSummary
                      className="relative left-4"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
              >
                  <h2 className="text-custom-black-450 font-medium text-sm relative right-8">
                      Weddings
                  </h2>
              </AccordionSummary>
          {Data.map(({title},i) => {
              return (
              <AccordionDetails key={i} className="relative right-2 flex flex-col gap-7">
                          {title}
              </AccordionDetails>
                              )
                                })}
      </Accordion>
    </div>
  )
}

export default Dropdown