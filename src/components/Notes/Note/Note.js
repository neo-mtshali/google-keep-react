// src/components/Note/Note.js
import React, { useState, useRef, useEffect } from 'react';
import './Note.css';

function Note({
  note,
  openModal,
  archiveNote,
  unarchiveNote,
  deleteNote,
  isArchivedView,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleArchiveClick = (e) => {
    e.stopPropagation();
    if (isArchivedView) {
      unarchiveNote(note.id);
    } else {
      archiveNote(note.id);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    deleteNote(note.id);
  };

  const handleMoreVertClick = (e) => {
    e.stopPropagation();
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleMenuOptionClick = (option, e) => {
    e.stopPropagation();
    setShowMenu(false);
    if (option === 'delete') {
      deleteNote(note.id);
    }
    // Handle other options as needed
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="note" onClick={() => openModal(note)}>
      <div className="note-content">
        <div className="note-header">
          <p>{note.title}</p>
          <span className="material-symbols-outlined note-pin">push_pin</span>
        </div>
        <p>{note.text}</p>
      </div>
      <div className="note-footer-icons">
        <span
          className="material-symbols-outlined footer-icon"
          onClick={(e) => e.stopPropagation()}
        >
          add_alert
        </span>
        <span
          className="material-symbols-outlined footer-icon"
          onClick={(e) => e.stopPropagation()}
        >
          person_add
        </span>
        <span
          className="material-symbols-outlined footer-icon"
          onClick={(e) => e.stopPropagation()}
        >
          palette
        </span>
        <span
          className="material-symbols-outlined footer-icon"
          onClick={(e) => e.stopPropagation()}
        >
          image
        </span>
        <span
          className="material-symbols-outlined footer-icon archive-icon"
          onClick={handleArchiveClick}
        >
          {isArchivedView ? 'unarchive' : 'archive'}
        </span>
        <div className="more-menu-container" ref={menuRef}>
          <span
            className="material-symbols-outlined footer-icon more-icon"
            onClick={handleMoreVertClick}
          >
            more_vert
          </span>
          {showMenu && (
            <div className="more-menu">
              <div
                className="menu-item"
                onClick={(e) => handleMenuOptionClick('delete', e)}
              >
                Delete note
              </div>
              <div className="menu-item" onClick={(e) => e.stopPropagation()}>
                Add label
              </div>
              <div className="menu-item" onClick={(e) => e.stopPropagation()}>
                Add drawing
              </div>
              <div className="menu-item" onClick={(e) => e.stopPropagation()}>
                Make a copy
              </div>
              <div className="menu-item" onClick={(e) => e.stopPropagation()}>
                Show checkboxes
              </div>
              <div className="menu-item" onClick={(e) => e.stopPropagation()}>
                Copy to Google Docs
              </div>
              <div className="menu-item" onClick={(e) => e.stopPropagation()}>
                Version history
              </div>
            </div>
          )}
        </div>
        {isArchivedView && (
          <span
            className="material-symbols-outlined footer-icon delete-icon"
            onClick={handleDeleteClick}
          >
            delete
          </span>
        )}
      </div>
    </div>
  );
}

export default Note;

