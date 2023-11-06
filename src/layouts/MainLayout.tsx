import { Box } from "@mui/material";
import { useLocation, useNavigation } from "react-router-dom";

import MainLoadingScreen from "../components/MainLoadingScreen";
import { MAIN_PATH } from "../constant";
import { Footer, MainHeader } from "../components/layouts";
import DetailModalProvider from "../providers/DetailModalProvider";
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
      {navigation.state !== "idle" && <MainLoadingScreen />}
      <DetailModalProvider>
        
      </DetailModalProvider>
      {location.pathname !== `/${MAIN_PATH.watch}` && <Footer />}
    </Box>
  );
}
