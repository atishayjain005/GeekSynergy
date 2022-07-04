import React from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

export default function DashboardContent() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const url = "https://hoblist.com/api/movieList";

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            mode: "cors",
            sort: "voting",
          }),
          headers: {
            "Content-Type": "application/xml",
          },
        });
        const json = await response.json();
        console.log(json);
        setData(json.result);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-secondary">
      <div className="container">
        {console.log(data)}
        {data.map((content) => {
          let date = new Date(content.releasedDate);
          let shortDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            day: "2-digit",
            month: "short",
          });

          return (
            <div key={content._id} className="py-4 ">
              <div className="border border-1 rounded-3 bg-white shadow-lg">
                <div className="d-flex flex-column flex-md-row justify-content-start ">
                  <div className="p-3 d-flex flex-md-column gap-5 gap-sm-2 justify-content-between align-items-center">
                    <div className="py-4 d-flex flex-md-column  justify-content-between align-items-center flex-fill text-center">
                      <BsFillCaretUpFill size={70} />
                      <h3>{content.totalVoted}</h3>
                      <BsFillCaretDownFill size={70} />
                    </div>
                    <div>
                      <p className="m-0 px-3 text-center">Votes</p>
                    </div>
                  </div>
                  <div className="py-3 text-center">
                    <img
                      src={content.poster}
                      alt="Movie Poster"
                      width="190px"
                      height="100%"
                    />
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-between flex-fill bd-highlight">
                    <h3>{content.title} </h3>
                    <hr />
                    <div>
                      <p>
                        <strong>Genre:</strong>&nbsp;{content.genre}
                      </p>
                      <p>
                        <strong>Director:</strong>&nbsp;
                        {content.director.map((dir) => dir)}
                      </p>
                      <p>
                        <strong>Starring:</strong>&nbsp;
                        {content.stars.map((star) => star)}
                      </p>
                      <p>
                        <strong>Movie Info:</strong>&nbsp;{content.runTime}
                        &nbsp;{content.runTime || "mins"}&nbsp;|&nbsp;
                        {content.language}&nbsp;|&nbsp;
                        {shortDate}
                      </p>
                    </div>
                    <p className="m-0 text-success">
                      {content.pageViews}&nbsp;views&nbsp;|&nbsp;Voted by&nbsp;
                      {content.totalVoted}&nbsp;People
                    </p>
                  </div>
                </div>
                <div className="p-3">
                  <button className="btn btn-primary w-100">
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
