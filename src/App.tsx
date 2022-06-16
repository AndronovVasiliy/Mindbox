import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import AllDoneTask from './components/Main/AllDoneTask/AllDoneTask';
import AllNotDone from './components/Main/AllDoneTask/AllNotDone';
import AllTask from './components/Main/AllDoneTask/AllTask';
import { ListToDoList } from './components/Main/ListToDoList/ListToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ListToDoList />} />
          <Route path="/alldone" element={<AllDoneTask />} />
          <Route path="/allnotdone" element={<AllNotDone />} />
          <Route path="/alltask" element={<AllTask />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
