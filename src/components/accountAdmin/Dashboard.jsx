import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assets/css/style4.css"; // Make sure this path is correct
import MOHAN from "../../assets/images/mohan.png";
import CA from "../../assets/images/CA-image.png";
import UST from "../../assets/images/UST.png";// Adjust path as needed
import CFO from "../../assets/images/CFO.png";
import APM from "../../assets/images/APM.png";
import AAS from "../../assets/images/AAS.png";
import MC from "../../assets/images/MC.png";
import FD from "../../assets/images/FD.png";
import ITC from "../../assets/images/ITC.png";
import GST from "../../assets/images/GST.png";
import IT from "../../assets/images/IT.png";
import RERA from "../../assets/images/RERA.png";
import DAP from "../../assets/images/DAP.png";
import FDP from "../../assets/images/FDP.png";
import PWF from "../../assets/images/PWF.png";

const servicesData = [
  {
    title: "US Taxation & Bookkeeping",
    img: UST,
    link: "Accounting-Services-in-Hyderabad-Accounting-Overview",
  },
  {
    title: "CFO Support Services",
    img: CFO,
    link: "Accounting-Services-in-Hyderabad-Accounting-Overview",
  },
  {
    title: "ACCOUNTING AND PAYROLL MANAGEMENT",
    img: APM,
    link: "Accounting-Services-in-Hyderabad-Accounting-Overview",
  },
  {
    title: "INTERNATIONAL TAXATION",
    img: IT,
    link: "International-Taxation-Services-in-Hyderabad",
  },
  {
    title: "FINANCIAL ADVISORS",
    img: FD,
    link: "Home-Loan-Advisors-in-Hyderabad",
  },
  {
    title: "INCOME TAX COMPLIANCES",
    img: ITC,
    link: "Corporate-Tax-Services",
  },
  {
    title: "GOODS AND SERVICES TAX",
    img: GST,
    link: "Goods-And-Services-Tax-in-Hyderabad",
  },
  {
    title: "COMPANY AND LLP COMPLIANCES",
    img: MC,
    link: "Company-Registration-in-Hyderabad",
  },
  {
    title: "AUDIT AND ASSURANCE",
    img: AAS,
    link: "audit-and-assurance-services-in-hyderabad",
  },
];

const servicesData1 = [

  {
    title: "STARTUP",
    img: "https://www.kkreddyassociates.com/adminassets/Client//1762236216.jpg",
    link: "RERA-Consultants-Hyderabad",
  },
  {
    title: "Non Resident Indian",
    img: "https://www.kkreddyassociates.com/adminassets/Client//1762236117.jpg",
    link: "Home-Loan-Advisors-in-Hyderabad",
  },
  {
    title: "Foreign Business Setups In India",
    img: "https://www.kkreddyassociates.com/adminassets/Client//1762236117.jpg",
    link: "Corporate-Tax-Services",
  },
];

