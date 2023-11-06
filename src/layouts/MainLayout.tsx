import { Box } from "@mui/material";
import { useLocation, useNavigation } from "react-router-dom";
import MainHeader from "../components/layouts/MainHeader";
import MainLoadingScreen from "../components/MainLoadingScreen";

export default function MainLayout() {
  const location = useLocation();
  const navigation = useNavigation();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <MainHeader />
      {/* {navigation.state !== "idle" && <MainLoadingScreen />} */}
    </Box>
  );
}
