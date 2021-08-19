import React from 'react';
// import { Icon } from '@material-ui/icons'
import './InputOption.css';

const InputOption = ({ Icon, title, color }) => {
    
    return (
        // <Icon />
       <div className="inputOption">
           <Icon style={{ color: color }} />
           <h4>{title}</h4>
       </div>
    )
}

export default InputOption