import './App.css';
import SearchContainer from './components/SearchContainer';

function App() {
  return (
    <div className='flex container justify-content-center'>
      <h1 className='d-flex justify-content-center mb-3 top-heading'> Search for Giphy</h1>

      <SearchContainer />

    </div>
  );
}

export default App;
