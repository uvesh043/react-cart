import Raect, { useState } from "react";
import {
  Button,
  TextField,
  InputBase,
  makeStyles,
  Checkbox,
} from "@material-ui/core";
import { useHistory } from "react-router";
import "./loginup.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();
const useStyles = makeStyles({
  btn: {
    backgroundColor: "rgb(189, 156, 8)",
    "&:hover": {
      backgroundColor: "rgb(189, 156, 8)",
    },
  },
});

const Login = () => {
  const histroy = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: value });
  };
  const submitForm = async (e) => {
    e.preventDefault();  
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      }),
    });

          const data = await response.json();
          console.log("This is data",data);
               setMsg(data.msg)
              console.log(response.status);
        if (response.status === 422) {
          {
            toast.error(data.msg, { position: toast.POSITION.TOP_RIGHT });
            histroy.push("/login");
          }
        } else {
          {
            toast.success(data.msg, { position: toast.POSITION.TOP_RIGHT });
            histroy.push("/");
          }
        }
  };
 const classes = useStyles();
  return (
    <div className="app">
      <div className="loginForm">
        <div className="loginFormText">
          <h1 className="loginHeading">LoginUp</h1>
        </div>
        <form method="POST">
          {msg && (
            <div className="errorText">
              <span>Please Enter all Field</span>
            </div>
          )}
          <div className="inputField">
            <TextField
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
              value={user.email}
              autoComplete="off"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="inputField">
            <TextField
              id="outlined-basic"
              label="Enter Your Password"
              variant="outlined"
              value={user.password}
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
              autoComplete="off"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <i class="fas fa-key"></i>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="loginBtn">
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              type="submit"
              onClick={submitForm}
            >
              Login
              <i class="fas fa-arrow-right" style={{ marginLeft: 8 }}></i>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
