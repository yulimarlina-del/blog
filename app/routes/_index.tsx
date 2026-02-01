import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "My Personal Blog" },
    { name: "description", content: "Welcome to my personal blog built with React Router v7 (Remix v3)!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", lineHeight: "1.8" }}>
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "2rem",
      }}>
        <header style={{ 
          borderBottom: "2px solid #e5e7eb", 
          paddingBottom: "2rem",
          marginBottom: "2rem",
        }}>
          <h1 style={{ 
            fontSize: "3rem", 
            fontWeight: "bold", 
            margin: "0",
            color: "#1f2937",
          }}>
            My Personal Blog
          </h1>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "#6b7280",
            marginTop: "0.5rem",
          }}>
            Learning React Router v7 (Remix v3)
          </p>
        </header>

        <main>
          <article style={{ 
            marginBottom: "3rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #e5e7eb",
          }}>
            <h2 style={{ 
              fontSize: "2rem", 
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.5rem",
            }}>
              Welcome to React Router v7! 🚀
            </h2>
            <time style={{ 
              fontSize: "0.875rem", 
              color: "#9ca3af",
              display: "block",
              marginBottom: "1rem",
            }}>
              {new Date().toLocaleDateString()}
            </time>
            <p style={{ color: "#374151", fontSize: "1.125rem" }}>
              This is a personal blog built with React Router v7, which is the next evolution 
              of Remix (essentially Remix v3). React Router v7 is a full-stack web framework 
              that lets you focus on the user interface and work back through web standards 
              to deliver a fast, slick, and resilient user experience.
            </p>
          </article>

          <article style={{ 
            marginBottom: "3rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #e5e7eb",
          }}>
            <h2 style={{ 
              fontSize: "2rem", 
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.5rem",
            }}>
              What's New in React Router v7 (Remix v3)?
            </h2>
            <time style={{ 
              fontSize: "0.875rem", 
              color: "#9ca3af",
              display: "block",
              marginBottom: "1rem",
            }}>
              {new Date().toLocaleDateString()}
            </time>
            <p style={{ color: "#374151", fontSize: "1.125rem" }}>
              React Router v7 brings exciting new features and improvements including:
            </p>
            <ul style={{ 
              color: "#374151", 
              fontSize: "1.125rem",
              paddingLeft: "2rem",
              marginTop: "1rem",
            }}>
              <li>Full Vite integration for faster build times and better DX</li>
              <li>Server rendering with React Server Components support</li>
              <li>Type-safe routing and data loading</li>
              <li>Enhanced performance optimizations</li>
              <li>Unified package (no more separate @remix-run packages)</li>
              <li>Better developer experience with improved error messages</li>
            </ul>
          </article>

          <article>
            <h2 style={{ 
              fontSize: "2rem", 
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.5rem",
            }}>
              Getting Started
            </h2>
            <time style={{ 
              fontSize: "0.875rem", 
              color: "#9ca3af",
              display: "block",
              marginBottom: "1rem",
            }}>
              {new Date().toLocaleDateString()}
            </time>
            <p style={{ color: "#374151", fontSize: "1.125rem" }}>
              To run this blog locally:
            </p>
            <pre style={{ 
              backgroundColor: "#f3f4f6",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflow: "auto",
              fontSize: "0.875rem",
              marginTop: "1rem",
            }}>
              <code>{`npm install
npm run dev`}</code>
            </pre>
            <p style={{ color: "#374151", fontSize: "1.125rem", marginTop: "1rem" }}>
              Then open your browser to <code style={{ 
                backgroundColor: "#f3f4f6",
                padding: "0.25rem 0.5rem",
                borderRadius: "0.25rem",
              }}>http://localhost:5173</code>
            </p>
          </article>
        </main>

        <footer style={{ 
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "2px solid #e5e7eb",
          textAlign: "center",
          color: "#6b7280",
        }}>
          <p>Built with ❤️ using React Router v7 (Remix v3)</p>
        </footer>
      </div>
    </div>
  );
}
