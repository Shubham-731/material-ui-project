import React from "react";

import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Checkbox,
} from "@mui/material";
import { MoreVert, Share, Favorite, FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <Card sx={{ marginBottom: "5px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        image="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg"
        alt="Paella dish"
        sx={{ maxHeight: "400px", height: "100%" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
