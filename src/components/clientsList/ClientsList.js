import React from 'react';
import ClientItem from "./ClientItem";
import s from "./ClientsList.module.css";
import ValidatedLoginForm from "../loginForm/ValidatedLoginForm";

class ClientsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        };
    }

    render() {
        let clientItems = this.props.state.itemsData.map((item, index) =>
            <ClientItem index={index} item={item}
                        state={this.props.state}
                        dispatch={this.props.dispatch}/>);
       if (this.props.state.isLogged) {
           return (
               <div className={s.clientsList}>
                   <div className={s.headersRow}>
                       <div className={`${s.idField} ${s.item}`}>
                           id
                       </div>
                       <div className={`${s.titleField} ${s.item}`}>
                           title
                       </div>
                       <div className={`${s.descriptionField} ${s.item}`}>
                           description
                       </div>
                       <div className={`${s.createdField} ${s.item}`}>
                           created
                       </div>
                       <div className={`${s.actionsField} ${s.item}`}>
                           actions
                       </div>
                   </div>
                   {clientItems}
               </div>
           )
       } else {
           return (
               <ValidatedLoginForm dispatch={this.props.dispatch} state={this.props.state}/>
           )
       }
    }
}
export default ClientsList;



