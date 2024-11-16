// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showArchived, setShowArchived] = useState(false);

  const addNote = (note) => {
    const newNote = { ...note, id: Date.now(), archived: false };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const editNote = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note))
    );
    setArchivedNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note))
    );
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) => {
      const noteToArchive = prevNotes.find((note) => note.id === id);
      if (noteToArchive) {
        noteToArchive.archived = true;
        setArchivedNotes((prevArchivedNotes) => [noteToArchive, ...prevArchivedNotes]);
        return prevNotes.filter((note) => note.id !== id);
      }
      return prevNotes;
    });
  };

  const unarchiveNote = (id) => {
    setArchivedNotes((prevNotes) => {
      const noteToUnarchive = prevNotes.find((note) => note.id === id);
      if (noteToUnarchive) {
        noteToUnarchive.archived = false;
        setNotes((prevNotes) => [noteToUnarchive, ...prevNotes]);
        return prevNotes.filter((note) => note.id !== id);
      }
      return prevNotes;
    });
  };

  const deleteNote = (id) => {
    setArchivedNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const openModal = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
  };

  const toggleArchivedNotes = () => {
    setShowArchived((prevState) => !prevState);
  };

// src/App.js

// ...

return (
  <div className="app">
    <Navbar />
    <div className="container">
      <Sidebar toggleArchivedNotes={toggleArchivedNotes} showArchived={showArchived} />
      <div className="main-content">
        <Form addNote={addNote} />
        {!showArchived ? (
          <Notes notes={notes} openModal={openModal} archiveNote={archiveNote} />
        ) : (
          <Notes
            notes={archivedNotes}
            openModal={openModal}
            archiveNote={unarchiveNote}
            deleteNote={deleteNote}
            isArchivedView={true}
          />
        )}
      </div>
    </div>
    {/* Always render the Modal component */}
    <Modal
      selectedNote={selectedNote}
      isOpen={isModalOpen}
      closeModal={closeModal}
      editNote={editNote}
      archiveNote={archiveNote}
      unarchiveNote={unarchiveNote}
      deleteNote={deleteNote}
    />
  </div>
);

}

export default App;


