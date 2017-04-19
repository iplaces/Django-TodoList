import React, { PropTypes } from 'react';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <li style={{ cursor: 'pointer' }}><a className="selected">{children}</a></li>;
    }

    return (
        <li className="selected" href="#"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
            style={{ cursor: 'pointer' }}
        >
            <a>{children}</a>
        </li>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;