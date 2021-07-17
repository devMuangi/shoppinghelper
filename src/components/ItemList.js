import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';
import Item from './Item';

const ItemList = () => {
  const { items } = useContext(ItemsContext);

  return (
    <div className="items-container">
      <ul>
        {items.map((item) => (
            <Item key={item} item={item} /> 
        ))}
      </ul>
    </div>
  );
};

export { ItemList as default };
