import React from 'react';
import './Notebook.css';

const Notebook = () =>
  <div className="notebookContent">
    <div className="title">IPython notebook</div>
    <div className="space" />
    <div className="notebookText">
      <div>The notebook can be found here: </div>
      <div className="space" />
      <div>____________________</div>
    </div>
  </div>;

export default Notebook;