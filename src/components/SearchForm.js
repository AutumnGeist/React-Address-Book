import React from 'react'
import { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

function SearchForm({onSearch, showSearch}) {
   //state for search query
   const [search, setSearch] = useState()
   //state for searchResult
   
   //search bar form submit handler
   const onSubmit = (e) => {
        e.preventDefault()
       //validate input
        if(search != null) {
        showSearch(search)
        setSearch('')
       }else {
        alert("Please enter a search query")
       }
    
   }
  
    return (
    <>
    {/* Search bar form */}
    <Form onSubmit={onSubmit}>
        <Row>
            <Form.Group as={Col} className="d-flex justify-content-center p-2">
                <Form.Control 
                    placeholder="Search for Contact" 
                    type="text"
                    id="searchbar"
                    className="searchbar me-1"
                    name="search"
                    value={search || ''}
                    onChange={(e) => setSearch(e.target.value)}           
                />
                <Button
                    type="submit"
                    className="me-1"
                    variant="primary"
                    >Search
                </Button>
                <Button variant="secondary" onClick={onSearch}>Clear Results</Button>
            </Form.Group>
        </Row>
    </Form>
    </>
  )
}

export default SearchForm