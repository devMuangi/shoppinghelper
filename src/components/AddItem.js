import React,{useState,useRef,useEffect} from 'react';

function AddItem({itemsDispatch}) {
    const [item, setItem] = useState('');
    const refContainer = useRef(null);

    const addItem = (item) => {
        // assuming no duplicates for demo purposes
        if (item){
            // setItems([...items, item]);
            itemsDispatch({type: 'ADD_ITEM', item});
        }
        
      };

    function handleSubmit(e){
        e.preventDefault();
        addItem(item);
        setItem('');
    };

    useEffect(() => {
        refContainer.current.focus();
        
    }, [])

    return (
      <form onSubmit={handleSubmit}>
          <input ref={refContainer} type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
          <button type="submit">+</button>

      </form>
    )
}

export default AddItem
