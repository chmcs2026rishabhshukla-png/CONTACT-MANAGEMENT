import { Link } from "react-router";
import { User } from "lucide-react";

const ContactNotFound = () => {
  return (
    <div className="text-center py-20">

      <User className="size-12 mx-auto text-gray-400" />

      <h2 className="text-2xl font-bold mt-4">
        No Contacts Found
      </h2>

      <Link to="/create" className="btn btn-primary mt-4">
        Add First Contact
      </Link>

    </div>
  );
};

export default ContactNotFound;