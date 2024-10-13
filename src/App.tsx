import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import './App.scss';

function App() {
  return (
    <Router>
      <div data-component="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:formType" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
