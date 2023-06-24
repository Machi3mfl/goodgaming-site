import Image from "next/image";
import Grid from "@mui/material/Grid";
import mainLogo from "@/public/images/logo-horizontal-dswhite.png";
import { useState } from "react";
import SwipeableViews from "@/src/packages/react-swipeable-views/src";

// playstation
import StoreButtons from "@/src/components/StoreButtons";
import SocialButtons from "@/src/components/SocialButtons";

// nintendo
import swipeAnimation from "@/public/images/swipe-animation.gif";
import NintendoSlide from "@/src/components/slides/NintendoSlide";
import PlaystationSlide from "@/src/components/slides/PlaystationSlide";

const GGLogo = () => (
  <Image
    src={mainLogo}
    loading="lazy"
    alt={"good gaming digital store"}
    style={{ width: "100%", height: "auto", cursor: "pointer" }}
  />
);

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(1);

  const handleChangeIndex = (index: number) => {
    setCarouselIndex(index);
  };

  const buttonsStore = [
    {
      url: "/images/nintendo-switch-eshop.jpeg",
      title: "Nintendo eShop",
      width: "50%",
      onClick: () => setCarouselIndex(0),
    },
    {
      url: "/images/playstation-logo-buttons-blue.jpeg",
      title: "Playstation Store",
      width: "50%",
      onClick: () => setCarouselIndex(2),
    },
  ];

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => {
        const { key } = e;
        if (key === "ArrowRight") {
          carouselIndex === 0 && setCarouselIndex(1);
          carouselIndex === 1 && setCarouselIndex(2);
        }
        if (key === "ArrowLeft") {
          carouselIndex === 1 && setCarouselIndex(0);
          carouselIndex === 2 && setCarouselIndex(1);
        }
      }}
    >
      <Grid
        container
        columns={16}
        height={"20vh"}
        sx={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
        padding={4}
      >
        <Grid
          container
          direction="row"
          justifyContent={{
            lg: "flex-start",
            md: "flex-start",
            sm: "flex-start",
            xs: "center",
          }}
          alignItems="center"
          lg={3}
          md={3}
          sm={6}
          xs={12}
          onClick={() => setCarouselIndex(1)}
        >
          <GGLogo />
        </Grid>
        <Grid
          lg={9}
          md={9}
          sm={6}
          xs={12}
          container
          direction="row"
          justifyContent={{
            lg: "flex-end",
            md: "flex-end",
            sm: "flex-end",
            xs: "center",
          }}
          alignItems="center"
        >
          <SocialButtons />
        </Grid>
      </Grid>
      {[0, 2].includes(carouselIndex) && (
        <Image src={swipeAnimation} className="hideMe" alt="swipe slides" />
      )}
      <SwipeableViews
        index={carouselIndex}
        default
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        {/* Nintendo slide */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
          padding={0}
        >
          <NintendoSlide />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
          padding={0}
        >
           <Image
            alt="Good Gaming background"
            src="/images/home-bg.jpg"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              position: "fixed",
              width: "100vw",
              objectFit: "cover",
              height: "100vh",
              zIndex: "-1",
            }}
          />
          {/* Main slide */}
          <Grid
            container
            lg={5}
            xs={8}
            md={8}
            justifyContent="center"
            alignItems="center"
          >
            <span className="homeFont">Tarjetas digitales</span>
            <StoreButtons buttonsDefinition={buttonsStore} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
          padding={0}
        >
          <PlaystationSlide />
        </Grid>
      </SwipeableViews>
    </div>
  );
}
