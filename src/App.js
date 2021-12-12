import logo from './images/logo.png';
import './App.css';

function App() {
  const openUrl = () => {
    window.open("https://docs.google.com/spreadsheets/d/1rKk5m48g9RheyUvPWrIEY7DctiotiStooh6Rss2V44c/edit#gid=0", "_blank");
  }
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="60" />
        <div className="App-header-text" >
          TREND-23 社費疫苗預約平台
        </div>
      </header>
      <div className="App-body">
        <div className="card">
          <div className="card-header">
            <p className="card-title">預約接種 Book Shots</p>
            <p className="card-content">
            接種日期: 12/23 19:00
            </p>
            <p className="card-content">
              接種地點: A901
            </p>
            <p className="card-content">
            請點擊下方按鈕完成預約，請自備？元，當天A9櫃檯付款。
              Note in label: 劑量含酒精成分，未滿18歲不得飲酒
            </p>
          </div>
          <div className="card-body">
            <button onClick={openUrl}>預約(Book)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
