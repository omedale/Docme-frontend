import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const DocumentList = ({ documents }) => {
  const List = documents.map(document =>
    <div>
      <div className="col s2 m3">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <p>{ document.content }</p>
            </div>
            <div className="card-action">
              <Link
                key={document.id + document.title}
                to={`/document/${document.id}`}
              >
                <div key={document.id}>{document.title}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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