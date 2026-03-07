import { useState } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CreateContact = () => {

const [contact,setContact] = useState({

name:"",
phone:"",
email:"",
address:"",
category:"",
favourite:false

});

const navigate = useNavigate();

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await api.post("/contacts",contact);

toast.success("Contact added");

navigate("/");

}catch{

toast.error("Failed");

}

};

return(

<div className="max-w-xl mx-auto mt-10">

<h2 className="text-2xl font-bold mb-4">
Add Contact
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input placeholder="Name"
className="input input-bordered w-full"
onChange={(e)=>setContact({...contact,name:e.target.value})}
/>

<input placeholder="Phone"
className="input input-bordered w-full"
onChange={(e)=>setContact({...contact,phone:e.target.value})}
/>

<input placeholder="Email"
className="input input-bordered w-full"
onChange={(e)=>setContact({...contact,email:e.target.value})}
/>

<input placeholder="Address"
className="input input-bordered w-full"
onChange={(e)=>setContact({...contact,address:e.target.value})}
/>

<select
className="select select-bordered w-full"
onChange={(e)=>setContact({...contact,category:e.target.value})}
>

<option>Family</option>
<option>Friends</option>
<option>Work</option>

</select>

<button className="btn btn-primary w-full">
Add Contact
</button>

</form>

</div>

);

};

export default CreateContact;