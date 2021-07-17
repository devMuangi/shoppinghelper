import React, { useEffect, useReducer } from 'react';
import ItemsContext from '../context/items-context';
import itemsReducer from '../reducers/items';
import AddItemForm from './AddItemForm';
import './App.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Logo from './Logo'

function App() {
  const [items, itemsDispatch] = useReducer(itemsReducer, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      itemsDispatch({ type: 'POPULATE_ITEMS', items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider value={{ items, itemsDispatch }}>
      <div className="App"> 
      <Logo/>     
        <header className="App-header">
          <AddItemForm />
          {items.length > 0 &&  <ItemCount items={items}/>}
          <ItemList />
        </header>
      </div>
    </ItemsContext.Provider>
  );
}

export default App;
