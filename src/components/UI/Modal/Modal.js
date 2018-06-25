import React,{Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component{
shouldComponentUpdate(nextProps,nextState){
return nextProps.show !== this.props.show;
}
componentWillUpdate(){
    console.log('MOdal update');
}

render(){
return(
<Aux>
    <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
    <div className = {classes.Modal}
style={{transform:this.props.show?'translateY(0)':'translateY(-100vH)',
opacity:this.props.show? '1':'0'}}>
    {this.props.children}

</div>
</Aux>
);}
}; 
export default Modal;