import "./App.css";
import styled from "styled-components";
import HomeComponent from "./module/home";



function App() {
  return (
    <div className="App d-flex text-center align-items-center justify-content-center flex-column">
      <header className="App-header p-3 p-md-4">
        <HomeComponent />
      </header>
    </div>
  );
}

export default App;
