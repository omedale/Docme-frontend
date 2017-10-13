import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TinyMCE from 'react-tinymce';
import NavigationBar from './NavigationBar';
import DocumentForm from './DocumentForm';
import SingleInput from './FormsComponent/SingleInput';
import TextArea from './FormsComponent/TextArea';
import Select from './FormsComponent/Select';
import *  as documentActions from '../actions/documentAction';

class ManageDocument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      docTitle: '',
      docContent: '',
      access: '',
      editor: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(content) {
    this.setState({
      docContent: content
    });
  }

  handleChange(event) {
    this.setState({
      docTitle: event.target.value.docTitle,
      access: event.target.value.access
    });
  }

  componentDidMount() {
    const config = {
      "selector": "#doc-text-area",
      "plugins": "autolink link image lists print preview textcolor table emoticons codesample",
      "toolbar": "undo redo | bold italic | fontsizeselect fontselect | alignleft aligncenter alignright | forecolor backcolor | table | numlist bullist | emoticons | codesample",
      "table_toolbar": "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
      "fontsize_formats": "8pt 10pt 12pt 14pt 18pt 24pt 36pt"
    }
    tinymce.init({
      selector: "#doc-text-area",
      plugins: `autolink link image lists 
      print preview textcolor table emoticons codesample`,
      toolbar: `undo redo | bold italic | 
      fontsizeselect fontselect | 
      alignleft aligncenter alignright | forecolor backcolor 
      | table | numlist bullist | emoticons | codesample`,
      table_toolbar: `tableprops tabledelete  
      | tableinsertrowbefore 
      tableinsertrowafter tabledeleterow | tableinsertcolbefore 
      tableinsertcolafter tabledeletecol`,
      fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
      setup: (editor) => {
        this.setState({ editor });
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.handleEditorChange(content);
        });
      }
    });
  }



  onClickSave(event) {
    event.preventDefault();
    const doc = {
      title: event.target.docTitle.value,
      content: this.state.docContent,
      access: event.target.access.value
    }
    console.log(doc)
    this.props.actions.saveDocuments(doc)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log('error');
        console.log(error);
      })
  }

  render() {

    const documentData = {
      docTitle: this.state.docTitle,
      docContent: this.state.docContent,
      access: this.state.access,
    }
    return (
      <div>
        <div className="container">
          <NavigationBar history={this.props.history} />
        </div>
        <div className="container">
          <div className="row">
            <DocumentForm
              selectedOption={this.state.access}
              documentData={documentData}
              onSave={this.onClickSave}
              handleEditorChange = {this.handleEditorChange}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
ManageDocument.propTypes = {
  actions: React.PropTypes.object.isRequired,
  documents: React.PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    documents: state.documents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDocument);