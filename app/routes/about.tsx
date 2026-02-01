import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "About - Personal Blog" },
    { name: "description", content: "Learn more about me and this blog" },
  ];
};

export default function About() {
  return (
    <div className="container">
      <header className="header">
        <h1>About Me</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="main">
        <article className="about-content">
          <h2>Welcome to My Personal Blog</h2>
          
          <p>
            Hi! I'm a passionate developer who loves sharing knowledge and experiences 
            through writing. This blog is built with Remix, showcasing modern web 
            development practices.
          </p>

          <h3>What I Write About</h3>
          <ul>
            <li>Web Development</li>
            <li>JavaScript & TypeScript</li>
            <li>React & Remix</li>
            <li>Best Practices & Patterns</li>
            <li>Personal Projects</li>
          </ul>

          <h3>Get in Touch</h3>
          <p>
            Feel free to connect with me on social media or drop me a message. 
            I'm always happy to discuss technology and collaborate on interesting projects.
          </p>
        </article>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Personal Blog. Built with Remix.</p>
      </footer>
    </div>
  );
}
