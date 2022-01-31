import Note from "./Note";
import CreateArea from './CreateArea';
import { useState } from 'react';


function Main() {

    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes(prev => [...prev, note]);
    }
    function deleteNote(id) {
        setNotes(prev => prev.filter((_,index)=>index !== id))
    }
    return (

        <div>
            <CreateArea addNote={addNote} />
            {notes.map((note, index) => <Note note={note} key={index} id={index} deleteNote={deleteNote} />)}
        </div>
    );
}
export default Main; 