import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile-Phone',
            qty: 1,
            img: ''
        }
        
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log('this', this.state.qty)
    }
 
    render() {                                                        //Render is used to convert components into html for browser. so that browser can read the code
        const{price,title,qty} = this.state;                          //it is Distruction, which means that using upper constructor(object) in class component.    
        return (
           <div className="cart-item">
             <div className="left-block">
                <img style={styles.image} alt='img'/>  
             </div>
             <div className="right-block">
                <div style={{fontSize: 25}}> {title} </div>
                <div style={{color: '#777'}}> Rs {price} </div>
                <div style={{color: '#777'}}>Qty: {qty} </div>
                <div className="cart-items-actions">
                    <img className="action-icons" onClick={this.increaseQuantity} src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png" alt="img"></img>
                    <img className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2920/premium/2920651.png?token=exp=1660304011~hmac=1ef056565ec8f8b98536a75647779e39" alt="img"></img>
                    <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3964/3964085.png" alt="img"></img>
                </div>
             </div>
           </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
 
export default CartItem;