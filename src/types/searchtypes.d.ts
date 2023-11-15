import React from "react";

export type SearchType = {
  onClick: () => void;
} & React.HTMLAttributes<HTMLInputElement>;
