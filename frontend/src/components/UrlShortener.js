import React, { useState } from "react";

function UrlShortener({ onAdd }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    onAdd(url); // ✅ call the function passed from App.js
    setUrl("");
  };

  return (
    <div>
      <h2>Enter URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
    </div>
  );
}

export default UrlShortener;
