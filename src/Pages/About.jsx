import React from "react";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Box,
  useTheme,
  Stack,
} from "@mui/material";
import sewedy from "../assets/sewedy.png";
import EmadImg from "../assets/Emad.png";
import { Reveal } from "../Components/Reveal";
import { RevealLeftARight } from "../Components/RevealLeftARight";

function About() {
  const theme = useTheme();
  const isMobile = theme.breakpoints.down("md");

  return (
    <div>
      {/* Banner with Blurred Background */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 400, md: 600 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          mb: 10,
        }}
      >
        {/* Blurred Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${sewedy})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px)",
            maskImage: "linear-gradient(to top, transparent, black)",
            WebkitMaskImage: "linear-gradient(to top, transparent, black)",
            zIndex: -1,
          }}
        />
        {/* Title */}
        <Box sx={{ position: "relative", zIndex: 1, mt: 20 }}>
          <Typography
            variant={isMobile ? "h1" : "h1"}
            fontWeight="bold"
            fontSize={isMobile ? "60px" : "100px"}
            color="#1a1a1a"
          >
            About <span style={{ color: "#DA1B1B" }}>El Sewedy</span> IATS
          </Typography>
        </Box>
      </Box>

      {/* Our Story */}
      <Container sx={{ mt: 10, textAlign: "center", mt: 20 }}>
        <Typography
          variant={isMobile ? "h2" : "h1"}
          fontWeight="bold"
          color="#DA1B1B"
          gutterBottom
        >
          Our Story
        </Typography>
        <Grid container spacing={8} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Typography
                variant="h3"
                color="#DA1B1B"
                fontWeight="bold"
                gutterBottom
              >
                Foundation
              </Typography>
              <Typography variant="h5" lineHeight={1.8}>
                El Sewedy International School for Applied Technology and
                Software was founded with a mission to provide quality education
                in the fields of technology and software development. Our goal
                is to equip students with the skills needed for a fast-evolving
                tech industry.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Typography
                variant="h3"
                color="#DA1B1B"
                fontWeight="bold"
                gutterBottom
              >
                Growth and Development
              </Typography>
              <Typography variant="h5" lineHeight={1.8}>
                Over the years, the institution expanded its facilities and
                curriculum, attracting talented students and top educators.
                Today, it stands as a center of excellence for applied
                technology education, fostering innovation and growth.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Today */}
      <Container sx={{ mt: 10, textAlign: "center" ,mb:30 }}>
        <Typography variant="h2" fontWeight="bold" color="#DA1B1B" gutterBottom>
          Today
        </Typography>
        <Typography variant="h5" lineHeight={1.8} maxWidth={900} mx="auto">
          El Sewedy IATS continues to focus on preparing students for the
          ever-evolving tech industry. With cutting-edge facilities and a
          dedicated faculty, we ensure that our students are ready to excel in
          their careers.
        </Typography>
      </Container>

      {/* Founder Message */}
      <Box
        sx={{
          mt: 10,
          py: 8,
          backgroundColor: "#1a1a1a",
          textAlign: "center",
          color: "white",
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold" color="white" gutterBottom>
            A Message from Our Founder
          </Typography>
          <Avatar
            src={EmadImg}
            alt="Emad Zaki El Sewedy"
            sx={{
              width: 200,
              height: 200,
              mx: "auto",
              border: "5px solid #DA1B1B",
              mt: 4,
            }}
          />
          <Typography
            variant="h5"
            lineHeight={1.8}
            maxWidth={800}
            mx="auto"
            mt={6}
          >
            "At El Sewedy IATS, our mission is to empower students with the
            skills and knowledge they need to succeed in the technology-driven
            world. We are committed to fostering an environment of innovation,
            growth, and excellence."
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="#DA1B1B" mt={4}>
            - Emad Zaki El Sewedy
          </Typography>
          <Typography variant="h6" fontWeight="200" color="white" mt={4}>
            Founder of El Sewedy IATS
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default About;
