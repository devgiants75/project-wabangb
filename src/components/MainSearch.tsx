import "../styles/MainSearch.css";

function Main_Search() {
  return (
    <div className="container">
      <div className="search-continer">
        <div className="search">
          <div className="search-element">
            <input className="search-area" placeholder="지역명" type="text" />
            <input className="search-date" placeholder="날짜" type="text" />
            <input
              className="search-Personnel"
              placeholder="인원수"
              type="text"
            />
            <button className="search-button">검색</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Search;
