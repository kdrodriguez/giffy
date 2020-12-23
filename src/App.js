import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider value={{ hola: "hola", chao: "chao" }}>
      <div className="App">
        <section className="App-content">
          <h3> Giffy </h3>
          <Link to="/"> Inicio </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
