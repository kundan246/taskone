import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container } from "@mui/material";
import { useSelector } from "react-redux";
import blankProfile from "../../imeges/blankProfile.jpg"

const ShowUserData = ({ setopenUpdateForm }) => {
  
const userData = useSelector((responce)=>responce.data.currentUser)

  const handleUpdate = () => {
    setopenUpdateForm(false);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Card sx={{}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="290"
            image={userData?.avatar ? userData?.avatar : blankProfile}
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
            <Box
            sx={{
              px:3,
              py: 2,
              backgroundColor:"green",
              borderRadius:"10px",
              ":hover": {
                bgcolor: "#AF5",
                color: "black"
              }
            }}
            onClick={handleUpdate}
            >
              EDIT
          </Box>              
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
