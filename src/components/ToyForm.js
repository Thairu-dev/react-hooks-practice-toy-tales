import axios from "axios";
import React,{useState} from "react";

function ToyForm(addaToy) {
  const [formData,setFormData]=useState({
    name:"",
    image:""

  })
  function handleChange (event){
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
   
  }
  function handleSubmit (event){
    event.preventDefault()
    const newToy={
      ...formData,
      likes:0
}
setFormData({
  name:"",
  image:""
 })
    axios.post("http://localhost:3001/toys",newToy)
    .then((res)=>addaToy(res.data))
  }

  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
