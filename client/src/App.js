import './App.css';
import SearchBar from './components/SearchBar.jsx';
import Catalog from './components/Catalog.jsx';
import Pager from './components/Pager.jsx';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Catalog />
      <Pager />
    </div>
  );
}

export default App;
