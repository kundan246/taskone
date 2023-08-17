import { Box, Button, Grid, TextField } from "@mui/material";

const Form = ({ state, setState, handleSubmit,setOpen_update_form}) => {
  const clearInputfield = () => {
    setState((prev) => ({
      ...prev,
      first_name: "",
      last_name: "",
      email: "",
      id: "",
      avatar: null,
    }));
    setOpen_update_form(true)
  };

  return (
    <Box
      component="form"
      validate="true"
      onSubmit={handleSubmit}
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
            value={state.first_name}
            id="fname"
            autoFocus
            required
            onChange={(e) =>
              setState((prev) => ({
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
            value={state.last_name}
            label="Lname"
            size="small"
            fullWidth
            required
            name="last_name"
            onChange={(e) =>
              setState((prev) => ({
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
            value={state.email}
            name="email"
            fullWidth
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
         
        </Grid>
        <Grid item xs={12}>
         
          <TextField
            type="file"
            size="small"
            id="file"
            name="avatar"
            fullWidth
            label="file"
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                [e.target.name]: URL.createObjectURL(e.target.files[0]),
              }))
            }
          />
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
          onClick={() => clearInputfield()}
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
