import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import DocumentList from './DocumentList';
import ApiCall from '../util/ApiCalls'
import SingleInput from './FormsComponent/SingleInput';
import TextArea from './FormsComponent/TextArea';
import Select from './FormsComponent/Select';
import *  as documentActions from '../actions/documentAction';

class DocumentPage extends React.Component {
  constructor(props) {
    super(props);
    this.deleteDocument = this.deleteDocument.bind(this);
  }

  componentWillMount() {
    this.props.actions.AllDocuments();
  }

  deleteDocument(param){
    ApiCall.deleteDocument(param).then(res => {
      this.props.actions.AllDocuments();
    })
  }

  render() {
    const { documents } = this.props
    return (
      <div>
        <div className="docContainer">
          <div className="fixed-action-btn horizontal">
            <Link
            to="/document"
            className="btn-floating btn-large fabColor"        
            >
            <i className="large material-icons">add</i>
            Create Document
            </Link>              
          </div>
          <div className=" bodycard">
            <div className="card-content">
              <div className="row">
                <DocumentList deleteDocument={this.deleteDocument} documents={documents} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
DocumentPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DocumentPage);