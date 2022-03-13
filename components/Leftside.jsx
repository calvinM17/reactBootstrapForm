
import React from 'react'
import { Form, FormControl, FormGroup, FormLabel, Button} from 'react-bootstrap'

const Leftside = () => {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <Form style={{width: "80%", marginLeft:"10%", marginTop:"10%"}}>
        <FormGroup>
          <FormLabel>Enter Your Email</FormLabel>
          <FormControl type="email" placeholder="Enter Your Email"></FormControl>
        </FormGroup><br/>
        <FormGroup>
          <FormLabel>Enter Your Password</FormLabel>
          <FormControl placeholder="Enter Your Password" type="password"></FormControl>
        </FormGroup> <br/>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default Leftside