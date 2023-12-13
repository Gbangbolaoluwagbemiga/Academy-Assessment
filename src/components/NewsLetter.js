function NewsLetter() {
  return (
    <div className="news-letter d-flex my-5 justify-content-between">
      <div className="letter-text ">
        Find Out About The Latest Courses With The{' '}
        <span className="sub--text"> Academy</span> Newsletter
      </div>
      <form>
        <input type="text" placeholder="Email Address..." />
        <button className="btn-panel">Search</button>
      </form>
    </div>
  );
}

export default NewsLetter;
