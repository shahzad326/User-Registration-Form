import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import './App.css'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import './bootstrap.min.css';
import './index.css';
import OwnerPage from './pages/OwnerPage';
import ManagerPage from './pages/ManagerPage';

function App() {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/register' element={<RegisterScreen />}></Route>
            <Route path='/login' element={<LoginScreen />} ></Route>
            <Route path='/ownerpage' element={<OwnerPage />} ></Route>
            <Route path='/managerpage' element={<ManagerPage />} exact></Route>


            <Route path='/' element={<HomeScreen />} exact></Route>
          </Routes>
        </Container>
      </main>

      <Footer></Footer>
    </Router>
  );
}

export default App;
