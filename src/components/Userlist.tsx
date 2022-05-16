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
} from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Users from "../Testdata/Users";

const Userlist = () => {
  const [show, setShow] = useState<boolean>(false);
  const [viewuser,setViewuser]=useState<boolean>(true);
  const [edit,setEdit]=useState<boolean>(false);
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
                        <AiFillEye className="bg-warning rounded p-1 " />
                        <FaUserEdit className="bg-primary rounded p-1" />
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
                {/* <tr>
                <td>1</td>
                <td>Joyadeep</td>
                <td></td>
                <td>Limbu</td>
                <td>jlimbu@deerhold.org</td>
                <td>SUPER ADMIN</td>
                <td className='d-flex justify-content-between fs-3 text-white'>
                   <AiFillEye onClick={()=>{setViewuser(true)}} className='bg-warning rounded p-1 '/>
                   <FaUserEdit className='bg-primary rounded p-1'/>
                   <MdDelete onClick={()=>{setShow(true)}} className={`${role==="SP_ADMIN"?"invisible":"visible"} bg-danger rounded p-1`}/>                  
                </td>
              </tr> */}
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
        size="sm"
        animation={true}
      >
        <ModalHeader closeButton className="border-bottom-0 "></ModalHeader>
        <ModalBody>
          <div className="fs-5">
           USER WILL BE HERE
          </div>
        </ModalBody>
      </Modal>





    </>
  );
};

export default Userlist;
