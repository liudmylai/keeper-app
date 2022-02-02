import { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



function CreateArea(props) {

    const { addNote } = props;

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prev => ({ ...prev, [name]: value }));
    }

    function submitNote(event) {
        addNote(note);
        setNote({
            title: '',
            content: ''
        });
        event.preventDefault();
    }

    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <div>
            <form className="create-note">
                {isExpanded && <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />}
                <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} onFocus={() => setIsExpanded(true)} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;