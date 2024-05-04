import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
