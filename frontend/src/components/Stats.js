import React from "react";

function Stats({ urls, onClick }) {
  // Ensure at least 5 rows
  const paddedUrls = [
    ...urls,
    ...Array(Math.max(0, 5 - urls.length)).fill(null),
  ];

  return (
    <div>
      <h2>Stats</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Original</th>
            <th>Shortened</th>
            <th>Validity</th>
            <th>Clicks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paddedUrls.map((u, index) =>
            u ? (
              <tr key={u.shortcode}>
                <td>{u.originalUrl}</td>
                <td>
                  <a
                    href={u.originalUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => onClick(u.shortcode)}
                  >
                    {u.shortUrl}
                  </a>
                </td>
                <td>{u.validity || "—"}</td>
                <td>{u.clicks}</td>
                <td>
                  <button onClick={() => onClick(u.shortcode)}>
                    Simulate Click
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td colSpan="5" style={{ textAlign: "center", color: "gray" }}>
                  Empty slot
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Stats;
