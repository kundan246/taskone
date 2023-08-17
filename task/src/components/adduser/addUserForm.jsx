import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action";
import Form from "../userForm/form";

const AddUser = ({setOpen_update_form}) => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    id: "",
    avatar: null,
  });

  const Mydispatch = useDispatch();

  const theme = createTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = Math.floor(Math.random()*100);
    if (
      !newUser.first_name &&
      !newUser.last_name &&
      !newUser.email &&
      !newUser.avatar 
    ) {
      return;
    } else {
      Mydispatch(
        addUser({
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          email: newUser.email,
          avatar: newUser.avatar,
          id: randomId,
        })
      );
      inputField_clear();
      setOpen_update_form(true)
    }
  };
  function inputField_clear() {
    setNewUser((prev) => ({
      ...prev,
      first_name: "",
      last_name: "",
      email: "",
      id: "",
      avatar: null,
    }));
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
            Add New User
          </Typography>
          <Form
            state={newUser}
            setState={setNewUser}
            handleSubmit={handleSubmit}
            setOpen_update_form={setOpen_update_form}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default memo(AddUser);
