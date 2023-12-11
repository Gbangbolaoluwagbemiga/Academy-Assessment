import TopPanel from './components/TopPanel';
import NavBar from './components/NavBar';
import TopCategories from './components/TopCategories';
import SearchPanel from './components/SearchPanel';

function App() {
  return (
    <div className=" container">
      <NavBar />
      <hr />
      <TopCategories />
      <TopPanel />
      <SearchPanel />
    </div>
  );
}

export default App;
