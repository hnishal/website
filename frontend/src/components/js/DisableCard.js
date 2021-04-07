import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import '../css/DisableCard.css'
import image11 from '../../image/11.png'
import image12 from '../../image/12.png'
import image13 from '../../image/13.png'
import image14 from '../../image/14.jpg'
const CardComponent2 = () =>
(
  <div className="row justify-content-center">
    <div className="col-md-10 col-lg-10">
      <CardDeck className="mt-5 mb-5 pt-5">
        <Card className="border-style-none pb-5 pt-5">
          <Card.Img className=" mt-3" class="img" variant="top" src={image11} />
          <Card.Body>
            <Card.Title className="text-center">Find</Card.Title>
            <Card.Text className="text-center">
              Post your role for free, let us know what you need and we'll match you with the best professional for your team.
      </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-style-none pb-5 pt-5">
          <Card.Img className="mt-3 " class="img" variant="top" src={image12} />
          <Card.Body>
            <Card.Title className="text-center">Hire</Card.Title>
            <Card.Text className="text-center">
              Search our curated community of professsionals now or let talent managers find the perfect addition to your team.
      </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-style-none pb-5 pt-5">
          <Card.Img className=" mt-3" class="img" variant="top" src={image13} />
          <Card.Body>
            <Card.Title className="text-center">Work</Card.Title>
            <Card.Text className="text-center">
              Leave the negotiations up to us. Whether you hire contract, dull-time, choose from flexible payment options.
      </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-style-none pb-5 pt-5">
          <Card.Img className="mt-3" class="img" variant="top" src={image14} />
          <Card.Body>
            <Card.Title className="text-center">Pay</Card.Title>
            <Card.Text className="text-center">
              Invoicing and payments occur through CTM Connects. Payments are protected through secure site.
      </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  </div>
)

export default CardComponent2;