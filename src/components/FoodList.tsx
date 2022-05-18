import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Container,Row,Col,Table} from 'react-bootstrap'
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri';
import Foods from './Foods';
const FoodList = () => {
  
  const [foodlist,setFoodlist]=useState();
  const [show,setShow]=useState<boolean>(true);
  useEffect(()=>{
    const fetchfood=async()=>{
      const result=await axios.get("http://localhost:4000/api/admin/food/fetch");
      await setFoodlist(result.data.foods)
    }
    fetchfood();
    
  },[])
  return (
    <Container className="bg-light ">
      <Row>
        <Col>
        <div className='fw-bold fs-1'>
          Today's Menu
        </div>
          <Table responsive="sm" bordered hover className='rounded'>
            <thead>
              <tr>
                <th>
                  Item
                </th>
                <th>
                  Image
                </th>
                <th>
                  Available Time
                </th>
                <th>
                  Total Quantity
                </th>
                <th>
                  Rate
                </th>
                
              </tr>
            </thead>
            <tbody>
              <Foods foodlist={foodlist} />
            </tbody>

          </Table>




        </Col>
      </Row>
    </Container>
  )
}

export default FoodList