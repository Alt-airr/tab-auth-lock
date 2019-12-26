import React from 'react';
import s from "./ClientsList.module.css";
import ActionButton from "./ActionButton";
import SimpleModal from "../modal/SimpleModal";

const ClientItem = (props) => {
    const id = props.item.id;
    return (
        <div className={s.listRow}>
            <div className={`${s.idField} ${s.item}`}>
                {id}
            </div>
            <div className={`${s.titleField} ${s.item}`}>
                {props.item.title}
            </div>
            <div className={`${s.descriptionField} ${s.item}`}>
                {props.item.description}
            </div>
            <div className={`${s.createdField} ${s.item}`}>
                {props.item.created}
            </div>
            <div className={`${s.actionsField} ${s.item}`}>
                <ActionButton action={'view'} id={props.item.id}/>
                <SimpleModal dispatch={props.dispatch} state={props.state} index={props.index} />
            </div>
        </div>
    )
};


export default ClientItem;