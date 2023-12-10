import TopPanel from './components/TopPanel';
import TopCategories from './components/TopCategories';
import SubHeader from './components/TopCategories';

function App() {
  return (
    <div className=" container">
      <TopCategories />
      <hr />
      <SubHeader />
      <TopPanel />
    </div>
  );
}

export default App;
