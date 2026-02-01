import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { data } from "react-router";
import { Link, useLoaderData } from "react-router";

// Sample blog posts data
const posts: Record<string, { title: string; date: string; content: string }> = {
  "getting-started": {
    title: "Getting Started with Remix",
    date: "January 15, 2024",
    content: `
# Getting Started with Remix

Remix is a full-stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.

## Why Remix?

Remix is built on top of the Web Fetch API and runs on any modern JavaScript runtime. It embraces web standards and helps you build better websites.

## Key Features

- **Server-side rendering**: Fast page loads and better SEO
- **Nested routing**: Compose your UI with nested layouts
- **Data loading**: Load data in parallel with routes
- **Error handling**: Graceful error boundaries
- **Progressive enhancement**: Works without JavaScript

## Getting Started

Setting up a Remix project is straightforward. You can use the official template or start from scratch like we did in this blog!

\`\`\`bash
npx create-remix@latest
\`\`\`

Happy coding!
    `,
  },
  "web-development": {
    title: "Modern Web Development",
    date: "January 10, 2024",
    content: `
# Modern Web Development

The web development landscape is constantly evolving. Let's explore some of the latest trends and best practices.

## Current Trends

1. **Server Components**: React Server Components are changing how we think about rendering
2. **Edge Computing**: Deploy closer to your users for better performance
3. **TypeScript**: Type safety is becoming the standard
4. **Build Tools**: Vite and modern bundlers are making development faster

## Best Practices

- Write semantic HTML
- Focus on accessibility
- Optimize for performance
- Use modern CSS features
- Test your code

The future of web development is exciting, and frameworks like Remix are leading the way!
    `,
  },
  "hello-world": {
    title: "Hello World",
    date: "January 1, 2024",
    content: `
# Hello World

Welcome to my personal blog! This is my first post, and I'm excited to share my journey with you.

## What to Expect

I'll be writing about:

- Web development experiences
- Technical tutorials
- Project showcases
- Personal reflections on coding

## Why Start a Blog?

Blogging helps me:

1. Share knowledge with the community
2. Document my learning journey
3. Connect with other developers
4. Improve my writing skills

Thanks for stopping by, and I hope you find something useful here!
    `,
  },
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  
  if (!slug || !posts[slug]) {
    throw new Response("Post not found", { status: 404 });
  }

  return data({ post: posts[slug], slug });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Post Not Found" }];
  }
  
  return [
    { title: `${data.post.title} - Personal Blog` },
    { name: "description", content: data.post.title },
  ];
};

export default function Post() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div className="container">
      <header className="header">
        <h1>Personal Blog</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="main">
        <article className="post-content">
          <h1>{post.title}</h1>
          <p className="post-date">{post.date}</p>
          <div className="post-body">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('# ')) {
                return <h1 key={i}>{line.substring(2)}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={i}>{line.substring(3)}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={i}>{line.substring(4)}</h3>;
              } else if (line.startsWith('- ')) {
                return <li key={i}>{line.substring(2)}</li>;
              } else if (line.match(/^\d+\./)) {
                return <li key={i}>{line.substring(line.indexOf('.') + 2)}</li>;
              } else if (line.startsWith('```')) {
                return null;
              } else if (line.trim() === '') {
                return <br key={i} />;
              } else {
                return <p key={i}>{line}</p>;
              }
            })}
          </div>
          <div className="post-footer">
            <Link to="/" className="back-link">← Back to all posts</Link>
          </div>
        </article>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Personal Blog. Built with Remix.</p>
      </footer>
    </div>
  );
}
