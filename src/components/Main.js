import Note from "./Note";

function Main(props) {
    const {notes} = props;
    return (
        <div>
            {notes.map((note, index) => <Note note={note} key={index} />)}
        </div>
    );
}
export default Main; 