
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Card, CardContent, List, ListItem, ListItemText, AppBar, Toolbar } from "@mui/material";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);


  const shortenUrl = (originalUrl) => {
    let newUrls = [];
    for (let i = 0; i < 5; i++) {
      newUrls.push(`https://short.ly/${Math.random().toString(36).substring(2, 8)}`);
    }
    setShortUrls(newUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() === "") return;
    shortenUrl(url);
    setUrl("");
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🚀 Smart URL Shortener
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Card sx={{ p: 3, boxShadow: 5, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
              Paste your long URL below 👇
            </Typography>

            <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
              <TextField
                label="Enter URL"
                variant="outlined"
                fullWidth
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" type="submit" sx={{ px: 4, py: 1.2 }}>
                Shorten
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Display Shortened URLs */}
        {shortUrls.length > 0 && (
          <Card sx={{ mt: 4, p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                🔗 Your Shortened URLs:
              </Typography>
              <List>
                {shortUrls.map((s, index) => (
                  <ListItem key={index} sx={{ bgcolor: "#f5f5f5", borderRadius: 2, mb: 1 }}>
                    <ListItemText primary={s} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}
      </Container>
    </div>
  );
}

export default App;

