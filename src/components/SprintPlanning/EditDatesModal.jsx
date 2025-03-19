import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEpicDates } from "../../redux/epicDatesReducer";

import { Dialog, DialogFooter, PrimaryButton, DefaultButton } from "@fluentui/react";
import { DatePicker } from "@fluentui/react";

const EditDatesModal = ({ isOpen, onClose, epic }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const handleConfirm = () => {
    dispatch(
      updateEpicDates({
        epic,
        startDate: startDate ? startDate.getTime() : null, 
        dueDate: dueDate ? dueDate.getTime() : null, 
      })
    );
    onClose();
  };

  return (
    <Dialog hidden={!isOpen} onDismiss={onClose} modalProps={{ isBlocking: true }}>
      <div className="p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Edit Dates</h2>
       

        <div className="bg-gray-100 p-3 rounded-md mt-3">
          <span className="font-medium text-gray-700 flex items-center">
            📌 {epic}
          </span>
          <div className="mt-2 text-sm text-gray-800">
            <div><strong>Start date:</strong> {startDate ? startDate.toLocaleDateString() : "None"}</div>
            <div><strong>Due date:</strong> {dueDate ? dueDate.toLocaleDateString() : "None"}</div>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <DatePicker label="Start date" value={startDate} onSelectDate={setStartDate} />
          <DatePicker label="Due date" value={dueDate} onSelectDate={setDueDate} />
        </div>

        <DialogFooter>
          <DefaultButton onClick={onClose} text="Cancel" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded" />
          <PrimaryButton onClick={handleConfirm} text="Confirm" disabled={!startDate || !dueDate} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" />
        </DialogFooter>
      </div>
    </Dialog>
  );
};

export default EditDatesModal;
