import React from 'react';
import { useForm } from "react-hook-form";
import './AddItems.css';
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url =`https://stark-shore-64587.herokuapp.com/product`;

            fetch(url, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
    };
    return (
        <div className='add'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='PHOTO URL' type="text" {...register("img",)} /> <br />
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} /> <br />
                <textarea style={{ marginTop: '10px' }} placeholder='Description' {...register("description")} /> <br />
                <input placeholder='Price' type="number" {...register("price",)} /> <br />
                <input placeholder='Supplier Name' {...register("name", { required: true, maxLength: 20 })} /> <br />
                <input placeholder='Quantity' type="number" {...register("quantity",)} /> <br />
                <input style={{ backgroundColor: '#ff5c00', borderRadius: '5px', border: 'none', padding: '10px', color: 'white' }} type="submit" value={'Add Items'} />
            </form>
        </div>
    );
};

export default AddItems;