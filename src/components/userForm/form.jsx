import { Box, Button, Grid, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../redux/action";

const Form = ({
  userDetail,
  setopenUpdateForm,
  openUpdateForm,
}) => {
  const [user, setUser] = useState({
    ...userDetail,
  });
  const ref = useRef(null);
  const Mydispatch = useDispatch();

  useEffect(() => {
    setUser({ ...userDetail });
  }, [userDetail]);

  const clearInputfield = () => {
    setUser({
      first_name: "",
      last_name: "",
      email: "",
      id: "",
      avatar: "",
    });
    ref.current.value = null;
    setopenUpdateForm(true);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (openUpdateForm) {
      const randomId = Math.floor(Math.random() * 100);
      Mydispatch(
        addUser({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          avatar: user.avatar,
          id: randomId,
        })
      );
      setopenUpdateForm(false);
    } else {
      Mydispatch(
        updateUser({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          avatar: user.avatar,
          id: user.id,
        })
      );
    }
    setopenUpdateForm(true);
    clearInputfield();
  };

  return (
    <Box
      component="form"
      validate="true"
      onSubmit={(e) => formSubmit(e)}
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            label="Fname"
            size="small"
            name="first_name"
            fullWidth
            value={user.first_name}
            id="fname"
            autoFocus
            required
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            id="Lname"
            value={user.last_name}
            label="Lname"
            size="small"
            fullWidth
            required
            name="last_name"
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="email"
            label="Email"
            required
            size="small"
            id="email"
            value={user.email}
            name="email"
            fullWidth
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="file">
            <input
              type="file"
              size="small"
              id="file"
              accept="image/*"
              name="avatar"
              ref={ref}
              label="file"
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: URL.createObjectURL(e.target.files[0]),
                }))
              }
            />
          </label>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          my: 2,
        }}
      >
        <Button
          type="button"
          color="error"
          variant="contained"
          sx={{ px: 2, py: 1 }}
          aria-label="Cancel"
          onClick={clearInputfield}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{ px: 2, py: 1 }}
          aria-label="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
export default Form;
