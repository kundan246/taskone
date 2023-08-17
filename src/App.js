import { useEffect, useState } from "react";
import "./App.css";
import TableData from "./components/tableData/tableData";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/action";
import ShowUserData from "./components/showUserDetails/showUserData";
import { Grid } from "@mui/material";
import AddUpdateUser from "./components/addUpdateUser";

function App() {
  const [openUpdateForm, setopenUpdateForm] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => dispatch(fetchUser(res.data)));
  }, [dispatch]);

  return (
    <div className="App">
      <TableData
        setopenUpdateForm={setopenUpdateForm}
      />
      <Grid container spacing={2} sx={{ my: 3 }}>
        <Grid item xs={12} sm={6}>
          <ShowUserData
            setopenUpdateForm={setopenUpdateForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AddUpdateUser
            openUpdateForm={openUpdateForm}
            setopenUpdateForm={setopenUpdateForm}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
