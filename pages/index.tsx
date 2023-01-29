import Image from "next/image";
import Grid from "@mui/material/Grid";
import mainLogo from "../public/images/logo-horizontal-dswhite.png";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";

const GGLogo = () => (
  <Image
    src={mainLogo}
    loading="lazy"
    alt={"good gaming digital store"}
    style={{ width: "100%", height: "auto", cursor: "pointer" }}
  />
);

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleChangeIndex = (index: number) => {
    setCarouselIndex(index);
  };

  return (
    <>
      <Grid
        container
        columns={16}
        height={"20vh"}
        sx={{ position: "absolute", top: 0, left: 0, zIndex: 100 }}
        padding={4}
      >
        <Grid item xs={8} md={4} lg={4} onClick={() => setCarouselIndex(2)}>
          <GGLogo />
        </Grid>
      </Grid>
      <SwipeableViews
        index={carouselIndex}
        default
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
          padding={0}
        >
          <h1>Slide 1</h1>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
          padding={0}
        >
          <h1>Slide 2</h1>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
          padding={0}
        >
          <h1>Slide 3</h1>
        </Grid>
      </SwipeableViews>
    </>
  );
}
