import React, { useState } from 'react';
import { Box, FormControl, FormControlLabel, Checkbox, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

const LoginForm = ({ handleSubmit }) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        rememberPassword: false,
    });

    const [errors, setErrors] = useState({
        username: false,
        password: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: fieldValue,
        }));

        // Reset the error state when the user enters data
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // Perform your validation logic here
        const validationErrors = {};

        if (values.username.trim() === '') {
            validationErrors.username = true;
        }

        if (values.password.trim() === '') {
            validationErrors.password = true;
        }

        if (Object.keys(validationErrors).length > 0) {
            // Update the error state to display red border for the invalid fields
            setErrors(validationErrors);
        } else {
            handleSubmit(values);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Box sx={{ my: 2 }}>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        placeholder="Enter your username"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        value={values.username}
                        onChange={handleChange}
                        fullWidth
                        error={errors.username} // Apply the error state to the TextField component
                    />
                </FormControl>
            </Box>

            <Box sx={{ my: 2 }}>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                        }}
                        value={values.password}
                        onChange={handleChange}
                        fullWidth
                        error={errors.password} // Apply the error state to the TextField component
                    />
                </FormControl>
            </Box>

            <FormControlLabel
                control={
                    <Checkbox
                        id="rememberPassword"
                        name="rememberPassword"
                        type="checkbox"
                        checked={values.rememberPassword}
                        onChange={handleChange}
                    />
                }
                label="Remember Password"
            />

        </form>
    );
};

export default LoginForm;
