import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationList = ({numPerPage, totalAddresses, paginate}) => {
  const pagNumbers = []
  const pagTotal = Math.ceil(totalAddresses / numPerPage)
  for(let i=1; i <= pagTotal; i++) {
    pagNumbers.push(
        <Pagination.Item 
                key={i}
                active={i === "active"}
                onClick={() => paginate(i)}
                >
                {i}
        </Pagination.Item>
    )
  }
  
    return (
        <Pagination className="d-flex justify-content-center mb-5">
            {pagNumbers}
        </Pagination>
  )
}

export default PaginationList