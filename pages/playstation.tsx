type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;
import PageTransitions from "@/src/components/PageTransitions";
import PlaystationSlide from "@/src/components/slides/PlaystationSlide";
import { Grid } from "@mui/material";
import { forwardRef } from "react";

function PlaystationPage(props: IndexPageProps, ref: IndexPageRef) {
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
        <PlaystationSlide />
      </Grid>
    </PageTransitions>
  );
}

export default forwardRef(PlaystationPage);