const Dashboard = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutUsRef = useRef(null);
  const ourTeamRef = useRef(null);
  const companyProfileRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // show 3 at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <header className="main-header">
        <div className="container header-content">
          <div className="logo">
            <img
              src={MOHAN}
              className="img-fluid logo"
              style={{ height: "60px" }}
              alt="Logo"
            />
          </div>
          <nav>
            <div className="dropdown">
              <span>Home</span>
            </div>
            <div className="dropdown about-dropdown">
              <span>About</span>
              <div className="dropdown-content">
                <a
                  href="#about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About Us
                </a>
                <a
                  href="#our-team"
                  onClick={(e) => {
                    e.preventDefault();
                    ourTeamRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Team
                </a>
              </div>
            </div>
            <div className="dropdown services-dropdown">
              <span>Services</span>
              <div className="dropdown-content mega-menu">
                <div className="menu-column">
                  <h4>Virtual CFO Services</h4>
                  <a href="#">MIS and FP&A Structures design and implementation Budgeting and MIS Support</a>
                  <a href="#">Competition benchmarking</a>
                  <a href="#">Financial and tax health Check-up</a>
                  <a href="#">Project management</a>
                  <a href="#">Support in driving cost control/ reduction projects</a>
                  <a href="#">Year-end Audit preparedness support</a>
                  <a href="#">ERP Implementation support</a>
                  <a href="#">Implementation of Internal Audit points</a>
                </div>
                <div className="menu-column">
                  <h4>US Taxation & Book Keeping</h4>
                  <a href="#">Book keeping services</a>
                  <a href="#">Catch-Up Book keeping</a>
                  <a href="#">Quickbooks Book keeping</a>
                  <a href="#">Assist with Payroll</a>
                  <a href="#">US Taxation</a>
                  <a href="#">Tax Compliance & Filing</a>
                </div>
                <div className="menu-column">
                  <h4>Income Tax Compliances</h4>
                  <a href="#">Corporate Tax</a>
                  <a href="#">Direct And Indirect Tax</a>
                  <a href="#">Faceless Assessment Under Income Tax</a>
                  <a href="#">Lower Deduction Certificate</a>
                  <a href="#">80G And 12A Registration</a>
                  <a href="#">TDS And TCS Return Filings</a>
                  <a href="#">Income Tax Compliances</a>
                  <a href="#">Transfer Pricing</a>
                </div>
                <div className="menu-column">
                  <h4>Goods And Services Tax</h4>
                  <a href="#">GST Consultancy Services</a>
                  <a href="#">GST Audit</a>
                  <a href="#">GST Compliance Services</a>
                  <a href="#">GST Refunds</a>
                  <a href="#">GST Returns</a>
                  <a href="#">GST Registrations</a>
                </div>
                <div className="menu-column">
                  <h4>Company And LLP Compliances</h4>
                  <a href="#">Company Registration</a>
                  <a href="#">Company Annual Compliances</a>
                  <a href="#">Certification And Attestation Services</a>
                  <a href="#">LLP Annual Filings</a>
                  <a href="#">LLP Formations</a>
                  <a href="#">FC GPR And RBI Compliance</a>
                  <a href="#">Foreign Company Setup In India</a>
                  <a href="#">Company Strike Off And LLP Closure</a>
                </div>
                <div className="menu-column">
                  <h4>Audit And Assurance</h4>
                  <a href="#">Audit And Assurance</a>
                  <a href="#">Tax Audit</a>
                  <a href="#">Statutory Audit</a>
                  <a href="#">Internal Audit</a>
                  <a href="#">Stock Audit</a>
                  <a href="#">Fixed Assets Audit</a>
                  <a href="#">Due Diligence</a>
                </div>
                <div className="menu-column">
                  <h4>Accounting And Payroll</h4>
                  <a href="#">Accounting Overview</a>
                  <a href="#">Accounting And Book Keeping</a>
                  <a href="#">Payroll Management</a>
                  <a href="#">CMA Data Preparation</a>
                </div>
                <div className="menu-column">
                  <h4>International Taxation</h4>
                  <a href="#">NRI Taxation</a>
                  <a href="#">Double Taxation Avoidance Agreement</a>
                  <a href="#">Residential Status For NRIs</a>
                  <a href="#">Tax Residency Certificate</a>
                </div>
                <div className="menu-column">
                  <h4>Rera Consultants</h4>
                  <a href="#">Rera Consultants</a>
                </div>
                <div className="menu-column">
                  <h4>Financial Advisors</h4>
                  <a href="#">Home Loan Advisors</a>
                  <a href="#">Working Capital Assessment</a>
                  <a href="#">Term Loan / MSME Loan Advisors</a>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <span onClick={() => scrollToSection(clientsRef)}>Clients</span>
            </div>
            <div className="dropdown">
              <span onClick={() => scrollToSection(contactRef)}>
                Contact Us
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-width Hero Carousel */}
      <section className="hero">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={2000}
          transitionTime={700}
        >
          <div>
            <img
              src={DAP}
              alt="CA Services"
            />
          </div>
          <div>
            <img
              src={PWF}
              alt="Tax Consulting"
            />
          </div>
          <div>
            <img
              src={FDP}
              alt="GST and Compliance"
            />
          </div>
        </Carousel>
      </section>

      <section className="payment-gateway bg-surface py-60" ref={aboutRef}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-xl-5 text-center mb-4 mb-xl-0">
              <img
                loading="lazy"
                className="img-fluid w-100 max-w-350"
                src={CA}
                alt="About M C A & Associates"
              />
            </div>
            <div className="col-12 col-xl-7">
              <div className="payment-info">
                <h1 className="heading3 mb-3">Best CA Firms in Hyderabad</h1>
                <div
                  className="body3 text-secondary"
                  style={{ textAlign: "justify" }}
                >
                  <p>
                    M C A &amp; Associates is a leading{" "}
                    <strong>Chartered Accountants Firm in Hyderabad </strong>
                    offering financial accounting and compliance services for
                    individuals, startups, MSMEs, and corporates. Their
                    experienced CAs and tax consultants provide accurate
                    solutions tailored to customer needs.
                  </p>
                  <p>
                    Whenever it comes to audits, GST, or taxation,{" "}
                    <strong>M C A &amp; Associates</strong>
                    is among the most trusted{" "}
                    <strong>CA firms in Hyderabad</strong>, providing
                    professional services for years with reliability and
                    excellence.
                  </p>
                </div>
                <div className="button-block mt-4 d-flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill px-4 py-2"
                  >
                    Get Started
                  </a>
                  <a
                    href="tel:+91-63024341898"
                    className="btn btn-outline-info rounded-pill d-flex align-items-center gap-2 px-4 py-2"
                  >
                    <i className="ph ph-phone fs-20"></i> +91-63024341898
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={aboutUsRef} className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <div className="body2 text-secondary text-justify mt-16 px-5">
            <p>
              <strong>M C A &amp; Associates</strong> is a professionally
              managed firm of <strong>Chartered Accountants</strong>,
              <strong> head office in Hyderabad</strong> and a{" "}
              <strong>branch office in Bangalore.</strong>. Since inception, we
              have been dedicated to providing reliable, ethical, and
              value-driven financial and advisory services to{" "}
              <strong>
                individuals, startups, SMEs, and large enterprises
              </strong>{" "}
              across diverse industries.
            </p>

            <p>
              Built on the pillars of{" "}
              <strong>
                integrity, professionalism, and personalized service
              </strong>
              , our firm offers a comprehensive suite of{" "}
              <strong>CA-related services</strong>, including{" "}
              <strong>Accounting &amp; Bookkeeping</strong>,{" "}
              <strong>Tax Planning and Compliance</strong> (Income Tax, GST,
              TDS, etc.), <strong>Audit and Assurance Services</strong>,{" "}
              <strong>Company Incorporation &amp; Business Advisory</strong>,{" "}
              <strong>Financial Reporting &amp; Management Consulting</strong>,
              and{" "}
              <strong>
                Regulatory Compliance &amp; Representation before Authorities
              </strong>
              .
            </p>

            <p>
              Our team comprises{" "}
              <strong>
                qualified Chartered Accountants and experienced professionals
              </strong>{" "}
              who bring deep industry knowledge and a proactive approach to
              client service. We are committed to delivering{" "}
              <strong>timely, accurate, and practical solutions</strong>{" "}
              tailored to each client’s unique needs, enabling them to achieve
              financial clarity and operational efficiency.
            </p>

            <p>
              Whether you are an entrepreneur, a growing business, or a
              well-established organization,{" "}
              <strong>M C A &amp; Associates</strong> strives to be your{" "}
              <strong>trusted financial partner</strong>, guiding you through
              regulatory complexities and helping you make confident,
              well-informed decisions.
            </p>
          </div>{" "}
        </div>
      </section>

      <div className="service-block">
        <div className="container">
          <h2 className="heading3 text-center text-white mb-4">Our Services</h2>
          <Slider {...settings} className="services-slider">
            {servicesData.map((service, index) => (
              <div key={index} className="service-slide">

                <div className="service-card">
                  <div className="service-img-wrapper">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="service-img"
                    />
                  </div>
                </div>

              </div>
            ))}
          </Slider>
        </div>
      </div>

      <section className="clients" ref={clientsRef}>
        <div className="container">
          <h2>Clients</h2>
          <Slider {...settings} className="services-slider">
            {servicesData1.map((service, index) => (
              <div key={index} className="service-slide">
                <a
                  href={service.link}
                  className="service-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="service-card">
                    <div className="service-img-wrapper">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="service-img"
                      />
                    </div>

                    {/* Service name below the image */}
                    <div className="service-title">
                      {service.title}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>

        </div>
      </section>



      <section ref={ourTeamRef} className="our-team">
        <div className="container">
          <h2>Our Team</h2>

          <div className="body2 text-secondary text-justify mt-16 px-5">

            {/* Member 1 */}
            <p><strong>CA CHANDRAMOHAN, B.Com, CA</strong></p>
            <p>
              With over <strong>7 years of professional experience</strong>, he is a
              seasoned expert in <strong>taxation, audit and assurance</strong>, and
              <strong> corporate management consulting</strong>.
            </p>
            <p>
              He has extensive experience in handling{" "}
              <strong>statutory audits, tax audits, and system audits</strong> and
              specializes in <strong>advisory services, Virtual CFO services</strong>,
              and <strong>consultation on direct tax matters</strong>.
            </p>
            <p>
              He has also extensively handled{" "}
              <strong>
                registrations and regular compliances under Direct Taxes, Indirect
                Taxes, and Company Law
              </strong>
              . His in-depth knowledge and strategic insights have enabled numerous
              clients to achieve their financial goals efficiently.
            </p>

            <hr />

            {/* Member 2 */}
            <p><strong>CA GOPICHAND, LLB, CA</strong></p>
            <p>
              With over <strong>7 years of professional experience</strong>, he has
              vast exposure in handling matters related to{" "}
              <strong>
                labour consulting, legal proceedings, corporate management, and
                indirect taxation
              </strong>{" "}
              across various industrial and service sectors.
            </p>
            <p>
              He specializes in <strong>GST and former indirect tax laws</strong> and
              has provided <strong>representation services before various statutory authorities</strong>.
            </p>
            <p>
              He has significant experience in{" "}
              <strong>structuring and formation of companies</strong> and also brings
              valuable exposure from working with a{" "}
              <strong>Big 4 firm post qualification</strong>.
            </p>

            <hr />



            {/* Member 4 */}
            <p><strong>PRIYACHARAN S R, CS</strong></p>

            <p>
              He is a <strong>Company Secretary (CS)</strong>, qualified in 2015 and a member of the{" "}
              <strong>Institute of Company Secretaries of India (ICSI)</strong>, with strong expertise in{" "}
              <strong>taxation, corporate compliances, and allied regulatory domains</strong>. His professional
              journey spans across <strong>Income Tax compliances (including NRI taxation), Corporate Tax, GST,
                Companies Act compliances, FEMA advisory, Financial Planning & Analysis (FP&A), and litigation
                management</strong>, enabling him to deliver audit-ready and compliance-focused advisory solutions.
            </p>

            <p>
              He has extensive experience in advising clients on{" "}
              <strong>corporate governance, regulatory frameworks, tax structuring, and statutory litigations</strong>.
              He has assisted organizations across <strong>technology, venture capital, and pharmaceutical sectors</strong>{" "}
              in matters including <strong>transfer pricing audits, benchmarking studies, foreign investment entry
                strategies, amalgamations, demergers, slump sale transactions, AAR applications, compensation
                structuring, DSIR registrations, and ongoing compliance under Direct Tax, Indirect Tax, FEMA, and
                Labour Laws</strong>.
            </p>



          </div>
        </div>
      </section>


      <section className="contact" ref={contactRef}>
        <div className="container">
          <h2>Contact Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="contact-info">
                <h4 className="mb-3">Head Office</h4>
                <p>
                  <i className="ph-light ph-map-pin text-line"></i>
                  Flat No. 1072 10th floor, Manjeera Trinity Corporate, KPHB JNTUH - Hitech Road, Hyderabad, TS - 500085
                </p>
                <h4 className="mb-3 mt-4">Branch Office</h4>
                <p>
                  <i className="ph-light ph-map-pin text-line"></i>
                  No.18, 2nd Floor, Ranganathapura Main Road, Malleshwaram 18th Cross, Bengaluru KA-560003.

                </p>
                <h4 className="mb-3 mt-4">Phone</h4>
                <p>
                  <i className="ph ph-phone text-line"></i>
                  <a href="tel:+91-63024341898" className="text-dark ms-2">
                    +91-63024341898
                  </a>
                </p>
                <h4 className="mb-3 mt-4">Email</h4>
                <p>
                  <i className="ph ph-envelope text-line"></i>
                  <a
                    href="mailto:info@kkreddyassociates.com"
                    className="text-dark ms-2"
                  >
                    reachca.mca@outlook.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} MCA & Associates. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
