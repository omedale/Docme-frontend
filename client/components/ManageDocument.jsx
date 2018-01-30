import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TinyMCE from 'react-tinymce';
import NavigationBar from './NavigationBar';
import DocumentForm from './DocumentForm';
import ApiCall from '../util/ApiCalls'
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
      editor: null,
      editMode: false
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

  componentWillMount() {
    if (this.props.match.params.id) {
      ApiCall.getDocument(this.props.match.params.id).then(document => {
        this.setState({
          docTitle: document.data.title,
          docContent: document.data.content,
          access: document.data.access,
          editMode: true
        })
      })
    }
  }


  onClickSave(event) {
    event.preventDefault();

    if (this.state.editMode === true) {
      const doc = {
        id: this.props.match.params.id,
        title: event.target.docTitle.value,
        content: this.state.docContent,
        access: event.target.access.value
      }
      this.props.actions.saveDocuments(doc)
        .then(res => {
          this.props.history.push('/');
        })
        .catch(error => {
          alert(error.data.message)
        })
    } else {
      const doc = {
        title: event.target.docTitle.value,
        content: this.state.docContent,
        access: event.target.access.value
      }
      this.props.actions.saveDocuments(doc)
        .then(res => {
          this.props.history.push('/');
        })
        .catch(error => {
          alert(error.data.message)
        })
    }
  }

  render() {
    const documentData = {
      docTitle: this.state.docTitle,
      docContent: this.state.docContent,
      access: this.state.access,
      mode: this.state.editMode
    }
    return (
      <div>
        <div className="">
          <NavigationBar history={this.props.history} />
        </div>
        <div className="docContainer">
          <div className="card row">
            <DocumentForm
              selectedOption={this.state.access}
              documentData={documentData}
              onSave={this.onClickSave}
              handleEditorChange={this.handleEditorChange}
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