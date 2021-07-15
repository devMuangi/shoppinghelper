import React, {useState,useEffect,useReducer}from 'react';
import './App.css';
import Items from './components/Items';
import ItemCount from './components/ItemCount';
import AddItem from './components/AddItem';

function App() {
  // const savedItems = JSON.parse(localStorage.getItem('items'));
  // const [items, setItems] = useState([]);

  // useEffect(()=>{
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items){
  //     setItems(items);
  //   }
  // },[]);
  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  //   //cleaning up items from dom
  //   return ()=> {
  //     localStorage.removeItem('items');
  //   }
  // },[items]);
  // const removeItem = (itemToBeDeleted) => {
  //   setItems(items.filter((item) => itemToBeDeleted !== item));
  // };
  //implementation of usereducer starts here
 

  const itemsReducer = (state, action) => {
    switch (action.type) {
      case 'POPULATE_ITEMS':
        return action.items;
      case 'ADD_ITEM':
        return [...state, action.item];
      case 'REMOVE_ITEM':
        return state.filter((item) => item !== action.itemToBeDeleted);
      default:
        return state;
    }
  };
  const [items, itemsDispatch] = useReducer(itemsReducer, []);
 
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      itemsDispatch({ type: 'POPULATE_ITEMS', items });
    }
  }, []);
  // const addItem = (item) => {
  //   // setItems([...items, item]);
  //   // becomes:
  //   itemsDispatch({ type: 'ADD_ITEM', item });
  // }
  const removeItem = (itemToBeDeleted) => {
    // setItems(items.filter((item) => itemToBeDeleted !== item));
    // becomes
    itemsDispatch({ type: 'REMOVE_ITEM', itemToBeDeleted });
};

  return (
    <div className="app">
    {items.length > 0 && <ItemCount items={items}/> }
    <AddItem  itemsDispatch={itemsDispatch} items={items}/>
    <Items items={items} removeItem={removeItem}/>
    </div>
  );
}

export default App;
