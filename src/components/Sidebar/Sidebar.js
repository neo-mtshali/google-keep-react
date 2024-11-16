// src/components/Sidebar/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar({ toggleArchivedNotes, showArchived }) {
  return (
    <div className="sidebar">
      <div
        className={`sidebar-item ${!showArchived ? 'active' : ''}`}
        onClick={() => showArchived && toggleArchivedNotes()}
      >
        <span className="material-symbols-outlined sidebar-icon">lightbulb</span>
        <span className="sidebar-text">Notes</span>
      </div>
      <div className="sidebar-item">
      <span className="material-symbols-outlined sidebar-icon">notifications</span>
      <span className="sidebar-text">Reminders</span>
      </div>
      <div className="sidebar-item">
      <span className="material-symbols-outlined sidebar-icon">edit</span>
      <span className="sidebar-text">Edit labels</span>
      </div>
      <div
        className={`sidebar-item ${showArchived ? 'active' : ''}`}
        onClick={() => !showArchived && toggleArchivedNotes()}
      >
        <span className="material-symbols-outlined sidebar-icon">archive</span>
        <span className="sidebar-text">Archive</span>
      </div>
      <div className="sidebar-item">
      <span className="material-symbols-outlined sidebar-icon">delete</span>
      <span className="sidebar-text">Trash</span>
      </div>
    </div>
  );
}

export default Sidebar;

