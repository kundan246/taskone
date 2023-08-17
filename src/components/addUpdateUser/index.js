import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  createTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import Form from "../userForm/form";

const AddUpdateUser = ({ openUpdateForm, setopenUpdateForm }) => {
  const userData = useSelector((responce) => responce.data.currentUser);
  const theme = createTheme();
  const userDetail = {
    first_name: "",
    last_name: "",
    email: "",
    id: "",
    avatar: "",
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        {openUpdateForm ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              borderRadius: 2,
              px: 4,
              py: 6,
            }}
          >
            <Typography component="h1" variant="h5">
              Add New User
            </Typography>
            <Form
              setopenUpdateForm={setopenUpdateForm}
              userDetail={userDetail}
              openUpdateForm={openUpdateForm}
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              borderRadius: 2,
              px: 4,
              py: 6,
            }}
          >
            <Typography component="h1" variant="h5">
              Update User
            </Typography>
            <Form
              userDetail={userData}
              setopenUpdateForm={setopenUpdateForm}
              openUpdateForm={openUpdateForm}
            />
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};
export default AddUpdateUser;
