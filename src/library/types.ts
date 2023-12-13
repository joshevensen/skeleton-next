import { ReactNode } from "react";

export type InputOption = {
  value: any;
  label: string;
};

export type Response = {
  message: string;
  data?: any;
};

export type TabItem = {
  id: string | number;
  label: string;
  component?: ReactNode;
};
