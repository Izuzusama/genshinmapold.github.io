import React from 'react';
import clsx from 'clsx';
import Popup from 'reactjs-popup';

import './SubmitEditorDataPopup.css';

const SubmitEditorDataPopup = ({ trigger, onConfirm }) => {
  // NOTE: className on popup gets overridden with <class>-content, -overlay, and -arrow.
  return (
    <Popup
      trigger={trigger}
      className={clsx('popup-submit-editor-data')}
      modal
      position="center center"
      closeOnDocumentClick
      closeOnEscape
    >
      {(closePopup) => (
        <div className={clsx('popup-submit-editor-data-container')}>
          <span className={clsx('popup-submit-editor-data-header')}>Submit Editor Data</span>
          <span className={clsx('popup-submit-editor-data-content')}>
            Are you sure? If you clear the Editor data, it cannot be recovered.
          </span>
          <div className={clsx('popup-submit-editor-data-button-container')}>
            <div
              role="button"
              aria-label="Cancel Clear Data"
              tabIndex={0}
              onClick={closePopup}
              onKeyDown={closePopup}
              className={clsx(
                'popup-submit-editor-data-button',
                'popup-submit-editor-data-button-cancel'
              )}
            >
              Cancel
            </div>
            <div
              role="button"
              aria-label="Confirm Clear Data"
              tabIndex={0}
              onClick={() => {
                onConfirm();
                closePopup();
              }}
              onKeyDown={() => {
                onConfirm();
                closePopup();
              }}
              className={clsx(
                'popup-submit-editor-data-button',
                'popup-submit-editor-data-button-confirm'
              )}
            >
              Confirm
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default SubmitEditorDataPopup;
