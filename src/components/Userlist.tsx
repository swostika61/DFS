import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Badge,
  Form,
  FormGroup
} from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Users from "../Testdata/Users";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema=yup.object().shape({
  name:yup.string().required("First name cannot be empty").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email:yup.string().email("Enter valid email").required("Email cannot be empty"),
  // password:yup.string().required("password cannot be empty").min(8,"minimu 8 characters is required").max(15,"15 characters is limit"),
  role:yup.string().required("role cannot be empty"),
  org_id:yup.string().required("Organization id is mandetary")
})

const Userlist = () => {

  const [show, setShow] = useState<boolean>(false);
  const [viewuser,setViewuser]=useState<boolean>(false);
  const [edit,setEdit]=useState<boolean>(false);
  
  const [msg,setMSg]=useState({status:false,statusCode:0,message:""})
  
  const [user,setUser]=useState({name:"joyadeep Limbu",email:"jlimbu@deerhold.org",role:"USER",org_id:2});
  
  // const [edit,setEdit]=useState<boolean>(false);


  const {register,handleSubmit,reset,formState:{errors}}=useForm({
    resolver:yupResolver(schema),mode:'all'
})

  const handleDelete = async (id: number) => {
    try {
      //await axios.delete("http://localhost:40000/api/user");
      // await :: call toast component with message
      await setShow(false);
    } catch (error) {
      console.log(error);
      // :: call toast component with error message
    }
  };

  const handleChange=(e:any)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

   const submitEvent=()=>{
        // TODO :  axios.patch
        // TODO : reset
        // TODO : show toast
        console.log("submitted !!!");
        
      }

  return (
    <>
      <Container className="bg-light ">
        <Row>
          <Col>
            <div className="fw-bold fs-1">Users</div>
            <Table responsive="sm" striped bordered hover className="rounded">
              <thead>
                <tr>
                  <th>#</th>
                 <th>Name</th>
                 <th>Image</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Org_id</th>
                  <th>options</th>
                </tr>
              </thead>
              <tbody>
                {Users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.image}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.org_id}</td>
                      <td className="d-flex justify-content-between fs-3 text-white">
                        <AiFillEye onClick={()=>setViewuser(true)} className="bg-warning rounded p-1 " />
                        <FaUserEdit onClick={()=>setEdit(true)} className="bg-primary rounded p-1" />
                        <MdDelete
                          onClick={() => {
                            setShow(true);
                          }}
                          className={`${
                            user.role === "SP_ADMIN" ? "invisible" : "visible"
                          } bg-danger rounded p-1`}
                        />
                      </td>
                    </tr>
                  );
                })}
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      
      {/* delete Modal */}
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        size="sm"
        animation={true}
      >
        <ModalHeader closeButton className="border-bottom-0 "></ModalHeader>
        <ModalBody>
          <div className="fs-5">
            Deleting this item will premanently remove item. This action cannot
            be reverted. Do you really want to delete?
          </div>
        </ModalBody>
        <ModalFooter className="border-top-0">
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setShow(false);
            }}
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>

    
    {/* View Modal */}
    <Modal
        show={viewuser}
        onHide={() => {
          setViewuser(false);
        }}
        animation={true}
      >
        <ModalHeader closeButton className="border-bottom-0 "></ModalHeader>
        <ModalBody>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg" width={120} height={120} className="rounded-circle  "    />
            <div className="fs-4 fw-bolder ">Joyadeep Limbu</div>
            <div className="text-secondary">jlimbu@deerhold.org</div>
            <Badge bg="dark">ADMIN</Badge>
            <div className="text-secondary">org name</div>

           
          </div>
        </ModalBody>
      </Modal>

{/* edit data */}
<Modal
        show={edit}
        onHide={() => {
          setEdit(false);
        }}
        animation={true}
      >
        <ModalHeader closeButton className="border-bottom-0 "></ModalHeader>
        <ModalBody>
          <div className="">
           <Form onSubmit={handleSubmit(submitEvent)}>
           <div className="text-center">
                    <p className="fs-2 fw-bold text-dark">Update</p>
                  </div>
            
             <FormGroup className="mb-0">
              <Form.Label className="m-0">
                Name
              </Form.Label>
              <Form.Control type="text" placeholder="Name" value={user.name} {...register("name") } onChange={handleChange}   className={errors.name && "border border-danger"} />
              <div className='text-danger' style={{fontSize:"11px", height:"13px"}}>{errors.name?.message}</div>
             </FormGroup>

             <FormGroup className="mb-0">
              <Form.Label className="m-0">
                Email
              </Form.Label>
              <Form.Control type="email" placeholder="Email" value={user.email} {...register("email")}  onChange={handleChange} className={errors.email && "border border-danger"} />
              <div className='text-danger' style={{fontSize:"11px", height:"13px"}}>{errors.email?.message}</div>
             </FormGroup>

             <FormGroup className="mb-0">
              <Form.Label className="m-0">
                Organization ID
              </Form.Label>
              <Form.Control type="number" placeholder="Organiztion ID" value={user.org_id} {...register("org_id")}  onChange={handleChange} className={errors.org_id && "border border-danger"}  />
              <div className='text-danger' style={{fontSize:"11px", height:"13px"}}>{errors.org_id?.message}</div>
             </FormGroup>

             <FormGroup className="mb-2">
              <Form.Label className="m-0">
                Role
              </Form.Label>
              <Form.Select value={user.role} {...register("role")}  onChange={handleChange} className={errors.role && "border border-danger"} >
                      <option value="" >Select User Type</option>
                     <option value="ADMIN">ORGANIZATION ADMIN</option>
                     <option value="CT_ADMIN">CANTEEN ADMIN</option> 
                    <option value="USER">USER</option>
                    </Form.Select>
              <div className='text-danger' style={{fontSize:"11px", height:"13px"}}>{errors.role?.message}</div>
             </FormGroup>

             <div className="text-center w-full">
                    <Button variant="primary" type="submit" className="px-2 fs-6 fw-bold">
                      Update
                    </Button>
                  </div>

           </Form>
           
          </div>
        </ModalBody>
      </Modal>





    </>
  );
};

export default Userlist;
