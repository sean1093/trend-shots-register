import BookCard from './BookCard';
import logo from './images/logo.png';
import CONTENT from './content.json';

import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="60" />
        <div className="App-header-text" >
          {CONTENT.headerTitle}
        </div>
      </header>
      <div className="body-title">
        {CONTENT.bodyTitle}
      </div>
      <hr />
      <div className="App-body">
        <BookCard />
      </div>
    </div>
  );
}

export default App;
