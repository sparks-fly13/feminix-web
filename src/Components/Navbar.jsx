import { Box, ButtonBase, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import useColors, { ColorModeContext } from "../Hooks/theme";
import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, NotificationAddRounded } from "@mui/icons-material";

function Navbar() {
  const theme = useTheme();
  const colors = useColors();
  const colorMode = useContext(ColorModeContext);

  const handleNotificationClick = () => {
    alert("You clicked the notification button!");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*Notification Button with Icon*/}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="10px" p={1} alignItems="center">
        <ButtonBase type="button" onClick={handleNotificationClick}>
          <Typography color={colors.primary[100]}>Send An Alert/Notification</Typography>
          <NotificationAddRounded sx={{ color: colors.greenAccent[700], ml: 1 }} />
        </ButtonBase>
      </Box>
      {/*Color Mode Button with Icons*/}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>

        <IconButton>
          <NotificationsOutlined />
        </IconButton>

        <IconButton>
          <SettingsOutlined />
        </IconButton>
      </Box>
    </Box>
  )
};

export default Navbar;