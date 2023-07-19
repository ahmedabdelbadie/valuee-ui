import React, { useState, useCallback } from 'react';
import { TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { AccountCircle, LockOutlined } from '@material-ui/icons';
import PeriodInput from '../../components/Elements/Inputs/PeriodInput/PeriodInput';
import { companyOptions, branchOptions, languageOptions } from './selectOptions';
import Select from '../../components/Elements/Dropdowenlist/Select';


const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
        company: null,
        lang: null,
        branch: null,
        period: null,
        rememberPassword: false,
    });

    const [error, setError] = useState({
        username: {
            isReq: true,
            errorMsg: '',
        },
        password: {
            isReq: true,
            errorMsg: '',
        },
        company: {
            isReq: true,
            errorMsg: '',
        },
        branch: {
            isReq: true,
            errorMsg: '',
        },
        lang: {
            isReq: true,
            errorMsg: '',
        },
        period: {
            isReq: true,
            errorMsg: '',
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

    const handleSubmit = () => {
        const isValid = validateForm();
        if (!isValid) {
            console.error('Invalid Form!');
            validateForm();
            return false;
        }
        console.log('Data:', { ...form });
    };


    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="card col-md-3">
                    <div className="card-body">
                        <h1 className="text-center">Login</h1>
                        <div className="form mb-3 d-flex flex-column">


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



                            <div className="mb-4 d-flex flex-column w-100">
                                <TextField
                                    className="mb-3"
                                    name="username"
                                    placeholder="Username"
                                    value={form.username}
                                    onChange={(e) => onHandleChange(e.target.value, 'username')}
                                    error={!!error.username.errorMsg}
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <div style={{ marginRight: '8px' }}>
                                                <AccountCircle />
                                            </div>
                                        ),
                                        style: { fontSize: '16px', color: 'black' },
                                    }}
                                    variant="outlined"
                                    fullWidth
                                    helperText={error.username.errorMsg} // Add the helperText prop to display the error message
                                />
                                {error.username.errorMsg && (
                                    <span style={{ color: 'red' }}>Please enter a username</span>)}
                            </div>



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
                                            <LockOutlined />
                                        </div>
                                    ),
                                    style: { fontSize: '16px', color: 'black' },
                                }}
                                variant="outlined"
                                fullWidth
                                helperText={error.password.errorMsg}
                            />
                            {error.password.errorMsg && (
                                <span style={{ color: 'red' }}>Please enter password</span>)}


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
                                        onChange={(e) => onHandleChange(e.target.checked, 'rememberPassword')}
                                        name="rememberPassword"
                                        color="primary"
                                    />
                                }
                                label="Remember Password"
                            />
                        </div>



                        <div className="mb-3 text-center">
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;