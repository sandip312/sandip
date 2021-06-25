import classes from './Cart.module.css';
import Modal  from '../UI/Modal';



const Cart = props => {

// const cartItems = (
    
// <ul  className ={classes['cart-items']}> 
//  {[{id:'c1',name:'sushi', amount:2,price:12.99},].map((item)=>(
//  <li>{item.name}</li>
//  ))}
//  </ul>
// );


return (
  <Modal onClose={props.onClose}>
    {/* {cartItems} */}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span> 35.62</span>
    </div>
    <div className={classes.action}>
      <>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        <button className={classes.button}>Order</button>
        {/* {console.log("items r", cartItems)} */}
      </>
    </div>
  </Modal>
);
};
export default Cart;