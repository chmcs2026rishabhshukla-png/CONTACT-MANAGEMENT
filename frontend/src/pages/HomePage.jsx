import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";
import ContactNotFound from "../components/ContactNotFound";
import api from "../lib/axios";
import toast from "react-hot-toast";

const HomePage = () => {

const [contacts, setContacts] = useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("");

useEffect(() => {
fetchContacts();
}, []);

const fetchContacts = async () => {

try {

const res = await api.get("/contacts");
setContacts(res.data);

} catch {
toast.error("Failed to load contacts");
}

};

const filteredContacts = contacts.filter((contact) => {

const matchSearch =
contact.name.toLowerCase().includes(search.toLowerCase()) ||
contact.phone.includes(search);

const matchCategory =
category === "" || contact.category === category;

return matchSearch && matchCategory;

});

return (

<div className="min-h-screen">

<Navbar />

<div className="max-w-7xl mx-auto p-6">

{/* SEARCH + FILTER */}

<div className="flex gap-4 mb-6">

<input
type="text"
placeholder="Search by name or phone"
className="input input-bordered w-full"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

<select
className="select select-bordered"
value={category}
onChange={(e) => setCategory(e.target.value)}
>

<option value="">All</option>
<option value="Family">Family</option>
<option value="Friends">Friends</option>
<option value="Work">Work</option>

</select>

</div>

{/* CONTACT GRID */}

{filteredContacts.length === 0 && <ContactNotFound />}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{filteredContacts.map((contact) => (

<ContactCard
key={contact._id}
contact={contact}
setContacts={setContacts}
/>

))}

</div>

</div>

</div>

);

};

export default HomePage;