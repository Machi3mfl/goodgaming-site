import * as React from "react";
import {
  AppBar,
  Breakpoint,
  Container,
  Grid,
  Theme,
  Toolbar,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import mainLogo from "@/public/images/logo-horizontal-dswhite.png";
import SocialButtons from "../../SocialButtons";

const GGLogo = () => (
  <Image
    src={mainLogo}
    loading="lazy"
    alt={"good gaming digital store"}
    style={{ height: "9vh", width: "auto", cursor: "pointer" }}
  />
);

import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "./Menu";

type BreakpointOrNull = Breakpoint | null;

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
function useWidth() {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

export default function Header() {
  const width = useWidth();

  const LogoColumn = () => (
    <Grid
      item
      lg={3}
      md={3}
      sm={6}
      xs={8}
      display="flex"
      justifyContent="flex-start"
    >
      <GGLogo />
    </Grid>
  );

  const MenuColumn = () => (
    <Grid
      item
      lg={6}
      md={6}
      sm={12}
      xs={12}
      display="flex"
      justifyContent="center"
      paddingTop={{
        sm: 0,
        xs: 0,
      }}
    >
      <Menu />
    </Grid>
  );

  const SocialsColumn = () => (
    <Grid
      item
      lg={3}
      md={3}
      sm={6}
      xs={4}
      display="flex"
      justifyContent="flex-end"
    >
      <SocialButtons />
    </Grid>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        justifyContent: "center",
        background:
          "linear-gradient(to bottom,  rgba(0,0,0,0.4) 0%,rgba(255,255,255,0) 100%)",
        boxShadow: "none",
        padding: "1vh",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <Grid container spacing={3} alignItems="center">
            {["xs", "sm"].includes(width) ? (
              <>
                <LogoColumn />
                <SocialsColumn />
                <MenuColumn />
              </>
            ) : (
              <>
                <LogoColumn />
                <MenuColumn />
                <SocialsColumn />
              </>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
