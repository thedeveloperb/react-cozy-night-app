import { Box, Grid } from "@mui/material";
import ghLogo from "../../images/gh-logo.png";
import hgtvLogo from "../../images/hgtv-logo.png";
import slLogo from "../../images/sl-logo.png";
import nyLogo from "../../images/ny-logo.png";
import BannerIcon from "../banner/BannerIcon";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <Box sx={{ backgroundColor: "#eee" }}>
        <Grid container className="footer-small-banner-container">
          <Grid xs={4} md={2} item>
            <BannerIcon
              text={"Invention of the Year 2023"}
              icon={
                <img
                  src={ghLogo}
                  alt="good-housekeeping-logo"
                  className="img-logo"
                />
              }
            />
          </Grid>
          <Grid xs={4} md={2} item>
            <BannerIcon
              text={"HGTV Design of the Year 2016"}
              icon={
                <img
                  src={hgtvLogo}
                  alt="home-garden-tv-logo"
                  className="img-logo"
                />
              }
            />
          </Grid>
          <Grid xs={4} md={2} item>
            <BannerIcon
              text={"Fast free shipping & returns"}
              icon={
                <img
                  src={slLogo}
                  alt="southern-living-logo"
                  className="img-logo"
                />
              }
            />
          </Grid>
          <Grid xs={4} md={2} item>
            <BannerIcon
              text={"Premium quality at an amazing price"}
              icon={
                <img src={nyLogo} alt="new-york-logo" className="img-logo" />
              }
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer;
