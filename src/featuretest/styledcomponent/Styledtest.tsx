import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

type btn="primary"|"danger";
interface Ibutton{
    prop:btn;
}

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
    color:black;
    font-size:26px;
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

const Button=styled.button<Ibutton>`
    font-size:25px;
    border-radius:4px;
    background:${Ibutton=>Ibutton.prop==="primary"?"green":"red"};
    padding:0 5px 0 5px;
    border:transparent;
    color:white;
    min-width:40px;

    &:hover{
        background:${Ibutton=>Ibutton.prop==="primary"?"gold":"orange"};
    }


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
                        <Button prop="danger" onClick={()=>{setNum(num-1)}} >-</Button>
                        <Button prop="primary"  onClick={()=>{setNum(num+1)}} >+</Button>
                        </FlexDiv>
                    </Body>
                </MainDiv>
            </Col>
        </Row>
    </Container>
  )
}

export default Styledtest