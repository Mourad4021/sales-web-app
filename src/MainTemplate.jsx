import { Link, Outlet } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <header>
        <nav>
          <ol>
            <li>
              <Link to="/">Menu 1</Link>
            </li>
            <li>
              <Link to="counters">Menu 2</Link>
            </li>
            <li>Menu 3</li>
          </ol>
        </nav>
        <ol></ol>
      </header>
      <main>
        <Outlet />
        <footer>2023</footer>
      </main>
    </>
  );
}
