import React, { useContext, useState } from 'react';
import ItemsContext from '../context/items-context';

const AddItemForm = () => {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  // const { pricesDispatch } = useContext(IteContext);
  const { itemsDispatch,pricesDispatch} = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // assuming no duplicates for demo purposes
    if (item && price){
      itemsDispatch({ type: 'ADD_ITEM', item });
      pricesDispatch({ type: 'ADD_PRICE', price });
      setItem('');
      setPrice('');

    }
    console.log(item,price);
 
  };
  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   // assuming no duplicates for demo purposes
  //   if (price){
  //     pricesDispatch({ type: 'ADD_PRICE', price});
  //     setPrice('');

  //   }
 
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={item} type="text" name="item" onChange={(e) => setItem(e.target.value)} />
        <input value={price} type="text" name="price" onChange={(e) => setPrice(e.target.value)} />
        <button className="submit-button">+</button>
      </form>
    </div>
  );
};

export { AddItemForm as default };
