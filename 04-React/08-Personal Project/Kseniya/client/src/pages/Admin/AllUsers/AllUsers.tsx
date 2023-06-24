//React
import { useEffect, useState, FC } from "react";

//Mui
import { Button, Card, CardContent, Grid } from "@mui/material";

//Interfaces
import { IUserInfo } from "../../SignIn/ISignInInfo";

// Axios
import axios from "axios";

//CSS

const AllUsers: FC = () => {
  const [allUsers, setAllUsers] = useState<IUserInfo[]>([] as IUserInfo[]);

  const deleteUser = (_id: string) => {
    axios
      .delete(`http://localhost:3000/user/delete/${_id}`)
      .then(({ data }) => {
        setAllUsers(data);
        console.log(data);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/user/getAll").then(({ data }) => {
      setAllUsers(data);
    });
  }, [allUsers]);

  return (
    <div id="wrapper">
      <div id="header">All The Users:</div>
      <Grid container columns={15} spacing={2}>
        {allUsers.map((user, index) => (
          <Grid key={index} item xs={3}>
            <Card className="cardContainer" sx={{ minWidth: 200}}>
              <CardContent className="cardContent" sx={{minHeight: 200,}}>
               <div>User {user._id}</div>
               <div>{user.fullName}</div>
               <div>{user.email}</div>
               <div>{user.phoneNumber}</div>
               <div>{user.userType}</div>
               <Button variant="contained" onClick={() => {deleteUser(user._id)}}>Delete User</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllUsers;
