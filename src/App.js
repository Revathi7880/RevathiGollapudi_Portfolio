import React from 'react';
import { Col, Row, Table, Card, CardHeader, CardBody, CardTitle, CardText, Image, Button} from 'react-bootstrap';
import profile_picture from './images/profile_picture.png'
import { ProjectsCircle, ExperienceCircle, SkillsCircle, StyledAboutContainer, StylesImageCol, StyledImage, StylesAboutCol, StyledImageWrapper, StyledTableCell, StylesNavCol, EducationCircle, Link } from './IndexStyles';
import { StyledExperienceContainer, StyledCard, ExperienceGrid } from './ExperienceStyle';
import { StyledDot, StyledImageCaption, StyledImageDiv, StyledProjectContainer, ProjectContainer1, ProjectContainer2, ProjectContainer3, StyledFront, StyledBack, StyledProjectHeading, StyledHeading, ProjectsGrid } from './ProjectsStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import openCV from './images/open_cv.png'
import dataVisualization from './images/data_visualization.jpg'
import computerVision from './images/computer_vision.png'
import API from './images/API.png';
import sql from './images/sql.png';
import normalization from './images/normalization.png';
import indexing from './images/indexing.png'
import databaseDesign from './images/database_design.png';
import { SkillsGrid, StyleContainer, StyledHeadingSkills, StyledSkill, StyledSkillsContainer } from './SkillsStyles';
import react from './images/skills/science.png';
import python from './images/skills/python.png';
import c from './images/skills/letter-c.png';
import cplus from './images/skills/c-.png';
import cSharp from './images/skills/c-sharp.png';
import java from './images/skills/java.png';
import javaScript from './images/skills/java-script.png';
import html from './images/skills/html.png';
import css from './images/skills/social.png'
import sqlServer from './images/skills/sql-server.png';
import sequilize from './images/skills/sequilize.png';
import nodeJS from './images/skills/node-js.png';
import dotNet from './images/skills/website.png';
import tableau from './images/skills/Tableau.png';
import bootstrap from './images/skills/bootstrap.png';
import api from './images/skills/api.png';
import postman from './images/skills/postman.png';
import gitVC from './images/skills/git.png';
import deepLearning from './images/skills/deep-learning.png';
import machineLearning from './images/machine_learning.png';
import oop from './images/skills/programming.png';
import sharepoint from './images/skills/office.png';
import agile from './images/skills/agile.png';
import azure from './images/skills/azure.png';
import mssql from './images/skills/mssql.png';
import { EducationGrid, StyledCollege, StyledEducationCard, StyledEducationContainer, StyledEducationDiv, StyledSpanLeft, StyledSpanRight } from './EducationStyles';
import gitam from './images/education/Gandhi_Institute_of_Technology_and_Management_logo.jpg';
import ub from './images/education/ub.png';
import bhashyam from './images/education/biit.png';
import github from './images/github.png';
import gmail from './images/gmail.png';
import linkedin from './images/linkedin.png';
import '@react-pdf-viewer/core/lib/styles/index.css';
import resume from './images/cv.png';
import django from './images/django.png';
import eda from "./images/data-cleaning.png";
import translate from './images/translate.png';
import nlp from './images/natural-language-processing (1).png';
import heart from './images/day.png';
import copyright from './images/copyright.png';


