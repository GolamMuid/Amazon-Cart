import React from 'react';
import "./CartTotal.css";
import NumberFormat from 'react-number-format';

function CartTotal(props) {
    const getTotalPrice = () => {
        let total = 0;
        props.items.forEach((item) => {
            total += (item.price * item.quantity);
        })
        return total;
    }
    const getItemCount = () => {
        let itemCount =0;
        props.items.forEach((item) => {
            itemCount += item.quantity;
        })
        return itemCount;
    }
    return (
        <div className="Cart-total">
          <h3>Subtotal({getItemCount()} items):
            <span className="CartTotalPrice">
            <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </span>
          </h3>
          <button>Proceed to checkout</button>
        </div>
    )
}

export default CartTotal;
