import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";

const ShowUserData = ({ setOpen_update_form, setEditUser }) => {
  const emptyProfile_url =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  
const userData = useSelector((responce)=>responce.data.currentUser)

  const handleUpdate = () => {
    setOpen_update_form(false);
    setEditUser({
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      id: userData.id,
      avatar: userData.avatar,
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Card sx={{}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="290"
            image={userData?.avatar ? userData?.avatar : emptyProfile_url}
            alt={userData?.first_name ? userData?.first_name : "profile_pic"}
            loading="lazy"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "coloum",
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: "gray",
              color: "white",
              font: "bold",
            }}
          >
            <CardContent sx={{ height: 85 }}>
              <Typography gutterBottom variant="h5" component="div">
                {userData?.first_name} {userData?.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userData?.email ? userData?.email : "User not selected"}
              </Typography>
            </CardContent>
            {userData.id ? (
              <EditIcon
                sx={{
                  ":hover": {
                    color: "green",
                    transform: "scale(1.5)",
                    cursor: "pointer",
                  },
                }}
                aria-label="Edit"
                onClick={handleUpdate}
              />
            ) : (
              ""
            )}
          </Box>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default React.memo(ShowUserData);
