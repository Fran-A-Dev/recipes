import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Fran The Man &apos;s</span>
              <span>Favorite JAMsnack Recipe&apos;s</span>
            </h1>
            <h2>Full Snack Dev Eats</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Fran_The_Dev</p>
      </footer>
    </div>
  );
}
