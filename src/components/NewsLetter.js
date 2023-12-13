function NewsLetter() {
  return (
    <div className="news-letter d-md-flex my-md-5 justify-content-between">
      <div className="letter-text ">
        Find Out About The Latest Courses With The{' '}
        <span className="sub--text"> Academy</span> Newsletter
      </div>
      <form className="news-form">
        <p className="news-search">
          <input
            type="text"
            placeholder="Email Address..."
            className="searcher search-news "
          />
        </p>
        <button className="btn-panel btn-news">Search</button>
      </form>
    </div>
  );
}

export default NewsLetter;
