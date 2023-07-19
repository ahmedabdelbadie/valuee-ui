import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components } from 'react-select';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Select.css';

// Custom Option component to render option with icon
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
            <span className={`control-icon ${selectedValue ? 'selected' : ''}`}>
                <CheckCircleIcon style={{ color: selectedValue ? '#09A409' : '#000' }} />

            </span>
            {children}
        </components.Control>
    );
};

const Select = (props) => {
    const [isInteracted, setIsInteracted] = useState(true); // State variable to track interaction
    const [borderstat, setborderstat] = useState('red');

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
                const height = '55px'; // Adjust the height value as needed
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
            setborderstat('green')

        }
    };

    return (
        <div className={`mb-4 ${isError ? 'has-error' : ''}`}>
            <label className="form-label">{props.title}</label>

            <ReactSelect {...inputProps} onChange={(e) => changeHandler(e, props)} onFocus={handleSelectFocus} className={isError ? 'react-select-error' : ''} />
            {props.errorMsg && isInteracted && (
                <span className="text-danger">
                    {props.errorMsg === true ? `Please select ${props.title}.` : props.errorMsg}
                </span>
            )}
        </div>
    );
};

Select.defaultProps = {
    name: '',
    title: '',
    placeholder: '',
    className: '',
    // isClearable: true,
    value: '',
    options: [],
    onChangeFunc: () => { },
    isReq: null,
    onValidateFunc: () => { },
};

Select.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    isClearable: PropTypes.bool,
    value: PropTypes.any,
    options: PropTypes.array,
    onChangeFunc: PropTypes.func,
    isReq: PropTypes.bool,
    errorMsg: PropTypes.any,
    onValidateFunc: PropTypes.func,
};

export default memo(Select);
