import TopPanel from './components/TopPanel';
import NavBar from './components/NavBar';
import TopCategories from './components/TopCategories';

function App() {
  return (
    <div className=" container">
      <NavBar />
      <hr />
      <TopCategories />
      <TopPanel />
    </div>
  );
}

export default App;
