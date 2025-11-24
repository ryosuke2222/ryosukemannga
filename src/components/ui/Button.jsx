import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    onClick,
    ...props
}) => {
    return (
        <motion.button
            className={`btn btn--${variant} btn--${size} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
