import React from 'react'
import Address from './Address'
import { Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const SearchResult = ({searchResult, onDelete, onEdit}) => {
    const [search, setSearch] = useState(searchResult)
    useEffect(() => {
        setSearch(searchResult)
    }, [searchResult])
  
    return (
    <>
    <h4 className="text-center ps-3 mb-3">Search Results</h4>
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
            {search.map(address => {
                return <Address key={address.id} address={address} onDelete={onDelete} onEdit={onEdit}/>
            })}
        </tbody>
    </Table>
    </>
  )
}

export default SearchResult