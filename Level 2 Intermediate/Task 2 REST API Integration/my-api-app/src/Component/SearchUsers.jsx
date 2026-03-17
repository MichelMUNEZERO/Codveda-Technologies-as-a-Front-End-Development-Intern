import React, { useState, useEffect } from "react";
import axios from "axios";

const PER_PAGE = 9;

function SearchUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("best-match");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Debounced search: fires 500 ms after the user stops typing
  useEffect(() => {
    if (!query.trim()) {
      setUsers([]);
      setTotalCount(0);
      setError("");
      return;
    }

    const timer = setTimeout(() => {
      setPage(1);
      fetchUsers(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, typeFilter, sortBy]); // eslint-disable-line react-hooks/exhaustive-deps

  // Fire when the user explicitly changes the page
  useEffect(() => {
    if (query.trim()) {
      fetchUsers(page);
    }
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchUsers = async (pageNum) => {
    try {
      setLoading(true);
      setError("");

      let q = query.trim();
      if (typeFilter !== "all") q += ` type:${typeFilter}`;

      const sortParam =
        sortBy === "best-match" ? "" : `&sort=${sortBy}&order=desc`;

      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${encodeURIComponent(q)}&per_page=${PER_PAGE}&page=${pageNum}${sortParam}`,
      );

      setUsers(data.items);
      setTotalCount(data.total_count);
    } catch (err) {
      if (err.response?.status === 403) {
        setError(
          "GitHub API rate limit exceeded. Please wait a moment and try again.",
        );
      } else if (err.response?.status === 422) {
        setError("Invalid search query. Please try different keywords.");
      } else {
        setError(
          "Failed to fetch users. Please check your connection and try again.",
        );
      }
      setUsers([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setUsers([]);
    setTotalCount(0);
    setError("");
    setPage(1);
  };

  // GitHub caps search results at 1 000; display max 112 pages (9 per page)
  const totalPages = Math.min(Math.ceil(totalCount / PER_PAGE), 112);

  return (
    <div className="app-wrapper">
      {/* ── Header ── */}
      <div className="app-header">
        <svg
          className="github-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        <h2>GitHub User Search</h2>
      </div>

      {/* ── Search bar ── */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search GitHub users or organizations…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search GitHub users"
        />
        {query && (
          <button className="clear-btn" onClick={handleClear} title="Clear">
            ✕
          </button>
        )}
      </div>

      {/* ── Status messages ── */}
      {loading && (
        <div className="loading-state" role="status" aria-live="polite">
          <span className="spinner" aria-hidden="true" />
          <span>Searching…</span>
        </div>
      )}

      {error && (
        <div className="error-banner" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && totalCount > 0 && (
        <p className="result-count">
          Found <strong>{totalCount.toLocaleString()}</strong> result
          {totalCount !== 1 ? "s" : ""} for &ldquo;
          <em>{query}</em>&rdquo;
        </p>
      )}

      {!loading && !error && query.trim() && users.length === 0 && (
        <div className="empty-state">
          No users found for &ldquo;<strong>{query}</strong>&rdquo;
        </div>
      )}

      {/* ── User cards ── */}
      {users.length > 0 && (
        <ul className="user-grid" aria-label="Search results">
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                loading="lazy"
              />
              <div className="user-info">
                <span className="user-login">{user.login}</span>
                <span className={`user-type ${user.type.toLowerCase()}`}>
                  {user.type}
                </span>
              </div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-btn"
                aria-label={`View ${user.login}'s profile on GitHub`}
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* ── Pagination ── */}
      {totalPages > 1 && !loading && (
        <div className="pagination" role="navigation" aria-label="Pagination">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label="Previous page"
          >
            ← Prev
          </button>
          <span>
            Page <strong>{page}</strong> of <strong>{totalPages}</strong>
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchUsers;
