import React from 'react'
import Item from './Item'

function Items({items,removeItem}) {
    
  

    return (
        <div>
            <ul>
            {items.map((item)=>(
                <li>
                    <Item key={item} item={item} removeItem={removeItem}/>
                </li>
                
            ))}
            </ul>
           
        </div>
    )
}

export default Items
