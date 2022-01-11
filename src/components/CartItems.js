import React from 'react';
import "./CartItems.css";
import CartItem from "./CartItem";

function CartItems(props) {
  function changeItemQuantity(event, index) {
    const newItems = [...props.items];
    newItems[index].quantity=event.target.value;
    props.ChangeCartQuantity(newItems);
    // props.changeCartQuantity(newItems);
  }
  function deleteItems(id) {
    props.ChangeCartQuantity(() => {
      return props.items.filter((item, index) => {
        return index !== id;
      })
    })
  }
    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <hr />
          <div className="CartItems-item">
          {props.items.map((item, index) => {
            return (<CartItem 
              key={index}
              index={index}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              stock={item.stock}
              title={item.title}
              changeItemQuantity={changeItemQuantity}
              deleteItem={deleteItems}
            />);
          })}
          </div>
        </div>
    )
}

export default CartItems;
