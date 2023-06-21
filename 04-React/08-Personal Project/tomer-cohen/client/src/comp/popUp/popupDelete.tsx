import React, { useState } from 'react';
import "./popupStyle/popupStyle.scss"

type ConfirmDeleteProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ message, onConfirm, onCancel }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleConfirm = () => {
    setIsOpen(false);
    onConfirm();
  };

  const handleCancel = () => {
    setIsOpen(false);
    onCancel();
  };

  return isOpen ? (
    <div className="confirmation-dialog">
      <p>{message}</p>
      <div className="confirmation-buttons">
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  ) : null;
};

export default ConfirmDelete;
