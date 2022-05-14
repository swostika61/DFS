import React,{useState} from 'react'
import { Col, Container, Row, Table,Button,Modal,ModalBody,ModalHeader,ModalFooter } from 'react-bootstrap'
import {AiFillEye} from 'react-icons/ai'
import {FaUserEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const Userlist = () => {
  const[show,setShow]=useState<boolean>(false);
  let role="SP_ADMIN";
  const handleDelete=async(id:number)=>{
    try {
      //await axios.delete("http://localhost:40000/api/user");
      // await :: call toast component with message
      await setShow(false)
    } catch (error) {
      console.log(error);
      // :: call toast component with error message
    }
  }
  return (
    <>
    <Container fluid className="bg-light ">
      <Row>
        <Col>
        <div className='fw-bold fs-1'>
          Users
        </div>
          <Table responsive="sm" striped bordered hover className='rounded'>
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  First Name
                </th>
                <th>
                  Middle Name
                </th>
                <th>
                  Last Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Role
                </th>
                <th>
                  options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Joyadeep</td>
                <td></td>
                <td>Limbu</td>
                <td>jlimbu@deerhold.org</td>
                <td>SUPER ADMIN</td>
                <td className='d-flex justify-content-between fs-3 text-white'>
                   <AiFillEye className='bg-warning rounded p-1 '/>
                   <FaUserEdit className='bg-primary rounded p-1'/>
                   <MdDelete onClick={()=>{setShow(true)}} className={`${role==="SP_ADMIN"?"invisible":"visible"} bg-danger rounded p-1`}/>                  
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ram</td>
                <td>Bahadur</td>
                <td>Gurung</td>
                <td>rbgurung@deerhold.org</td>
                <td>USER</td>
                <td className='d-flex justify-content-between fs-3 text-white'>
                   <AiFillEye className='bg-warning rounded p-1 ' onClick={()=>{alert("clicked")}} />
                   <FaUserEdit className='bg-primary rounded p-1'/>
                   <MdDelete onClick={()=>{setShow(true)}} className={`${role==="ADMIN"?"invisible":"visible"} bg-danger rounded p-1`}/>                  
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Joyadeep</td>
                <td></td>
                <td>Limbu</td>
                <td>jlimbu@deerhold.org</td>
                <td>ORGANIZATION ADMIN</td>
                <td className='d-flex justify-content-between fs-3 text-white'>
                   <AiFillEye className='bg-warning rounded p-1 ' style={{cursor:"pointer"}}/>
                   <FaUserEdit className='bg-primary rounded p-1' style={{cursor:"pointer"}}/>
                   <MdDelete onClick={()=>{setShow(true)}} className={`${role==="ADMIN"?"invisible":"visible"} bg-danger rounded p-1`} style={{cursor:"pointer"}}/>                  
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Ram</td>
                <td>Bahadur</td>
                <td>Gurung</td>
                <td>rbgurung@deerhold.org</td>
                <td>USER</td>
                <td className='d-flex justify-content-between fs-3 text-white'>
                   <AiFillEye className='bg-warning rounded p-1 '/>
                   <FaUserEdit className='bg-primary rounded p-1'/>
                   <MdDelete onClick={()=>{setShow(true)}}className={`${role==="ADMIN"?"invisible":"visible"} bg-danger rounded p-1`}/>                  
                </td>
              </tr>
            </tbody>

          </Table>
        </Col>
      </Row>
    </Container>



    <Modal show={show} onHide={()=>{setShow(false)}} size="sm" animation={true} >
   <ModalHeader closeButton className='border-bottom-0 ' >
   </ModalHeader>
   <ModalBody>
     <div className='fs-5'>
       Deleting this item will premanently remove item. This action cannot be reverted.
       Do you really want to delete?
     </div>
   </ModalBody>
   <ModalFooter className='border-top-0'>
     <Button variant='secondary' onClick={()=>{setShow(false)}} >Cancel</Button>
     <Button variant='danger' onClick={()=>{setShow(false)}}>Delete</Button>
   </ModalFooter>
    </Modal>



    </>
  )
}

export default Userlist