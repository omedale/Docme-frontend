import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavigationBar from './NavigationBar';
import DocumentList from './DocumentList';
import SingleInput from './FormsComponent/SingleInput';
import TextArea from './FormsComponent/TextArea';
import Select from './FormsComponent/Select';
import *  as documentActions from '../actions/documentAction';

class DocumentPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.AllDocuments();
  }

  render() {
    const { documents } = this.props
    return (
      <div>
        <div className="container">
          <div className="card bodycard">
            <div className="card-content">
              <div className="row">
                <DocumentList documents={documents} />
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
  console.log(state)
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