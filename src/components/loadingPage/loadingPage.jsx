import { Box, CircularProgress } from "@mui/material";

const LoadingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        width:"100vw",
        height:"100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
export default LoadingPage;
