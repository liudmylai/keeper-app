function Note(props) {
    const { note, id, deleteNote } = props;

    function handleClick() {
        deleteNote(id);
    }
    
    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}
export default Note;