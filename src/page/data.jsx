import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
 

export default class data extends Component {
    state = {
        modal8: false,
        modal9: false,
        radio: 2,
        quantity:0,
        select:0,
        index:0,
        ids:[],
        checkedToping:new Map(),
        idss:0,
        dataMakanan:[ {
            ID:"IDMOG20200110103208012251",
            name:"Original Gyudon Regular",
            available:true,
            priceInMinorUnit:33000,
            imgHref:"https://d1sag4ddilekf6.cloudfront.net/item/6-CY4ANFTTN35VNA-CY6GLJ3JTUCXNE/photos/9de0579c1b704ab5a60f23582c06c5fd_1583383517477776259.jpg",
            description:"Our Signature Gyudon Made With 100% Us Premium Beef And Authentic Ingredients (Regular)"
           
        },
        {
            ID:"IDMOD20200303032336254677",
            name:"Teriyaki Gyudon Regular",
            available:true,
            priceInMinorUnit:34000,
            imgHref:"https://d1sag4ddilekf6.cloudfront.net/item/6-CY4ANFTTN35VNA-CY6GLJ3JWA3JE2/photos/794df2f97ae5420ab83db59a1a41425a_1583383517689441362.jpg",
            description:"Our Favorite Teriyaki Gyudon In Town Made With 100% Us Premium Beef And Authentic Ingredients (Regular)"
        },
        {
            ID:"IDMOD20200303032336277837",
            name:"Chicken Teriyaki Don Regular",
            available:false,
            priceInMinorUnit:27000,
            imgHref:"https://d1sag4ddilekf6.cloudfront.net/item/6-CY4ANFTTN35VNA-CY6GLJ3KBBVXBA/photos/62e78b1cfe0f49679b09dca4217cc584_1583383517908984402.jpg",
            description:"Nasi + Ayam Dengan Bumbu Teriyaki (Manis Gurih)"
        },
        {
            ID:"IDMOD20200303032336277837",
            name:"Original Gyudon Sambal Regular",
            available:true,
            priceInMinorUnit:36000,
            imgHref:"https://d1sag4ddilekf6.cloudfront.net/item/6-CY4ANFTTN35VNA-CY6GLJ3KDCJCME/photos/6142c6aa70cf4f6682866c1cb50b0f0b_1583383518089819845.jpg",
            description:"Nasi + Us Beef Dengan Bumbu Original (Gurih) + Sambal \u0026 Kremes"
        }],
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

      handleClick = event => {
        const { name, checked, value } = event.currentTarget
        this.setState(prevState => ({ checkedToping: prevState.checkedToping.set(name, { checked, value }) }))

        console.log(this.state.checkedToping)
    }

    getToppingTotalPrice = () => {
        let totalPrice = 0

        this.state.checkedToping.forEach(toping => {
            if (toping.checked) {
                totalPrice += parseInt(toping.value)
            }
        })

        return totalPrice
    }



    renderData = () => {
        return this.state.dataMakanan.map((val) => {
            return (
                <div className='col-md-4 static' onClick={this.toggle(8)}> 
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
                                <button className="button" onClick={() => this.setState({index: val.ID})}>+</button> 
                               
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    
    renderModal = (idx) => {
        return this.state.dataMakanan.find(value => value.ID === idx) && (
            <MDBContainer>
            <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
                     <MDBModalHeader toggle={this.toggle(8)}></MDBModalHeader>
                     <MDBModalBody>
                     <div className="row">
                        <div className="col-md-4"> 
                         <img src={this.state.dataMakanan.find(value => value.ID === idx).imgHref} style={{ width: '100%'}}/>
                         </div>
                         <div className="col-md-8 col-sm-4 col-lg-6">
                         <div style={{fontSize:'12px'}}>{this.state.dataMakanan.find(value => value.ID === idx).name} {this.state.dataMakanan.find(value => value.ID === idx).priceInMinorUnit}</div>
                         <div style={{fontSize:'10px'}}>{this.state.dataMakanan.find(value => value.ID === idx).description}</div>
                         </div>
                     </div>
                     <hr />
                     <div style={{marginTop:"1px"}}>
                            <label><b>Topping</b></label>&nbsp;&nbsp;&nbsp;<label style={{fontSize:"12px"}}>Optional, max 2</label><br/>
                                <input type="checkbox" value="2000" name="ekstra" onClick={(e) => this.handleClick(e)}/>
                                    <label>Ekstra Sambal </label><br/><br/>
                               <input type="checkbox" value="3000" name="ekstra1" onClick={(e) => this.handleClick(e)}/>
                                    <label >Ekstra Kremes</label>

                     </div>

                         <hr/>
                         <div style={{marginTop:"1px"}}>
                         <label><b>Special instructions   </b> &nbsp;&nbsp;<label style={{fontSize:"12px"}}>Optional</label>
                         <input type="text" name="optional" size="40"  placeholder="E.g. No onions please"/>
                           </label>
                         </div>
                     </MDBModalBody>
                     
                     <MDBModalFooter>
                     <div style={{display:"flex"}}>
                         <button className="buttonPlusMinus" onClick={() => this.setState({ quantity: this.state.quantity + 1})}>+</button> 
                          <lable className="label">{this.state.quantity}</lable>
                         <button className="buttonPlusMinus" onClick={() => this.setState({ quantity : this.state.quantity - 1})}>-</button>
                         <br />
                         <button className="buttonAdd" onClick={()=>this.setState({showTransaction : true})}>Add to Basket-
                          {(this.state.quantity * this.state.dataMakanan[0].priceInMinorUnit)+this.getToppingTotalPrice()}</button>
                         </div>
                     </MDBModalFooter>
                 </MDBModal>
             </MDBContainer>
        ) 
    }
        


    render() {
        return (
           <div className="container">
               <h2>Reguler Size</h2>
               <div className="row">
                    {this.renderData()}
               </div>

               {/* BUAT RIGHT */}
               {this.renderModal(this.state.index)}
               
           {this.e}
           </div>
        )
    }
}
