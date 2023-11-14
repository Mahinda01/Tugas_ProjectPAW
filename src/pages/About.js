import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Our Mobile Shop</Typography>
        <p>
        Welcome to our Mobile Shop, your premier destination for cutting-edge mobile technology in Medan. Since 2020, we've provided top-notch service. Explore our menu of smartphones, accessories, and tech solutions. Our knowledgeable staff ensures a delightful experience, whether you're browsing for the latest device, seeking expert advice, or arranging event services. We cater to diverse preferences, offering a range of products, including user-friendly options for tech enthusiasts. Visit us today to immerse yourself in the dynamic world of mobile innovation. We're excited to assist you! 😊
        </p>
        <br />
      </Box>
    </Layout>
  );
};

export default About;
