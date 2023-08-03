import React, { useState, useCallback } from 'react';
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Card,
  CardActions
} from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { styled } from '@mui/material/styles';

import { useLogin } from '../../../lib/auth';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0'
});

const CardContainer = styled('div')({
  width: '50%',
  maxWidth: '500px',
  '@media (max-width: 600px)': {
    width: '90%'
  }
});

const CardContentWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const TextFieldWrapper = styled('div')({
  marginBottom: '1rem',
  width: '100%'
});

const ErrorMessage = styled('div')({
  color: 'red'
});

const CardActionsStyled = styled(CardActions)({
  color: 'red',
  justifyContent: 'center'
});

const FormWrapper = styled('div')`
  width: 90%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
    // company: null,
    // lang: null,
    // branch: null,
    // period: null,
    // rememberPassword: false,
  });

  const [error, setError] = useState({
    email: {
      isReq: true,
      errorMsg: ''
    },
    password: {
      isReq: true,
      errorMsg: ''
    }
    // company: {
    //   isReq: true,
    //   errorMsg: "",
    // },
    // branch: {
    //   isReq: true,
    //   errorMsg: "",
    // },
    // lang: {
    //   isReq: true,
    //   errorMsg: "",
    // },
    // period: {
    //   isReq: true,
    //   errorMsg: "",
    // },
  });

  const onValidate = (value, name) => {
    setError((prev) => ({
      ...prev,
      [name]: { ...prev[name], errorMsg: value }
    }));
  };

  const onHandleChange = useCallback((value, name) => {
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    onValidate('', name);
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

  const login = useLogin();

  // Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      console.error('Invalid Form!');
      return;
    }

    try {
      login.mutate(form);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Container>
      <CardContainer>
        <Card>
          <CardContentWrapper>
            <h1 className="text-center">Login</h1>
            <FormWrapper>
              {/* <Select
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
              /> */}

              <TextFieldWrapper>
                <TextField
                  className="mb-3"
                  name="email"
                  placeholder="email"
                  value={form.email}
                  onChange={(e) => onHandleChange(e.target.value, 'email')}
                  error={!!error.email.errorMsg}
                  required
                  InputProps={{
                    startAdornment: (
                      <div style={{ marginRight: '8px' }}>
                        <AccountCircleIcon />
                      </div>
                    ),
                    style: { fontSize: '16px', color: 'black' }
                  }}
                  variant="outlined"
                  fullWidth
                  helperText={error.email.errorMsg}
                />
                {error.email.errorMsg && <ErrorMessage>Please enter a email</ErrorMessage>}
              </TextFieldWrapper>

              <TextFieldWrapper>
                <TextField
                  className="mb-3"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => onHandleChange(e.target.value, 'password')}
                  error={!!error.password.errorMsg}
                  required
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <div style={{ marginRight: '8px' }}>
                        <LockOpenIcon />
                      </div>
                    ),
                    style: { fontSize: '16px', color: 'black' }
                  }}
                  variant="outlined"
                  fullWidth
                  helperText={error.password.errorMsg}
                />
                {error.password.errorMsg && <ErrorMessage>Please enter password</ErrorMessage>}
              </TextFieldWrapper>

              {/* <Select
                name="lang"
                title="Language"
                value={form.lang}
                options={languageOptions}
                onChangeFunc={onHandleChange}
                {...error.lang}
              /> */}

              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.rememberPassword}
                    onChange={(e) => onHandleChange(e.target.checked, 'rememberPassword')}
                    name="rememberPassword"
                    color="primary"
                  />
                }
                label="Remember Password"
              />
            </FormWrapper>
          </CardContentWrapper>
          <CardActionsStyled>
            {' '}
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
