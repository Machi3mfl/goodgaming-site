import * as React from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Toolbar,
  styled,
} from "@mui/material";
import { BsNintendoSwitch, BsPlaystation } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import mainLogo from "@/public/images/logo-horizontal-dswhite.png";
import SocialButtons from "../SocialButtons";
import { useRouter } from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
}));


const GGLogo = () => (
  <Image
    src={mainLogo}
    loading="lazy"
    alt={"good gaming digital store"}
    style={{ height: "9vh", width: "auto", cursor: "pointer" }}
  />
);

const getIconStyle = (isActive: boolean) => ({
  fill: "white",
  size: isActive ? 40 : 30,
});

const menuItems = [
  {
    label: "Nintendo",
    route: "/nintendo",
    icon: (isActive: boolean) => {
      return <BsNintendoSwitch {...getIconStyle(isActive)} />;
    },
  },
  {
    label: "Home",
    route: "/",
    icon: (isActive: boolean) => {
      return <AiOutlineHome {...getIconStyle(isActive)} />;
    },
  },
  {
    label: "Playstation",
    route: "/playstation",
    icon: (isActive: boolean) => {
      return <BsPlaystation {...getIconStyle(isActive)} />;
    },
  },
];

export default function HeaderMenu() {
  const router = useRouter();

  const isCurrentRoute = (route: string) => {
    return router.pathname === route;
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        justifyContent: "center",
        background:
          "linear-gradient(to bottom,  rgba(0,0,0,0.4) 0%,rgba(255,255,255,0) 100%)",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <Grid container spacing={3} alignItems="center">
            <Grid
              item
              lg={3}
              xs={12}
              display="flex"
              justifyContent={{
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                xs: "center",
              }}
            >
              <GGLogo />
            </Grid>
            <Grid item lg={6} display="flex" xs={12} justifyContent="center">
              <Stack
                direction="row"
                spacing={4}
                display="flex"
                justifyContent="center"
              >
                {menuItems.map((item, index) => (
                  /*<ScaleComponent key={index}>*/
                  <Link href={item.route} key={index}>
                    {item.icon(isCurrentRoute(item.route))}
                  </Link>
                  /*</ScaleComponent>*/
                ))}
              </Stack>
            </Grid>
            <Grid
              item
              lg={3}
              xs={12}
              display="flex"
              justifyContent={{
                lg: "flex-end",
                md: "flex-end",
                sm: "center",
                xs: "center",
              }}
            >
              <SocialButtons />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
