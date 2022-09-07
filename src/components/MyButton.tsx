import { Button } from "@mui/material";
import React from "react";

type Props = {
  text?: string;
  children?: HTMLElement | String;
};

export default function MyButton({ text }: Props) {
  return <Button>{text}</Button>;
}
