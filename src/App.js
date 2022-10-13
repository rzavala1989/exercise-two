import logo from './logo.svg';
import './App.css';
import { RatingStars } from './components/RatingStars';

const emptyStar = 'https://img.icons8.com/ios/50/000000/star--v1.png';
const fullStar = 'https://img.icons8.com/ios/50/000000/star--v2.png';

function App() {
  return (
    <>
      <div className='App'>
        Rating Star (1-5)
        <RatingStars />
      </div>
    </>
  );
}

export default App;
