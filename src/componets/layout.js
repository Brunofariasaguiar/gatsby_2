import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLink,
  navLinkItem,
  navLinkText,
} from "../componets/layout.module.css";

export default function Layout({ children, titulo }) {
  return (
    <div className={container}>
      <hr />
      <nav>
        <ul className={navLink}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Inicio
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <h1>{titulo}</h1>
        {children}
      </main>
    </div>
  );
}

export const Head = () => <title>Layout</title>;
