import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skeleton from './Skeleton';
import AboutPage from './About/aboutpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={
        <Skeleton> 
          <AboutPage />
            </Skeleton>
           }></Route>
      </Routes>
     </Router>

  );
}
export default App;
