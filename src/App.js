import logo from "./logo-shecodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            📖 Coded by Mafalda Coelho, open-sourced on{" "}
            <a
              href="https://github.com/mafalda-coelho/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://cheerful-kangaroo-267eb1.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify.
            </a>
          </small>{" "}
        </footer>
      </div>
    </div>
  );
}
