import cards_data from '../assets/cards/Cards_data'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const VideoCards = (props) => {

  const cardsRef = useRef()

  const [apiData, setApiData] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };
  
  

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${props.category?props.category:"now_playing"}?language=en-US&page=1 `, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',(e)=>{
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY 
    })
  }, [])
  

  return (
    <div className="cardsection mx-4 my-10">
      <h2 className='text-3xl font-bold'>{props.title}</h2>
      <div className="cards flex gap-2 overflow-x-scroll mt-2" ref={cardsRef}>
        {apiData.map((card, index) => {
            return <Link to={`/player/${card.id}`} className="card flex-shrink-0 relative cursor-pointer" key={index}>
            <img className='rounded-lg w-[240px]' src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" />
            <p className='absolute bottom-4 font-bold right-4'>{card.original_title}</p>
           </Link>
        })}

      </div>
    </div>

  )
}

export default VideoCards