// import React, { useState } from "react";
// import { Container, Row, Col, Button, Nav } from "react-bootstrap";
// import { motion, AnimatePresence } from "framer-motion";

// const Showcase = () => {
//   const [activeTab, setActiveTab] = useState("projects");
//   const [tabIndex, setTabIndex] = useState(0);

//   const handleSelect = (k, index) => {
//     setActiveTab(k);
//     setTabIndex(index);
//   };

//   return (
//     <div className="showcase-section mt-">
//       <Container>
//         <h2 className="text-center heading">
//           Portfolio <span>Showcase</span>
//         </h2>
//         <p className="text-center subheading">
//           Explore my journey through projects, certifications, and technical
//           expertise.
//         </p>

//         <div className="nav-wrapper">
//           <Nav
//             variant="pills"
//             className="justify-content-center showcase-tabs"
//             activeKey={activeTab}
//           >
//             <Nav.Item>
//               <Nav.Link
//                 eventKey="projects"
//                 onClick={() => handleSelect("projects", 0)}
//               >
//                 Projects
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 eventKey="certificates"
//                 onClick={() => handleSelect("certificates", 1)}
//               >
//                 Certificates
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 eventKey="techstack"
//                 onClick={() => handleSelect("techstack", 2)}
//               >
//                 Tech Stack
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>

//           <div className="tab-indicator-container">
//             <motion.div
//               className="tab-indicator"
//               animate={{ x: `${tabIndex * 120}px` }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             />
//           </div>
//         </div>

//         <div className="tab-content-container">
//           <AnimatePresence mode="wait">
//             {activeTab === "projects" && (
//               <motion.div
//                 key="projects"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <Row>
//                   {[1, 2, 3].map((item) => (
//                     <Col key={item} xs={12} sm={6} md={4} className="p-3">
//                       <div className="card-box card-glass fixed-height-card">
//                         <h5>Project {item}</h5>
//                         <p>Sample project description goes here.</p>
//                         <Button variant="primary">Live Demo</Button>{" "}
//                         <Button variant="outline-light">Details</Button>
//                       </div>
//                     </Col>
//                   ))}
//                 </Row>
//               </motion.div>
//             )}

//             {activeTab === "certificates" && (
//               <motion.div
//                 key="certificates"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <Row>
//                   {[1, 2, 3, 4, 5, 6].map((item) => (
//                     <Col key={item} xs={6} sm={4} md={3} className="p-3">
//                       <div className="card-box card-glass fixed-height-card">
//                         <img
//                           src="https://via.placeholder.com/200"
//                           alt="Certificate"
//                           className="img-fluid rounded"
//                         />
//                       </div>
//                     </Col>
//                   ))}
//                 </Row>
//               </motion.div>
//             )}

//             {activeTab === "techstack" && (
//               <motion.div
//                 key="techstack"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <Row>
//                   {[
//                     "React",
//                     "HTML",
//                     "CSS",
//                     "JavaScript",
//                     "Bootstrap",
//                     "Node.js",
//                   ].map((tech) => (
//                     <Col
//                       key={tech}
//                       xs={4}
//                       sm={3}
//                       md={2}
//                       className="p-3 text-center"
//                     >
//                       <div className="tech-icon-box card-glass fixed-height-card">
//                         <img
//                           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
//                           alt={tech}
//                           className="img-fluid"
//                         />
//                         <p>{tech}</p>
//                       </div>
//                     </Col>
//                   ))}
//                 </Row>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Showcase;

import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);

  const handleSelect = (key, index) => {
    setActiveTab(key);
  };

  useEffect(() => {
    const activeIndex =
      activeTab === "projects" ? 0 : activeTab === "certificates" ? 1 : 2;

    const currentTab = tabsRef.current[activeIndex];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="showcase-section mt-5">
      <Container>
        <h2 className="text-center heading">
          Portfolio <span>Showcase</span>
        </h2>
        <p className="text-center subheading">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>

        <div className="nav-wrapper position-relative">
          <Nav
            variant="pills"
            className="justify-content-center showcase-tabs"
            activeKey={activeTab}
          >
            {[
              { key: "projects", label: "Projects" },
              { key: "certificates", label: "Certificates" },
              { key: "techstack", label: "Tech Stack" },
            ].map((tab, index) => (
              <Nav.Item key={tab.key}>
                <Nav.Link
                  eventKey={tab.key}
                  onClick={() => handleSelect(tab.key, index)}
                  ref={(el) => (tabsRef.current[index] = el)}
                >
                  {tab.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Smooth motion indicator */}
          <motion.span
            className="indicator-bar"
            animate={{ x: indicatorStyle.left, width: indicatorStyle.width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </div>

        <div className="tab-content-container">
          <AnimatePresence mode="wait">
            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Row>
                  {[1, 2, 3].map((item) => (
                    <Col key={item} xs={12} sm={6} md={4} className="p-3">
                      <div className="card-box card-glass fixed-height-card">
                        <h5>Project {item}</h5>
                        <img
                          src="https://via.placeholder.com/200"
                          alt="Certificate"
                          className="img-fluid rounded"
                        />
                        <p>Sample project description goes here.</p>
                        <Button variant="primary">Live Demo</Button>{" "}
                        <Button variant="outline-light">Details</Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            )}

            {activeTab === "certificates" && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Row>
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Col key={item} xs={6} sm={4} md={3} className="p-3">
                      <div className="card-box card-glass fixed-height-card">
                        <img
                          src="https://via.placeholder.com/200"
                          alt="Certificate"
                          className="img-fluid rounded"
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            )}

            {activeTab === "techstack" && (
              <motion.div
                key="techstack"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Row>
                  {[
                    "React",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Bootstrap",
                    "Node.js",
                  ].map((tech) => (
                    <Col
                      key={tech}
                      xs={4}
                      sm={3}
                      md={2}
                      className="p-3 text-center"
                    >
                      <div className="tech-icon-box card-glass fixed-height-card">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                          alt={tech}
                          className="img-fluid"
                        />
                        <p>{tech}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default Showcase;
