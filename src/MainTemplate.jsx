import { Outlet } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <header>
        <nav>
          <ol>
            <li>Menu 1</li>
            <li>Menu 2</li>
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
