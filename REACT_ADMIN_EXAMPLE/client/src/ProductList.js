
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
//import {useGlobalFilter} from 'react-table';
import axios from 'axios';


const apiUrl = 'getTrucksList';
//const accessToken='5vp9lltyyt8qjlehphrta2ys8f88pr12';
// const apiUrl='http://localhost:3000/products';
// const authAxios=axios.create({
//   baseURL:apiUrl
  // headers:{
  //   Authorization:`Bearer ${accessToken}`
  // }
// })


function  ProductList(props) {


//const [error,setError]=useState(null);
const  [products,setProducts]=useState([]);
const [search,setSearch]=useState('');
  
const [filteredProducts,setFilteredProducts]=useState([]);


  useEffect(()=>{
    console.log("hi .");
 loadData();
  
  },[]);



  const loadData=()=>{



    const requestOptions = {
      
      // credentials:'include',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Token : 5vp9lltyyt8qjlehphrta2ys8f88pr12'
          
        
      }
  };



  axios.post('https://preprod-boss-auth.blackbuck.com/fms/api/dashboard/truck/getTrucksList', {"page":1,"size":10},requestOptions)

    // fetch('https://preprod-boss-auth.blackbuck.com/fms/api/dashboard/truck/getTrucksList',{
    //   method: 'POST',
     
    //   headers:{
        
    //     // 'Host': 'preprod-boss-auth.blackbuck.com',
    //     // 'authority': 'preprod-boss-auth.blackbuck.com',
    //     // 'accept': 'application/json',
    //     'Authorization': 'Token :5vp9lltyyt8qjlehphrta2ys8f88pr12',
    //     'Content-Type': 'application/json',
    //    // 'origin': 'https://sitemployees.blackbuck.com',
    //      //'sec-fetch-mode': 'no-cors',
    //     //'referer': 'https://sitemployees.blackbuck.com/',
    //     // 'sec-fetch-site': 'same-site',
    //     // 'Content-Length': '20'
    //   },
    //   body: {"page":1,"size":10}
  
  
  
    // })
      .then((res) =>{ 
        console.log(res);
        return res.json()})
      .then(
        (result) => {
          console.log(result.data);
          setProducts(result.data);
          
        }
      )
  // let result=authAxios.get(`products`);
  //  setProducts(result.data);
  //  console.log(result.data);
  //  setError(err.message);

    
  }


  //  useEffect(()=>{
 
  //   setFilteredProducts(
  //     products.filter((product) =>
  //     product.truck_id.includes(search)
  //   ));
  //   setFilteredProducts(
  //     products.filter((product) =>
  //     product.document_status.toLowerCase().includes(search.toLowerCase())
  //   ));
  //  },[search,products]);




      return(
        
        <div>
          <input s type="text" placeholder="search by ID or Document status" onChange={e=>setSearch(e.target.value)}/>
          <Table>
            <thead>
              <tr>
                <th>Truck Number</th>
                
                <th>Carrier Mobile</th>
                <th>Truck RC Status</th>
                <th>Truck Owner KYC Status</th>
                {/* <th>Document status</th> */}
                {/* <th>SKU</th>
                <th>Price</th> */}
                <th>Created On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.truck_number}</td>
                   <td>{product.carrier_mobile}</td>
                   <td>{product.truck_kyc_status}</td>
                   <td>{product.truck_owner_kyc_status}</td>
                  
                  <td>{product.created_on}</td>

                  {/* <td>{product.product_name}</td>
                  <td>{product.sku}</td>
                  <td>{product.price}</td> */}
                  <td><Button variant="info" onClick={()=>props.editProduct(product.id)}>
                  Edit Status</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
         
        </div>
      );
      
    
  
}

export default ProductList;