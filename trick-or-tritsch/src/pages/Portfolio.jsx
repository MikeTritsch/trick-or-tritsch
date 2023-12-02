import { Card } from 'react-bootstrap';
import brew from '../assets/images/breweryexp.png'
import hot from '../assets/images/house-of-tec.png'

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="project-cards">
        <Card className="project-card">
        <Card.Img className="brew-card-img" variant="top" src={brew} />
        <Card.Body>
          <Card.Title>Brewery Experience</Card.Title>
          <Card.Text>
            HTML | CSS | JavaScript | jQuery
          </Card.Text>
          <Card.Text>
          A brewery tracker with two open-sourced APIs: the Google Maps API and the Open Brewery Database API.
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
        <Card.Img className="brew-card-img" variant="top" src={brew} />
        <Card.Body>
          <Card.Title>Brewery Experience</Card.Title>
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