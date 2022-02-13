import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider value={{ hola: "holaa", chao: "chao" }}>
      <div className="App">
        <section className="App-content">
          <h3> Giffy </h3>
          <p>
            {" "}
            This app is based on Midudev React course. Here is the{" "}
            <a
              href="https://github.com/midudev/react-live-coding"
              target="_blank"
              rel="noreferrer"
            >
              github repo
            </a>
          </p>
          <Link to="/"> Inicio </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={() => <h1> 404 Error: </h1>} path="/404" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
