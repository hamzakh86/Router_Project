import "./filtring.css";
import ReactStars from "react-rating-stars-component";
import {useRef,useState} from "react";

// Defining the Filtring component
export default function Filtring({filter}) {
    // Creating a reference to the search input field
    let searchRef = useRef();
    // Using state to manage the selected rating
    const [rate, setRate] = useState(0);
    // Function to handle changes in the star rating
    const ratingChanged = (newRating) => {
        // Call the 'filter' function with the search value and the new rating
         filter(searchRef.current.value,newRating);
        // Update the 'rate' state with the new rating
         setRate(newRating)
    };

    // Function to handle form submission
    function submitted(ev){
        ev.preventDefault();
        // Call the 'filter' function with the search value and the selected rating
        filter(searchRef.current.value,rate);
    }

    // Render the filter form with input, search button, and star rating component
    return (
        <form className="searchform" onChange={submitted} onSubmit={submitted}>
            <h3> FILTER BAR </h3>
            <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="Search for film..." aria-label=".form-control-lg example" />
            <button className="btn btn-primary searchbtn" type="submit" >Search</button>

             {/* Render the star rating component */}
            <ReactStars count={10}
                            onChange={ratingChanged}
                            size={50}
                            isHalf={true}
                            activeColor="#ffd700"/>
        </form>
    )
}