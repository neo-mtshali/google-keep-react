// src/components/Modal/Modal.js

import React, { useState, useEffect } from 'react';
import './Modal.css';

function Modal({
  selectedNote,
  isOpen,
  closeModal,
  editNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
}) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setText(selectedNote.text);
    }
  }, [selectedNote]);

 
  const saveAndClose = () => {
    if (selectedNote) {
      editNote(selectedNote.id, { title: title.trim(), text: text.trim() });
    }
    closeModal();
  };

  const handleArchive = () => {
    if (selectedNote) {
      if (selectedNote.archived) {
        unarchiveNote(selectedNote.id);
      } else {
        archiveNote(selectedNote.id);
      }
    }
    closeModal();
  };

  const handleDelete = () => {
    if (selectedNote) {
      deleteNote(selectedNote.id);
    }
    closeModal();
  };

  if (!selectedNote) {
    return null;
  }

  return (
    <div
      className={`modal ${isOpen ? 'open-modal' : ''}`}
      onClick={saveAndClose} // Updated handler
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="form">
          <div className="note-title">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-symbols-outlined note-pin">push_pin</span>
          </div>
          <div className="note-text">
            <input
              type="text"
              placeholder="Take a note..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="note-icons-footer">
            <div className="footer-icons">
              <span
                className="material-symbols-outlined footer-icon archive-icon"
                onClick={handleArchive}
              >
                {selectedNote.archived ? 'unarchive' : 'archive'}
              </span>
              {selectedNote.archived && (
                <span
                  className="material-symbols-outlined footer-icon delete-icon"
                  onClick={handleDelete}
                >
                  delete
                </span>
              )}
            </div>
            <div className="footer-button">
              <button
                className="close-button"
                type="button"
                onClick={saveAndClose} 
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;



