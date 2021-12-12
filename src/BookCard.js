import CONTENT from './content.json';

import './BookCard.css';

const BookCard = () => {
  const openUrl = () => {
      window.open("https://docs.google.com/spreadsheets/d/1rKk5m48g9RheyUvPWrIEY7DctiotiStooh6Rss2V44c/edit#gid=0", "_blank");
  }
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title bold">
          {CONTENT.content.title}
        </p>
        <div className="card-section">
          <p className="card-content">
            {CONTENT.content.date}
          </p>
          <p className="card-content">
            {CONTENT.content.location}
          </p>
          <p className="card-content">
            {CONTENT.content.fee}
          </p>
          <p className="card-content bold">
            {CONTENT.content.action}
          </p>
        </div>
        <div className="card-section">
          <p className="card-content">
            {CONTENT.content.date_en}
          </p>
          <p className="card-content">
            {CONTENT.content.location_en}
          </p>
          <p className="card-content">
            {CONTENT.content.fee_en}
          </p>
          <p className="card-content bold">
            {CONTENT.content.action_en}
          </p>
          <div className="note">
            {CONTENT.content.note}
          </div>
        </div>
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
