import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Header from "./components/Header";
import AddressList from "./components/AddressList";
import AddressForm from "./components/AddressForm";
import PaginationList from "./components/PaginationList";
import SearchResult from "./components/SearchResult";

function App() {
  //state for show/hide components
  const [showForm, setShowForm] = useState(false)
  const [showBook, setShowBook] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  //state for all addresses, pulled from DB data
  const [addressList, setAddressList] = useState([])
  //state for editAddress
  const [editA, setEditA] = useState()
  //state for search result
  const [searchResult, setSearchResult] = useState([])
  //state for current pagination page, default = page  1
  const [currentPage, setCurrentPage] = useState(1)
  //state for current search pagination page
  const [currentSearchPage, setCurrentSearchPage] = useState(1)
  //state for number of addresses displayed per pagination page
  const [numPerPage] = useState(10)

  //get data from JSON server at startup
  useEffect(() => {
    const getBook = async () => {
      try {
        const book = await fetchBook()
        setAddressList(book)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])


  //Fetch all addresses from server & sort alphabetically by name
  const fetchBook = async () => {
    const res = await fetch('http://localhost:5000/addressBook?_sort=name&_order=asc')
    const data = await res.json()
    return data
  }

  //Fetch a specific address by ID
  const fetchAddress = async (id) => {
    const res = await fetch(`http://localhost:5000/addressBook/${id}`)
    const data = await res.json()
    return data
  }

  //add new address to addressList
  const addAddress = async (address) => {
    try {
      //add to DB
        await fetch('http://localhost:5000/addressBook', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(address)
      })
      //update the state by fetching DB data
      const book = await fetchBook()
      setAddressList(book)
      console.log("Sucessfully added new contact")
    } catch (error) {
      console.log(error)
    }
  }

  //delete an address by ID
  const deleteAddress = async (id) => {
    try {
      //remove the address from DB
      await fetch(`http://localhost:5000/addressBook/${id}`, {
        method: 'DELETE'
      })
      console.log("Deleted: ", id)
      //update state by filtering out the specified address
      setAddressList(addressList.filter((a) => a.id !== id))
      //update search results to re-render the SearchResults component
      if(searchResult) {
        setSearchResult(searchResult.filter((a) => a.id !== id))
        //if there was only one result, hide the search results
        if(searchResult.length === 1) {
          setShowSearch(false)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  //edit address (called with edit buttons)
  const editAddress = async (id) => {
    //show the edit form, and close the add form if open
    setShowEdit(!showEdit)
    setShowForm(false)
    try {
      const a = await fetchAddress(id)
      setEditA(a)
    } catch (error) {
      console.log(error)
    }
  } 

  const updateAddress = async (data) => {
    //close the edit form
    setShowEdit(false)
    console.log("UpdateAddress: ", data)
    try {
      //update the DB with PATCH
      await fetch(`http://localhost:5000/addressBook/${data.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      })
      //update state, replace the address with the matching ID
      setAddressList(
        addressList.map((a) => 
          (a.id === data.id ? a=data : a)
        )
      )
      //update search results to re-render the SearchResults component
      if(searchResult) {
        setSearchResult(searchResult.map((a) => (a.id === data.id ? a=data : a)))
      }
      console.log("Successfully Updated")
    } catch (error) {
      console.log(error)
    }
  }

  //search database for query & update search states
  const search = async (query) => {
    console.log("Query: ", query)
    try {
      const res = await fetch(`http://localhost:5000/addressBook/?q=${query}`)
      const data = await res.json()
      if(data.length > 0) {
        console.log("Search Results: ", data)
        setSearchResult(data)
        setShowSearch(true)
      }else {
        console.log("No Results Found")
        alert("No Results Found")
      }
    } catch (error) {
      console.log(error)
    } 
  }

  //get current address list for pagination
  const indexOfLastA = currentPage * numPerPage
  const indexOfFirstA = indexOfLastA - numPerPage
  const currentList = addressList.slice(indexOfFirstA, indexOfLastA)

  // //apply pagination to search result
  const indexOfLastS = currentSearchPage * numPerPage
  const indexOfFirstS = indexOfLastS - numPerPage
  const currentSearchResult = searchResult.slice(indexOfFirstS, indexOfLastS)

  //change pagination page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const paginateSearch = (pageNumber) => setCurrentSearchPage(pageNumber)


  return (
    <>
      <Header 
        onAdd={() => {
          setShowForm(!showForm)
          setShowEdit(false)
        }} 
        onView={() => setShowBook(!showBook)}
        onSearch={() => {
          setShowSearch(!showSearch)
          setSearchResult([])
        }}
        showForm={showForm}
        showBook={showBook}
        showSearch={search}
        searchResult={searchResult}
      />
      {showForm && <AddressForm addAddress={addAddress} />}
      {showEdit && <AddressForm editA={editA} showEdit={() => setShowEdit()} updateAddress={updateAddress}/>}
      {showSearch && <SearchResult searchResult={currentSearchResult} onDelete={deleteAddress} onEdit={editAddress} />}
      {showSearch && <PaginationList numPerPage={numPerPage} totalAddresses={searchResult.length} paginate={paginateSearch} />}
      {showBook && <AddressList addressList={currentList} onDelete={deleteAddress} onEdit={editAddress}/>}
      {showBook && <PaginationList numPerPage={numPerPage} totalAddresses={addressList.length} paginate={paginate} />}
    </>
  )
}

export default App;
