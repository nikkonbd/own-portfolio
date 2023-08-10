import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name: "Html 5",
        img_url: "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
        stars: 4,
        disc: `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed.`
    },
    {
        name: "React",
        position: "web developer",
        img_url: "https://e7.pngegg.com/pngimages/791/922/png-clipart-react-javascript-library-redux-user-interface-tesseract-logo-symmetry.png",
        stars: 4,
        disc: `React is a free and open-source front-end JavaScript library for building user interfaces based on components.`
    },
    {
        name: "Css",
        position: "web developer",
        img_url: "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
        stars: 4,
        disc: `CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.`
    },
    {
        name: "JavaScript",
        position: "web developer",
        img_url: "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png",
        stars: 4,
        disc: `JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web.`
    },
    {
        name: "Firebase",
        position: "web developer",
        img_url: "https://w7.pngwing.com/pngs/359/1024/png-transparent-firebase-cloud-messaging-computer-icons-google-cloud-messaging-android-angle-triangle-computer-programming.png",
        stars: 5,
        disc: `Firebase is a set of backend cloud computing services and application development platforms provided by Google.`
    },
    {
        name: "MongoDB",
        position: "web developer",
        img_url: "https://www.svgrepo.com/download/331488/mongodb.svg",
        stars: 5,
        disc: `MongoDB is a source-available cross-platform document-oriented database program service.`
    },
    {
        name: "Node",
        position: "web developer",
        img_url: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
        stars: 5,
        disc: `Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code.`
    },
    {
        name: "Bootstrap",
        position: "web developer",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQYJ7nMsN5kKdOu1t0Uyqobj2l2eSrVu-lA&usqp=CAU",
        stars: 5,
        disc: `Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.`
    },
    {
        name: "Tailwind",
        position: "web developer",
        img_url: "https://d4.alternativeto.net/uaUADPLN5QTqRHNl0qujQbTXzm5wjsAq5K9Y-ylGjdQ/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy90YWlsd2luZC1jc3NfMTM2NjE5LnBuZw.png",
        stars: 5,
        disc: `Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ))
    return (
        <Container id='client'>
            <Slide direction="left">
                <span className="green">My Skills</span>
                <h1>what can I do</h1>
            </Slide>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <Buttons>
                    <button
                        onClick={() => arrowRef.current.slickPrev()}
                    ><IoIosArrowBack /></button>
                    <button
                        onClick={() => arrowRef.current.slickNext()}
                    ><IoIosArrowForward /></button>
                </Buttons>
            </Testimonials>
        </Container>
    )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`