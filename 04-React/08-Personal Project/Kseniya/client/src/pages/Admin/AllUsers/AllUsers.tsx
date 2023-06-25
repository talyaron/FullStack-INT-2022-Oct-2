//React
import { useEffect, useState, FC } from "react";

//Mui
import { Button, Card, CardContent, Grid } from "@mui/material";

//Interfaces
import { IUserInfo } from "../../SignIn/ISignInInfo";

// Axios
import axios from "axios";

//CSS
import "./AllUsers.css";

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
            <Card className="cardContainer" sx={{ minWidth: 200 }}>
              <CardContent className="cardContent" sx={{ minHeight: 200 }}>
                <div id="mainInfo">User ID: {user._id}</div>
                <div className="info">{user.fullName}</div>
                <div className="info">{user.email}</div>
                <div className="info">{user.phoneNumber}</div>
                <div className="info">user type: {user.userType}</div>
                <div className="button">
                  <Button
                    variant="contained"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="button"
                  >
                    Delete User
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllUsers;
