import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

interface User {
  first_name: string;
  avatar: string;
  employment: {
    title: string;
    key_skill: string;
  };
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://random-data-api.com/api/v2/users?size=9"
      );
      const data: User[] = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const handleOnclick = () => {
    alert('Why did you push it?')
  }

  return (
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 1000,
        position: 'absolute'
      }}>
      {users.map((user) => (
          <Card
            sx={{
              width: 250,
              margin: 5,
            }}
          >
            <CardMedia
              sx={{ 
                height: 140,
                width: 250
              }}
              image={user.avatar}
              title="avatar"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.first_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.employment.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleOnclick}>Don't push it!</Button>
            </CardActions>
          </Card>
      ))}
      </Box>
  );
}

export default Users;
