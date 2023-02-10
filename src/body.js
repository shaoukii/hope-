import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Imge from "./gi.jpg";
import Imgee from "./e.png";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "centre",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Item
            sx={{
              paddingTop: "100px",
              paddingLeft: "50px",
              paddingRight:"50px"
              
            }}
          >
            <h1 style={{ color: "#1C82AD", textDecorationLine: "underline" }}>
              HOW WE ARE
            </h1>

            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h2>

            <h1 style={{ color: "#1C82AD", textDecorationLine: "underline" }}>
              {" "}
              Healthcare Simplified For Everyone
            </h1>

            <img
              src={Imgee}
              style={{ height: "100%", width: "100%" }}
              alt="img"
              className="responsive-image"
            />
          </Item>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
            }}
            component={"img"}
            src={Imge}
            alt="img"
            className="responsive-image"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              height: "60px",
              width: "100%",
              backgroundColor: "#1C82AD",
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "#181D31",
              textAlign: "center",
              color: "#1C82AD",
              paddingTop: "20px",
            }}
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <AcUnitIcon />
              Medsolutions
            </span>

            <h4 style={{ color: "white" }}>
              {" "}
              77b liberty road, sult 100 flowood,MS ,39232
            </h4>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "#181D31",
              textAlign: "center",
              color: "#1C82AD",
              paddingTop: "20px",
            }}
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <PhoneAndroidIcon />
              Call now :{" "}
            </span>

            <h4 style={{ color: "white" }}>(769)243-6141</h4>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "#181D31",
              textAlign: "center",
              color: "#1C82AD",
              paddingTop: "20px",
            }}
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <EmailIcon /> Email @{" "}
            </span>

            <h4 style={{ color: "white" }}>orders@medsolustion.plus</h4>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "#222222",
              textAlign: "center",
              color: "white",
              paddingTop: "5px",
            }}
          >
            <p>copyright Medsolutions. All Right Reserved </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
