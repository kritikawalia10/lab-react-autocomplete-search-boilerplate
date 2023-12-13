import { useState } from 'react'
import './App.css'
import data from './resources/countryData.json'

function App() {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSearch = (searchItem)=>{
    setValue(searchItem);
  } 

  const handleKey = (e) => {
    const down = document.getElementById("menu");
    down.style.display = e.key ==="Escape" ? "none" : "block";
  }

  return (
    <>
      <div className="contain">
      <div><h1>Search</h1></div>
      <input type="text" value={value} onChange={onChange} placeholder="Search" onKeyDown={handleKey} />
      <button onClick={()=>onSearch(value)}>Search</button>

      <div id="menu">
        {data .filter((item) => {
          const searchItems = value.toLowerCase();
          const namesValue = item.name.toLowerCase();
          return searchItems && namesValue.startsWith(searchItems) && namesValue !== searchItems;
        })
        .slice(0,10).map((item) => (
          <div key={item.name} onClick={()=>onSearch(item.name)}> {item.name}</div>
        ))
        }
      </div>
      </div>
    </>
  )
}

export default App