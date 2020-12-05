import React, { Component } from 'react';
//import './App.css';
import { Button, Container,Alert } from 'react-bootstrap';
import ProductList from './ProductList';
import ProductForm from './ProductForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // isAddProduct: false,
      error: null,
      response: {},
      product: {},
      isEditProduct: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddProduct: true });
  }


  editProduct=(productId)=>{
      

    const apiUrl =  `http://localhost:3000/products/${productId}`;
   


    
    fetch(apiUrl, {
      method: 'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',

      },
      //body: formData



    })
      .then((res) => {
     // console.log(res.message);
       return res.json();} )
      .then(result => {
       //console.log(result);
        this.setState({
          product: result,
          
          isEditProduct:true
        })
      },
      (error) => {
        this.setState({ error });
      }
    )
  }



  onFormSubmit(data) {

    let apiUrl = `http://localhost:3000/products/${data.id}`;

  
    fetch(apiUrl, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',

      },
      body: JSON.stringify(data)



    })
      .then((res) => {
     // console.log(res.message);
       return res.json();} )
      .then(result => {
       //console.log(result);
        this.setState({
          response: result,
          isEditProduct: false
        })
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  render() {

    return (
      <div className="App">
        <Container>
        {!this.state.isEditProduct && <h1 style={{textAlign:'center'}}>Truck's List</h1>}
          {/* {!this.state.isEditProduct && <Button variant="primary" onClick={() => this.onCreate()}>Add Product</Button>} */}
          {this.state.response.status === 'success' && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
          {!this.state.isEditProduct && <ProductList  editProduct={this.editProduct}/>}
          {this.state.isEditProduct && <ProductForm onFormSubmit={this.onFormSubmit} product={this.state.product}/>}
          {this.state.error && <div>Error: {this.state.error.message}</div>}
        </Container>
      </div>
    );
  }
}

export default App;



//LEFT OVER

//1)IMAGE FETCHING 
//2)ORIGINAL APIs
