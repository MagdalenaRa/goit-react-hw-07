import { useDispatch, useSelector } from "react-redux";

import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import ContactForm from "./components/ContactForm";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ContactList />
    </div>
  );
}

export default App;