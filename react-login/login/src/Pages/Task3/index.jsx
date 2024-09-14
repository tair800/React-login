import React from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Table from 'react-bootstrap/Table'
import "./index.css"

const index = () => {
  return (
    <>
    <div className='inputArea'>
   <form onSubmit={(e)=>{
    e.preventDefault();
   const newCar={
    id: new Date().valueOf(),
    carname: e.target.carname.value,
    price:e.target.price.value
   }
   }} action="">
   <Input
    type={"text"}
    name={"Enter car name"}
    inpname={"carname"}
    />
    <Input
    type={"number"}
    name={"Enter price"}
    inpname={"price"}
    />
    <Button
    name={"Add"}
    tcolor={"white"}
    bgcolor={"green"}
    />
   </form>
    </div>
    <div className="tablearea">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Car name</th>
          <th>Price</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default index
