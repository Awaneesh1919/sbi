import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import Nav from 'react-bootstrap/Nav';

function Slides() {
  return (
    <>
    <h4>Check What's New</h4>
    <Carousel>
      <Carousel.Item>

      <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/CFD-July_Web.webp" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary"className='demat_btn'>Invest Now</Button>
    </Card.Body>
  </Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/platforms.webp" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary"className='demat_btn'>Download app</Button>
    </Card.Body>
  </Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/Emargin-card.webp" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary" className='demat_btn'>Invest Now</Button>
    </Card.Body>
  </Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/MF_ThodaKaro_Web-Banner.webp" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary"className='demat_btn'>Invest Now</Button>
    </Card.Body>
  </Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/NPS_Tax_Benefit_01_Landing_Page.webp" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary"className='demat_btn'>Go somewhere</Button>
    </Card.Body>
  </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/Options-Arena-card_1.webp"  alt='picture'/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary"className='demat_btn'>Go somewhere</Button>
    </Card.Body>
  </Card>
      </Carousel.Item>
    </Carousel>
    
  
  <h4>Karo Ek Nayi Shuruvaat, Humare Saath!</h4>
  
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home"className='demat_btn'disabled style={{borderRadius:"8px", textDecorationColor:"black"}}>Aquity</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"disabled>Derivative</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"disabled>Mutual Fund</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"disabled>Loan</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Fixed Income
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://www.sbisecurities.in/assets/images/home-equity-icon.png"
      />
      
    </Figure>
    </div>
  </>
  );
}

export default Slides;