import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row, Toast, ToastBody, ToastHeader,ToastContainer } from "react-bootstrap";
import inputs from '../utils/RegFormAtts';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Iregister from '../Interfaces/RegisterInterface';
import axios from 'axios';

const schema=yup.object().shape({
    name:yup.string().required("First name cannot be empty").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email:yup.string().email("Enter valid email").required("Email cannot be empty"),
    password:yup.string().required("password cannot be empty").min(8,"minimu 8 characters is required").max(15,"15 characters is limit"),
    role:yup.string().required("role cannot be empty"),
    org_id:yup.number().required("Organization id is mandetary")
})

const RegisterUSer:React.FC = () => {
  let role="SP_ADMIN";
  const [show,setShow]=useState({status:false,statusCode:0,message:""});

    const {register,handleSubmit,reset,formState:{errors}}=useForm({
        resolver:yupResolver(schema),mode:'onSubmit'
    })

      const submitEvent=(data:Iregister)=>{
         axios.post("http://localhost:4000/api/admin/user/create",data).then((res)=>{
           setShow({status:true,statusCode:res.status,message:res.data?.message});
           reset();
         }).catch((error)=>{
           console.error("error",error);
           setShow({status:true,statusCode:error.response.status,message:error.response.data.message})         
        })

      //   axios.post("http://192.168.10.7:4000/api/admin/user/create",data).then((res)=>{
      //     setShow({status:true,statusCode:res.status,message:res.data?.message});
      //     reset();
      //   }).catch((error)=>{
      //     console.error("error",error);
      //     setShow({status:true,statusCode:error.response.status,message:error.response.data.message})         
      //  })
      
      }
    
 
      return (
        <div className="App">
        
          <ToastContainer position="top-end" >
        <Toast className={`${show.statusCode===200?"bg-success":"bg-danger"} text-white shadow-lg`} onClose={()=>{setShow({status:false,statusCode:show.statusCode,message:""})}} show={show.status} delay={3000} autohide >
          <ToastHeader> 
          </ToastHeader>
          <ToastBody className='fs-6'>
            <div>
              {show.message}
            </div>
          </ToastBody>
        </Toast>
        </ToastContainer>


          <Container fluid>
            <Row>
              <Col
                sm={4}
                className="mx-auto mt-3 mb-3 border border-black rounded-3 pb-2 bg-light shadow"
              >
                <Form onSubmit={handleSubmit(submitEvent as any)}>
                  <div className="text-center">
                    <p className="fs-1 fw-bold text-dark">Register</p>
                  </div>
                  {
                    inputs.map((item,index)=>{
                      return (
                        <FormGroup key={index} className="mb-0">
                        <Form.Label className="m-0">{item.label}</Form.Label>
                      <Form.Control
                        type={item.type}
                        placeholder={item.placeholder}
                        {...register(`${item.name}`)}
                        className={errors[item.name] && "border border-danger"}
                      />
                      <div className='text-danger' style={{fontSize:"11px", height:"13px"}}>{errors[item.name]?.message}</div>
                        </FormGroup>
                      )
    
                    })
                  }
                  
         
                  <FormGroup className='mb-2'>
                    <Form.Label className='m-0'>Select User Type</Form.Label>
                    <Form.Select {...register("role")} className={errors.role && "border border-danger"} >
                      <option value="" >Select User Type</option>
                     { role==="SP_ADMIN" && <option value="ADMIN">ORGANIZATION ADMIN</option>}
                     { role==="SP_ADMIN" && <option value="CT_ADMIN">CANTEEN ADMIN</option> }
                    { role==="ADMIN" && <option value="USER">USER</option>}
                    </Form.Select>
                    <div className='text-danger' style={{fontSize:"11px", height:"13px"}}>{errors.role?.message}</div>
                  </FormGroup>
                  <div className="text-center w-full">
                    <Button variant="primary" type="submit" className="px-2 fs-6 fw-bold">
                      Register
                    </Button>
                  </div>
                </Form>
    
              </Col>
            </Row>
          </Container>
        </div>
      );
}

export default RegisterUSer