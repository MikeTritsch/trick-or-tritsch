import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";



const Footer = () => {
  return (
    <footer className='footer'>
      <div className='icons'>
        <a href="https://open.spotify.com/user/mtritsch115?si=7ffabf7fc98d4f4c" target="_blank">
          <BsSpotify />
        </a>
        <a href="https://github.com/MikeTritsch" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/michael-tritsch/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer