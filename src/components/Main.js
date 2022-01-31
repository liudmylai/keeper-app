import Note from "./Note";
import CreateArea from './CreateArea';
import { useState } from 'react';


function Main() {

    const [newNotes, setNewNotes] = useState([]);
    function addNote(newNote) {
        setNewNotes(prev => [...prev, newNote]);
    }

    return (

        <div>
            <CreateArea addNote={addNote} />
            {newNotes.map((note, index) => <Note note={note} key={index} />)}
        </div>
    );
}
export default Main; 