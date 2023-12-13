function NewsLetter() {
  return (
    <div className="news-letter d-md-flex my-5 justify-content-between">
      <div className="letter-text ">
        Find Out About The Latest Courses With The{' '}
        <span className="sub--text"> Academy</span> Newsletter
      </div>
      <form className="news-form">
        <p className="news-search">
          <input
            type="text"
            placeholder="Email Address..."
            className="searcher "
          />
        </p>
        <button className="btn-panel">Search</button>
      </form>
    </div>
  );
}

export default NewsLetter;
