import React from 'react'

function Item({item,removeItem}) {
    return (
        <div>
            <span>{item}</span>
            <button onClick={() => removeItem(item)}>X</button>
        </div>
    )
}

export default Item
