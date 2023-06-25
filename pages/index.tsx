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
import Slideshow from "@/src/components/Slideshow";
import { Link, Typography } from "@mui/material";

const GGLogo = () => (
  <Image
    src={mainLogo}
    loading="lazy"
    alt={"good gaming digital store"}
    style={{ width: "100%", height: "auto", cursor: "pointer" }}
  />
);

interface Props {
  feedbacks: IFeedbackClean[];
}

export default function Home(props: Props) {
  const { feedbacks } = props;
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
        sx={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
        padding={2}
      >
        <Grid
          container
          direction="row"
          justifyContent={{
            lg: "flex-start",
            md: "flex-start",
            sm: "center",
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
            sm: "center",
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
        {/* Main slide */}
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
          <Grid
            container
            direction="row"
            lg={6}
            xs={10}
            md={8}
            justifyContent="center"
            alignItems="center"
            rowSpacing={0}
            textAlign="center"
            spacing={1}
            height={"70vh"}
            paddingTop={{
              sm: "10vh",
              xs: "10vh",
            }}
          >
            <Grid
              item
              columns={{
                lg: 12,
                md: 12,
                sm: 11,
                xs: 11,
              }}
            >
              <span className="homeFont">Tarjetas digitales</span>
            </Grid>
            <Grid item xs={12}>
              <StoreButtons buttonsDefinition={buttonsStore} />
            </Grid>
            <Grid item xs={12}>
              <span className="homeFont" style={{ marginBottom: 0 }}>
                Nuestros clientes
              </span>
              <Typography fontWeight="light" variant="subtitle1">
                <Link
                  href="https://www.mercadolibre.com.ar/perfil/GOODGAMING.DIGITALSTORE"
                  underline="hover"
                  color="white"
                  target="_blank"
                >
                  100% calificaciones positivas en Mercadolibre
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {feedbacks.length && <Slideshow items={feedbacks} />}
            </Grid>
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

interface IFeedback {
  rating_name: "Buena" | "Regular" | "Mala";
  message: "Excelente";
  user: {
    nickname: string;
  };
  date: string;
}

export interface IFeedbackClean {
  rating: "Buena" | "Regular" | "Mala";
  user: string;
  message: string;
  date: string;
}

export const getStaticProps = async () => {
  const FEEDBACK_URL =
    "https://www.mercadolibre.com.ar/perfil/api/feedback/askForFeedback?userIdentifier=nickname%3DGOODGAMING.DIGITALSTORE&rating=all&limit=50&offset=0&role=seller";

  const response = await fetch(FEEDBACK_URL);

  if (!response.ok) {
    return {
      props: {
        error: {
          statusCode: response.status,
          message: response.statusText,
        },
      },
    };
  }

  const data = await response.json();

  const feedbacks = data.feedbacks.map((feedback: IFeedback) => {
    return {
      user: feedback.user.nickname,
      rating: feedback.rating_name,
      message: feedback.message,
      date: feedback.date,
    };
  });

  // filter feedback with message longitud greater than 4 and not repeated users
  const filteredFeedbacks = feedbacks
    .filter((feedback: IFeedback) => {
      return (
        feedback.message &&
        feedback.message.length > 4 &&
        feedback.message.length < 80
      );
    })
    .filter((feedback: IFeedback, index: number, self: IFeedback[]) => {
      return (
        index === self.findIndex((t: IFeedback) => t.user === feedback.user)
      );
    });

  // order by date
  const feedbacksOrderded = filteredFeedbacks.sort(
    (a: IFeedback, b: IFeedback) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  );
  return {
    props: {
      feedbacks: feedbacksOrderded,
    },
  };
};
