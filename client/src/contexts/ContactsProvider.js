import React, { useContext, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = createContext();

const useContacts = () => {
  return useContext(ContactsContext);
};

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export { useContacts, ContactsProvider };
