import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";



const Footer = () => {
  return (
    <footer className='footer'>
      <div className='icons'>
        <BsSpotify />
        <BsGithub />
        <BsLinkedin />
      </div>
    </footer>
  )
}

export default Footer