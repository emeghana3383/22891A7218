const API_BASE = "http://localhost:5000"; // replace with backend server

export async function shortenURL(originalUrl, shortcode, validity) {
  try {
    const response = await fetch(`${API_BASE}/shorten`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ originalUrl, shortcode, validity }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error in middleware:", error);
    return { success: false, message: "Failed to shorten URL" };
  }
}

export async function getStatistics() {
  try {
    const response = await fetch(`${API_BASE}/stats`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return [];
  }
}
