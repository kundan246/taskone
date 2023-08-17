import { useEffect, useState } from "react";
import "./App.css";
import TableData from "./components/tableData/tableData";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/action";
import AddUser from "./components/adduser/addUserForm";
import ShowUserData from "./components/showUserDetails/showUserData";
import {  Grid } from "@mui/material";
import UpdateUser from "./components/updateUser/updateUserForm";



function App() {
  const [showprofile, setShowProfile] = useState(null);
  const [editUser, setEditUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    id: "",
    avatar: null,
  });
  const [open_update_form, setOpen_update_form] = useState(true);
  const Mydispatch = useDispatch();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => Mydispatch(fetchUser(res.data)));
  }, [Mydispatch]);

  

  return (
    <div className="App">
       <TableData setShowProfile={setShowProfile} />
      <Grid container spacing={2} sx={{my:3}}>
        <Grid item xs={12} sm={6}>
        <ShowUserData
          data={showprofile}
          setOpen_update_form={setOpen_update_form}
          setEditUser={setEditUser}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        {open_update_form ? (
          <AddUser 
          setOpen_update_form={setOpen_update_form} 
          />
        ) : (
          <UpdateUser
            setOpen_update_form={setOpen_update_form}
            editUser={editUser}
            setEditUser={setEditUser}
            setShowProfile={setShowProfile}
          />
        )}
        </Grid>
        </Grid>
    </div>
  );
}

export default App;
