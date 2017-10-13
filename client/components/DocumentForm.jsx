import React from 'react';
import SingleInput from './FormsComponent/SingleInput';
import TextArea from './FormsComponent/TextArea';
import Select from './FormsComponent/Select';
import TinyMceEditor from './TinyMceEditor';

const DocumentForm = ({ documentData, selectedOption, onSave, handleEditorChange, onChange }) => {
  let accessType = ['Public', 'Private'];
  const options = accessType.map(access => {
    let index = 0
    return {
      id: index,
      value: access
    }
    index++
  })
  $(document).ready(function () {
    $('select').material_select();
  });
  return (
    <form onSubmit={onSave} className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <SingleInput
            inputType={'text'}
            title={'Title'}
            id={'docTitle'}
            name={'docTitle'}
            controlFunc={onChange}
            content={documentData.docTitle}
            placeholder={'Title'} />
        </div>
        <div className="input-field col s6">
          <Select
            name={'access'}
            id={'access'}
            title={'Access'}
            controlFunc={onChange}
            selectedOption={selectedOption}
            docAccess={options}
          />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <TinyMceEditor
            defaultValue={documentData.docContent}
            id={'createDoc'}
            handleEditorChange={handleEditorChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <button className="pull-right waves-effect waves-light btn">Save</button>
        </div>
      </div>
    </form>
  )
}

DocumentForm.propTypes = {
  documentData: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export default DocumentForm