import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CreateNote from './CreateNote.jsx';
import Note from './Note.jsx';
import { useState } from 'react';




const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) =>{
    //alert("I am clicked!")
    setNotes((prevData) => {
      return [...prevData, note]
    })
    //console.log(note);
  }; 

  const deleteNote = (id) =>{
    //alert("I am clicked!")
    setNotes((prevData) => {
      return prevData.filter((noteItem , index) => {
        return index !== id;
      });
    })
    //console.log(note);
  }; 

  return (
    <>
    <Header></Header>
    
    <CreateNote passNote={addNote}/>
    {notes.map((noteItem, index)=>{
      return (
        <Note
        key={index}
        id ={index}
        title = {noteItem.title}
        content = {noteItem.content}
        removeNote={deleteNote}
        />
      );
    })}
    <Footer/>
    </>
  );
}

export default App;
