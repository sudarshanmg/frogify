"use client";

import { BarLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <BarLoader color="#22c55e" className="rounded-full" />
    </Box>
  );
};

export default Loading;
