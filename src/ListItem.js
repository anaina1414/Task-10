import React from 'react';
import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItem(props){
    const items = props.items;
    const listItems = items.map(item=>
    {
        return <div className="list" key={item.key}>
            <p>{item.text}
            <span>
                <FontAwesomeIcon className="fa-2x" icon="times" onClick={ () => {props.deleteItem(item.key)}}></FontAwesomeIcon>
            </span>
            </p>
            
        </div>
    })
    return(
        <div>{listItems}</div>
    )
}
export default ListItem;