import Image from 'next/image'
import Grid from '@mui/material/Grid';
import mainLogo from "../public/images/logo-horizontal-dswhite.png";

const GGLogo = () => (
  <Image
    src={mainLogo}
    loading="lazy"
    alt={"good gaming digital store"}
    style={{ width: "100%", height: "auto", cursor: "pointer" }}
  />
);

export default function Home() {
  return (
    <Grid
        container
        columns={16}
        height={"20vh"}
        sx={{ position: "absolute", top: 0, left: 0, zIndex: 100 }}
        padding={4}
      >
        <Grid item xs={8} md={4} lg={4}>
          <GGLogo />
        </Grid>
    </Grid>
  )
}
