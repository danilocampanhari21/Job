
//*dependencias
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
//*separação do site,app,outros serviços
import { ProjectCard } from "./ProjectCard";
import { ProjectCard1 } from "./ProjectCard1";
import { ProjectCard2 } from "./ProjectCard2";
//*outros serviços
import api from "../assets/img/api.png";
import cloud from "../assets/img/cloud.png";
import database from "../assets/img/database.png";
//*App
import app_imob from "../assets/img/app_imob.png";
import APP1 from "../assets/img/APP1.png";
import restaurant from "../assets/img/restaurant.png";
//*site
import projectimg1 from "../assets/img/project-img1.png";
import food from "../assets/img/food.png";
import market from "../assets/img/market.png";
//* fundo (bg)
import colorSharp2 from "../assets/img/color-sharp2.png";
//fim

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  //*SITIO//
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectimg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: food,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: market,
    },

  ];


//*APPLICAZIONE//
  const ProjectCard1 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: app_imob,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: APP1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: restaurant,
    },

  ];
  
  //*ALTRO SERVIZI//
  const ProjectCard2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: api,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cloud,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: database,
    },

  ];

 

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Progetti</h2>
                <p>Alcuni dei nostri lavori sono già stati eseguiti</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sito</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Aplicazione</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Altri servizi</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p></p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p></p>
                    <Row>
                        {
                          ProjectCard1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                  </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p></p>

                    <Row>
                        {
                          ProjectCard2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                   
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}