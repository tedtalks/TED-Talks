import React  from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.selectHomeTab = this.selectHomeTab.bind(this);
    this.selectTagsTab = this.selectTagsTab.bind(this);
    this.selectTranscriptsTab = this.selectTranscriptsTab.bind(this);
    this.selectNotebookTab = this.selectNotebookTab.bind(this);
    this.selectReferencesTab = this.selectReferencesTab.bind(this);
    this.state = {
      home: true,
      tags: false,
      transcripts: false,
      notebook: false,
      references: false
    }
  }

  selectHomeTab() {
    this.setState({
      home: true,
      tags: false,
      transcripts: false,
      notebook: false,
      references: false
    })
  }

  selectTagsTab() {
    this.setState({
      home: false,
      tags: true,
      transcripts: false,
      notebook: false,
      references: false
    })
  }

  selectTranscriptsTab() {
    this.setState({
      home: false,
      tags: false,
      transcripts: true,
      notebook: false,
      references: false
    })
  }

  selectNotebookTab() {
    this.setState({
      home: false,
      tags: false,
      transcripts: false,
      notebook: true,
      references: false
    })
  }

  selectReferencesTab() {
    this.setState({
      home: false,
      tags: false,
      transcripts: false,
      notebook: false,
      references: true
    })
  }


  render() {
    return (
      <ul className="headerButtons">
        <li className={this.state.home ? "selectedItem" : "item"} onClick={this.selectHomeTab}><Link to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
        <li className={this.state.tags ? "selectedItem" : "item"} onClick={this.selectTagsTab}><Link to={`${process.env.PUBLIC_URL}/tags`}>Tags</Link></li>
        <li className={this.state.transcripts ? "selectedItem" : "item"} onClick={this.selectTranscriptsTab}><Link to={`${process.env.PUBLIC_URL}/transcripts`}>Transcripts</Link></li>
        <li className={this.state.notebook ? "selectedItem" : "item"} onClick={this.selectNotebookTab}><Link to={`${process.env.PUBLIC_URL}/notebook`}>Notebook</Link></li>
        <li className={this.state.references ? "selectedItem" : "item"} onClick={this.selectReferencesTab}><Link to={`${process.env.PUBLIC_URL}/references`}>References</Link></li>
      </ul>
    )
  }
}

export default Items;