import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context';
import style from './Button.module.scss';

const Button = ({ children, secondary }) => {
    const buttonClass = secondary ? style.secondary : style.primary;

    return (
        <AppContext.Consumer>
            {(context) => (
                <button onClick={context.openForm} className={buttonClass}>
                    {children}
                </button>
            )}
        </AppContext.Consumer>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    secondary: PropTypes.bool.isRequired,
};

Button.defaultProps = {
    secondary: false,
};

export default Button;