type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;
import PageTransitions from "@/src/components/PageTransitions";
import NintendoSlide from "@/src/components/slides/NintendoSlide";
import { Grid } from "@mui/material";
import { forwardRef } from "react";

function NintendoPage(props: IndexPageProps, ref: IndexPageRef) {
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
        <NintendoSlide />
      </Grid>
    </PageTransitions>
  );
}

export default forwardRef(NintendoPage);
