import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const DocumentList = ({ deleteDocument, documents, currentUserId }) => {
 
  const newDocuments = documents.reverse();
  const List = newDocuments.map(document => {
    let deleteBtn = '';
    if(parseInt(document.user_id) === parseInt(currentUserId)) {
      deleteBtn = <a onClick={() => deleteDocument(document.user_id)}  className="button remove">x</a>
    }
    return (<div  key={document.id + document.title}>
      <div className="col s1 m2">
        <div className="card horizontal cardDoc">
          <div className="card-stacked">
           { deleteBtn}
            <div className="card-content cardContentImage">
              <img className="thumb-image" src="img/thum.png"></img>
            </div>
            <div className="card-action card-footer cardDocAction">
              <Link
                key={document.id + document.title}
                to={`/document/${document.id}`}
              >
                <div className="docText" key={document.id}>{document.title.substr(0, 10)}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>)
  });
  return (
    <div>
      {List}
    </div>
  );
};

DocumentList.propTypes = {
  documents: React.PropTypes.array.isRequired
};

export default DocumentList 