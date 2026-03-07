import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";
import ContactNotFound from "./components/ContactNotFound";

const API_URL = "http://localhost:5000/api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  // Fetch Contacts
  const fetchContacts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      console.log("Contacts:", data);

      setContacts(data);
    } catch (error) {
      console.error("Failed to load contacts", error);
      toast.error("Failed to load contacts");
    }
  };

  // Delete Contact
  const deleteContact = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setContacts(contacts.filter((c) => c._id !== id));

      toast.success("Contact deleted");
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              contacts={contacts}
              fetchContacts={fetchContacts}
              deleteContact={deleteContact}
            />
          }
        />

        <Route
          path="/create"
          element={<CreateContact fetchContacts={fetchContacts} />}
        />

        <Route
          path="/edit/:id"
          element={<EditContact fetchContacts={fetchContacts} />}
        />

        <Route path="*" element={<ContactNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;