import React from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Col, Container, Form, FormGroup, FormLabel, Row,Button } from 'react-bootstrap'
import axios from 'axios';


const schema=yup.object().shape({
  name:yup.string().required("Organization name cannot be empty").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
})

const AddOrg:React.FC = () => {
  const {register,handleSubmit,reset,formState:{errors}}=useForm({
    resolver:yupResolver(schema),mode:'all'
})

const submitEvent=()=>{
  //axios.post(...)
  reset();
}

  return (

    <>
        <Container className=''>
            <Row>
                <Col className=''>
                    <div className='w-50 mx-auto border border-black pb-3 text-black'>
                <div className='text-center fs-4'>Add organization</div>
                    <Form className='px-4' onSubmit={handleSubmit(submitEvent)}  >
                        <FormGroup className='mb-0'>
                            <FormLabel className="m-0">
                                Organization Name
                            </FormLabel>
                            <Form.Control type="text" placeholder="enter organization name" {...register("name")} className={errors.name && "border border-danger"} />
                        </FormGroup>
                        <div className='text-danger' style={{fontSize:"11px", height:"13px"}}>{errors.name?.message}</div>
              
                        <div className="text-center w-full mt-2">
                    <Button variant="primary" type="submit" className="px-2 fs-6 fw-bold">
                      Register
                    </Button>
                  </div>
                    </Form>
                    </div> 
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AddOrg