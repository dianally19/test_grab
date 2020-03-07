import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';


export default class data extends Component {
    state = {
        modal8: false,
        modal9: false,
        radio: 2,
        quantity:0
      }

      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
      
      onClick = nr => () => {
        this.setState({
          radio: nr
        });
      }


    renderData = () => {

    const dataMakanan= [
        {
            ID:"6-CY4ANFTTN35VNA-CY6GLJ3JTUCXNE",
            name:"Original Gyudon Regular",
            available:true,
            priceInMinorUnit:3300000,
            imgHref:"https://d1sag4ddilekf6.cloudfront.net/item/6-CY4ANFTTN35VNA-CY6GLJ3JTUCXNE/photos/9de0579c1b704ab5a60f23582c06c5fd_1583383517477776259.jpg",
            description:"Our Signature Gyudon Made With 100% Us Premium Beef And Authentic Ingredients (Regular)"
        },
        {
            ID:"6-CY4ANFTTN35VNA-CY6GLJ3JTUCXNE",
            name:"Original Gyudon Regular",
            available:true,
            priceInMinorUnit:3300000,
            imgHref:"https://d1sag4ddilekf6.cloudfront.net/item/6-CY4ANFTTN35VNA-CY6GLJ3JTUCXNE/photos/9de0579c1b704ab5a60f23582c06c5fd_1583383517477776259.jpg",
            description:"Our Signature Gyudon Made With 100% Us Premium Beef And Authentic Ingredients (Regular)"
        },
        {
            ID:"6-CY4ANFTTN35VNA-CY6GLJ3JTUCXNE",
            name:"Original Gyudon Regular",
            available:true,
            priceInMinorUnit:3300000,
            imgHref:"https://d1sag4ddilekf6.cloudfront.net/item/6-CY4ANFTTN35VNA-CY6GLJ3JTUCXNE/photos/9de0579c1b704ab5a60f23582c06c5fd_1583383517477776259.jpg",
            description:"Our Signature Gyudon Made With 100% Us Premium Beef And Authentic Ingredients (Regular)"
        },
        {
            ID:"6-CY4ANFTTN35VNA-CY6GLJ3JTUCXNE",
            name:"Original Gyudon Regular busuk",
            available:true,
            priceInMinorUnit:3300000,
            imgHref:"https://d1sag4ddilekf6.cloudfront.net/item/6-CY4ANFTTN35VNA-CY6GLJ3JTUCXNE/photos/9de0579c1b704ab5a60f23582c06c5fd_1583383517477776259.jpg",
            description:"Our Signature Gyudon Made With 100% Us Premium Beef And Authentic Ingredients (Regular)"
        },

    ]

        return dataMakanan.map((val) => {
            return (
                <div className='col-md-4' style={{padding: '10px'}} onClick={this.toggle(8)}> 

                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-lg-6">
                            <img src={val.imgHref} style={{ width: '100%'}}/>
                        </div>
                        <div className="col-md-8 col-sm-4 col-lg-6">
                            <p>{val.name}</p>
                            <p style={{fontSize:'10px'}}>{val.description}</p>
                            <div style={{display: 'flex', width: '100%'}}>
                                <p style={{fontSize:'10px'}}>{val.priceInMinorUnit}
                                </p>
                                <button style={{marginLeft: '80px'}}>+</button>
                            </div>
                        </div>
                    </div>
                    <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
                        <MDBModalHeader toggle={this.toggle(8)}></MDBModalHeader>
                        <MDBModalBody>
                        <div className="row">
                           <div className="col-md-4"> 
                            <img src={val.imgHref} style={{ width: '100%'}}/>
                            </div>
                            <div className="col-md-6">{val.name}</div>
                            <div className="col-md-2">{val.priceInMinorUnit}</div>
                            <div style={{marginTop:"1px"}}>
                                <input type="checkbox" name="vehicle1" defaultValue="sambel" />
                                <label htmlFor="vehicle1"> Sambal</label><br/>
                                <input type="checkbox" name="vehicle2" defaultValue="nasi" />
                                <label htmlFor="vehicle3"> nasi</label>
                            </div>
                        </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <div style={{display:"flex"}}>
                            <button onClick={() => this.setState({ quantity: this.state.quantity + 1})}>+</button> 
                             {this.state.quantity} 
                            <button onClick={() => this.setState({ quantity : this.state.quantity - 1})}>-</button>
                            <br />
                            <button onClick={()=>this.setState({showTransaction : true})}>Add to Basket 
                             {this.state.quantity * val.priceInMinorUnit}</button>
                            </div>
                        </MDBModalFooter>
                    </MDBModal>
                </div>
            )
        })
    }
    render() {
        return (
           <div className="container">
               <h2>Reguler Size</h2>
               <div className="row">
                    {this.renderData()}
               </div>

               {/* BUAT RIGHT */}
               <MDBContainer>
     
      <MDBBtn color="info" onClick={this.toggle(9)}>Bottom</MDBBtn>
      <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} fullHeight position="bottom">
        <MDBModalHeader toggle={this.toggle(9)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(9)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
           </div>
        )
    }
}
