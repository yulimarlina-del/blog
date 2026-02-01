import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Personal Blog" },
    { name: "description", content: "Welcome to my personal blog!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to My Blog</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h2>Latest Posts</h2>
          <p>Sharing thoughts, ideas, and experiences</p>
        </section>

        <div className="posts-grid">
          <article className="post-card">
            <h3>
              <Link to="/posts/getting-started">Getting Started with Remix</Link>
            </h3>
            <p className="post-date">January 15, 2024</p>
            <p className="post-excerpt">
              Learn how to build modern web applications with Remix, a full-stack web framework.
            </p>
          </article>

          <article className="post-card">
            <h3>
              <Link to="/posts/web-development">Modern Web Development</Link>
            </h3>
            <p className="post-date">January 10, 2024</p>
            <p className="post-excerpt">
              Exploring the latest trends and best practices in web development.
            </p>
          </article>

          <article className="post-card">
            <h3>
              <Link to="/posts/hello-world">Hello World</Link>
            </h3>
            <p className="post-date">January 1, 2024</p>
            <p className="post-excerpt">
              My first blog post! Welcome to my personal blog where I share my journey.
            </p>
          </article>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Personal Blog. Built with Remix.</p>
      </footer>
    </div>
  );
}
