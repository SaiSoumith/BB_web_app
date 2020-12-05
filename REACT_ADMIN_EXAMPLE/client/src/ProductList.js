
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function  ProductList(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     products: []
  //   }
  // }

const [error,setError]=useState(null);
const  [products,setProducts]=useState([]);

  



  useEffect(()=>{

   
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


  })



  // componentDidMount() {
  //   const apiUrl = ' http://localhost:3000/products';

  //   fetch(apiUrl)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           products: result
  //         });
  //       },
  //       (error) => {
  //         this.setState({ error });
  //       }
  //     )
  // }

  // render() {
  //   const { error, products} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>cd
        
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
              {products.map(product => (
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
      )
    }
  }
// }

export default ProductList;