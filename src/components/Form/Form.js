// src/components/Form/Form.js
import React, { useState } from 'react';
import './Form.css';

function Form({ addNote }) {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const openForm = () => setIsActive(true);

  const closeForm = () => {
    if (title.trim() || text.trim()) {
      addNote({
        title: title.trim(),
        text: text.trim(),
      });
    }
    setTitle('');
    setText('');
    setIsActive(false);
  };

  return (
    <div className="form-container">
      {isActive ? (
        <form className="active-form">
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
              <span className="material-symbols-outlined footer-icon">add_alert</span>
              <span className="material-symbols-outlined footer-icon">person_add</span>
              <span className="material-symbols-outlined footer-icon">palette</span>
              <span className="material-symbols-outlined footer-icon">image</span>
              <span className="material-symbols-outlined footer-icon">archive</span>
              <span className="material-symbols-outlined footer-icon">more_vert</span>
              <span className="material-symbols-outlined  undo-icon">undo</span>
              <span className="material-symbols-outlined  redo-icon">redo</span>
            </div>
            
            <div className="footer-button">
              <button className="close-button" type="button" onClick={closeForm}>
                Close
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form className="inactive-form" onClick={openForm}>
          <input type="text" placeholder="Take a note..." readOnly />
          <div className="inactive-form-icons">
            <div className="tooltip">
              <span className="material-symbols-outlined nav-icon">check_box</span>
              <span className="tooltip-text">New list</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined nav-icon">brush</span>
              <span className="tooltip-text">New note with drawing</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined nav-icon">image</span>
              <span className="tooltip-text">New note with image</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;

