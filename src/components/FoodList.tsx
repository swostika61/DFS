import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Container,Row,Col,Table} from 'react-bootstrap'
import {RiArrowDropDownLine} from 'react-icons/ri';
const FoodList = () => {
  
  const [foodlist,setFoodlist]=useState([]);
  // useEffect(()=>{
  //   const fetchfood=async()=>{
  //     const result=await axios.get("http://localhost:4000/api/admin/food/fetch");
  //     await setFoodlist(result.data.foods)
  //   }
  //   fetchfood();
    
  // },[])
  return (
    <Container className="bg-light ">
      
      <Row>
        <Col>
        <div className='fw-bold fs-1'>
          Today's Menu
        </div>
          <Table responsive="sm" borderless hover className='rounded'>
            <thead>
              <tr>
                <th>
                  #
                </th>
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
              <tr className='bg-danger border-0'>
                <td><RiArrowDropDownLine/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                
              </tr>
              <tr>
                <td>1</td>
                <td>Tea (black)</td>
                <td>image</td>
                <td>9:00 AM - 04:30 PM</td>
                <td>100</td>
                <td>11.20</td>
               
              </tr>
              <tr>
                <td>2</td>
                <td>Momo (chicken)</td>
                <td>image</td>
                <td>2:00 PM - 4:00 PM</td>
                <td>40</td>
                <td>120.25</td>
              
              </tr>
              <tr>
                <td>3</td>
                <td>Khana set (veg)</td>
                <td>image</td>
                <td>11:30 AM - 1:00 PM</td>
                <td>100</td>
                <td>240.12</td>
               
              </tr>
              
            </tbody>

          </Table>




        </Col>
      </Row>
    </Container>
  )
}

export default FoodList