import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'

function AddressForm({addAddress, editA, showEdit, updateAddress}) {
    //address state object
    const [address, setAddress] = useState({})
    //validation state
    const [validated, setValidated] = useState(false)

    //if there is an address to edit, update the address state
    useEffect(() => {
        if(editA) {
            setAddress(editA)
        }
    }, [editA])

    //clear form values
    const clearForm = (e) => {
        e.preventDefault()
        setAddress({
            name: '',
            street: '',
            room: '',
            city: '',
            state: '',
            zip: ''
        })
    }
    
    //update object state properties on input change
    const onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setAddress({...address, [name]: value})
    }

    //validate all form inputs
    const validateForm = (e) => {
        const form = e.currentTarget
        if(form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
            console.log("form validation error")
            setValidated(true)
            return false             
        }else {
            setValidated(false)
            return true
        }
    }

    //handle form submit and save the address to prop
    const onSubmit = (e) => {
        e.preventDefault()
        //check if form is valid
        if(validateForm(e)) {
            //if an ID exists then update, else add as new address
            if(address.id) {
                updateAddress(address)   
                console.log("address updated")        
            }else {
                addAddress(address)
                clearForm(e)
                console.log("new address added")
            }
        }   
    }
  
    return (
    <Form className="w-50 mx-auto pb-5" noValidate validated={validated} onSubmit={onSubmit}>
        <h4>{editA ? "Edit Address" : "Add New Address"}</h4>
        <Form.Group>
            <Form.Label>Contact Name: </Form.Label>
            <Form.Control 
                required
                placeholder="John Smith"
                type="text"
                name="name"
                value={address.name || ''}
                onChange={onChange}
            />
            <Form.Control.Feedback type="invalid">
                Please enter a contact name
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="pt-1">
            <Form.Label>Address: </Form.Label>
            <Form.Control 
                required
                placeholder="123 Main St"
                type="text"
                name="street"
                value={address.street || ''}
                onChange={onChange}
            />
            <Form.Control.Feedback type="invalid">
                Please enter a street address
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="pt-1">
            <Form.Label>Address 2: </Form.Label>
            <Form.Control 
                placeholder="Apartment, studio, or floor"
                type="text"
                name="room"
                value={address.room || ''}
                onChange={onChange}
            />
        </Form.Group>
        <Row className="pt-1">
            <Form.Group as={Col}>
                <Form.Label>City: </Form.Label>
                <Form.Control 
                    required
                    type="text"
                    name="city"
                    value={address.city || ''}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a City
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>State: </Form.Label>
                <Form.Select 
                    required
                    type="text"
                    name="state"
                    value={address.state || ''}
                    onChange={onChange}>
                        <option value="">Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Please select a State
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Zip Code: </Form.Label>
                <Form.Control 
                    required
                    type="text"
                    pattern="[0-9]{5}"
                    name="zip"
                    value={address.zip || ''}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a 5-digit Zip Code
                </Form.Control.Feedback>
            </Form.Group>
        </Row>        
        <Form.Group className="pt-2 d-flex flex-nowrap justify-content-between">
            <div>
                <Button variant="light" className="me-3" type="clear" onClick={clearForm}>Clear</Button>
                <Button variant="primary" className="me-3" type="submit">{editA ? "Update" : "Submit"}</Button>
            </div>
            {editA ? <Button variant="danger" className="d-flex align-self-end" onClick={showEdit}>Cancel Edit</Button> : ''}
        </Form.Group>
    </Form>
  )
}

export default AddressForm