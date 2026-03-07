import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-blue-400 border-b">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">

        <h1 className="text-3xl font-bold text-white font-mono">
          CONTACT MANAGER
        </h1>

        <Link to="/create" className="btn btn-primary">
          <PlusIcon className="size-5" />
          Add Contact
        </Link>

      </div>
    </header>
  );
};

export default Navbar;