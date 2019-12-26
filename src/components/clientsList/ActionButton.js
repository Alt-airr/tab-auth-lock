import React from 'react';
import s from "./ClientsList.module.css";

class ActionButton extends React.Component {
    render() {
        const action = this.props.action;

        return (
               <button className={s.actionButton} >
                   {action}
               </button>
        )
    }
}

export default ActionButton;