import React, { useState, useCallback } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Card,
  CardActions,
} from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  companyOptions,
  branchOptions,
  languageOptions,
} from "../../Static/selectOptions";
import { Typography, Grid } from "@mui/material";
import ReactSelect, { components } from "react-select";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { loginRequest, getTokenRequest } from "../../Api";
import { styled } from "@mui/material/styles";
const Option = (props) => (
  <components.Option {...props}>
    <span>{props.label}</span>
  </components.Option>
);

// Custom Control component to render input with icon
const Control = ({ children, ...props }) => {
  const selectedValue = props.selectProps.value;

  return (
    <components.Control {...props}>
      <span className={`control-icon ${selectedValue ? "selected" : ""}`}>
        <CheckCircleIcon
          style={{ color: selectedValue ? "#09A409" : "#000" }}
        />
      </span>
      {children}
    </components.Control>
  );
};
const Select = (props) => {
  const [isInteracted, setIsInteracted] = useState(true); // State variable to track interaction
  const [borderstat, setborderstat] = useState("red");

  const changeHandler = (e, props) => {
    let value = null;
    if (e) value = e.value;
    props.onChangeFunc(value, props.name, e);
    if (!props.onValidateFunc) return;

    let msg = null;
    if (!value && props.isReq && isInteracted) {
      msg = `Please select ${props.title}.`;
    }

    props.onValidateFunc(msg, props.name);
  };

  const inputProps = {
    name: props.name,
    placeholder: props.placeholder || `Select ${props.title}`,
    className: props.className,
    isClearable: props.isClearable,
    value: props.options.find((x) => x.value === props.value),
    options: props.options,

    styles: {
      control: (provided, state) => {
        const height = "55px"; // Adjust the height value as needed
        const borderColor = props.errorMsg ? borderstat : provided.borderColor;

        return { ...provided, borderColor, height };
      },
    },
    components: {
      Option,
      Control,
    },
  };

  const isError = props.errorMsg && props.errorMsg !== true;

  const handleSelectFocus = () => {
    if (props.value) {
      setIsInteracted(false);
      setborderstat("green");
    }
  };

  return (
    <div className={`mb-4 ${isError ? "has-error" : ""}`}>
      <label className="form-label">{props.title}</label>

      <ReactSelect
        {...inputProps}
        onChange={(e) => changeHandler(e, props)}
        onFocus={handleSelectFocus}
        className={isError ? "react-select-error" : ""}
      />
      {props.errorMsg && isInteracted && (
        <span className="text-danger" style={{ color: "red" }}>
          {props.errorMsg === true
            ? `Please select ${props.title}.`
            : props.errorMsg}
        </span>
      )}
    </div>
  );
};
const PeriodInput = (props) => {
  const {
    name,
    title,
    value,
    onChangeFunc,
    isReq,
    onValidateFunc,
    errorMsg,
    placeholder,
  } = props;

  const handleDateChange = (event) => {
    onChangeFunc(event.target.value, name);
    if (onValidateFunc) {
      const msg = !event.target.value && isReq ? `Please select ${title}.` : "";
      onValidateFunc(msg, name);
    }
  };

  const containerStyles = {
    marginBottom: "1rem",
  };

  const labelStyles = {
    marginBottom: "0.5rem",
  };

  const errorStyles = {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "0.25rem",
  };

  return (
    <div style={containerStyles}>
      <Typography variant="subtitle1" style={labelStyles}>
        {title}
      </Typography>
      <Grid container alignItems="center" spacing={2} className="mb-3">
        <Grid item xs={12}>
          <TextField
            id={name}
            name={name}
            type="date"
            value={value}
            onChange={handleDateChange}
            variant="outlined"
            sx={{ width: "100%" }} // Set full width
            placeholder={placeholder}
            error={Boolean(errorMsg)}
            // helperText={errorMsg}
          />
          {errorMsg && (
            <Typography variant="body2" style={errorStyles}>
              {errorMsg === true ? `Please select ${title}.` : errorMsg}
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0",
}));

const CardContainer = styled("div")(({ theme }) => ({
  width: "50%",
  maxWidth: "500px",
  "@media (max-width: 600px)": {
    width: "90%",
  },
}));

const CardContentWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const TextFieldWrapper = styled("div")(({ theme }) => ({
  marginBottom: "1rem",
  width: "100%",
}));

const ErrorMessage = styled("div")(({ theme }) => ({
  color: "red",
}));

const CardActionsStyled = styled(CardActions)(({ theme }) => ({
  color: "red",
  justifyContent: "center",
}));

const FormWrapper = styled("div")`
  width: 90%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    company: null,
    lang: null,
    branch: null,
    period: null,
    rememberPassword: false,
  });

  const [error, setError] = useState({
    username: {
      isReq: true,
      errorMsg: "",
    },
    password: {
      isReq: true,
      errorMsg: "",
    },
    company: {
      isReq: true,
      errorMsg: "",
    },
    branch: {
      isReq: true,
      errorMsg: "",
    },
    lang: {
      isReq: true,
      errorMsg: "",
    },
    period: {
      isReq: true,
      errorMsg: "",
    },
  });

  const onValidate = (value, name) => {
    setError((prev) => ({
      ...prev,
      [name]: { ...prev[name], errorMsg: value },
    }));
  };

  const onHandleChange = useCallback((value, name) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    onValidate("", name);
  }, []);

  const validateForm = () => {
    let isInvalid = false;
    Object.keys(error).forEach((x) => {
      const errObj = error[x];
      if (errObj.errorMsg) {
        isInvalid = true;
      } else if (errObj.isReq && !form[x]) {
        isInvalid = true;
        onValidate(true, x);
      }
    });

    return !isInvalid;
  };

  // Handle the login process
  const handleLogin = async (formData) => {
    try {
      // const loginResponse = await loginRequest(formData);
      // const token = loginResponse.data.token;
      // const tokenResponse = await getTokenRequest(token);
      // const tokenDescription = tokenResponse.data;
      // console.log(tokenDescription);
      // // Save the token and token description in local storage
      // localStorage.setItem("userToken", token);
      // localStorage.setItem(
      //   "tokenDescription",
      //   JSON.stringify(tokenDescription)
      // );
    } catch (error) {}
  };

  // Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      console.error("Invalid Form!");
      return;
    }

    try {
      await handleLogin(form);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container>
      <CardContainer>
        <Card>
          <CardContentWrapper>
            <h1 className="text-center">Login</h1>
            <FormWrapper>
              <Select
                name="company"
                title="company"
                value={form.company}
                options={companyOptions}
                onChangeFunc={onHandleChange}
                {...error.company}
              />
              <Select
                name="branch"
                title="Branch"
                value={form.branch}
                options={branchOptions}
                onChangeFunc={onHandleChange}
                {...error.branch}
              />

              <PeriodInput
                name="period"
                title="Period"
                value={form.period}
                onChangeFunc={onHandleChange}
                isReq={true}
                onValidateFunc={onValidate}
                placeholderText="Select a date"
                {...error.period}
              />

              <TextFieldWrapper>
                <TextField
                  className="mb-3"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) => onHandleChange(e.target.value, "username")}
                  error={!!error.username.errorMsg}
                  required
                  InputProps={{
                    startAdornment: (
                      <div style={{ marginRight: "8px" }}>
                        <AccountCircleIcon />
                      </div>
                    ),
                    style: { fontSize: "16px", color: "black" },
                  }}
                  variant="outlined"
                  fullWidth
                  helperText={error.username.errorMsg}
                />
                {error.username.errorMsg && (
                  <ErrorMessage>Please enter a username</ErrorMessage>
                )}
              </TextFieldWrapper>

              <TextFieldWrapper>
                <TextField
                  className="mb-3"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => onHandleChange(e.target.value, "password")}
                  error={!!error.password.errorMsg}
                  required
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <div style={{ marginRight: "8px" }}>
                        <LockOpenIcon />
                      </div>
                    ),
                    style: { fontSize: "16px", color: "black" },
                  }}
                  variant="outlined"
                  fullWidth
                  helperText={error.password.errorMsg}
                />
                {error.password.errorMsg && (
                  <ErrorMessage>Please enter password</ErrorMessage>
                )}
              </TextFieldWrapper>

              <Select
                name="lang"
                title="Language"
                value={form.lang}
                options={languageOptions}
                onChangeFunc={onHandleChange}
                {...error.lang}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.rememberPassword}
                    onChange={(e) =>
                      onHandleChange(e.target.checked, "rememberPassword")
                    }
                    name="rememberPassword"
                    color="primary"
                  />
                }
                label="Remember Password"
              />
            </FormWrapper>
          </CardContentWrapper>
          <CardActionsStyled>
            {" "}
            {/* Using the styled CardActions here */}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </CardActionsStyled>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Login;
