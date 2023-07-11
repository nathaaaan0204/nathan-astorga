import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TechStackSection } from "./TechStackSection";
import { Footer } from "./Footer";

export const AboutPage = () => {
  return (
    <>
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: "120px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: "24px",
          }}
        >
          <Typography variant="h2" component="h1">
            About.
          </Typography>
        
        </Box>
        <Box>
         
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <Typography>{"<h3>"}</Typography>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineContent
                  sx={{ display: "flex", justifyContent: "space-between", marginTop: "-10px" }}
                >
                  <Typography
                    variant="h4"
                   
                  >
                    Web Design
                  </Typography>
                  <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                    View Projects
                  </Typography>
                </TimelineContent>
                <Typography variant="body1" component="p">
                  I am a web designer with a passion for creating visually
                  stunning and user-fr iendly websites. Through a combination of
                  design expertise and technical skills, I transform concepts
                  into captivating online experiences that engage and delight
                  users.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <Typography>{"<h3>"}</Typography>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineContent
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h4">Web Design</Typography>
                  <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                    View Projects
                  </Typography>
                </TimelineContent>
                <Typography variant="body1" component="p">
                  I am a web designer with a passion for creating visually
                  stunning and user-fr iendly websites. Through a combination of
                  design expertise and technical skills, I transform concepts
                  into captivating online experiences that engage and delight
                  users.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
        <Box sx={{paddingLeft: "12px"}}>
        <Typography variant="h3" component="h1" sx={{marginBottom: "50px"}}>
            My Experience 🥳
          </Typography>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <TimelineContent
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h4">Java Programming</Typography>
                  <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                    2017 - 2022
                  </Typography>
                </TimelineContent>
                <Typography variant="body1" component="p">
                  During my college years, I enthusiastically delved into the
                  world of Java programming. Embracing its versatility and
                  object-oriented paradigm, I honed my skills in building robust
                  applications and solving complex problems. The journey of
                  learning Java not only broadened my understanding of
                  programming concepts but also ignited a passion for creating
                  efficient and scalable software solutions.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <TimelineContent
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h4">Java Programming</Typography>
                  <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                    2017 - 2022
                  </Typography>
                </TimelineContent>
                <Typography variant="body1" component="p">
                  During my college years, I enthusiastically delved into the
                  world of Java programming. Embracing its versatility and
                  object-oriented paradigm, I honed my skills in building robust
                  applications and solving complex problems. The journey of
                  learning Java not only broadened my understanding of
                  programming concepts but also ignited a passion for creating
                  efficient and scalable software solutions.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <TimelineContent
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h4">Java Programming</Typography>
                  <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                    2017 - 2022
                  </Typography>
                </TimelineContent>
                <Typography variant="body1" component="p">
                  During my college years, I enthusiastically delved into the
                  world of Java programming. Embracing its versatility and
                  object-oriented paradigm, I honed my skills in building robust
                  applications and solving complex problems. The journey of
                  learning Java not only broadened my understanding of
                  programming concepts but also ignited a passion for creating
                  efficient and scalable software solutions.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            
          </Timeline>
        </Box>
      </Box>
    
    </Container>
     <TechStackSection/>
     <Footer/>
    </>
  );
};
