// add a array with colors without repeating the colors
const colors = [
  "#0088FE",
  "#00C49F",
  "#FF8042",
  "#FF0000",
  "#FF00FF",
  "#00FFFF",
  "#0000FF",
  "#008000",
  "#800080",
  "#008080",
  "#000080",
  "#A52A2A",
  "#800080",
  "#FF00FF",
  "#CF0580",
  "#1708C5",
  "#49ABC7",
  "#FF0000",
];

const delay = 5000;
import { Avatar, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import RandomAvatarImg from "../random-avatar";
import { IFeedbackClean } from "@/pages";

interface ISlideshowProps {
  items: IFeedbackClean[];
}

function Slideshow(props: ISlideshowProps) {
  const { items } = props;
  const [itemsToShow, setItemsToShow] = React.useState<IFeedbackClean[]>(items);

  return (
    <div className="slider">
      <div className="slide-track" style={{
        animation: "scroll 40s linear infinite",
        display: "flex",
        width: `calc(380px * ${itemsToShow.length})`,
        height: "100%"
      }}>
        {itemsToShow.map((item, index) => (
          <div className="slide" key={index}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              justifyItems="center"
              height={"100%"}
              p={2}
              sx={{
                backgroundColor: "#250171",
              }}
            >
              <Grid item xs={12} display="flex" justifyContent="center" mb={1}>
                <RandomAvatarImg username={item.user} width={40} height={40}/>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Typography variant="caption" fontWeight="light">
                  {item.user}
                </Typography>
              </Grid>
              <Grid item xs={12} textAlign="center" zeroMinWidth>
                <Typography
                  variant="subtitle1"
                  style={{
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    lineHeight: "1.2rem",
                  }}
                >
                  {'"' + item.message + '"'}
                </Typography>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Rating
                  name="read-only"
                  value={5}
                  readOnly
                  style={{ width: "auto" }}
                  size="large"
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Typography variant="caption" fontWeight="light">
                  {item.date}
                </Typography>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
