import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  function addNote(note) {}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((notes) => (
        <Note key={notes.key} title={notes.title} content={notes.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
