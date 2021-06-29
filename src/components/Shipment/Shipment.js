import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const savedCart = getDatabaseCart();
        console.log(savedCart);
        const orderDetails = {...loggedInUser, products: savedCart, shipment: data, orderTime: new Date()}
        fetch('https://hidden-crag-74603.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(response => response.json())
        .then(data =>{
            if (data){
                alert('Your order placed succes');
                processOrder();
            }
        })
        
    }
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    console.log(loggedInUser);

    console.log(watch("email")); // watch input value by passing the name of it

    return (
        <form className='shipment-form' onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={loggedInUser.name} {...register("name", { required: true })}  placeholder='Your Name' /> <br />
            {errors.name && <span className='shipment-form-error' >Name is required !</span>}
            <br />
            <input {...register("email", { required: true })} defaultValue={loggedInUser.email} placeholder='Your E-mail' /> <br />
            {errors.email && <span className='shipment-form-error'>E-mail is required !</span>}
            <br />
            <input {...register("phoneNo", { required: true })}  placeholder='Your Phone No.'/> <br />
            {errors.phoneNo && <span className='shipment-form-error'>Phone No. is required !</span>}
            <br />
            <input {...register("address", { required: true })} placeholder='Your Address' /> <br />
            {errors.address && <span className='shipment-form-error' >Address is required !</span>}
            <br />
            <input type="submit" />
        </form>
    );
};

export default Shipment;