import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* To The New */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ATL</h4>
                <h5>To The New</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading engineering teams to build scalable applications and AI-powered solutions.  
              Driving system design, microservices architecture, and automation initiatives.
            </p>
          </div>

          {/* ATCS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ATCS (Nagarro)</h4>
                <h5>4+ years</h5>
              </div>
              <h3>2019–22</h3>
            </div>
            <p>
              Developed high-performance web applications using React.js and Node.js.  
              Focused on scalable architecture, performance optimization, and clean code practices.
            </p>
          </div>

          {/* Amdocs */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Consultant</h4>
                <h5>Amdocs</h5>
              </div>
              <h3>2018–19</h3>
            </div>
            <p>
              Delivered enterprise-grade solutions using Angular, Node.js, and AWS.  
              Collaborated with stakeholders to design efficient and scalable systems.
            </p>
          </div>

          {/* InfoObjects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SF Engineer</h4>
                <h5>InfoObjects</h5>
              </div>
              <h3>2014–18</h3>
            </div>
            <p>
              Built full-stack applications using Angular, Node.js, and MongoDB.  
              Contributed to API development, system architecture, and code optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
