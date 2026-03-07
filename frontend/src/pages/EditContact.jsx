import { useEffect, useState } from "react";
import api from "../lib/axios";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";

const EditContact = () => {

const { id } = useParams();
const navigate = useNavigate();

const [contact,setContact] = useState({
name:"",
phone:"",
email:"",
address:"",
category:"",
favourite:false
});

useEffect(()=>{

fetchContact();

},[]);

const fetchContact = async()=>{

try{

const res = await api.get(`/contacts/${id}`);
setContact(res.data);

}catch{

toast.error("Failed to load contact");

}

};

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await api.put(`/contacts/${id}`,contact);

toast.success("Contact updated");

navigate("/");

}catch{

toast.error("Update failed");

}

};

return(

<div className="max-w-xl mx-auto mt-10">

<h2 className="text-2xl font-bold mb-6">
Edit Contact
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input
value={contact.name}
onChange={(e)=>setContact({...contact,name:e.target.value})}
className="input input-bordered w-full"
/>

<input
value={contact.phone}
onChange={(e)=>setContact({...contact,phone:e.target.value})}
className="input input-bordered w-full"
/>

<input
value={contact.email}
onChange={(e)=>setContact({...contact,email:e.target.value})}
className="input input-bordered w-full"
/>

<input
value={contact.address}
onChange={(e)=>setContact({...contact,address:e.target.value})}
className="input input-bordered w-full"
/>

<select
value={contact.category}
onChange={(e)=>setContact({...contact,category:e.target.value})}
className="select select-bordered w-full"
>

<option value="Family">Family</option>
<option value="Friends">Friends</option>
<option value="Work">Work</option>

</select>

<button className="btn btn-primary w-full">
Update Contact
</button>

</form>

</div>

);

};

export default EditContact;