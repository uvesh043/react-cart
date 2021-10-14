import React, { useState } from "react";
import "./signup.css";
import Countrys from "../Data/country";
import {
  Button,
  MenuItem,
  TextField,
  InputBase,
  makeStyles,
  Checkbox,
  InputLabel,
} from "@material-ui/core";
import { useHistory } from "react-router";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import PublicIcon from "@material-ui/icons/Public";
import { useSwitch } from "@mui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const useStyles = makeStyles({
  btn: {
    backgroundColor: "rgb(189, 156, 8)",
    "&:hover": {
      backgroundColor: "rgb(189, 156, 8)",
    },
  },
  textField: {
    border: "2px solid red",
  },
});

const Register = () => {
  const histroy = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirm_password: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (!checked) {
      console.log("Please accept policy");
    }
    const response = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone,
        country: user.country,
        password: user.password,
        confirm_password: user.confirm_password,
      }),
    });

    const data = await response.json();
    if (response.status === 422) {
      {
        toast.error(data.msg, { position: toast.POSITION.TOP_RIGHT });
        histroy.push("/signup");
      }
    } else {
      {
        toast.success(data.msg, { position: toast.POSITION.TOP_RIGHT });
        histroy.push("/");
      }
    }
  };

  const handleChecked = () => {
    if (checked == true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <div className="app">
      <div className="signup">
        <div className="formText">
          <h1 className="signup_text">Signup</h1>
        </div>
        <form className="form" method="POST" autoComplete="OFF">
          <div className="errorText">Please Enter all Field</div>
          <div className="inputField">
            <TextField
              id="outlined-basic"
              label="Enter Your Username"
              name="name"
              value={user.name}
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
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
              label="Enter Your Email"
              name="email"
              value={user.email}
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="inputField">
            {/* <InputLabel id="demo-simple-select-label">Country</InputLabel> */}
            <TextField
              className="selectTextField"
              placeholder="Select Country"
              select
              label="Select Country"
              value={user.country}
              onChange={(e) => handleChange(e)}
              variant="outlined"
              name="country"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PublicIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              // style={{ marginBottom: 10 }}
            >
              {Countrys.map((CountryElement, index) => {
                return (
                  <MenuItem key={index} value={CountryElement.name}>
                    {CountryElement.name}
                  </MenuItem>
                );
              })}
            </TextField>
          </div>
          <div className="inputField">
            <TextField
              id="outlined-basic"
              name="phone"
              value={user.phone}
              label="Enter Your Phone"
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PhoneIcon />
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
              name="password"
              value={user.password}
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
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
          <div className="inputField">
            <TextField
              id="outlined-basic"
              name="confirm_password"
              label="Enter Your Confirm Password"
              value={user.confirm_password}
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
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

          <div className="checkboxText">
            <Checkbox
              inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              onChange={() => {
                handleChecked();
              }}
              checked={checked}
              name="checkbox"
            />
            <span>
              I agree to the Terms and Conditions
              <span style={{ color: "yellow" }}> Pizza Corner</span>{" "}
            </span>
          </div>
          <div className="signupDiv">
            <Button
              type="submit"
              className={classes.btn}
              variant="contained"
              color="primary"
              size="large"
              onClick={submitForm}
            >
              Singup
              <i class="fas fa-arrow-right" style={{ marginLeft: 8 }}></i>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
