// Importing the CSS file for styling
import "./movielist.css";
// Importing the MovieCard component and the Link component from React Router
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";

// Define a functional component called MovieList that takes a 'list' prop
function MovieList({list}){
    return(
        // Render a container div with the class name 'MovieList'
        <div className="MovieList">{

        // Map over the 'list' prop and create a Link for each element.
        // Render the MovieCard component for each element in the list.
        // Pass the 'ele' as a prop to MovieCard. 
        list.map( (ele,index)=>(
            <Link key={index} to={"/"+index} >   
            <MovieCard key={index} ele={ele} />
            </Link>
        ))
        }
        </div>
    );
}

export default MovieList;