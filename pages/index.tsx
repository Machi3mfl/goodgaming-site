import Image from "next/image";
import Grid from "@mui/material/Grid";
import mainLogo from "../public/images/logo-horizontal-dswhite.png";
import { useState } from "react";
import SwipeableViews from "../src/packages/react-swipeable-views/src";
import { Stack } from "@mui/material";

// nintendo images
import marioJump from "../public/images/mario-super-jump-loop.gif";
import marioBrick from "../public/images/super-mario-brick.png";

// playstation
import playstationLogo from "../public/images/logos/pstore-logo.png";
import StoreButtons from "@/src/components/StoreButtons";
import SocialButtons from "@/src/components/SocialButtons";

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
        sx={{ position: "absolute", top: 0, left: 0, zIndex: 100 }}
        padding={4}
      >
        <Grid item xs={8} md={4} lg={4} onClick={() => setCarouselIndex(1)}>
          <GGLogo />
        </Grid>
        <Grid
          item
          xs={6}
          md={9}
          lg={9}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <SocialButtons />
        </Grid>
      </Grid>
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
          <VideoLoopComponent videoUrl="/videos/nintendoeshop-loop.mp4" />
          <Stack justifyContent="center" alignItems="center">
            <Image
              alt="super mario jump"
              src={marioJump}
              width={220}
              height={263}
              style={{ zIndex: 9999 }}
            />
            <Image
              alt="super mario brick"
              src={marioBrick}
              width={350}
              height={75}
              style={{
                zIndex: 9999,
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
                zIndex: 9999,
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
          <VideoLoopComponent videoUrl="/videos/scifi-blocks-loop.mp4" />
          {/* Main slide */}
          {carouselIndex === 1 && (
            <Grid container lg={5} xs={8} md={8} justifyContent="center" alignItems="center">
                <h1
                  style={{
                    zIndex: 9999,
                    fontFamily: "Sofia Sans Extra Condensed",
                    textTransform: "uppercase",
                    margin: 0,
                    color: "white",
                  }}
                >
                  Nuestras tarjetas digitales
                </h1>
              <StoreButtons buttonsDefinition={buttonsStore} />
            </Grid>
          )}
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="end"
          height={"100vh"}
          padding={0}
        >
          <VideoLoopComponent videoUrl="/videos/playstation-lights-loop.mp4" />
          {/* Playstation slide */}
          <Stack justifyContent="center" alignItems="center">
            <Image
              alt="Playstation store logo"
              src={playstationLogo}
              width={65}
              height={80}
              style={{
                zIndex: 9999,
                animation: "flickerImg 1.5s infinite alternate",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={redirectToStorePlaystation}
            />
            <span
              style={{
                zIndex: 9999,
                animation: "flicker 1.5s infinite alternate",
                fontFamily: "Play",
                color: "white",
                fontSize: "2.3rem",
                marginBottom: "4rem",
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
