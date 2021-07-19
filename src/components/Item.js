import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';

const Item = ({ item,price }) => {
  const { itemsDispatch,pricesDispatch } = useContext(ItemsContext);

  return (
    <div >
      <span >{item}</span>
      {/* <span >{price}</span> */}
      <button
        className="item__button"
        onClick={() =>
          itemsDispatch({ type: 'REMOVE_ITEM', itemToBeDeleted: item })
        }
      >
        X
      </button>
    </div>
  );
};

export { Item as default };
