import './App.css';
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Reviews from './components/Reviews';
import Categories from './components/Categories';
import IndividualReviewPage from './components/IndividualReviewPage';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews/:review_id" element={<IndividualReviewPage />} /> 
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
