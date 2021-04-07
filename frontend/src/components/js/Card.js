import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import image4 from '../../image/4.jpg'
import image6 from '../../image/6.png'
import image7 from '../../image/7.png'
import image8 from '../../image/8.jpg'
import image9 from '../../image/9.png'
import image10 from '../../image/10.jpg'
import '../css/Card.css';
const CardComponent = () =>
(
    <div class="row mt-5 pt-5 justify-content-center">
        <div className="col-lg-8 col-md-11">
            <CardDeck className="Card-1 ml-4 mr-5">
                <Card >
                    <Card.Img className="img-responsive center-block" className="img-4" variant="top" src={image4} />
                    <Card.Body style={{ backgroundColor: "black" }} className=" body-color text-white">
                        <Card.Title className="colour text-center mt-4" ><a className="colour" href="#" >Development</a></Card.Title>

                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img className="img-responsive center-block" className="img-6" variant="top" src={image6} />
                    <Card.Body style={{ backgroundColor: "black" }} className=" text-white">
                        <Card.Title className="text-center mt-4"><a className="colour" href="#" >Commmunication</a></Card.Title>

                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img className="img-responsive center-block" className="img-7" variant="top" src={image7} />
                    <Card.Body style={{ backgroundColor: "black" }} className=" text-white">
                        <Card.Title className="text-center mt-4"><a className="colour" href="#" >Creativity</a></Card.Title>

                    </Card.Body>

                </Card>

            </CardDeck>
            <CardDeck className="Card-2 mt-5 mr-4 ml-4">
                <Card>
                    <Card.Img className="img-responsive center-block" className="img-8" variant="top" src={image8} />
                    <Card.Body style={{ backgroundColor: "black" }} className="text-white">
                        <Card.Title className="  text-center mt-4"><a className="colour" href="#" >Development</a></Card.Title>

                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img className="img-responsive center-block" className="img-9" variant="top" src={image9} />
                    <Card.Body style={{ backgroundColor: "black" }} className="text-white">
                        <Card.Title className=" text-center mt-4"><a className="colour" href="#" >Big Data</a></Card.Title>

                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img className="img-responsive center-block" className="img-10" variant="top" src={image10} />
                    <Card.Body style={{ backgroundColor: "black" }} className="text-white">
                        <Card.Title className=" text-center mt-4"><a className="colour" href="#" >Content-Writing</a></Card.Title>

                    </Card.Body>

                </Card>

            </CardDeck>
        </div>
    </div>
)

export default CardComponent;