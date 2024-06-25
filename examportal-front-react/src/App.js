import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!",{position:"top-center"});
  return (
    <div className="App">
      <Header/>
      <ToastContainer />
      <h1>Welcome to Rect</h1>
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
