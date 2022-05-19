import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Foods = ( {foodlist}) => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <>
      <tr  className='bg-secondary text-white border-1 ' onClick={()=>setShow(!show)}  >
      <td>{show ? <RiArrowDropUpLine className='fs-1' /> : <RiArrowDropDownLine className='fs-1' />} {foodlist.name}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
      </tr>
      {
        foodlist.foods.map((food)=>{
          return<tr className={`${show ? "visible" : "visually-hidden"} `}>
          <td>{food.name}</td>
          <td>
            <img src='https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={40} height={40} />
          </td>
          <td>09:00AM - 04:30PM</td>
          <td>{food.quantity}</td>
          <td>{food.rate}</td>

        </tr>
        })
      }
    
    </>
  )
}

export default Foods;



 {/* {
        foodlist?.map((item) => {
          return (
            <>
              <tr className='bg-secondary text-white border-1 ' key={item.id} onClick={()=>setShow(!show)} >
                <td>{show ? <RiArrowDropUpLine className='fs-1' /> : <RiArrowDropDownLine className='fs-1' />} {item.name}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {
                item.foods.map((food) =>
                  <tr id="demo1" className={`${show ? "visible" : "visually-hidden"} `}>
                    <td>{food.name}</td>
                    <td>
                      <img src='https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={40} height={40} />
                    </td>
                    <td>09:00AM - 04:30PM</td>
                    <td>{food.quantity}</td>
                    <td>{food.rate}</td>

                  </tr>
                )
              }

            </>
          )
        })
      }
      {
        console.log(foodlist)

      } */}

