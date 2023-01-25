import React from 'react'
import { Button} from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

function Address({address, onDelete, onEdit}) {    
    return (
    <tr>
        <td>{address.name}</td>
        <td>{address.street}</td>
        <td>{address.room}</td>
        <td>{address.city}</td>
        <td>{address.state}</td>
        <td>{address.zip}</td>
        <td>
            <Button variant="warning" size="sm" onClick={() => onEdit(address.id)}>
               <MdEdit />
            </Button>
        </td>
        <td>
            <Button variant="danger" size="sm" onClick={() => onDelete(address.id)}>
                <FaTimes />
            </Button>
        </td>
    </tr>
  )
}

export default Address