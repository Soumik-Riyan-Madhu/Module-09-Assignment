const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;

    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
      </head>
      <body>
        <h1>Home Page</h1>
        <p>Welcome to our simple Node.js HTTP Server.</p>

        <nav>
          <a href="/">Home</a> |
          <a href="/blog">Blog</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a>
        </nav>
      </body>
      </html>
    `);
  }

  else if (req.url === "/blog" && req.method === "GET") {
    res.statusCode = 200;

    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Blog</title>
      </head>
      <body>
        <h1>Blog Page</h1>
        <p>Welcome to our blog. Here you can read interesting articles.</p>

        <nav>
          <a href="/">Home</a> |
          <a href="/blog">Blog</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a>
        </nav>
      </body>
      </html>
    `);
  }

  else if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;

    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About</title>
      </head>
      <body>
        <h1>About Page</h1>
        <p>This page contains information about our website and project.</p>

        <nav>
          <a href="/">Home</a> |
          <a href="/blog">Blog</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a>
        </nav>
      </body>
      </html>
    `);
  }

  else if (req.url === "/contact" && req.method === "GET") {
    res.statusCode = 200;

    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact</title>
      </head>
      <body>
        <h1>Contact Page</h1>
        <p>You can contact us through email or social media.</p>

        <nav>
          <a href="/">Home</a> |
          <a href="/blog">Blog</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a>
        </nav>
      </body>
      </html>
    `);
  }

  else {
    res.statusCode = 404;

    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 - Page Not Found</title>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>

        <nav>
          <a href="/">Go to Home</a>
        </nav>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


console.log("Node.js Assignment 06");