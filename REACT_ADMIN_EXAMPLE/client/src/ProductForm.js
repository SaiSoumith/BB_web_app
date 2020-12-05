
import React from 'react';
import { Row, Form, Col, Button ,InputGroup} from 'react-bootstrap';


class ProductForm extends React.Component {
    constructor(props) {
      super(props);
      this.initialState = {
        id:'',
          truck_id:'',
        // product_name: '',
        // price: '',
        // sku: '',
        document_status:'',
        rejection_reason:''
      }

      
        this.state=this.props.product;
      
       //console.log(this.state.truck_id);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
  
      this.setState({
        [name]: value
      })
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.onFormSubmit(this.state);
      this.setState(this.initialState);
    }
  
    render() {
      return(
        <div>
          <h2>Manage Truck Verification Status</h2>
          <Row>
            <Col sm={6}>
            
              <Form onSubmit={this.handleSubmit}>

              <Form.Group controlId="truck_id">
                  <Form.Label>Truck ID</Form.Label><br/>
                  <Form.Control plaintext readOnly defaultValue={this.state.truck_id} />
                  
                  
                  {/* <TextArea>{this.state.truck_id}</Form> */}
                  
                </Form.Group>
               
                {/* <Form.Group controlId="productName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="product_name"
                    value={this.state.product_name}
                    onChange={this.handleChange}
                    placeholder="Product Name"/>
                </Form.Group>
                <Form.Group controlId="sku">
                  <Form.Label>SKU</Form.Label>
                  <Form.Control
                    type="text"
                    name="sku"
                    value={this.state.sku}
                    onChange={this.handleChange}
                    placeholder="SKU" />
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    placeholder="Price" />
                </Form.Group> */}
                <Form.Group controlId="document_status">
                <Form.Label style={{paddingRight: 50}}>Document Status   </Form.Label>
               <br/>
                <select name="document_status" id="document_status" value={this.state.document_status} onChange={this.handleChange}>
                      <option value=" NOT_SUBMITTED">Not Submitted</option>
                      <option value="AUTO_VERIFICATION_IN_PROGRESS">Auto Verification In Progress</option>
                       <option value="PENDING">Pending</option>
                      <option value="REJECTED">Rejected</option>
                      <option value="APPROVED">Approved</option>
                </select>               
                </Form.Group>
                {this.state.document_status==="REJECTED" ?
                <Form.Group controlId="rejection_reason">
                  <Form.Label>Rejection Reason</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={this.state.rejection_reason}
                    onChange={this.handleChange}
                    placeholder="rejection reason" />
                </Form.Group>
                  :null}
                <Form.Group>
                 <Form.Control type="hidden" name="id" value={this.state.id} />
                 <Button variant="success" type="submit">Save</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
      )
    }
  }
  
  export default ProductForm;