import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import inputs from '../utils/RegFormAtts';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema=yup.object().shape({
    fname:yup.string().required("First name cannot be empty").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    // mname:yup.string(),
    lname:yup.string().required("Last name cannot be empty").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email:yup.string().email("Enter valid email").required("Email cannot be empty"),
    password:yup.string().required("password cannot be empty").min(8,"minimu 8 characters is required").max(15,"15 characters is limit"),
    // role:yup.string().required("role cannot be empty")
})

const Register = () => {
const [user,setUser]=useState({email:"",password:""})
const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),mode:"onSubmit"
})

const formSubmit=(data:any)=>{
    alert("data saved")
}
    return (
    <Container>
        <Row>
            <Col sm={4}>
                <Form onSubmit={handleSubmit(formSubmit)}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='text' placeholder='email' {...register("email")}/>
                        <small className='text-danger'>{errors.email?.message}</small>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type='text' placeholder='fname' {...register("fname")}/>
                        <small className='text-danger'>{errors.fname?.message}</small>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>lname</Form.Label>
                        <Form.Control type='text' placeholder='lname' {...register("lname")}/>
                        <small className='text-danger'>{errors.lname?.message}</small>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='password' {...register("password")} />
                        <small className='text-danger'>{errors.password?.message}</small>
                    </Form.Group>
                    
                    <Button type='submit' variant="success" className='mt-3'>Register</Button>
                    
                </Form>
            </Col>
        </Row>
       
    </Container>
  )
}

export default Register