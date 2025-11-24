
import React, { useState } from "react";

const API_KEY =process.env.REACT_APP_PSE_API_KEY;
const SEARCH_ENGINE_ID = process.env.REACT_APP_PSE_SEARCH_ENGINE_ID;

function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(
          query
        )}`
      );
      if (!response.ok) throw new Error("Error fetching search results");
      const data = await response.json();
      setResults(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }} className="searchbox">
      <h1 id="role-heading">Unsure About Something? Search Here!</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your search"
        style={{ width: "300px", padding: "0.5rem" }}
        className="inputbox"
      />
      <br />
      <button
        onClick={handleSearch}
        style={{ padding: "0.5rem 1rem", marginLeft: "1rem" }}
        className="animated-button"
      >
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

<ul className="listresources1">
  {results.slice(0, 3).map((item) => (
    <li key={item.cacheId} style={{ margin: "1rem 0" }}>
      <h4 className="why">{item.snippet}</h4>
      <a href={item.link} target="_blank" rel="noopener noreferrer"  >
        <p id="linkpara">click here to view complete details</p>
        <h5>{item.title}</h5>
        
      </a>
      <p>___________________________________________________</p>
    </li>
  ))}
</ul>

    </div>
  );
}

export default SearchBox;
