import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';


const MainDiv= styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    background:#87BFF7;
    color:#464646;
    padding:4px;
    border-radius:5px;
    margin-top:20px;    
`;

const Title=styled.p`
    font-size:24px;
    font-weight:700;
    padding-left:10px;
`;

const Body=styled.div`
    width:50%;
    text-align:center;
    font-size:16px;
    color:#F1F1F1;
    padding-left:10px;
`;

const Button=styled.button`
    font-size:25px;
    border-radius:4px;
    background:red;
    padding:0 5px 0 5px;
    border:transparent;
    color:white;
    min-width:40px;
`

const Number=styled.h3`
font-size:24px;
`;
const FlexDiv=styled.div`
    display:flex;
    width:50%;
    margin:0 auto;
    justify-content:space-around;
`;

const Styledtest = () => {
    const[num,setNum]=useState(0);
  return (
    <Container>
        <Row>
            <Col>
                <MainDiv>
                    <Title>Windows<sup>11</sup> </Title>
                    <Body>
                        <h2>Counter App</h2>
                        <Number>{num}</Number>
                        <FlexDiv>
                        <Button onClick={()=>{setNum(num+1)}} >+</Button>
                        <Button onClick={()=>{setNum(num-1)}} >-</Button>
                        </FlexDiv>
                    </Body>
                </MainDiv>
            </Col>
        </Row>
    </Container>
  )
}

export default Styledtest