import { useSelector } from "react-redux";
import Contact from "./Contact";

import { selectFilteredContacts } from "../redux/contactsSlice";

import css from "./ContactList.module.css";

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.listWrapper}>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;