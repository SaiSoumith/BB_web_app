
import React from 'react';
import { Row, Form, Col, Button ,InputGroup} from 'react-bootstrap';
import './product.css';

class ProductForm extends React.Component {
    constructor(props) {
      super(props);
      this.initialState = {
        id:'',
        truck_number:'',
        truck_kyc_status:'',
        rejection_reason:'',
        chassis_number:'',
        image_front: '',
          image_back: '',
          model: '',
          manufacture: 'iuhbkuj'
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

              <Form.Group controlId="truck_number">
                  <Form.Label>Truck Number</Form.Label><br/>
                  <Form.Control plaintext readOnly defaultValue={this.state.truck_number} />
                  
                  
                  {/* <TextArea>{this.state.truck_id}</Form> */}
                  
                </Form.Group>
               
               
                <Form.Group controlId="truck_kyc_status">
                <Form.Label style={{paddingRight: 50}}>Truck KYC Status   </Form.Label>
               <br/>
                <select name="truck_kyc_status" id="truck_kyc_status" value={this.state.truck_kyc_status} onChange={this.handleChange}>
                      <option value=" NOT_SUBMITTED">Not Submitted</option>
                      <option value="AUTO_VERIFICATION_IN_PROGRESS">Auto Verification In Progress</option>
                       <option value="PENDING">Pending</option>
                      <option value="REJECTED">Rejected</option>
                      <option value="APPROVED">Approved</option>
                </select>               
                </Form.Group>
                {this.state.truck_kyc_status=="REJECTED" ?
                <Form.Group controlId="rejection_reason">
                  <Form.Label>Rejection Reason</Form.Label>
                  <Form.Control
                    type="text"
                    name="rejection_reason"
                    value={this.state.rejection_reason}
                    onChange={this.handleChange}
                    placeholder="rejection reason" />
                </Form.Group>
                  :null}
                <Form.Group>
                <Form.Group controlId="chassis_number ">
                  <span> <Form.Label>Chassis Number :</Form.Label></span>
                       <span>{this.state.chassis_number}</span>

                </Form.Group>

                  <h6>Truck Document Details :</h6>
                <Form.Group controlId="model_number ">
                  <span> <Form.Label>Model Number :</Form.Label></span>
                       <span>{this.state.model}</span>

                </Form.Group>
                <Form.Group controlId="manufacturer ">
                  <span> <Form.Label>Manufacturer :</Form.Label></span>
                       <span>{this.state.manufacture}</span>

                </Form.Group>

                
                <Form.Group controlId=" Rc Images ">
                  <div><span className="front_img">FRONT IMAGE</span>
                  <span className="back_img">BACK IMAGE</span></div>
                  <div className="topDiv">
                  <span> <img className="img_class" src={this.state.image_front}></img></span>
                  <span><img className="img_class"src={this.state.image_back}></img></span>
                  </div>
                     {/* <span>
                      <Form.Label>Back image</Form.Label>
                       <img src={this.state.image_back}></img>
                       </span> */}
                </Form.Group>




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