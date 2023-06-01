import '../src/App.css';
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Reviews from './components/Reviews';
import Categories from './components/Categories';
import IndividualReviewPage from './components/IndividualReviewPage';
import AddReviewIdComment from './components/AddReviewIdComment';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews/:review_id" element={<IndividualReviewPage />} />
          <Route path="/reviews/:review_id/add-new-comment" element={<AddReviewIdComment />} /> 
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
