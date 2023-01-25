import React from 'react'
import Address from './Address'
import { Table } from 'react-bootstrap'

function AddressList({addressList, onDelete, onEdit}) {

    return (
    <>
        <h4 className="text-center ps-3 pb-2">Address Book</h4>
        <Table striped bordered hover className="text-center p-1" id="table">
            <thead>
                <tr>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Address 2</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {addressList.map(address => {
                    return <Address key={address.id} address={address} onDelete={onDelete} onEdit={onEdit}/>
                })}
            </tbody>
        </Table>
    </>
  )
}

export default AddressList