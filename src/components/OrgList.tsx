import React,{useState} from 'react'
import { Col, Container, Row, Table,Modal,ModalBody,ModalHeader,ModalFooter,Button,Badge,Form,FormLabel,FormGroup } from 'react-bootstrap'
import { AiFillEye } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const OrgList = () => {
    const [show, setShow] = useState<boolean>(false);
    const [viewuser,setViewuser]=useState<boolean>(false);
    const [edit,setEdit]=useState<boolean>(false);
    const [user,setUser]=useState({name:"Deerhold Nepal Ltd.",orgID:10001});
 
  return (
      <>
    <Container className='border border-danger' >
        <Row>
            <Col>
                <div className='fw-bold fs-1'>
                    Organization List
                </div>
                <Table responsive="sm" bordered hover className='rounded'>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Organization Name
                        </th>
                        <th>
                            Org ID
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Deerhold Nepal Ltd.</td>
                        <td>1001</td>
                        <td className="d-flex justify-content-between fs-3 text-white">
                        <AiFillEye  className="bg-warning rounded p-1 "  onClick={()=>setViewuser(true)} />
                        <FaUserEdit className="bg-primary rounded p-1" onClick={()=>setEdit(true)} />
                        <MdDelete  className="bg-danger rounded p-1"  onClick={() => {setShow(true);}} />
                      </td>
                    </tr>


                    <tr>
                        <td>2</td>
                        <td>Hamro Patro </td>
                        <td>1011</td>
                        <td className="d-flex justify-content-between fs-3 text-white">
                        <AiFillEye  className="bg-warning rounded p-1 "  onClick={()=>setViewuser(true)} />
                        <FaUserEdit className="bg-primary rounded p-1" onClick={()=>setEdit(true)} />
                        <MdDelete  className="bg-danger rounded p-1"  onClick={() => {setShow(true);}} />
                      </td>
                    </tr>


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
           <Form>
           <div className="text-center">
                    <p className="fs-2 fw-bold text-dark">Update</p>
                  </div>
             <FormGroup className="mb-0">
              <Form.Label className="m-0">
                Orgainzation Name
              </Form.Label>
              <Form.Control type="text" placeholder="Organization Name"  className={"border border-danger"} />
              <div className='text-danger' style={{fontSize:"11px", height:"13px"}}>error here</div>
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
  )
}

export default OrgList