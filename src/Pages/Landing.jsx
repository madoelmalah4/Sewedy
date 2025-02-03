import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Box,
  Divider,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Sewedy from "../assets/sewedy.png";
import CostumButton from "../Components/CostumButton";
import ReactPlayer from "react-player";
import sewedyVidoe from "../assets/sewedyVidoe.mp4";
import Fram from "../assets/redfram.png";
import { RevealLeftARight } from "../Components/RevealLeftARight";
import { Reveal } from "../Components/Reveal";
import LandPic from "../assets/landpic.png";
import Redfram from "../assets/fram2.png";
import HoverCounter from "../Components/HoverCounter";
import Nada2 from "../assets/Nada2.png";
import BasilPic from "../assets/basil.png";
import { useInView } from "react-intersection-observer";
import SliderPartners from "../Components/Slider";
import Footer from "../Components/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import SewedyVidoe from "../assets/sewedyVidoe.mp4";

const Landing = () => {
  const { inView, ref } = useInView();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { ref: videoRef, inView: isVideoInView } = useInView({
    threshold: 0.5,
  });

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowY: "auto",
        overflowX: "hidden",
        transition: "all 0.4s",
        backgroundColor: inView ? "#1C1D1F" : "",
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
        <Stack
          sx={{
            position: "relative",
            zIndex: 2,
            justifyContent: "center",
            alignItems:"center",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "60px", md: "60px", sm: "40px", xs: "40px" },
              fontWeight: "600",
              color: "#1a1a1a",
              ml: { lg: 20 },
              mb: 10,
              textAlign: { xs: "center", lg: "left" , md:"center" },
              width:"100%",
              p:2
            }}
          >
            <span style={{ color: "#DA1B1B" }}>El Sewedy</span> International
            School for Applied Technology and Software
          </Typography>
          <Stack sx={{
          }}>
            <CostumButton Text={"Learn More"}/>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "100vw",
          minHeight: "800px",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "white",
          flexDirection: { lg: "row"},
          mt: 20,
          gap: { lg: 6, md: 10, sm: 10, xs: 10 },
        }}
      >
        <Stack
          sx={{
            alignItems:"center",
            justifyContent: "center",
            width: "100%",
            gap: 6,
          }}
        >
          <RevealLeftARight duration={0.3} isOnce={false} direction={true}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "600",
                color: "#1a1a1a",
                fontFamily: "Rubik",
                // textAlign: { sm: "center", lg: "left", xs: "center" , md:"center" },
                textAlign:"center"
              }}
            >
              <Box
                component="span"
                sx={{ color: "#DA1B1B", fontWeight: "bold", display: "block" }}
              >
                What is
              </Box>
              El Sewedy International School?
            </Typography>
          </RevealLeftARight>

          <RevealLeftARight duration={0.3} isOnce={false} direction={true}>
            <Typography
              variant={isMobile ? "h6" : "h3"}
              sx={{
                fontWeight: "200",
                color: "#1a1a1a",
                fontFamily: "Rubik",
                textAlign:"center",
                p:2,
                textOverflow:"wrap"
              }}
            >
              The Swedish International School for Applied Technology and
              Software was established in 2022. It is one of the top ten
              international schools for applied technology. The school is a
              partnership between the Ministry of Education, El Sewedy
              Electrometer, and the Workforce Project in Egypt, funded by the
              U.S. Agency for International Development (USAID). The school
              follows international quality standards. Our mission is to equip
              students with the skills needed for success both locally and
              internationally, shaping a brighter future through innovative
              education.{" "}
            </Typography>
          </RevealLeftARight>
        </Stack>
        <Stack
          sx={{
            justifyContent: "right",
            width: "100%",
            mr: 9,
            gap: 3,
            mt: { lg: 7, md: 0, sm: 0 },
          }}
        >
          <RevealLeftARight duration={0.6} direction={false}>
            <div
              style={{
                borderRadius: "30px",
                overflow: "hidden",
                border: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add a shadow
              }}
            >
              <ReactPlayer
                url={SewedyVidoe}
                height={"400"}
                width={"600"}
                controls={true}
                loop={true}
                playing={true}
                muted={true}
              />
            </div>
          </RevealLeftARight>
        </Stack>
      </Stack>
      <Reveal duration={0.3} isOnce={false}>
        <Stack
          sx={{
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            p: 10,
            mt: { xs: 20, sm: 7 },
          }}
        >
          <Box
            component={"Stack"}
            src={Fram}
            sx={{
              width: { lg: "1200px", sm: "400px", xs: "350px" , md:"800px"},
              height: { lg: "400px", sm: "350px", xs: "270px" },
              backgroundImage: `url(${Fram})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "14px",
              position: "relative",
              mt: { sm: 20, lg: 0 },
            }}
          >
            <Typography
              variant={!isMobile ? "h2" : "h6"}
              sx={{
                fontWeight: "bold",
                color: "White",
                fontFamily: "Rubik",
                width: "700px",
                position: "absolute",
                top: { lg: "10%", sm: "7%", xs: "6%"  },
                left: { lg: "5%", sm: "12.4%", xs: "3%" , md:"1%" },
                fontSize:{md:"20px"}
              }}
            >
              Software Programming Specialization
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "200",
                color: "White",
                fontSize: { lg: "26px", sm: "17px", xs: "14px" , md:"20px" },
                fontFamily: "Rubik",
                width: { lg: "800px", sm: "350px", xs: "300px"  ,md:"500px"},
                position: "absolute",
                top: { lg: "30%", sm: "20%", xs: "23%" , md:"25%" },
                left: { lg: "5%", sm: "3%", xs: "2%" },
              }}
            >
              The Programming specialization at our school is one of the modern
              and essential fields that keep up with the developments of the
              digital age. Our students study the latest programming languages
              and software development techniques, helping them build strong
              skills in problem-solving and application development. We believe
              in the importance of providing our students with the technical
              knowledge needed for the future, as they learn how to transform
              ideas into innovative solutions through programming.{" "}
            </Typography>
          </Box>
        </Stack>
      </Reveal>

      <Stack
        sx={{
          width: "100vw",
          justifyContent: "start",
          alignItems: "center",
          p: { xs: 2, md: 10 }, // Responsive padding
          flexDirection: { xs: "column", md: "column" , lg:"row" , sm:"column" }, // Column on mobile, row on desktop
          mt: { xs: 10, md: 30 }, // Responsive margin-top
          gap: { xs: 3, md: 0, lg: 10 }, // Gap between elements on mobile
        }}
      >
        <Stack
          sx={{
            alignItems: { xs: "center", md: "flex-start" }, // Center on mobile, left-align on desktop
            justifyContent: "center",
            gap: 3,
            width: { xs: "100%", md: "50%" }, // Full width on mobile, half on desktop
            ml: { lg: 10, md: 0, sm: 0 },
          }}
        >
          <RevealLeftARight duration={0.3} isOnce={false} direction={true}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "600",
                color: "#1a1a1a",
                fontFamily: "Rubik",
                fontSize: { xs: "20px", md: "48px", sm: "23px", lg: "48px" }, // Smaller font on mobile
                textAlign: { xs: "center", lg: "left" }, // Center text on mobile
                width: "100%",
                ml: { lg: 1 },
              }}
            >
              <Box
                component="span"
                sx={{ color: "#DA1B1B", fontWeight: "bold", display: "block" }}
              >
                Why
              </Box>
              El Sewedy International School ?
            </Typography>
          </RevealLeftARight>

          <Stack
            component="ul"
            sx={{
              fontWeight: "200",
              color: "#1a1a1a",
              fontFamily: "Rubik",
              width: { xs: "100%", md: "800px", lg: "900px" },
              listStyleType: "none", // Remove default bullet points
              gap: 2,
              pl: 0,
              ml: { lg: 2, sm: 2, xs: 1 ,md:-22 },
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            {[
              "Competitive education with local and international job opportunities.",
              "Experienced teachers and experts from El Sewedy Electrometer.",
              "Hands-on training at partner companies.",
              "English-language courses in a tech-driven environment.",
              "Small class sizes (max 25 students).",
              "Each student receives a laptop and school uniform.",
              "Various sports, arts, music, and drama activities.",
              "Annual Capstone project to apply research skills.",
              "Opportunities to join tech colleges and institutes.",
              "Career guidance through the Career Development Center (CDC).",
              "Help with applying for competitions and representing the school locally and internationally.",
            ].map((text, index) => (
              <RevealLeftARight
                key={index}
                duration={0.3}
                isOnce={false}
                direction={true}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={2}
                  sx={{
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "black", // Custom bullet point
                    }}
                  />
                  <Typography
                    variant="h3"
                    component="li"
                    fontWeight={200}
                    sx={{
                      fontSize: { xs: "16px", md: "24px", sm: "14px" },
                      textWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    {text}
                  </Typography>
                </Stack>
              </RevealLeftARight>
            ))}
          </Stack>
        </Stack>

        <RevealLeftARight duration={0.3} isOnce={false} direction={false}>
          <Box
            src={LandPic}
            component={"img"}
            sx={{
              width: { xs: "90%", md: "500px" }, // Responsive image width
              height: "auto",
              borderRadius: "40px",
              boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
              transition: "all 0.4s",
              ml: { xs: 2.2, md: 2, sm: 2 }, // Margin-left only on desktop
              mt: { xs: 4, md: 5 }, // Margin-top on mobile
            }}
          />
        </RevealLeftARight>
      </Stack>

      <Reveal duration={0.3} isOnce={false}>
        <Stack
          sx={{
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            mt: { lg: 20, sm: 10, xs: 10, md: 20 },
          }}
        >
          <Box
            component={"Stack"}
            sx={{
              width: { xs: "70%", sm: "80%", md: "90%", lg: "1100px" }, // Responsive width
              height: { xs: "auto", sm: "auto", md: "160px" }, // Responsive height
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${Redfram})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "40px",
              mt: 20,
              p: 4,
              gap: 10, // Space between grid items
              textAlign: "center",
              flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
              display: "flex", // Ensure flexbox is applied
            }}
          >
            <Box>
              <HoverCounter count={50} isPlus={true} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "#1a1a1a",
                  fontFamily: "Rubik",
                  mt: 3,
                }}
              >
                Capstone projects every year
              </Typography>
            </Box>
            <Box>
              <HoverCounter count={250} isPlus={true} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "#1a1a1a",
                  fontFamily: "Rubik",
                  mt: 3,
                }}
              >
                Some Description
              </Typography>
            </Box>
            <Box>
              <HoverCounter count={3} isPlus={null} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "#1a1a1a",
                  fontFamily: "Rubik",
                  mt: 3,
                }}
              >
                Capstone projects every year
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Reveal>

      <Stack
        sx={{
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          height: "900px",
          backgroundColor: "transparent",
          p: 3,
          mt: 40,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            color: "#DA1B1B",
            fontWeight: "500",
            background: "linear-gradient(45deg, #ff8e53, #fe6b8b)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            mt: { lg: 0, sm: 30, md:20 },
          }}
        >
          Abroad 2024’
        </Typography>
        <Divider
          sx={{
            width: { lg: "400px", sm: "200px" },
            borderBottomWidth: 2,
            borderColor: "white",
            my: 4,
            transition: "all 0.4s",
            "&:hover": {
              width: "600px",
            },
          }}
        />
        <Stack
          sx={{
            gap: { lg: 7, md: 0, sm: 10, xs: 10 },
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { lg: "row", sm: "column" },
          }}
        >
          <Stack
            sx={{ gap: 3, alignItems: "center", justifyContent: "center" }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "600",
              }}
            >
              USA
            </Typography>
            <Box
              ref={ref}
              component={"img"}
              src={BasilPic}
              sx={{
                width: { lg: "auto", sm: "400px", xs: "300px" },
              }}
            />
            <Typography
              variant={isMobile ? "h6" : "h4"}
              sx={{
                fontWeight: "300",
                color: inView ? "White" : "#1C1D1F",
                fontFamily: "Rubik",
                width: { lg: "600px", sm: "400px", xs: "330px" },
                textAlign: { lg: "center", xs: "center", sm: "center" },
              }}
            >
              Basil, a lively young man, participated in a summer program in the
              United States focused on self-development. He immersed himself in
              his studies and gained valuable insights, while also dedicating
              time to improving his football skills. This enriching experience
              in the U.S. served as a major motivator for him, boosting his
              self-confidence and inspiring him to face future challenges.
            </Typography>
          </Stack>
          <Stack
            sx={{ gap: 3, alignItems: "center", justifyContent: "center" }}
          >
            <Typography
              variant="h2"
              sx={{
                color: inView ? "White" : "#1C1D1F",
                fontWeight: "600",
              }}
            >
              JAPAN
            </Typography>
            <Box
              component={"img"}
              src={Nada2}
              sx={{
                width: { lg: "auto", sm: "400px", xs: "300px" },
              }}
            />
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{
                fontWeight: "300",
                color: inView ? "White" : "#1C1D1F",
                fontFamily: "Rubik",
                width: { lg: "600px", sm: "400px", xs: "330px" },
                textAlign: { lg: "center", xs: "center", sm: "center" },
              }}
            >
              Our school takes pride in the achievement of our student Nada
              Safwat, who proudly represented her school and our country, Egypt,
              during her trip to Japan. Nada showcased outstanding creativity
              and skills, reflecting the values we strive to instill in our
              students. Nada's experience is an inspiration to all of us and a
              distinguished addition to our school's record.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography
        variant="h1"
        sx={{
          color: "#1C1D1F",
          fontWeight: "600",
          mt: { lg: 40, sm: 50, xs: 50 },
        }}
      >
        Our Partners
      </Typography>
      <Stack
        sx={{
          mb: 20,
        }}
      >
        <SliderPartners />
      </Stack>
      <Stack
        sx={{
          mb: 15,
        }}
      >
        <CostumButton
          Text={"Our Courses"}
          Icon={ArrowForwardIosIcon}
          width={"170px"}
          path={"/courses"}
        />
      </Stack>

      <Footer />
    </Stack>
  );
};

export default Landing;
