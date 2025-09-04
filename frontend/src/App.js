import React, { useState } from "react";
import UrlShortener from "./components/UrlShortener";
import Stats from "./components/Stats";

function App() {
  const [urls, setUrls] = useState([]);

  // When user enters one URL, generate 5 short URLs
  const addUrl = (url) => {
    const newUrls = Array.from({ length: 5 }, () => {
      const shortcode = Math.random().toString(36).substring(2, 7);
      return {
        originalUrl: url,
        shortUrl: `https://short.ly/${shortcode}`,
        shortcode,
        clicks: 0,
        validity: "Valid",
      };
    });

    // Add them to the table
    setUrls([...newUrls, ...urls]);
  };

  const incrementClick = (shortcode) => {
    setUrls(
      urls.map((u) =>
        u.shortcode === shortcode ? { ...u, clicks: u.clicks + 1 } : u
      )
    );
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <UrlShortener onAdd={addUrl} />
      <Stats urls={urls} onClick={incrementClick} />
    </div>
  );
}

export default App;
