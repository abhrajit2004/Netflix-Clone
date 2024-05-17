import Navbar from './Navbar'
import title_banner from '../assets/title_banner.jpg'
import top_banner_title from '../assets/top_banner_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import VideoCards from './VideoCards'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='banner'>
      <Navbar />
      <div className="top-banner relative">
        <img className='title-banner w-full filter transition-all duration-100 brightness-50' src={title_banner} alt="" />
        <div className="desc">
          <img className='absolute top-10 mx-4' src={top_banner_title} alt="" />
          <p className='absolute top-80 text-lg w-80 short-desc text-white mx-6'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="btns absolute top-[450px] flex mx-6 justify-center items-center gap-2">
            <button className='playbtn flex justify-center items-center gap-2 bg-white hover:bg-[#ffffffbf] text-black px-4 py-2 rounded-md font-bold'><img className='w-8' src={play_icon} alt="" /><span>Play</span></button>
            <button className='infobtn flex justify-center items-center px-4 py-2  gap-2 bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] rounded-md font-bold'><img className='w-8' src={info_icon} alt="" /><span>More Info</span></button>
          </div>
           {/* < VideoCards /> */}
        </div>
      </div>
      <div className="extra-cards">
         <VideoCards title='Popular on Netflix' category="popular" />
         <VideoCards title='Blockbuster Movies' category="top_rated" />
         <VideoCards title='Upcoming' category="upcoming" />
         <VideoCards title='Top Pics for You' category="now_playing" />
      </div>
      <Footer />
    </div>
  )
}

export default Home
