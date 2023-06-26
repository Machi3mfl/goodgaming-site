
type IndexPageProps = {
	feedbacks: IFeedbackClean[];
}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>
import PageTransitions from '@/src/components/PageTransitions'
import Slideshow from '@/src/components/Slideshow'
import StoreButtons from '@/src/components/StoreButtons'
import { Grid, Typography } from '@mui/material'
import { Link as MuiLink } from '@mui/material';
import { forwardRef } from 'react'
import Image from 'next/image'

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
	const { feedbacks } = props;

	const buttonsStore = [
		{
		  url: "/images/nintendo-switch-eshop.jpeg",
		  title: "Nintendo eShop",
		  width: "50%",
		  onClick: () => {

		  },
		},
		{
		  url: "/images/playstation-logo-buttons-blue.jpeg",
		  title: "Playstation Store",
		  width: "50%",
		  onClick: () => {},
		},
	  ];

	return (
		<PageTransitions ref={ref}>
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
            paddingTop={{
              lg: "15vh",
              md: "15vh",
              sm: "25vh",
              xs: "25vh",
            }}
            paddingBottom={3}
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
                <MuiLink
                  href="https://www.mercadolibre.com.ar/perfil/GOODGAMING.DIGITALSTORE"
                  underline="hover"
                  color="white"
                  target="_blank"
                >
                  100% calificaciones positivas en Mercadolibre
                </MuiLink>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {feedbacks.length && <Slideshow items={feedbacks} />}
            </Grid>
          </Grid>
        </Grid>
		</PageTransitions>
	)
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
	  "https://www.mercadolibre.com.ar/perfil/api/feedback/askForFeedback?userIdentifier=nickname%3DGOODGAMING.DIGITALSTORE&rating=all&limit=70&offset=0&role=seller";
  
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
  

export default forwardRef(IndexPage)