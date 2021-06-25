import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';


const Backdrop =props=>{
    return <div className={classes.Backdrop} onClick={props.onClose} />;
    };
    
const ModalOverlay =props=>{
    return(
        <div className={classes.Modal}>
        <div className={classes.content}> {props.chindren}</div>
        </div>
    );
    };
    const portalElement =document.getElementById('overlays');

const Modal =props=>{
   return (
     <Fragment>
       {ReactDOM.createPortal(
         <Backdrop onClose={props.onClose} />,
         portalElement
       )}
       {ReactDOM.createPortal(
         <ModalOverlay>{props.children}</ModalOverlay>,
         portalElement
       )}
     </Fragment>
   );
};

export default  Modal ;