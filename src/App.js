import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Otp from './pages/Otp';
import Resetpassword from './pages/ResetPassword.jsx';

import Transaction from './pages/Transaction';
import Dashboard from './pages/Dashboard';
import Downlines from './pages/Downlines';
import Payment from './pages/Payments';
import Withdrawal from './pages/Withdrawal';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Downline from './pages/ProfileDownline';
import DownlineSort from './pages/DownlineSort';
import Otpp from './pages/Otpp';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/forgetpassword/otp" element={<Otpp />} />
          {/* <Route path="/resetpassword" element={<Resetpassword/>}/> */}
          <Route path="/reset" element={<Resetpassword />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/transactions" element={<Transaction />} />
            <Route path="/dashboard/downlines" element={<Downlines />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/payments/withdrawal" element={<Withdrawal />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/downline" element={<Downline />} />
            <Route path="/profile/downlinesort" element={<DownlineSort />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;

