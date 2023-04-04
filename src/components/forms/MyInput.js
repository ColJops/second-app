import PropTypes from "prop-types";
import React from "react";
const MyInput = props => {
    const { label, type, name, value, className, onChange, error } = props;
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <input
                name={name}
                id={name}
                type={type}
                value={value}
                className={className}
                onChange={onChange}
            />
            {error && (
                <small className="alert alert-danger form-text text-muted">
                    {error}
                </small>
            )}
        </div>
        );
    }
MyInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default MyInput;