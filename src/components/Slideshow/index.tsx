// add a array with colors without repeating the colors
const colors = [
  /*
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
  */
  "#CF0580",
  "#1708C5",
  "#49ABC7",
  "#FF0000",
];

const delay = 5000;
import { IFeedbackClean } from "@/pages";
import { Avatar, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";

interface ISlideshowProps {
  items: IFeedbackClean[];
}

function Slideshow(props: ISlideshowProps) {
  const { items } = props;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const [itemsToShow, setItemsToShow] = React.useState<IFeedbackClean[]>(items);

  // show only 6 items per time in the slideshow
  // when the 6 items are shown, the slideshow will start again and show the next 6 items
  // when all the items are shown, the slideshow will start again and show the first 6 items
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    const timeoutId = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    timeoutRef.current = timeoutId;

    return () => {
      resetTimeout();
    };
  }, [index]);

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name[0].toUpperCase()}${name[5].toUpperCase()}`,
    };
  }

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {itemsToShow.map((item, index) => (
          <div className="slide" key={index}>
            <Paper
              sx={{
                p: 3,
                margin: "auto",
                backgroundColor: colors[index % colors.length],
                height: "9rem",
                color: "white",
                backgroundImage: `url(/images/opinions-background-3.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                justifyItems="center"
              >
                <Grid item xs={12} display="flex" justifyContent="center" mb={1}>
                  <Avatar {...stringAvatar(item.user)} sizes="lg"/>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography
                    variant="subtitle2"
                    style={{
                      textShadow:
                        "1px 1px 1px gray, 0 0 35px gray, 0 0 5px gray",
                    }}
                  >
                    {item.user}
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{
                      textShadow:
                        "1px 1px 1px gray, 0 0 35px gray, 0 0 5px gray",
                    }}

                    fontSize={{
                      lg: "1.4rem",
                      md: "1.4rem",
                      sm: "1rem",
                      xs: "1rem",
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
                <Grid
                  item
                  xs={12}
                  textAlign="center"
                  style={{
                    textShadow: "1px 1px 1px gray, 0 0 35px gray, 0 0 5px gray",
                  }}
                >
                  <Typography variant="body2">{item.date}</Typography>
                </Grid>
                
              </Grid>
            </Paper>
          </div>
        ))}
      </div>

      {/*<div className="slideshowDots">
        {itemsToShow.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>*/}
    </div>
  );
}

export default Slideshow;
