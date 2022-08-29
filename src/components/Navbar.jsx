import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  LogoDev,
  Mail,
  Notifications,
  AccountCircle,
  Person,
  Settings,
  Logout,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 16px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  // display: "none",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  /* [theme.breakpoints.up("sm")]: {
    display: "flex",
  }, */
}));

/* const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
})); */

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO
        </Typography>

        <LogoDev sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Icons>
          <Badge
            badgeContent={2}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={3}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600"
            sx={{
              height: 30,
              width: 30,
            }}
          />
        </Icons>

        {/* <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600"
            sx={{
              height: 30,
              width: 30,
            }}
          />
          <Typography variant="span">User</Typography>
        </UserBox> */}
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={(e) => setOpen(false)} sx={{ gap: "10px" }}>
          <Person />
          <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={(e) => setOpen(false)} sx={{ gap: "10px" }}>
          <AccountCircle />
          <Typography>Account</Typography>
        </MenuItem>
        <MenuItem onClick={(e) => setOpen(false)} sx={{ gap: "10px" }}>
          <Settings />
          <Typography>Settings</Typography>
        </MenuItem>
        <MenuItem onClick={(e) => setOpen(false)} sx={{ gap: "10px" }}>
          <Logout />
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
