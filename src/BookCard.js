import CONTENT from './content.json';

import './BookCard.css';

const BookCard = () => {
  const openUrl = () => {
      window.open("https://docs.google.com/spreadsheets/d/1rKk5m48g9RheyUvPWrIEY7DctiotiStooh6Rss2V44c/edit#gid=0", "_blank");
  }
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">
          {CONTENT.content.title}
        </p>
        <p className="card-content">
          {CONTENT.content.date}
        </p>
        <p className="card-content">
          {CONTENT.content.location}
        </p>
        <p className="card-content">
          {CONTENT.content.info}
        </p>
        <p className="card-content">
          {CONTENT.content.note}
        </p>
      </div>
      <div className="card-body">
        <button onClick={openUrl}>
          {CONTENT.content.bookButton}
        </button>
      </div>
    </div>
  )
};

export default BookCard;
