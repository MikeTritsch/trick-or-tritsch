import { Card } from 'react-bootstrap';
import brew from '../assets/images/breweryexp.png'
import hot from '../assets/images/house-of-tec.png'
import weather from '../assets/images/weather.png'
import rolling from '../assets/images/rolling.png'

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="project-cards">
        <Card className="project-card">
        <Card.Img className="card-img" variant="top" src={brew} />
        <Card.Body>
          <Card.Title>Brewery Experience</Card.Title>
          <Card.Text>
            HTML | CSS | JavaScript | jQuery
          </Card.Text>
          <Card.Text>
          A brewery tracker with two open-sourced APIs: Google Maps API and the Open Brewery Database API.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="project-card">
        <Card.Img className="hot-card-img" variant="top" src={hot} />
        <Card.Body>
          <Card.Title>House of Tech</Card.Title>
          <Card.Text>
          Node | Express | Bootstrap | Handlebars | mySQL
          </Card.Text>
          <Card.Text>
          A user friendy interactive experience where music business nerds and tech peeps can come together to talk shop and share opinions.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="project-card">
        <Card.Img className="card-img" variant="top" src={weather} />
        <Card.Body>
          <Card.Title>Weather or Not</Card.Title>
          <Card.Text>
          JavaScript | CSS | HTML | OpenWeather API
          </Card.Text>
          <Card.Text>
          An informative weather forecasting application that provides up-to-date weather information for the next five days.          
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className="project-cards">
        <Card className="project-card">
        <Card.Img className="card-img" variant="top" src={rolling} />
        <Card.Body>
          <Card.Title>Rolling 25</Card.Title>
          <Card.Text>
            Handlebars | Bootstrap | JavaScript | Express | Node | mySQL
          </Card.Text>
          <Card.Text>
          A brewery tracker with two open-sourced APIs: the Google Maps API and the Open Brewery Database API.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="project-card">
        <Card.Img className="card-img" variant="top" src={hot} />
        <Card.Body>
          <Card.Title>CSS Code Snippets</Card.Title>
          <Card.Text>
          Node | Express | Bootstrap | Handlebars | mySQL
          </Card.Text>
          <Card.Text>
          A user friendy interactive experience where music business nerds and tech peeps can come together to talk shop and share opinions.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="project-card">
        <Card.Img className="card-img" variant="top" src={brew} />
        <Card.Body>
          <Card.Title>JavaScript Madness</Card.Title>
          <Card.Text>
          A brewery tracker with two open-sourced APIs: the Google Maps API and the Open Brewery Database API.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default Portfolio