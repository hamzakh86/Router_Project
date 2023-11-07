// Importing the CSS file for styling
import "./addmovie.css";
// Importing React library components and hooks
import ReactStars from "react-rating-stars-component";
import { useRef,useState } from "react";

// Defining the functional component AddMovie, which takes a prop 'adding'
export default function AddMovie({adding}) {

    // Using useRef to create references for input elements
    let titleRef = useRef();
    let imgurlRef = useRef();
    let trailerurlRef = useRef();
    let posurlRef = useRef();
    let descRef = useRef();

    // Using useState to manage the 'rate' state
    let [rate, setRate] = useState(0);
   // Handler function for changing the rating
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRate(newRating);
    };

    // Handler function for form submission
    function submitted(ev){
        ev.preventDefault();

// Creating a movie object with input values
        let movieObject = {
                            title:titleRef.current.value,
                            trailer:trailerurlRef.current.value.replace("watch?v=","embed/"), 
                            img:imgurlRef.current.value, 
                            description:descRef.current.value, 
                            posterURL:posurlRef.current.value, 
                            rating:rate
                        };
        // Calling the 'adding' function with the movie object as an argument               
        adding(movieObject);
    }
    // Rendering the form for adding a movie
    return (
        <div className="AddMovie">
            <form onSubmit={submitted}>
                 {/* Title input */}
                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                    <input name="title" ref={titleRef} type="text" className="form-control" id="colFormLabel" placeholder="Title" />
                    </div>
                </div>
                 {/* Image URL input */}
                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Image URL</label>
                    <div className="col-sm-10">
                    <input ref={imgurlRef} type="text" className="form-control" id="colFormLabel" placeholder="image url" />
                    </div>
                </div>
                {/* YouTube trailer URL input */}
                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Youtube trailer</label>
                    <div className="col-sm-10">
                    <input ref={trailerurlRef} type="text" className="form-control" id="colFormLabel" placeholder="youtube trailer url" />
                    </div>
                </div>
                {/* Poster URL input */}
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Your Poter URL </span>
                    <input ref={posurlRef} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>
                 {/* Description textarea */}
                <div className="input-group">
                    <span className="input-group-text">Description</span>
                    <textarea ref={descRef} className="form-control" aria-label="With textarea"></textarea>
                </div>
                 {/* Star rating component */}
                <div className="rating">
                <h6> Rating :  </h6>
                <ReactStars count={10}
                            onChange={ratingChanged}
                            size={50}
                            isHalf={true}
                            activeColor="#ffd700"/>
                </div>
                 {/* Submit button */}
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">ADD THE MOVIE</button>
                </div>
            </form>
        </div>
    )
}