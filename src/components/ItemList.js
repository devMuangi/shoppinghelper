import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';
import Item from './Item';
import Price from './Price'

const ItemList = () => {
  const { items,prices} = useContext(ItemsContext);

  return (
    <div className="items-container">
      <div className="item-container">
        {items.map((item) => (
            <Item key={item} item={item} /> 
        ))}
        </div>
        <div className="item-container">
        {prices.map((price) => (
            <Price key={price} price={price} /> 
        ))}
        </div>
    </div>
  );
};

export { ItemList as default };


