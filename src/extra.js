        {/* <StyledExperienceContainer id="experience">
          <Table>
            <thead>
              <StyledTableCell><h1 style={{ textAlign: "center", backgroundColor: "#272222", color: "#fff", fontFamily: "'Trebuchet MS', sans-serif" }}>Experience</h1></StyledTableCell>
            </thead>
            <tbody>
              <Row >
                <Col style={{ backgroundColor: "#272222" }}>
                  <td>
                    <StyledCard bg="info" style={{ borderRadius: '1em' }}>
                      <CardHeader as="h4" >Sumitomo</CardHeader>
                      <CardBody>
                        <CardTitle as="h5">Student Support Intern</CardTitle>
                        <CardTitle as="h6"><i>May 2024 - December 2024</i></CardTitle>
                        <CardText>
                          <ul>
                            <li>
                              Developed and implemented over 10 dynamic forms with React for the frontend and Node.js for the backend,
                              ensuring seamless data management with MSSQL Server using Sequelize and SQL.
                            </li>
                            <li>
                              Designed and managed complete form workflows, including creation, updates, closures, printing, tracking, emailing,
                              and integration of digital signatures.
                            </li>
                            <li>
                              Built and maintained RESTful APIs to ensure smooth communication between front-end and back-end components.
                            </li>
                            <li>
                              Utilized Git for version control to ensure code integrity and foster collaboration within the development team.
                            </li>
                            <li>
                              Transitioned from a manual Excel-based system to a fully electronic platform,
                              increasing form workflow speed by 50% and improving data accuracy by 60%.
                            </li>
                          </ul>
                        </CardText>
                      </CardBody>
                    </StyledCard>
                  </td>
                </Col>
              </Row>

              <Row>
                <Col style={{ backgroundColor: "#272222" }}>
                  <Card bg="warning" style={{ borderRadius: '1em' }}>
                    <CardHeader as="h4" >Deloitte</CardHeader>
                    <CardBody>
                      <CardTitle as="h5">Analyst</CardTitle>
                      <CardTitle as="h6"><i>June 2021 - July 2023</i></CardTitle>
                      <CardText>
                        <ul>
                          <li>
                            Reduced production issues by 10% through strategic bug resolution and code enhancements in C#, improving overall system stability.
                          </li>
                          <li>
                            Achieved 100% automation of data processing workflows by implementing Azure Functions in C# within Visual Studio IDE,
                            streamlining operations and boosting efficiency
                          </li>
                          <li>
                            Enhanced cross-platform data integration by integrating SharePoint API with REST API and CSOM,
                            resulting in more reliable and efficient data exchanges.
                          </li>
                          <li>
                            Optimized database performance by developing and deploying 20+ stored procedures and executing 50+ advanced SQL queries,
                            leading to faster data retrieval and processing.
                          </li>
                          <li>
                            Resolved over 100 ServiceNow tickets, ensuring timely issue resolution and contributing to consistent project timelines and improved client satisfaction.
                          </li>
                        </ul>
                      </CardText>

                      <CardTitle as="h5">Intern</CardTitle>
                      <CardTitle as="h6"><i>January 2021 - March 2021</i></CardTitle>
                      <CardText>
                        <ul>
                          <li>
                            Received comprehensive training in C# and the .NET framework, enhancing proficiency in software development
                          </li>
                          <li>
                            Gained knowlegde and training in Agile methodologies and project management principles
                          </li>
                        </ul>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </tbody>
          </Table>
        </StyledExperienceContainer> */}

        {/* <StyledProjectContainer id="projects">
          <Table>
            <thead>
              <StyledHeading>Projects</StyledHeading>
            </thead>
            <tbody>
              <Row>
                <Col style={{ backgroundColor: "#272222" }}>
                  <ProjectContainer>
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
                            <Col><Image src={API} style={{width: "4em", height: "3.8em"}}/></Col>
                          </Row>
                          <FontAwesomeIcon icon={faSync} size="1x" style={{ color: '#2297a6', marginRight: "0.4em" }}/>
                          <span style={{ color: "white" }}>View Project</span>
                        </StyledImageCaption>
                      </StyledFront>
                      <StyledBack>
                      <Card bg="dark"  text="white" style={{width: "100%", height: "100%"}}>
                      <CardHeader as="h6">Project Description :</CardHeader>
                      <CardBody style={{padding: "1em 1em 0.3em 0"}}>
                        <CardText>
                          <ul>
                            <li style={{fontSize: "1em", marginBottom: "0.7em"}}>
                            <b>Built a fully responsive quiz platform</b> with a user-friendly interface, optimized for seamless access across various devices.
                            </li>
                            <li style={{fontSize: "1em", marginBottom: "0.7em"}}>
                            <b>Enhanced user engagement</b> significantly with real-time feedback and interactive features, encouraging active participation.
                            </li>
                            <li style={{fontSize: "1em"}}>
                            <b>Integrated a robust API-driven backend</b> to fetch quiz questions and answers from a centralized database, ensuring smooth data flow.
                            </li>
                          </ul>
                        </CardText>
                      </CardBody>
                    </Card>
                      </StyledBack>
                    </StyledImageDiv>
                  </ProjectContainer>
                </Col>

                <Col style={{ backgroundColor: "#272222" }}>
                  <ProjectContainer>
                    <StyledImageDiv>
                      <StyledFront>
                        <StyledImageCaption>
                        <StyledDot className='dot'></StyledDot>
                          <StyledProjectHeading>Sentiment Analysis</StyledProjectHeading>
                          <p style={{ color: "white", marginBottom: "1.3em" }}>Emotion Detection with High Accuracy.</p>
                          <Row style={{ marginBottom: "2.6em" }}>
                            <Col><Image src={deepLearning} style={{width: "3em", height: "3.5em"}}/></Col>
                            <Col><Image src={openCV} style={{width: "4em", height: "3.5em"}}/></Col>
                            <Col><Image src={dataVisualization} style={{width: "4em", height: "3.5em"}}/></Col>
                            <Col><Image src={computerVision} style={{width: "4em", height: "3.5em"}}/></Col>
                          </Row>
                          <FontAwesomeIcon icon={faSync} size="1x" style={{ color: '#2297a6', marginRight: "0.4em" }}/>
                          <span style={{ color: "white" }}>View Project</span>
                        </StyledImageCaption>
                      </StyledFront>
                      <StyledBack>
                      <Card bg="dark"  text="white" style={{width: "100%", height: "100%"}}>
                      <CardHeader as="h6">Project Description :</CardHeader>
                      <CardBody style={{padding: "1em 1em 0.3em 0"}}>
                        <CardText>
                          <ul>
                            <li style={{fontSize: "1em", marginBottom: "0.3em"}}>
                            <b>Developed a sentiment analysis modal</b> to classify emotions, enhancing accuracy in emotion detection.
                            </li>
                            <li style={{fontSize: "1em", marginBottom: "0.3em"}}>
                            <b>Utilized torchvision and OpenCV</b> for data visualization and preprocessing, streamlining image handling and improving model insights.
                            </li>
                            <li style={{fontSize: "1em"}}>
                            <b>Employed a VGG architecture with dropout and image augmentation</b> to prevent overfitting and gradient issues, achieving a prediction accuracy of 95%.
                            </li>
                          </ul>
                        </CardText>
                      </CardBody>
                    </Card>
                      </StyledBack>
                    </StyledImageDiv>
                  </ProjectContainer>
                </Col>

                <Col style={{ backgroundColor: "#272222" }}>
                  <ProjectContainer>
                    <StyledImageDiv>
                      <StyledFront>
                        <StyledImageCaption>
                        <StyledDot className='dot'></StyledDot>
                          <StyledProjectHeading>Hospital Management</StyledProjectHeading>
                          <p style={{ color: "white", marginBottom: "0.9em" }}>Streamlined Hospital Data Management.</p>
                          <Row style={{ marginBottom: "2.8em" }}>
                            <Col><Image src={sql} style={{width: "3em", height: "3.5em"}}/></Col>
                            <Col><Image src={normalization} style={{width: "4em", height: "3.6em"}}/></Col>
                            <Col><Image src={indexing} style={{width: "4em", height: "3.5em"}}/></Col>
                            <Col><Image src={databaseDesign} style={{width: "4em", height: "3.5em"}}/></Col>
                          </Row>
                          <FontAwesomeIcon icon={faSync} size="1x" style={{ color: '#2297a6', marginRight: "0.4em" }}/>
                          <span style={{ color: "white" }}>View Project</span>
                        </StyledImageCaption>
                      </StyledFront>
                      <StyledBack>
                      <Card bg="dark"  text="white" style={{width: "100%", height: "100%"}}>
                      <CardHeader as="h6">Project Description :</CardHeader>
                      <CardBody style={{padding: "1em 1em 0.3em 0"}}>
                        <CardText>
                          <ul>
                            <li style={{fontSize: "1em", marginBottom: "0.7em"}}>
                            <b>Developed a comprehensive hospital database system</b> to efficiently organize and manage data on doctors, patients, diagnoses, and other information.
                            </li>
                            <li style={{fontSize: "1em", marginBottom: "0.7em"}}>
                            <b>Enhanced data accessibility</b> by centralizing critical details, promoting seamless interactions across hospital.
                            </li>
                            <li style={{fontSize: "1em"}}>
                            <b>Achieved a 20% increase in operational efficiency</b>, leading to streamlined and improved workflows.
                            </li>
                          </ul>
                        </CardText>
                      </CardBody>
                    </Card>
                      </StyledBack>
                    </StyledImageDiv>
                  </ProjectContainer>
                </Col>

              </Row>

            </tbody>
          </Table>
        </StyledProjectContainer> */}