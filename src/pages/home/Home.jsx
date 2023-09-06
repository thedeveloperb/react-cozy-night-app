import React from "react";
import { Link } from "react-router-dom";
import BannerIcon from "../../components/banner/BannerIcon";
import {
  FavoriteBorderOutlined,
  KingBedOutlined,
  LocalShippingOutlined,
  PaidOutlined,
} from "@mui/icons-material";
import { Grid, Box, Typography } from "@mui/material";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner-img">
        <div className="home-banner-typography-container">
          <Typography variant="h2" className="home-banner-typography">
            #1 Rated Mattress Brand Worldwide
          </Typography>
          <Link to="/">
            <button className="home-banner-btn">Shop Now</button>
          </Link>
        </div>
      </div>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Grid container className="small-banner-container">
          <Grid xs={4} md={2} item>
            <BannerIcon
              text={"Love & trusted by over 2 million customers"}
              icon={
                <FavoriteBorderOutlined
                  sx={{ fontSize: 48, color: "#27005D" }}
                />
              }
            />
          </Grid>
          <Grid xs={4} md={2} item>
            <BannerIcon
              text={"Sleep on it for 100 nights, zero commitment"}
              icon={<KingBedOutlined sx={{ fontSize: 48, color: "#27005D" }} />}
            />
          </Grid>
          <Grid xs={4} md={2} item>
            <BannerIcon
              text={"Fast free shipping & returns"}
              icon={
                <LocalShippingOutlined
                  sx={{ fontSize: 48, color: "#27005D" }}
                />
              }
            />
          </Grid>
          <Grid xs={4} md={2} item>
            <BannerIcon
              text={"Premium quality at an amazing price"}
              icon={<PaidOutlined sx={{ fontSize: 48, color: "#27005D" }} />}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
