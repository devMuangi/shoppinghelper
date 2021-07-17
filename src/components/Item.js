import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';

const Item = ({ item }) => {
  const { itemsDispatch } = useContext(ItemsContext);

  return (
    <div className="item-container">
      <span >{item}</span>
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
