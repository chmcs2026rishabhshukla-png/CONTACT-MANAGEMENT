import { Link } from "react-router";
import { Phone, Mail, MapPin, Star, Trash2 } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { Pencil } from "lucide-react";


const ContactCard = ({ contact, setContacts }) => {

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await api.delete(`/contacts/${contact._id}`);

      setContacts((prev) =>
        prev.filter((c) => c._id !== contact._id)
      );

      toast.success("Contact deleted");

    } catch {
      toast.error("Delete failed");
    }
  };

  return (

<Link
to={`/contact/${contact._id}`}
className="block bg-base-100 p-4 rounded-xl border hover:shadow-lg"
>

<div className="flex justify-between">
<p className="text-xs">{contact._id}</p>

{contact.favourite && (
<Star className="text-yellow-400 size-4" />
)}

</div>

<div className="mt-3 space-y-2">

<h2 className="text-lg font-semibold">
{contact.name}
</h2>

<div className="flex items-center gap-2">
<Phone className="size-4" />
<span>{contact.phone}</span>
</div>

<div className="flex items-center gap-2">
<Mail className="size-4" />
<span>{contact.email}</span>
</div>

<div className="flex items-center gap-2">
<MapPin className="size-4" />
<span>{contact.address}</span>
</div>

</div>

<div className="flex justify-between mt-4">

<span className="text-xs">
{formatDate(new Date(contact.createdAt))}
</span>

<div className="flex gap-3 mt-3">

<Link
to={`/edit/${contact._id}`}
className="btn btn-warning btn-sm"
>
<Pencil className="size-4"/>
Edit
</Link>

<button
onClick={handleDelete}
className="btn btn-error btn-sm"
>
Delete
</button>

</div>
</div>

</Link>
  );
};

export default ContactCard;