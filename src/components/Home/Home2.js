import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Voici une <span className="purple"> présentation </span> de la communauté
            </h1>
            <p className="home-about-body">
              Kaori est une communauté amicale souhaitant accueillir une grande mass de personne dans un projet sociale, nous sommes une communauté grandement amicale et LGBTQ+
              <br />
              <br />Nous recrutons activement
              <i>
                <b className="purple"> Animateurs, des CM et Staff. </b>
              </i>
              <br />
              <br />
              Nous souhaitons entretenir une communauté saine pour tous merci &nbsp;
              <i>
                <b className="purple">de respecter nos conditions </b> and
                vôtre aide compte{" "}
                <b className="purple">
                  beaucoup.
                </b>
              </i>
              <br />
              <br />
              Si vous souhaitez faire partie de nos partenaire officiel merci de contacter Masha#1000 <b className="purple">Pour une échange de pub</b> contacter
              <i>
                <b className="purple">
                  {" "}
                  un Community Manager
                </b>
              </i>
              &nbsp; nos CM
              <i>
                <b className="purple"> ont le droits de menner une enquête sur vôtre serveur pour la sécuritée de nos membres.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Retrouve nous sur</h1>
            <p>
              Retrouve nous sur les <span className="purple">réseaux </span>sociaux
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://discord.gg/kJhGEA6A5P"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/TRKaori"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://kaoricafe.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kaori.soc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
