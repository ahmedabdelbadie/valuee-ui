import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography, Grid } from '@mui/material';

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
            const msg = !event.target.value && isReq ? `Please select ${title}.` : '';
            onValidateFunc(msg, name);
        }
    };

    const containerStyles = {
        marginBottom: '1rem',
    };

    const labelStyles = {
        marginBottom: '0.5rem',
    };

    const errorStyles = {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: '0.25rem',
    };

    return (
        <div style={containerStyles}>
            <Typography variant="subtitle1" style={labelStyles}>
                {title}
            </Typography>
            <Grid container alignItems="center" spacing={2} className="mb-3"
            >
                <Grid item xs={12}>
                    <TextField
                        id={name}
                        name={name}
                        type="date"
                        value={value}
                        onChange={handleDateChange}
                        variant="outlined"
                        sx={{ width: '100%' }} // Set full width
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

PeriodInput.defaultProps = {
    name: '',
    title: '',
    value: '',
    isReq: false,
    errorMsg: '',
    placeholder: 'Please select period',
    onChangeFunc: () => { },
    onValidateFunc: () => { },
};

PeriodInput.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    isReq: PropTypes.bool,
    errorMsg: PropTypes.any,
    placeholder: PropTypes.string,
    onChangeFunc: PropTypes.func,
    onValidateFunc: PropTypes.func,
};

export default memo(PeriodInput);
