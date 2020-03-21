import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context';
import style from './Button.module.scss';

const Button = ({ children, href, secondary }) => {
    const buttonClass = secondary ? style.secondary : style.primary;

    return (
        <AppContext.Consumer>
            {(context) => {
                if (href) {
                    return (
                        <a
                            href={href}
                            className={buttonClass}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {children}
                        </a>
                    );
                } else {
                    return (
                        <button onClick={context.openForm} className={buttonClass}>
                            {children}
                        </button>
                    );
                }
            }}
        </AppContext.Consumer >
    );
};

Button.propTypes = {
    children: PropTypes.string,
    href: PropTypes.string,
    secondary: PropTypes.bool.isRequired,
};

Button.defaultProps = {
    secondary: false,
};

export default Button;