import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title :"",
        content :"",
    });

    const InputEvent = (event) =>{
        //const value = event.target.value;
        //const name = event.target.name;

        const {name, value} = event.target; // obj writter inside {}

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value,
            };
        });
        //console.log(note);
    }

    const addEvent = () => {
        props.passNote(note);
        setNote((prevData) =>{
            return {
                title :"",
                content :"",
            };
        });
    }

    const [isExpanded, setExpanded] = useState(false);
    
    const expand = () =>{
        setExpanded(true);
    }

    return (
        <>
        <div className="mainnote">
            <form>
                {isExpanded ?
                <input name="title" type="text" value={note.title} onChange={InputEvent} placeholder="Title"></input> : null}
                <textarea onClick={expand} name="content" rows={isExpanded ? 3 : 1} column="" value={note.content} onChange={InputEvent} placeholder="Write a note..."></textarea>
                {isExpanded ? <Button onClick={addEvent}>
                    <AddIcon></AddIcon>
                </Button> : null}
            </form>
        </div>
        </>
    );
}

export default CreateNote;