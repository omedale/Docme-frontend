import * as types from './actionTypes'
import ApiCall from '../util/ApiCalls'

export function createDocument(document) {
  return { type: types.CREATE_DOCUMENT, document }
}

export function loadDocSuccess(document) {
  return {type: types.LOAD_DOCUMENTS_SUCCESS, document};
}

export function createDocumentSuccess(document) {
  return {type: types.CREATE_DOCUMENT_SUCCESS, document};
}

export function updateDocumentSuccess(document) {
  return {type: types.UPDATE_DOCUMENT_SUCCESS, document};
}

export function sendErrorMessage(errors) {
  return {type: types.ERROR_MESSAGE, errors};
}


export function AllDocuments() { 
  return function(dispatch) {
    return ApiCall.getAllDocuments().then(documents => {
      dispatch(loadDocSuccess(documents.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveDocuments(document) {
  return function(dispatch) {
    return ApiCall.saveDocuments(document).then(savedDocument => {
      document.id ? dispatch(updateDocumentSuccess(document)) : dispatch(createDocumentSuccess(document))
    }).catch(error => {
      dispatch(sendErrorMessage(error))
      throw(error);
    });
  };
}

