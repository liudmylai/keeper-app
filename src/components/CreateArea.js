import { useState } from "react";

function CreateArea(props) {

    const { addNote } = props;

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prev => ({ ...prev, [name]: value }))
    }

    function submitNote(event) {
        addNote(note);
        event.preventDefault();
    }
    
    return (
        <div>
            <form>
                <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
                <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;