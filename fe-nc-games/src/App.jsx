import '../src/App.css';
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Reviews from './components/Reviews';
import Categories from './components/Categories';
import IndividualReviewPage from './components/IndividualReviewPage';
import AddReviewIdComment from './components/AddReviewIdComment';
import ErrorUserNotFound from './components/ErrorUserNotFound';
import Login from './components/Login';

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
          <Route path="/error-user-not-found" element={<ErrorUserNotFound />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
