import React from 'react';

const Section = ({
    children,
    className = '',
    id = '',
    bgColor = 'default' // default, alt, primary, secondary
}) => {
    const bgStyles = {
        default: 'var(--color-bg)',
        alt: 'var(--color-bg-alt)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
    };

    const style = {
        backgroundColor: bgStyles[bgColor] || bgStyles.default,
        color: (bgColor === 'primary' || bgColor === 'secondary') ? 'var(--color-text-inverted)' : 'inherit'
    };

    return (
        <section id={id} className={`section ${className}`} style={style}>
            {children}
        </section>
    );
};

export default Section;
