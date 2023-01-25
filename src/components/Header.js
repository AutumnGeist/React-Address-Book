import React from 'react'
import SearchForm from './SearchForm'
import { Navbar, Nav } from 'react-bootstrap'
import { FaAddressBook } from "react-icons/fa";

function Header({onAdd, onView, onSearch, showForm, showBook, showSearch}) {
    return (
    <>
    <Navbar id="navbar" className="pt-4 pb-4 mb-5 d-flex justify-content-around">
        <div className="d-flex flex-row">
            <FaAddressBook color="gray" size="50px"/>
            <h1 className="text-center ps-2"> Address Book</h1>         
        </div>
        <Nav className="flex-row" variant="tabs">       
            <Nav.Item>                     
                <Nav.Link 
                    className="me-1" 
                    onClick={onAdd} 
                    >{showForm ? "Close Address Form" : "Add New Address"}
                </Nav.Link>   
            </Nav.Item>
            <Nav.Item>   
                <Nav.Link                        
                    onClick={onView} 
                    >{showBook ? "Close Address Book" : "View Address Book"}
                </Nav.Link>   
            </Nav.Item>
        </Nav>
        <div>
            <SearchForm onSearch={onSearch} showSearch={showSearch}/>
        </div>
    </Navbar>
    </>
  )
}

export default Header