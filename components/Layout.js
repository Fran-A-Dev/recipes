import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Fran The Man &apos;s</span>
              <span>Insta Pot Recipe&apos;s</span>
            </h1>
            <h2>Healthy Eats</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Instapot Fun</p>
      </footer>
    </div>
  );
}
