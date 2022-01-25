import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CharacterContainer from "./components/characters/CharacterContainer";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  // define global states
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  useEffect(()=> {
    {/* define the async function and use axios to fetch data */ }
    const fetchItems = async () => {
          {/* at the end of the api endpoint i add name to filter when we type something in input field */ }
      const resp = await axios(`https://thronesapi.com/api/v2/Characters?firstName=${query}`);
      setItems(resp.data);
      setIsLoading(false);
    }
    {/* call the function */ }
    fetchItems();
  }, [query]);
  return <div className="container">
    <Header/>
    <Search getQuery= {(p)=> setQuery(p)} />
    <hr className="hr"/>
    <CharacterContainer isLoading={isLoading} items={items}/>
    
  </div>;
}

export default App;
