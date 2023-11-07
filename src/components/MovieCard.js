// Import the CSS file for styling. Make sure the path is correct.
import "./moviecard.css";

export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">  {/* Use a CSS class for styling the MovieCard component. */}
                <div>
                    <div>
                    <img width="300" src={ele.img} alt={ele.title} />  {/* Display the movie image with a specified width and alt text. */}
                    </div>
                    <div >
                    <h2>{ele.title}</h2>          {/* Display the movie title. */}
                    <p>{ele.description}</p>      {/* Display the movie description. */}
                    <h3>Rate : {ele.rating}</h3>  {/* Display the movie rating. */}
                    <h4>{ele.posterURL}</h4>      {/* Display the movie poster URL (consider displaying it as a link). */}
                    </div>
                </div>
            </div>
    )
}