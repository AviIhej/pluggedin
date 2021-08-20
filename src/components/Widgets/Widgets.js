import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css';

export const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>This is the widget header</h2>
                <InfoIcon />
            </div>
        </div>
    )
}

export default Widgets