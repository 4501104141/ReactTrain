import { Box } from "@mui/material";
import { useLocation, useNavigation } from "react-router-dom";

import { Footer, MainHeader } from "../components/layouts";
import MainLoadingScreen from "../components/MainLoadingScreen";
import { MAIN_PATH } from "../constant";
import DetailModalProvider from "../providers/DetailModalProvider";
import DetailModal from "../components/DetailModel";
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
        <DetailModal />
      </DetailModalProvider>
      {location.pathname !== `/${MAIN_PATH.watch}` && <Footer />}
    </Box>
  );
}
