import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange ,handleCancelClick}) => {
  return (
    <tr>
        <td>
            <input type="text" required="required" placeholder='Enter a name...' name='fullName' value={editFormData.fullName} onChange={handleEditFormChange}></input>
        </td><td>
            <input type="text" required="required" placeholder='Enter an address...' name='address' value={editFormData.address} onChange={handleEditFormChange}></input>
        </td><td>
            <input type="text" required="required" placeholder='Enter a phoneNumber...' name='phoneNumber' value={editFormData.phoneNumber}  onChange={handleEditFormChange}></input>
        </td><td>
            <input type="emailt" required="required" placeholder='Enter an email...' name='email' value={editFormData.email} onChange={handleEditFormChange}></input>
        </td>
        <td style={{ color: 'blue', marginRight: '5px'}}>
            <button type='submit'>Save</button>
            <button type='button' onClick={handleCancelClick}>Cancel</button>
        </td>
        
    </tr>
  )
}

export default EditableRow