import React,{useContext} from 'react'
import ItemsContext from '../context/items-context';

function Price({price}) {
    const { itemsDispatch,pricesDispatch } = useContext(ItemsContext);
    return (
        <div>
             <span >KSH {price}</span>
      {/* <span >{price}</span> */}
      <button
        className="item__button"
        onClick={() =>
          pricesDispatch({ type: 'REMOVE_PRICE', itemToBeDeleted: price })
        }
      >
        X
      </button>
            
        </div>
    )
}

export default Price