function App() {

  return (
    <>
      <div style={{ backgroundColor: "#272222" }}>
        <StyledAboutContainer id="index">
          <Row>
            <StylesImageCol md={4} sm={12} className="text-center mb-4">
              <StyledImageWrapper>
                <StyledImage src={profile_picture} roundedCircle />
              </StyledImageWrapper>
            </StylesImageCol>


            <StylesAboutCol>
              <Table>
                <tbody>
                  <tr>
                    <StyledTableCell style={{ backgroundColor: "#272222" }}><p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: "bold", fontSize: "3em", margin: "0", color: "#fff" }}>Hello,</p></StyledTableCell>
                  </tr>
                  <tr>
                    <StyledTableCell style={{ backgroundColor: "#272222" }}><p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: "bold", fontSize: "1.3em", margin: "0", color: "#fff" }}>A Bit About Me</p></StyledTableCell>
                  </tr>
                  <tr>
                    <StyledTableCell style={{ backgroundColor: "#272222" }}>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9em", margin: "0", color: "#fff" }}>
                        I’m a computer science graduate student with over 3+ years of experience in software development.
                        I’m passionate about using technology to create impactful solutions and always eager to expand my skills in software and data-driven environments.
                      </p>
                    </StyledTableCell>
                  </tr>
                </tbody>
              </Table>
              {/* <Col>
              <a href='https://drive.google.com/file/d/1VPKy04i61bpzc0UuO5Trkuf8BY3G5qED/view?usp=drive_link' style={{ textDecoration: "none", padding: "0.2em 0.7em 0.2em 0.7em", backgroundColor: "#272222", fontSize: "1.2em", marginLeft: "0.4em",}} target="_blank" rel="noopener noreferrer">Resume/CV</a>
              </Col> */}
              <Col style={{ marginLeft: "0.5em", marginTop: "1em"  }}>
                <a href='https://www.linkedin.com/in/revathi-gollapudi-a60894187/' style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer"><Link src={linkedin} /></a>
                <a href='mailto:revathigollapudi15@gmail.com' style={{ textDecoration: "none" }} ><Link src={gmail} /></a>
                <a href='https://github.com/Revathi7880' style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer"><Link src={github} /></a>
                <a href='https://drive.google.com/file/d/1dG5RreByvuR50WvFyCKpNJ9ttaSC6hsv/view?usp=drive_link' style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer"><Link src={resume} /></a>
              </Col>
            </StylesAboutCol>

            <StylesNavCol>
              <a href="#experience" style={{ textDecoration: "none" }}><ExperienceCircle><p style={{ fontFamily: "Georgia, sans-serif", margin: "3.7em 0 0 1.4em", fontWeight: "bold", fontSize: "1.5em", color: "#000" }}>Experience</p></ExperienceCircle></a>
              <a href='#projects' style={{ textDecoration: "none" }}><ProjectsCircle><p style={{ fontFamily: "Georgia, sans-serif", margin: "3.2em 0 0 2em", fontWeight: "bold", fontSize: "1.5em", color: "#000" }}>Project</p></ProjectsCircle></a>
              <a href='#education' style={{ textDecoration: "none" }}><EducationCircle><p style={{ fontFamily: "Georgia, sans-serif", margin: "2.7em 0 0 0.7em", fontWeight: "bold", fontSize: "1.5em", color: "#000" }}>Education</p></EducationCircle></a>
              <a href='#skills' style={{ textDecoration: "none" }}><SkillsCircle><p style={{ fontFamily: "Georgia, sans-serif", margin: "2.2em 0 0 1.4em", fontWeight: "bold", fontSize: "1.5em", color: "#000" }}>Skills</p></SkillsCircle></a>
            </StylesNavCol>
          </Row>
        </StyledAboutContainer>


        <StyledExperienceContainer id="experience">
          <ExperienceGrid>
            <StyledCard bg="dark" text="white" style={{ borderRadius: '1em' }}>
              <CardHeader as="h4" style={{ borderBottom: "3px solid #138fb633" }}>Sumitomo</CardHeader>
              <CardBody>
                <CardTitle as="h5">Software Engineer Intern</CardTitle>
                <CardTitle as="h6"><i>May 2024 - December 2024</i></CardTitle>
                <CardText>
                  <ul>
                    <li>
                    Collaborated with cross-functional teams to implement an end-to-end software solution for over 1,300 employees, integrating
                    MSSQL, authentication mechanism, admin dashboard, and task manager, boosting performance and production.
                    </li>
                    <li>
                    Engineered a full-stack React-based portal with JavaScript and Node.js to streamline form workflows, incorporating features
                    like digital signatures, formatted printing, email notifications, and tracking, enhancing operational efficiency by 30%.
                    </li>
                    <li>
                    Developed 25+ RESTful APIs using Node.js for Backend to facilitate seamless communication between the front-end and
                    MSSQL database, ensuring reliable and efficient data exchange.
                    </li>
                    <li>
                    Created interactive Tableau dashboards delivering actionable business insights, resulting in a 20% reduction in quality issues, 
                    and utilized Git to maintain code integrity, version control, and foster collaboration.
                    </li>
                    <li>
                      Transitioned from a manual Excel-based system to a fully electronic platform,
                      increasing form workflow speed by 30% and improving data accuracy by 20%.
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </StyledCard>

            <StyledCard bg="dark" text="white" style={{ borderRadius: '1em' }}>
              <CardHeader as="h4" style={{ borderBottom: "3px solid #138fb633" }}>Deloitte</CardHeader>
              <CardBody>
                <CardTitle as="h5">Analyst</CardTitle>
                <CardTitle as="h6"><i>June 2021 - August 2023</i></CardTitle>
                <CardText>
                  <ul>
                    <li>
                    Collaborated with teams to enable cross-platform data integration using SharePoint API with CSOM in .NET using C#,
                    efficiently extracting and organizing tax-related data for 10,000+ clients and 25,000+ files per client from SharePoint Online.
                    </li>
                    <li>
                    Devised and implemented innovative solutions using MSSQL to retrieve client data and store extraction information, reducing
                    manual entry and retrieval time by over 20 hours per week and enhancing overall efficiency.
                    </li>
                    <li>
                    Optimized database performance by writing 15+ stored procedures and 50+ SQL queries, ensuring faster data retrieval.
                    </li>
                    <li>
                    Resolved 100+ ServiceNow tickets, earning the ’You Are GEM’ award for excellence, and reduced production issues by 10%
                    through strategic bug fixes in C# and .NET, enhancing system reliability.
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </StyledCard>

            <StyledCard bg="dark" text="white" style={{ borderRadius: '1em' }}>
              <CardHeader as="h4" style={{ borderBottom: "3px solid #138fb633" }}>Deloitte</CardHeader>
              <CardBody>
                <CardTitle as="h5">Associate Analyst</CardTitle>
                <CardTitle as="h6"><i>January 2021 - May 2021</i></CardTitle>
                <CardText>
                  <ul>
                    <li>
                    Gained hands-on experience in C# and .NET, focusing on efficient and maintainable code development.
                    </li>
                    <li>
                    Practiced Agile methodologies while collaborating with a team to build a full-stack project using C#, .NET, and SQL.s
                    </li>
                    <li>
                    Led project development and presented the final solution to channel heads, showcasing functionality and skills acquired
                    during the internship.
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </StyledCard>
          </ExperienceGrid>
          <StyledHeading style={{ marginTop: "0.2em" }} id="experienceHeading">Experience</StyledHeading>
        </StyledExperienceContainer>

        <StyledProjectContainer id="projects">
          <StyledHeading style={{ marginTop: "0.5em" }}>Projects</StyledHeading>
          <ProjectsGrid>
            <ProjectContainer1>
              <StyledImageDiv>
                <StyledFront>
                  <StyledImageCaption>
                    <StyledDot className='dot'></StyledDot>
                    <StyledProjectHeading>Quiz Play</StyledProjectHeading>
                    <p style={{ color: "white", marginBottom: "1.5em" }}> Interactive quiz platform with real-time feedback.</p>
                    <Row style={{ marginBottom: "3.5em" }}>
                      <Col><FontAwesomeIcon icon={faHtml5} size="4x" style={{ color: '#E34F26' }} /></Col>
                      <Col><FontAwesomeIcon icon={faCss3Alt} size="4x" style={{ color: '#1572B6' }} /></Col>
                      <Col><FontAwesomeIcon icon={faJs} size="4x" style={{ color: '#F7DF1E' }} /></Col>
                      <Col><Image src={API} style={{ width: "4em", height: "3.8em" }} /></Col>
                    </Row>
                    <FontAwesomeIcon icon={faSync} size="1x" style={{ color: '#2297a6', marginRight: "0.4em" }} />
                    <span style={{ color: "white" }}>View Project</span>
                  </StyledImageCaption>
                </StyledFront>
                <StyledBack>
                  <Card bg="dark" text="white" style={{ width: "100%", height: "100%" }}>
                    <CardHeader as="h6">Project Description :</CardHeader>
                    <CardBody style={{ padding: "1em 1em 0.3em 0" }}>
                      <CardText>
                        <ul>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>Built a fully responsive quiz platform</b> with a user-friendly interface, optimized for seamless access across various devices.
                          </li>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>Enhanced user engagement</b> significantly with real-time feedback and interactive features, encouraging active participation.
                          </li>
                          <li style={{ fontSize: "1em" }}>
                            <b>Integrated a robust API-driven backend</b> to fetch quiz questions and answers from a centralized database, ensuring smooth data flow.
                          </li>
                        </ul>
                      </CardText>
                    </CardBody>
                  </Card>
                </StyledBack>
              </StyledImageDiv>
            </ProjectContainer1>

            <ProjectContainer2>
              <StyledImageDiv>
                <StyledFront>
                  <StyledImageCaption>
                    <StyledDot className='dot'></StyledDot>
                    <StyledProjectHeading>Sentiment Analysis</StyledProjectHeading>
                    <p style={{ color: "white", marginBottom: "1.3em" }}>Emotion Detection with High Accuracy.</p>
                    <Row style={{ marginBottom: "2.6em" }}>
                      <Col><Image src={deepLearning} style={{ width: "3em", height: "3.5em" }} /></Col>
                      <Col><Image src={openCV} style={{ width: "4em", height: "3.5em" }} /></Col>
                      <Col><Image src={dataVisualization} style={{ width: "4em", height: "3.5em" }} /></Col>
                      <Col><Image src={computerVision} style={{ width: "4em", height: "3.5em" }} /></Col>
                    </Row>
                    <FontAwesomeIcon icon={faSync} size="1x" style={{ color: '#2297a6', marginRight: "0.4em" }} />
                    <span style={{ color: "white" }}>View Project</span>
                  </StyledImageCaption>
                </StyledFront>
                <StyledBack>
                  <Card bg="dark" text="white" style={{ width: "100%", height: "100%" }}>
                    <CardHeader as="h6">Project Description :</CardHeader>
                    <CardBody style={{ padding: "1em 1em 0.3em 0" }}>
                      <CardText>
                        <ul>
                          <li style={{ fontSize: "1em", marginBottom: "0.3em" }}>
                            <b>Developed a sentiment analysis modal</b> to classify emotions, enhancing accuracy in emotion detection.
                          </li>
                          <li style={{ fontSize: "1em", marginBottom: "0.3em" }}>
                            <b>Utilized torchvision and OpenCV</b> for data visualization and preprocessing, streamlining image handling and improving model insights.
                          </li>
                          <li style={{ fontSize: "1em" }}>
                            <b>Employed a VGG architecture with dropout and image augmentation</b> to prevent overfitting and gradient issues, achieving a prediction accuracy of 95%.
                          </li>
                        </ul>
                      </CardText>
                    </CardBody>
                  </Card>
                </StyledBack>
              </StyledImageDiv>
            </ProjectContainer2>

            <ProjectContainer3>
              <StyledImageDiv>
                <StyledFront>
                  <StyledImageCaption>
                    <StyledDot className='dot'></StyledDot>
                    <StyledProjectHeading>Hospital Management</StyledProjectHeading>
                    <p style={{ color: "white", marginBottom: "0.9em" }}>Streamlined Hospital Data Management.</p>
                    <Row style={{ marginBottom: "2.8em" }}>
                      <Col><Image src={sql} style={{ width: "3em", height: "3.5em" }} /></Col>
                      <Col><Image src={normalization} style={{ width: "4em", height: "3.6em" }} /></Col>
                      <Col><Image src={indexing} style={{ width: "4em", height: "3.5em" }} /></Col>
                      <Col><Image src={databaseDesign} style={{ width: "4em", height: "3.5em" }} /></Col>
                    </Row>
                    <FontAwesomeIcon icon={faSync} size="1x" style={{ color: '#2297a6', marginRight: "0.4em" }} />
                    <span style={{ color: "white" }}>View Project</span>
                  </StyledImageCaption>
                </StyledFront>
                <StyledBack>
                  <Card bg="dark" text="white" style={{ width: "100%", height: "100%" }}>
                    <CardHeader as="h6">Project Description :</CardHeader>
                    <CardBody style={{ padding: "1em 1em 0.3em 0" }}>
                      <CardText>
                        <ul>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>Developed a comprehensive hospital database system</b> to efficiently organize and manage data on doctors, patients, diagnoses, and other information.
                          </li>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>Enhanced data accessibility</b> by centralizing critical details, promoting seamless interactions across hospital.
                          </li>
                          <li style={{ fontSize: "1em" }}>
                            <b>Achieved a 20% increase in operational efficiency</b>, leading to streamlined and improved workflows.
                          </li>
                        </ul>
                      </CardText>
                    </CardBody>
                  </Card>
                </StyledBack>
              </StyledImageDiv>
            </ProjectContainer3>

            <ProjectContainer3>
              <StyledImageDiv>
                <StyledFront>
                  <StyledImageCaption>
                    <StyledDot className='dot'></StyledDot>
                    <StyledProjectHeading>Churn Prediction</StyledProjectHeading>
                    <p style={{ color: "white", marginBottom: "1.5em" }}>Predicting Customer Retention</p>
                    <Row style={{ marginBottom: "2.4em" }}>
                      <Col><Image src={machineLearning} style={{ width: "4em", height: "3.8em" }} /></Col>
                      <Col><Image src={python} style={{ width: "3em", height: "3.5em" }} /></Col>
                      <Col><Image src={eda} style={{ width: "4em", height: "3.8em" }} /></Col>
                      <Col><Image src={django} style={{ width: "4em", height: "3.8em" }} /></Col>
                    </Row>
                    <FontAwesomeIcon icon={faSync} size="1x" style={{ color: '#2297a6', marginRight: "0.4em" }} />
                    <span style={{ color: "white" }}>View Project</span>
                  </StyledImageCaption>
                </StyledFront>
                <StyledBack>
                  <Card bg="dark" text="white" style={{ width: "100%", height: "100%" }}>
                    <CardHeader as="h6">Project Description :</CardHeader>
                    <CardBody style={{ padding: "1em 1em 0.3em 0" }}>
                      <CardText>
                        <ul>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>Developed a comprehensive churn prediction model</b> by evaluating six machine learning algorithms to identify the most accurate solution..
                          </li>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>Optimized model performance</b> through detailed analysis, selecting the highest-accuracy model for deployment.
                          </li>
                          <li style={{ fontSize: "1em" }}>
                            <b>Enabled proactive retention strategies</b> by integrating the model into business workflows, delivering data-driven insights for customer retention.
                          </li>
                        </ul>
                      </CardText>
                    </CardBody>
                  </Card>
                </StyledBack>
              </StyledImageDiv>
            </ProjectContainer3>

            <ProjectContainer2>
              <StyledImageDiv>
                <StyledFront>
                  <StyledImageCaption>
                    <StyledDot className='dot'></StyledDot>
                    <StyledProjectHeading>Language Translator</StyledProjectHeading>
                    <p style={{ color: "white", marginBottom: "1.5em" }}> English-to-French.</p>
                    <Row style={{ marginBottom: "2.2em" }}>
                      <Col><Image src={deepLearning} style={{ width: "4em", height: "3.8em" }} /></Col>
                      <Col><Image src={eda} style={{ width: "4em", height: "3.8em" }} /></Col>
                      <Col><Image src={translate} style={{ width: "3em", height: "3.8em" }} /></Col>
                      <Col><Image src={nlp} style={{ width: "4em", height: "3.8em" }} /></Col>
                    </Row>
                    <FontAwesomeIcon icon={faSync} size="1x" style={{ color: '#2297a6', marginRight: "0.4em" }} />
                    <span style={{ color: "white" }}>View Project</span>
                  </StyledImageCaption>
                </StyledFront>
                <StyledBack>
                  <Card bg="dark" text="white" style={{ width: "100%", height: "100%" }}>
                    <CardHeader as="h6">Project Description :</CardHeader>
                    <CardBody style={{ padding: "1em 1em 0.3em 0" }}>
                      <CardText>
                        <ul>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>Optimized Model Selection</b> Evaluated various Transformer models for accurate English-to-French translation.
                          </li>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>Speech and Text Processing</b> Integrated audio-to-text conversion to support both spoken and written English inputs..
                          </li>
                          <li style={{ fontSize: "1em" }}>
                            <b>Data Analysis</b> Used data visualization to refine model performance by analyzing language patterns.
                          </li>
                        </ul>
                      </CardText>
                    </CardBody>
                  </Card>
                </StyledBack>
              </StyledImageDiv>
            </ProjectContainer2>

            <ProjectContainer1>
              <StyledImageDiv>
                <StyledFront>
                  <StyledImageCaption>
                    <StyledDot className='dot'></StyledDot>
                    <StyledProjectHeading>HealthCart Hub</StyledProjectHeading>
                    <p style={{ color: "white", marginBottom: "1.5em" }}>Reliable Online Platform for Medical Supplies</p>
                    <Row style={{ marginBottom: "2.2em" }}>
                      <Col><Image src={react} style={{ width: "4em", height: "3.8em" }} /></Col>
                      <Col><Image src={html} style={{ width: "4em", height: "3.8em" }} /></Col>
                      <Col><FontAwesomeIcon icon={faJs} size="4x" style={{ color: '#F7DF1E' }} /></Col>
                      <Col><Image src={API} style={{ width: "4em", height: "3.8em" }} /></Col>
                    </Row>
                    <FontAwesomeIcon icon={faSync} size="1x" style={{ color: '#2297a6', marginRight: "0.4em" }} />
                    <span style={{ color: "white" }}>View Project</span>
                  </StyledImageCaption>
                </StyledFront>
                <StyledBack>
                  <Card bg="dark" text="white" style={{ width: "100%", height: "100%" }}>
                    <CardHeader as="h6">Project Description :</CardHeader>
                    <CardBody style={{ padding: "1em 1em 0.3em 0" }}>
                      <CardText>
                        <ul>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>Dynamic Product Catalog</b> Displayed a wide range of medical products with detailed information, ensuring easy browsing and searching.
                          </li>
                          <li style={{ fontSize: "1em", marginBottom: "0.7em" }}>
                            <b>User-Friendly Shopping Cart</b> Enabled efficient cart management with real-time updates and order summary..
                          </li>
                          <li style={{ fontSize: "1em" }}>
                            <b>Personalized User Experience</b> Implemented features like product recommendations and search filters to enhance user engagement..
                          </li>
                        </ul>
                      </CardText>
                    </CardBody>
                  </Card>
                </StyledBack>
              </StyledImageDiv>
            </ProjectContainer1>

          </ProjectsGrid>
        </StyledProjectContainer>

        <StyledEducationContainer id='education'>
          <EducationGrid>
            <StyledEducationDiv left="0">
              <StyledCollege style={{ width: "3.5rem", height: "3.5rem" }} src={ub} />
              <StyledEducationCard bg="dark" text="white" style={{ borderRadius: '1em' }}>
                <CardHeader as="h4" style={{ borderBottom: "3px solid #138fb633" }}>University at Buffalo</CardHeader>
                <CardBody>
                  <CardTitle as="h5">Master of Science</CardTitle>
                  <CardText>
                    <ul>
                      <li><text>Computer Science</text></li>
                      <li><text ><i>August 2023 - December 2024</i></text></li>
                      <li><text ><i>GPA - 3.85</i></text></li>
                    </ul>
                  </CardText>
                </CardBody>
              </StyledEducationCard>
            </StyledEducationDiv>

            <StyledEducationDiv left="50%">
              <StyledCollege left="-2em" style={{ width: "4rem", height: "4rem" }} src={gitam} />
              <StyledEducationCard bg="dark" text="white" style={{ borderRadius: '1em' }}>
                <CardHeader as="h4" style={{ borderBottom: "3px solid #138fb633" }}>GITAM Deemed to be University</CardHeader>
                <CardBody>
                  <CardTitle as="h5">Bachelor of Technology</CardTitle>
                  <CardText>
                    <ul>
                      <li><text>Computer Science and Engineering</text></li>
                      <li><text ><i>June 2017 - May 2021</i></text></li>
                      <li><text ><i>CGPA - 8.64</i></text></li>
                    </ul>
                  </CardText>
                </CardBody>
              </StyledEducationCard>
            </StyledEducationDiv>

            <StyledEducationDiv left="0">"
              <StyledCollege style={{ width: "3.5rem", height: "3.5rem", background: "#d4bcbc" }} src={bhashyam} />
              <StyledEducationCard bg="dark" text="white" style={{ borderRadius: '1em' }}>
                <CardHeader as="h4" style={{ borderBottom: "3px solid #138fb633" }}>BIIT Junior College</CardHeader>
                <CardBody>
                  <CardTitle as="h5">Junior College</CardTitle>
                  <CardText>
                    <ul>
                      <li><text>MPC (Maths, Physics, Chemistry)</text></li>
                      <li><text >June 2015 - April 2017</text></li>
                      <li><text ><i>Percentage - 96.7</i></text></li>
                    </ul>
                  </CardText>
                </CardBody>
              </StyledEducationCard>
            </StyledEducationDiv>
          </EducationGrid>
          <StyledHeading id="educationHeading">EDUCATION</StyledHeading>
        </StyledEducationContainer>

        <StyledSkillsContainer id="skills">
          <StyledHeadingSkills style={{ marginTop: "0.3em" }}>SKILLS</StyledHeadingSkills>
          <SkillsGrid>
            <StyleContainer>
              {[c, cSharp, cplus, java, javaScript].map((picture, index) => (
                <StyledSkill key={index} style={{ width: "4.5rem", height: "4.5rem" }} src={picture} />
              ))}
            </StyleContainer>

            <StyleContainer>
              {[python, html, css, react, sqlServer].map((picture, index) => (
                <StyledSkill key={index} style={{ width: "4.5rem", height: "4.5rem" }} src={picture} />
              ))}
            </StyleContainer>

            <StyleContainer>
              {[nodeJS, sequilize, dotNet, tableau, bootstrap].map((picture, index) => (
                <StyledSkill key={index} style={{ width: "4.5rem", height: "4.5rem" }} src={picture} />
              ))}
            </StyleContainer>

            <StyleContainer>
              {[gitVC, api, postman, machineLearning, deepLearning].map((picture, index) => (
                <StyledSkill key={index} style={{ width: "4.5rem", height: "4.5rem" }} src={picture} />
              ))}
            </StyleContainer>

            <StyleContainer>
              {[oop, sharepoint, agile, azure, mssql].map((picture, index) => (
                <StyledSkill key={index} style={{ width: "4.5rem", height: "4.5rem" }} src={picture} />
              ))}
            </StyleContainer>

          </SkillsGrid>

        </StyledSkillsContainer>

        {/* <StyledContactContainer>
            <h1 backgroun>Contact me!</h1>

            <Col style={{ marginLeft: "0.5em" }}>
              <a href='https://www.linkedin.com/in/revathi-gollapudi-a60894187/' style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer"><Link src={linkedin} /></a>
              <a href='mailto:revathigollapudi15@gmail.com' style={{ textDecoration: "none" }} ><Link src={gmail} /></a>
              <a href='https://github.com/Revathi7880' style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer"><Link src={github} /></a>
            </Col>
        </StyledContactContainer> */}
        <StylesAboutCol style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5em"}}>
              <Table>
                <tbody>
                  <tr>
                    <StyledTableCell style={{ backgroundColor: "#272222" }}><p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: "bold", fontSize: "2.5em", margin: "0", color: "#fff", textAlign: "center", }}>Contact Me!</p></StyledTableCell>
                  </tr>
                  <tr style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <a href='https://www.linkedin.com/in/revathi-gollapudi-a60894187/' style={{ textDecoration: "none", backgroundColor: "#272222" }} target="_blank" rel="noopener noreferrer"><Link src={linkedin} /></a>
                  <a href='mailto:revathigollapudi15@gmail.com' style={{ textDecoration: "none", backgroundColor: "#272222" }} ><Link src={gmail} /></a>
                  <a href='https://github.com/Revathi7880' style={{ textDecoration: "none", backgroundColor: "#272222" }} target="_blank" rel="noopener noreferrer"><Link src={github} /></a>
                  </tr>
                  <tr>
                  <h6 style={{ textAlign: "center", color: "white", margin: "0", paddingBottom: "0.7em", backgroundColor: "#272222", marginTop: "4em"  }}><img style = {{width: "1.5em", height: "1.5em", margin: "-0.2em 0.3em 0 0"}} src={copyright}/>Designed by Revathi<img style = {{width: "1.8em", height: "1.8em", margin: "-0.4em 0 0 0.2em"}} src={heart}/></h6>
                  </tr>
                </tbody>
              </Table>
          </StylesAboutCol>

        {/* <h6 style={{ textAlign: "center", color: "white", margin: "0", paddingBottom: "0.7em" }}>Designed by Revathi</h6> */}
      </div>
    </>
  );
}

export default App;
