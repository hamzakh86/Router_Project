// Importing the necessary modules from 'react'.
import {useState,useEffect} from 'react';
import AddMovie from "./AddMovie";
import "./app.css";
import MovieList from './MovieList';
import Filtring from './Filtring';
import Description from './Description';
import {Routes,Route } from "react-router-dom";

// Creating an array of movie information.
const info = [
  // Define movie objects with properties like title, trailer, img, description, posterURL, and rating.
  { title:'La Casa De Papel',trailer:"https://www.youtube.com/embed/5yEOzsCiDJ4?si=wqYHdhdEzyPlZC3Y", img:'https://fr.web.img6.acsta.net/pictures/21/08/02/16/08/1706767.jpg', description:"Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.", posterURL:"www.lacasadepapel.com", rating:9.4 },
  { title:'Extinction',trailer:"https://www.youtube.com/embed/3yhHpBhtx2E?si=1zgE_8C9-Idqz71O", img:'https://fr.web.img6.acsta.net/pictures/18/07/11/17/39/5071594.jpg', description:"Un père hanté par l'idée de perdre sa famille voit son pire cauchemar se réaliser quand une puissance destructrice venue d'une autre planète débarque sur Terre. Alors qu'il lutte pour leur survie, il se découvre une force inconnue pour protéger sa famille du danger.", posterURL:"www.extinction.com", rating:9.3 },
  { title:'Red Notice',trailer:"https://www.youtube.com/embed/Q8X_W-435Lc?si=hyNiATHa52_U5jk9", img:'https://cinedweller.com/wp-content/uploads/2021/11/red-notice-affiche-400x650.jpg.webp', description:"Mélangeant film de casse, comédie et aventure, Red Notice est un blockbuster invraisemblable, mais qui bénéficie dun trio dacteurs qui fonctionne. Lensemble est aussi vain que divertissant.", posterURL:"www.rednotice.com", rating:8.5 },
  { title:'Tempête ',trailer:"https://www.youtube.com/embed/vF4g7Y38AJ0?si=k9DkjP4of2kKiOXF", img:'https://fr.web.img6.acsta.net/pictures/22/10/24/17/14/4700907.jpg', description:"Née dans le haras de ses parents, Zoé a grandi au milieu des chevaux et na quun rêve : devenir jockey ! Tempête, une pouliche quelle voit naître, va devenir son alter ego. Mais un soir dorage, Tempête, affolée, renverse Zoé et vient briser son rêve. Elle va pourtant saccrocher et tenter l'impossible pour renouer avec son destin.", posterURL:"www.tempete.com", rating:9.4 },
  { title:'Secrets of the Saqqara Tomb',trailer:"https://www.youtube.com/embed/77_UeHKMB-I?si=JYe8jCXQUH2zG1d-", img:'https://m.media-amazon.com/images/M/MV5BNDQyMDMxNzUtMTkwMC00ZTk1LWIxYzYtYTBlZGQ3Yjg2Mjc0XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1000_.jpg', description:"Secrets of the Saqqara Tomb est un film documentaire britannique de 2020 réalisé par James Tovell. Le film suit une équipe d'archéologues égyptiens qui découvrent une tombe du XXVᵉ siècle avant notre ère dans la nécropole de Saqqarah, qui était restée intacte depuis 4 400 ans.", posterURL:"www.secretsofthesaqqaratomb.com", rating:8.3 },
  { title:'Oxygène',trailer:"https://www.youtube.com/embed/WwYXOSrRyCo?si=3N7a904z-T7c-wn0", img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUaUYclvaujXgNi1duSujX-6JuuOIIAu-IzjfMZN5xBEES35vd', description:"Une jeune femme se réveille seule dans une capsule cryogénique.Elle a perdu la mémoire et ne sait pas comment elle a pu finir enfermée dans un coffre de la taille d'un cercueil. Alors que l'oxygène commence à manquer, il va lui falloir retrouver la mémoire pour sortir de ce cauchemar.", posterURL:"www.oxygene.com", rating:6.9 },
  { title:'The Game Changers',trailer:"https://www.youtube.com/embed/iSpglxHTJVM?si=D7She5EQ3mR_mfnC", img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlGlCB4OxuiukGhjuwGlcDWiDJlM9ogDlPiGfQQ_DkEMnY4_7m', description:"Le monde de James Wilks, un combattant de l'UFC, est bouleversé lorsqu'il découvre un groupe d'élite d'athlètes et de scientifiques de renommée mondiale qui prouvent que tout ce qu'il avait appris sur les protéines était un mensonge. James parcourt le monde à la recherche de la vérité.", posterURL:"www.thegamechangers.com", rating:8.5 },
  { title:'Born in Gaza',trailer:"https://www.youtube.com/embed/wKYysYySMEE?si=WmWej6SBjJKuqjnS", img:'https://m.media-amazon.com/images/M/MV5BYzdiYzk5ZTItODQ2NS00ZTU3LWI1YzctNmMzYjEwYTg4YTc2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', description:"Filmed shortly after the 2014 Gaza war, this documentary examines how violence has transformed the lives of 10 Palestinian children.", posterURL:"www.borningaza.com", rating:8.2 },
  { title:'The Wall',trailer:"https://www.youtube.com/embed/UFdPf-jg4oo?si=-IeIGOjJxbIFo912", img:'https://m.media-amazon.com/images/M/MV5BMTc5ODMyNzE4OF5BMl5BanBnXkFtZTgwNTM0Mzc4MTI@._V1_.jpg', description:"Irak, 2007. Les États-Unis sont convaincus que la guerre est terminée, mais des combats continuent à faire rage. Lorsque la construction d'un pipeline tourne mal et que des gens sont tués, deux soldats américains sont envoyés sur le terrain. Après 22 heures d'observation, ils concluent que la zone est déserte.", posterURL:"www.thewall.com", rating:8.1 },
// Add more movie objects with similar properties.
];
// Define the main component, 'App'.
function App(){

  // Define state variables using the 'useState' hook.
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  // Function to add a new movie to the 'list' state if it has required properties.
  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }

// Function to filter the movie list based on 'keyword' and 'rate'.
  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    // Update the 'filtredList' state to contain filtered movies.
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  // Use 'useEffect' to update the filtered list when the 'list' state changes.
  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
      <Routes>
        {/* show this two components if we are in the root path */}
        <Route path="/"  element={ <> <Filtring filter={filter}/>  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </> } />
        {/*  show this components if we are in : /:id  */}
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}

export default App;
