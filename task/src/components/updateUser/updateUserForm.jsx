import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  createTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/action";
import Form from "../userForm/form";

const UpdateUser = ({
  setOpen_update_form,
  editUser,
  setEditUser,
  setShowProfile,
}) => {
  const Mydispatch = useDispatch();

  const theme = createTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !editUser.first_name ||
      !editUser.last_name ||
      !editUser.email
    ) {
      return;
    } else {
      Mydispatch(
        updateUser({
          first_name: editUser.first_name,
          last_name: editUser.last_name,
          email: editUser.email,
          avatar: editUser.avatar,
          id: editUser.id,
        })
      );
    }
    setOpen_update_form(true);
    setShowProfile(null);
  };
  function inputField_clear() {
    setEditUser({
      first_name: "",
      last_name: "",
      email: "",
      id: "",
      avatar: null,
    });
    // setEditUser((editUser.first_name = ""));
    // setEditUser((editUser.last_name = ""));
    // setEditUser((editUser.email = ""));
    // setEditUser((editUser.avatar = null));
    // setEditUser((editUser.id = ""));
    // setOpen_update_form(true);
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
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
          state={editUser}
          setState={setEditUser}
          handleSubmit={handleSubmit}
          clearInputfield={inputField_clear}
          setOpen_update_form={setOpen_update_form}/>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default UpdateUser;
