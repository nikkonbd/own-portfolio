import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import Img from '../../assest/myOwn.jpg';
import resume from '../../assest/My Own Resume.pdf';
import Typical from "react-typical";
import '../project2/Project2.css';

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Nikkon Mondal</h1>
          <h3>I am a <span className="green">
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                'Full Stack Web Developer',
                1000,
                'Web Developer',
                500,
                'Graphics Designer',
                500,
                'Front-End Developer',
                500,
                'JavaScript Developer',
                500,
                'React Developer',
                500
              ]}
            />
          </span>
          </h3>
          <p>
            I am Nikkon Mondal. I am 24 years old. I am Web-Developer for Front-End Developer. I like to create the smart website
            useful intersection.
          </p>
          <span>
            <a href="#footer"><button>Let's talk</button></a>
            <a style={{ marginLeft: '20px' }} href={resume} download><button>Download Resume</button></a>
          </span>

          <Social>
            <p>Follow My Profile!</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/nikkon.mondalbd/" target="blank">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/nikkon.mondalbd" target="blank">
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/nikkon-mondal-1b6849152/" target="blank">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="https://github.com/nikkonbd" target="blank">
                  <FaGithub />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img className="my-image" style={{ height: '480px', width: '400px' }}
            src={Img}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      border-radius: 8px;
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
