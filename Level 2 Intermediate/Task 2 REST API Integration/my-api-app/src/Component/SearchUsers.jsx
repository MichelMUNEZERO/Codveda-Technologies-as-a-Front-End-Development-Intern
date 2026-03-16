import React, { useState, useEffect } from "react";

function SearchUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query !== "") {
        fetchUsers();
      }
    }, 500); // debounce delay

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`,
      );

      setUsers(response.data.items);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Search GitHub Users</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} width="40" alt="" />
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
