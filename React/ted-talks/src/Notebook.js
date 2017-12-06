import React from 'react';
import './Notebook.css';
import jupyterLogo from './img/jupyterLogo.png';
import anacondaLogo from './img/anacondaLogo.png';
import pythonLogo from './img/pythonLogo.png';
import shouldUpdate from 'recompose/shouldUpdate';

const Notebook = () =>
  <div className="notebookContent">
    <div className="title">IPython notebook</div>
    <div className="space" />
    <div className="notebookText">
      <div>The notebook can be found here: </div>
      <div className="space" />
      <a href="https://nbviewer.jupyter.org/github/scarca/TED_analysis/blob/master/Project.ipynb">Link</a>
    <div className="space" /><div className="space" />
      <div className="logoList">
        <img src={jupyterLogo} width={600} height={200} alt="" className="logo" />
        <img src={anacondaLogo} width={600} height={200} alt="" className="logo" />
        <img src={pythonLogo} width={600} height={200} alt="" className="logo" />
      </div>
    </div>
  </div>;


const checkPropsChange = (props, nextProps) => nextProps !== props;

export default shouldUpdate(checkPropsChange)(Notebook);