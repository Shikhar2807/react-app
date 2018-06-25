import React,{Component} from 'react';
import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {

//could be functional. change back to stateless.will remain same

render(){
    const ingredientSummary= Object.keys(this.props.ingredients)
.map(igKey=>{
    return (
     <li key ={igKey} >
         <span style={{textTransform:'capitalize'}}> {igKey}</span>: {this.props.ingredients[igKey]}
         </li>
    );
});
    return (
    <Aux>
        <h3> Your Order </h3>
        <p> A delicious burger with following ingredients : </p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price :{this.props.price.toFixed(2)}</strong></p> 
        <p> Proceed to Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>

    </Aux>
);
}
}

export default OrderSummary;