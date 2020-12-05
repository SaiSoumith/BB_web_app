
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import {useGlobalFilter} from 'react-table';


function  ProductList(props) {


const [error,setError]=useState(null);
const  [products,setProducts]=useState([]);
const [search,setSearch]=useState('');
  
const [filteredIds,setFilteredIds]=useState([]);


  useEffect(()=>{

  loadData();

  },[]);



  const loadData=()=>{

   
    const apiUrl = ' http://localhost:3000/products';

      fetch(apiUrl)
        .then(res => res.json())
        .then(
          (result) => {
            setProducts(result);
          },
          (error) => {
            setError(error);
          }
        )
  }


   useEffect(()=>{
 
    setFilteredIds(
      products.filter((product) =>
      product.truck_id.includes(search)
    ));
   },[search,products]);




      return(
        
        <div>
          <input type="text" placeholder="search by ID" onChange={e=>setSearch(e.target.value)}/>
          <Table>
            <thead>
              <tr>
                <th>Truck Id</th>
                <th>Document status</th>
                {/* <th>SKU</th>
                <th>Price</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredIds.map(product => (
                <tr key={product.id}>
                  <td>{product.truck_id}</td>
                  <td>{product.document_status}</td>

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