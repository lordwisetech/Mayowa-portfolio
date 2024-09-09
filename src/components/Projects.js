import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/blog.jpg";
import projImg2 from "../assets/img/user.jpg";
import projImg3 from "../assets/img/fbc.jpg";
import projImg4 from "../assets/img/loginreg.jpg";
import projImg5 from "../assets/img/anime.jpg";
import projImg6 from "../assets/img/expense.jpg";
import projImg7 from "../assets/img/webwizzard.jpg"



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      posision: "backend",
      title: "Wise Blog",
      description: "Simple Blog App in Node.js",
      imgUrl: projImg1,
      linkUrl: "https://wiseblog.onrender.com"
    },
    {
      posision: "backend",
      title: "CRUD",
      description: "User Management ",
      imgUrl: projImg2,
      linkUrl: "https://node-usermanagement-system.onrender.com"
    },
    {
      posision: "backend",
      title: "CHURCH MEDIAL ",
      description: "DOWNLOAD AND REUSE SLIDES TEMPLATE",
      imgUrl: projImg3,
      linkUrl: "https://fbc-medial.onrender.com"

    },
    {
      posision: "backend",
      title: "VIBENET",
      description: "GROUP CHAT WITH AUTHENTICATION",
      imgUrl: projImg4,
      linkUrl: "https://fbc-medial.onrender.com"
    },
    //FRONTEND START HERE
    { 
      posision: "front",
      title: "ANIME GALERY",
      description: "FETCH TRENDING AND HOT ANIME VIA API CALL",
      imgUrl: projImg5,
      linkUrl: "https://anime-gallery-nine.vercel.app/"
    },
    //fullstack here
    { 
      posision: "full",
      title: "EEXPENSE TRACKER",
      description: "CREAT AND TRACK YOUR EXPENSES",
      imgUrl: projImg6,
      linkUrl: "https://expenses-tracker-frontend-one.vercel.app/"
    },
    {
      posision: 'full',
      title: 'WEBWIZZARD FREE COURSE',
      linkUrl: "https://webwizzard-eschool.vercel.app/",
      description: "CHOOSE AND LEARN BY VIDEO TUT",
      imgUrl: projImg7,

    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These projects span multiple areas. Each project utilizes technologies like Vue.js, Node.js, React, and MongoDB to create dynamic, interactive user experiences, with features such as video fetching, file uploads, task management, and user authentication</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">BAckend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Fullstack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                                                          <Row>
                                        {
                                          projects.filter((project) => project.posision === 'backend')
                                          .map((project, index) => {
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
                    <Row>
                                        {
                                          projects.filter((project) => project.posision === 'front')
                                          .map((project, index) => {
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
                    <Row>
                                        {
                                          projects.filter((project) => project.posision === 'full')
                                          .map((project, index) => {
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
