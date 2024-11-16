// src/components/Notes/Notes.js

import React from 'react';
import Note from './Note/Note';
import './Notes.css';

function Notes({
  notes,
  openModal,
  archiveNote,
  unarchiveNote,
  deleteNote,
  isArchivedView = false,
}) {
  return (
    <div className="notes">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            openModal={openModal}
            archiveNote={archiveNote}
            unarchiveNote={unarchiveNote}
            deleteNote={deleteNote} //
            isArchivedView={isArchivedView}
          />
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Notes;


