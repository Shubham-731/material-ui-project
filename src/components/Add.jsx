import React, { useState } from "react";

import {
  Tooltip,
  Fab,
  Zoom,
  styled,
  Modal,
  Box,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import {
  Add as AddIcon,
  EmojiEmotions,
  Image,
  VideoCameraBack,
  PersonAdd,
} from "@mui/icons-material";

const Add = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: "10px",
  });

  return (
    <>
      <Tooltip
        title="Add Post"
        arrow
        TransitionComponent={Zoom}
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={290}
          bgcolor="background.default"
          color="text.primary"
          px={3}
          py={1}
          borderRadius={5}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/5.jpg"
              alt="Me"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500}>
              Owner
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={4}
            fullWidth
            placeholder="Write your post here..."
            variant="standard"
          />
          <Stack gap={1} direction="row" mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <Button variant="contained" fullWidth>
            Post
          </Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
