import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import aboutImg from "../assets/img12.jpg";
import { Reveal } from "../Components/Reveal";
import aboutImg3 from "../assets/aboutImg3.jpg";
import { RevealText } from "../Components/RevealText";
import { RevealLeftARight } from "../Components/RevealLeftARight";
import Sewedy from '../assets/Sewedy.png'
const About = () => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden", // Prevent overflow
      }}
    >
      <Stack
        sx={{
          width: "100vw",
          minHeight: "100vh",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Sewedy})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(0.7px)",
            maskImage: "linear-gradient(to top, transparent, black)",
            WebkitMaskImage: "linear-gradient(to top, transparent, black)",
            zIndex: -1,
          }}
        />
       
      </Stack>
    </Stack>
  );
};

export default About;
