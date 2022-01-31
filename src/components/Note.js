function Note(props) {
    const { note } = props;
    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button>DELETE</button>
        </div>
    );
}
export default Note;