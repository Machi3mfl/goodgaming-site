import Image from "next/image";
import Grid from "@mui/material/Grid";
import mainLogo from "../public/images/logo-horizontal-dswhite.png";
import { useState } from "react";
import SwipeableViews from "../src/packages/react-swipeable-views/src";
import { Stack } from "@mui/material";

// nintendo images
import marioJump from "../public/images/mario-super-jump-loop.gif";
import marioBrick from "../public/images/super-mario-brick.png";
import nintendoBackground from '../public/videos/nintendo-eshop-background.gif';

// playstation
import StoreButtons from "@/src/components/StoreButtons";
import SocialButtons from "@/src/components/SocialButtons";
import playstationBackground from "../public/videos/psn-store-loop.gif";

import swipeAnimation from "../public/images/swipe-animation.gif";

const GGLogo = () => (
  <Image
    src={mainLogo}
    loading="lazy"
    alt={"good gaming digital store"}
    style={{ width: "100%", height: "auto", cursor: "pointer" }}
  />
);

const VideoLoopComponent = (props: {
  videoUrl: string;
  posterUrl?: string;
}) => {
  const { videoUrl } = props;
  const isProd = process.env.NODE_ENV === "production";
  const pathPrefix = isProd ? "/goodgaming-site" : "";
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: "fixed",
        width: "100vw",
        objectFit: "cover",
        height: "100vh",
        zIndex: "-1",
      }}
    >
      <source src={`${pathPrefix}${videoUrl}`} type="video/mp4" />
    </video>
  );
};

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(1);

  const handleChangeIndex = (index: number) => {
    setCarouselIndex(index);
  };

  const redirectToStoreNintendo = () => {
    window.open(
      "https://goodgaming.mercadoshops.com.ar/listado/consolas-videojuegos/accesorios-consolas/nintendo_OrderId_PRICE_NoIndex_True",
      "_blank"
    );
  };

  const redirectToStorePlaystation = () => {
    window.open(
      "https://goodgaming.mercadoshops.com.ar/listado/consolas-videojuegos/accesorios-consolas/playstation_OrderId_PRICE_NoIndex_True",
      "_blank"
    );
  };

  const buttonsStore = [
    {
      url: "/images/nintendo-switch-eshop.jpg",
      title: "Nintendo eShop",
      width: "50%",
      onClick: () => setCarouselIndex(0),
    },
    {
      url: "/images/playstation-logo-buttons-blue.jpg",
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
        <Image
          src={swipeAnimation}
          className="hideMe"
          style={{
            position: "absolute",
            bottom: "1rem",
            right: 0,
            left: 0,
            margin: "auto",
            zIndex: 1,
            height: "25vh",
            width: "auto",
          }}
          alt="swipe slides"
        />
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
          <Image
            alt="Nintendo eshop background"
            src={nintendoBackground}
            width={65}
            height={80}
            style={{
              position: "fixed",
              width: "100vw",
              objectFit: "cover",
              height: "100vh",
              zIndex: "-1",
            }}
          />
          <Stack justifyContent="center" alignItems="center">
            <Image
              alt="super mario jump"
              src={marioJump}
              width={220}
              height={263}
            />
            <Image
              alt="super mario brick"
              src={marioBrick}
              width={350}
              height={75}
              style={{
                position: "relative",
                bottom: "3px",
                animation: "MoveUpDown 0.5s linear infinite",
                cursor: "pointer",
              }}
              onClick={redirectToStoreNintendo}
            />
            <h3
              style={{
                position: "relative",
                bottom: "75px",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
                color: "white",
                cursor: "pointer",
                fontFamily: "Press Start 2P",
                animation: "MoveUpDown 0.5s linear infinite",
              }}
              onClick={redirectToStoreNintendo}
            >
              {">> Comprar aqui <<"}
            </h3>
          </Stack>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
          padding={0}
        >
          {/*<Image
            alt="Good gaming background"
            src={homeBackground}
            width={65}
            height={80}
            style={{
              position: "fixed",
              width: "100vw",
              objectFit: "cover",
              height: "100vh",
              zIndex: "-1",
            }}
          /> */}
          <VideoLoopComponent videoUrl="/videos/scifi-blocks-loop.mp4" />
          {/* Main slide */}
          {carouselIndex === 1 && (
            <Grid
              container
              lg={5}
              xs={8}
              md={8}
              justifyContent="center"
              alignItems="center"
            >
              <h1
                style={{
                  fontFamily: "Sofia Sans Extra Condensed",
                  textTransform: "uppercase",
                  margin: 0,
                  color: "white",
                  fontSize: "2.5rem",
                }}
              >
                Tarjetas digitales
              </h1>
              <StoreButtons buttonsDefinition={buttonsStore} />
            </Grid>
          )}
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
            alt="Playstation store background"
            src={playstationBackground}
            width={65}
            height={80}
            style={{
              position: "fixed",
              width: "100vw",
              objectFit: "cover",
              height: "100vh",
              zIndex: "-1",
            }}
          />

          {/* Playstation slide */}
          <Stack justifyContent="center" alignItems="center">
            <span
              style={{
                animation: "flicker 1.5s infinite alternate",
                fontFamily: "Play",
                color: "white",
                fontSize: "2.3rem",
                marginTop: "15rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
              onClick={redirectToStorePlaystation}
            >
              {"Comprar aquí"}
            </span>
          </Stack>
        </Grid>
      </SwipeableViews>
    </div>
  );
}
