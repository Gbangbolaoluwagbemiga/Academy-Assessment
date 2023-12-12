import TopPanel from './components/TopPanel';
import NavBar from './components/NavBar';
import TopCategories from './components/TopCategories';
import SearchPanel from './components/SearchPanel';
import NewMovie from './components/NewMovie';
import Courses from './Redux/Courses';

function App() {
  return (
    <div className=" container">
      <NavBar />
      <hr />
      <TopCategories />
      <TopPanel />
      <SearchPanel />
      <NewMovie />
      <Courses />
    </div>
  );
}

export default App;
