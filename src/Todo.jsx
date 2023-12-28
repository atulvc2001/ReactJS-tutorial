// import React, { useState } from 'react'
// import TODO from './todo.jpg'

// const Todo = () => {

//     let [input, setInput] = useState("")

//     let [items, setItems] = useState([])

//     let handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(input)
//     }

//     let addItem = () => {
//         if (input === "") {

//         } else {
//             setItems([...items,input]);
//             setInput("");
//         }
//     };

//     let handlechange = e => {
//         setInput(e.target.value)
//     }

//     let deleteitem = (ind) => {
//         console.log(ind);
//         let updatedarray = items.filter((a,index) => {
//             return index !== ind
//         })
//         setItems(updatedarray)
//     }

//     let clearallitem = () => {
//         setItems([])
//     }

//     let editItem = (ind) => {
//         setInput(items[ind])
//         setIndex(ind)
//     }

//     return (
//         <>
//             <section>
//                 <header>
//                     <h1>ToDo App</h1>
//                     <img src={TODO} alt="" height="150" style={{ borderRadius: "50%" }} />
//                 </header>
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" placeholder='Enter the items' value={input} onChange={handlechange} />
//                     <button onClick={addItem}>Add</button>
//                 </form>
//                 <article>

//                     {items.map((x,y) => {
//                         return (
//                             <div key={y}>
//                                 <span>{x}</span>
//                                 <button onClick={()=>editItem(y)}>Edit</button>
//                                 <button onClick={() => deleteitem(y)}>Delete</button>
//                             </div>
//                         )
//                     })}
//                 </article>
//                 <footer>
//                     <button onClick={clearallitem}>CLEAR ALL</button>
//                 </footer>
//             </section>
//         </>
//     )
// }

// export default Todo



// ChatGPT code 
// ChatGPT code 
// ChatGPT code 
// ChatGPT code 
// ChatGPT code 

import React, { useState } from 'react';
import TODO from './todo.jpg';
// import './Todo.css';

const Todo = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // If editIndex is not null, update the existing item
      const updatedItems = [...items];
      updatedItems[editIndex] = input;
      setItems(updatedItems);
      setEditIndex(null); // Reset editIndex after updating
    } else {
      // If editIndex is null, add a new item
      if (input.trim() !== '') {
        setItems([...items, input]);
      }
    }

    setInput(''); // Clear input after adding/editing
  };

  const addItem = () => {
    handleSubmit({ preventDefault: () => {} }); // Trigger handleSubmit to add/edit item
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const deleteItem = (index) => {
    const updatedArray = items.filter((_, i) => i !== index);
    setItems(updatedArray);
    setEditIndex(null); // Reset editIndex if deleting the item being edited
  };

  const clearAllItems = () => {
    setItems([]);
    setEditIndex(null);
  };

  const editItem = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  return (
    <>
      <section>
        <header>
          <h1>ToDo App</h1>
          <img src={TODO} alt="" height="150" style={{ borderRadius: '50%' }} />
        </header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the items"
            value={input}
            onChange={handleChange}
          />
          <button type="button" onClick={addItem}>
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </form>
        <article>
          {items.map((item, index) => (
            <div key={index}>
              <span>{item}</span>
              <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          ))}
        </article>
        <footer>
          <button onClick={clearAllItems}>CLEAR ALL</button>
        </footer>
      </section>
    </>
  );
};

export default Todo;
