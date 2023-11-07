// Importing a CSS file for styling.
import "./description.css";
// Importing the `useParams` hook from the "react-router-dom" library.
import {useParams} from "react-router-dom";
// Importing the `useParams` hook from the "react-router-dom" library.
import MovieCard from "./MovieCard";

export default function Description({list}) {
    // Logging the length of the `list` prop.
    console.log(list.length);
    // Using the `useParams` hook to get parameters from the URL.
    let params = useParams();
    return (
        <div className="desc">
            {  ( isNaN(params.id) || list.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
            
            // Conditional rendering based on whether the conditions are met.
            <>
            <MovieCard ele={list[params.id]} /> {/* Rendering the `MovieCard` component with a specific element from the `list` array. */}
            {/*Embedding a YouTube video based on the `trailer` property of the selected movie.*/}
            <iframe width="560" height="315" src={list[params.id].trailer}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </>
            }
        </div>
    )
}