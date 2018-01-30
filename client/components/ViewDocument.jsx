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
      currentDocument: '',
      userId: ''
    }
  }

  componentWillMount() {
    ApiCall.getDocument(this.props.match.params.id).then(document => {
      this.setState({
        currentDocument: document
      })
    })
    ApiCall.getUserInfo(localStorage.getItem('UserAccessToken')).then(res => {
      if (res.data) {
      this.setState({
        userId: res.data.info.user_id
      })
      }
    })
    this.props.actions.AllDocuments();
    // console.log(ApiCall.getUserInfo(localStorage.getItem('UserAccessToken')));
  }

  render() {

    let content = ''
    let documentId  = ''
    let docUserId = ''
    if (this.state.currentDocument !== '') {
      document.getElementById('titleContentId').innerHTML = this.state.currentDocument.data.title;
      document.getElementById('documentContentId').innerHTML = this.state.currentDocument.data.content;
      documentId = this.state.currentDocument.data.id;
      docUserId = this.state.currentDocument.data.user_id;
    }
    
    let editBtn = "";
    if (parseInt(this.state.userId) === parseInt(docUserId)){
      editBtn = <div><div className="fixed-action-btn horizontal">
      <Link
        to={`/document/edit/${documentId}`}
        className="btn-floating btn-large fabColor"
      >
        <i className="large material-icons">edit</i>
        Create Document
    </Link>
    </div></div>
    }

    const { documents } = this.props
    return (
      <div>
        <div className="">
          <NavigationBar history={this.props.history} />
        </div>
        {editBtn}
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