import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import DocumentList from './DocumentList';
import SingleInput from './FormsComponent/SingleInput';
import TextArea from './FormsComponent/TextArea';
import NavigationBar from './NavigationBar';
import ApiCall from '../util/ApiCalls'
import Select from './FormsComponent/Select';
import *  as documentActions from '../actions/documentAction';

class ViewDocument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDocument: ''

    }
  }

  componentWillMount() {
    ApiCall.getDocument(this.props.match.params.id).then(document => {
      this.setState({
        currentDocument: document
      })
    })
    this.props.actions.AllDocuments();
  }

  render() {
    let content = ''
    let documentId  = ''
    if (this.state.currentDocument !== '') {
      document.getElementById('titleContentId').innerHTML = this.state.currentDocument.data.title;
      document.getElementById('documentContentId').innerHTML = this.state.currentDocument.data.content;
      documentId = this.state.currentDocument.data.id;
    }

    const { documents } = this.props
    return (
      <div>
        <div className="">
          <NavigationBar history={this.props.history} />
        </div>
        <div className="fixed-action-btn horizontal">
          <Link
            to={`/document/edit/${documentId}`}
            className="btn-floating btn-large fabColor"
          >
            <i className="large material-icons">edit</i>
            Create Document
        </Link>
        </div>
        <div className="docContainer">
          <div className=" bodycard">
            <div className="card-content">
              <div className="row">
                <div className="">
                  <div className="viewContainer">
                    <h3 id="titleContentId">  </h3>
                    <div id="documentContentId">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ViewDocument.propTypes = {

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

export default connect(mapStateToProps, mapDispatchToProps)(ViewDocument);