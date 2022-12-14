import "./App.css";
import DayList from "./components/DayList";
import Header from "./components/Header";
import Day from "./components/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./components/EmptyPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
