import React from 'react'
import {addGrocery} from './app_service'

export default function add_grocery({cb}) {
  let _formData = {
    itemName: '',
    quantity: '',
    category: '',
    grocery_image: ''
  };
    const [formData, setFormData] = React.useState(_formData);
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
             await addGrocery(formData);
            //  console.log(test)   
            setFormData(_formData)
            cb((preSate)=> !preSate);
        } catch(e){
           console.log(e?.message)
           alert(e?.message)
        }
     
        // You can add your logic to send the form data to the server here
      };

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        const file = files && files[0];
        setFormData({
          ...formData,
          [name]: name === 'grocery_image' ? file : value
        });
      };
  return (
    <div className="container mt-5">
    <h2>Add New Item to Grocery List</h2>
    <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data" >
      <div className="form-group">
        <label htmlFor="itemName">Item Name:</label>
        <input type="text" className="form-control" id="itemName" name='itemName' placeholder="Enter item name"    value={formData.itemName}
          onChange={handleChange} required />
        
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" className="form-control" id="quantity" onChange={handleChange}   name='quantity' placeholder="Enter quantity" required  value={formData.quantity} />
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Grocery Pic:</label>
        <input type="file" accept="image/*"  className="form-control" id="grocery_image" onChange={handleChange}   name='grocery_image' placeholder="Pic"   />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select className="form-control" id="category" onChange={handleChange} name='category' >
          <option value="">Select category</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="dairy">Dairy</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Item</button>
    </form>
  </div>
  )
}
