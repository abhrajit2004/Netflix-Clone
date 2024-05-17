import { useEffect, useState } from 'react'
import back_arrow from "../assets/back_arrow_icon.png";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Stream = () => {

  const id = useParams()
  const apiKey = import.meta.env.VITE_API_KEY;

  const [apiData, setApiData] = useState({name: "", key: "", published_at:"", type:""})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id['id']}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  },[])

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <Link to={'/'}><img className='absolute top-[20px] left-[20px] w-12 cursor-pointer' src={back_arrow} alt="" /></Link>
      <iframe className='rounded-xl' width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="stream-info flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Stream
