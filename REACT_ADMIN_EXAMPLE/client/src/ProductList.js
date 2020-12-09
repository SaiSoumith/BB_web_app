
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Moment from 'react-moment';
//import {useGlobalFilter} from 'react-table';
import axios from 'axios';
import './product.css';

//const apiUrl = 'getTrucksList';
//const accessToken='5vp9lltyyt8qjlehphrta2ys8f88pr12';
 const apiUrl='http://localhost:3000/products';
// const authAxios=axios.create({
//   baseURL:apiUrl
  // headers:{
  //   Authorization:`Bearer ${accessToken}`
  // }
// })


function  ProductList(props) {


//const [error,setError]=useState(null);
const  [products,setProducts]=useState([]);
const [search1,setSearch1]=useState('');
const [search2,setSearch2]=useState('');
const [filteredProducts1,setFilteredProducts1]=useState([]);
const [filteredProducts2,setFilteredProducts2]=useState([]);
const [query1,setQuery1]=useState('');
const [loading,setLoading]=useState(false);
const [message,setMessage]=useState('');
const [cancel,setCancel]=useState('');
// const [convertedDate,setConvertedDate]=useState('');
  useEffect(()=>{

 loadData();
  
  },[search1,search2]);



  const loadData=()=>{




  axios.get(apiUrl)

      // .then((res) =>{ 
      //   console.log(res);
      //   return res.json()})
      .then(
        (result) => {
          console.log(result.data);
          setProducts(result.data);
          
        }
      )

    
  }



 const filterSearch1=()=>{
  const searchUrl=`http://localhost:3000/products?truck_number=${search1}`

   axios.get(searchUrl
   ).then(
    (result) => {
      console.log(result.data);
      setProducts(result.data);
      
    }
  )


}
Moment.globalFormat = 'D MMM YYYY';




const filterSearch2=()=>{
  const searchUrl=`http://localhost:3000/products?truck_kyc_status=${search2}`

   axios.get(searchUrl
   ).then(
    (result) => {
      console.log(result.data);
      setProducts(result.data);
      
    }
  )


}


      return(
       
        <div>
          <div className="topDiv">
          <input className="padStyleInput" name="inp1" type="text" value={search1} placeholder="search by Truck Number" onChange={e=>setSearch1(e.target.value)}/>
           <Button className="padStyleButton" onClick={filterSearch1}>search</Button>


         

          <input  className="padStyleInput" name="inp2" type="text" value={search2} placeholder="search by RC status" onChange={e=>setSearch2(e.target.value)}/>
          <Button className="padStyleButton" onClick={filterSearch2}>search</Button>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Truck Number</th>
                
                <th>Carrier Mobile</th>
                <th>Truck RC Status</th>
                <th>Truck Owner KYC Status</th>
            
                <th>Created On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
            
               products.map(product => (
                <tr key={product.id}>
                  <td>{product.truck_number}</td>
                   <td>{product.carrier_mobile}</td>
                   <td>{product.truck_kyc_status}</td>
                   <td>{product.truck_owner_kyc_status}</td>
                  
                  <td>{<Moment unix>{product.Date}</Moment>}</td>

                 
                  <td><Button variant="info" onClick={()=>props.editProduct(product.id)}>
                  Edit Status</Button></td>
                </tr>
              ))
            
             
             
            }
            </tbody>
          </Table>
         
        </div>
      );
      
    
  
}

export default ProductList;