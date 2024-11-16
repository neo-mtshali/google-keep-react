# Google Keep Clone

A simplified version of Google Keep built using React.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
  - [Creating a Note](#creating-a-note)
  - [Editing a Note](#editing-a-note)
  - [Archiving and Unarchiving Notes](#archiving-and-unarchiving-notes)
- [Project Structure](#project-structure)
- [Acknowledgments](#acknowledgments)

## Introduction

This project is a simplified clone of Google Keep, allowing users to create, edit, archive, and display notes. The application focuses on React development skills, including component structuring, state management with hooks, prop drilling, and JSX best practices.

## Features

- **Create and Add Notes**: Users can create new notes with titles and content.
- **Edit Notes**: Existing notes can be edited through a modal interface.
- **Archive and Unarchive Notes**: Notes can be archived to keep the workspace organized.
- **Responsive Design**: The layout adapts to different screen sizes for optimal user experience.
- **Interactive Elements**: Tooltips and modals enhance user interaction.

## Technologies Used

- **React**: For building the user interface.
- **JavaScript (ES6+)**: Modern JavaScript features.
- **HTML5 & JSX**: Markup and component structure.
- **CSS3**: Styling of components.
- **Material Symbols**: For icons (loaded via Google Fonts)
- **Create React App**: Bootstrapping the React project.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or above)
- **npm** or **yarn**
- A modern web browser (e.g., Chrome, Firefox, Edge, Safari)
- A text editor or IDE (e.g., Visual Studio Code) for viewing or modifying the code

### Installation

1. **Clone the repository** to your local machine using Git:

   ```bash
   git clone https://github.com/yourusername/google-keep-clone.git
   ```
2. **Navigate** to the project directory:
  ```bash
  cd google-keep-clone
  ```
3. **Install dependencies:**
  ```bash
  npm install
  ```
### Running the Project

1. **Start** the development server:
  ```bash
  npm start
  ```
2. **Open** your web browser and navigate to http://localhost:3000.
  + The application should now be running locally.

# Usage

## Creating a Note
1. Click on the **"Take a note..."** input field to open the active form.
2. Enter a title and/or text for your note.
3. Click the **Close** button or outside the form to save the note.
4. The note will appear in the **Notes** section.

## Editing a Note
1. Click on an existing note to open it in a modal window.
2. Modify the title and/or text in the modal.
3. Click the **Close** button or outside the modal to save changes.

## Archiving and Unarchiving Notes
### Archive a Note:
1. Click the **Archive** icon on a note to archive it.
2. The note will be moved to the **Archived Notes** section.

### View Archived Notes:
1. Click on the **Archive** item in the sidebar.
2. Archived notes will be displayed.

### Unarchive a Note:
1. In the **Archived Notes** view, click the **Unarchive** icon on a note to move it back to active notes.

# Project Structure
google-keep-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Form/
│   │   │   ├── Form.js
│   │   │   └── Form.css
│   │   ├── Modal/
│   │   │   ├── Modal.js
│   │   │   └── Modal.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── Notes/
│   │   │   ├── Notes.js
│   │   │   └── Notes.css
│   │   ├── Note/
│   │   │   ├── Note.js
│   │   │   └── Note.css
│   │   └── Sidebar/
│   │       ├── Sidebar.js
│   │       └── Sidebar.css
│   ├── App.js
│   └── App.css
├── package.json
├── README.md


### File Descriptions
- **public/index.html**: The main HTML file containing the application's root element and CDN links.
- **App.js / App.css**: The main application component and its styles.
- **components/**: Contains all reusable components used in the application.
  - **Navbar/**: The top navigation bar.
  - **Sidebar/**: The side menu with navigation items.
  - **Form/**: The form for adding new notes (both inactive and active states).
  - **Notes/**: The container displaying all notes.
  - **Note/**: Individual note component.
  - **Modal/**: The modal window for editing notes.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: Documentation for the project.

# Acknowledgments
- **Google Keep**: Inspiration for the project.
- **Material Symbols**: Icons used in the application.
- **Create React App**: For bootstrapping the React project.
- **MDN Web Docs**: For valuable resources and documentation.
- **React Documentation**: For guidance on React best practices.

---

**Note**: This project is for educational purposes and is not an exact replica of Google Keep. It aims to practice and demonstrate React development skills using components, state management, and hooks.

---

Thank you!
