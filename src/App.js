import './App.css';
import Chatbot from './components/Chatbot';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <div className="dashboard">
        <Dashboard />
      </div>
      <div className="chatUi">
        <Chatbot />
      </div>
      
    </div>
  );
}

export default App;
