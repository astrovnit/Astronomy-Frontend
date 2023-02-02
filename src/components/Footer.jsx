import React from "react";

function Footer() {
  return (
    <footer className="footer mt-5  bg-dark text-light text-left text-lg pb-3 sticky top-[100vh]">
      <div className="flex flex-column md:flex-row p-10 md:p-12">
        <div className="w-full md:w-2/3">
          <h4 className="text-warning text-xl">Our Location</h4>
          <p className="">Ashlesha Ashtronomy Club</p>
          <p className=" ">
            Visvesvaraya National Institute of Technology,
            <br /> South Ambazari Road, Nagpur, Maharashtra. Pin 440010 (India)
          </p>
          <p className="">
            <span className="text-sky-300">Email: </span>{" "}
            <a>astronomyclub@vnit.ac.in</a>
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-3 md:mt-0">
          <h4 className="text-warning text-xl">Contact Us</h4>
          <p className="">President (Nihar)</p>
          <p className="">
            Phone : <a className="text-sky-300"> 8452029034</a>
          </p>
          <p className="">Advisor (Kalpesh)</p>
          <p className="">
            Phone : <a className="text-sky-300"> 9359985003</a>
          </p>
        </div>

        <div className="w-full md:w-1/2 mt-3 md:mt-0">
          <div className="">
            <h4 className="text-warning text-xl">About AAC_VNIT</h4>
            <p className="">
              We are the official Astronomy Club of VNIT, Nagpur where we try to
              explore the horizons with the aid of our Engineering and Managing
              skills
            </p>
          </div>

          <i className="fab fa-linkedin m-2 big hover:text-blue-600"></i>
          <i className="fab fa-instagram  m-2 big hover:text-red-400"></i>

          <i className="fab fa-twitter m-2 big hover:text-blue-400"></i>
        </div>
      </div>
      <div className="text-center text-warning  text-sm">
        COPYRIGHT 2023 || ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}

export default Footer;

{
  /* <footer className="footer mt-5 pb-5 bg-dark text-light pt-5">
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <!-- logo start-->
                    <div className="footer-logo"><a href="">
                        <img style="width:100px;border-radius:50px" src="../images/maxcare.png" alt="MaxCare"></a></div>
                       <p className="big-3 mt-3"> MaxCare Multispeciality Hospital</p>
                    <!-- logo end-->
                    <!-- socials start-->
                    
                    <!-- socials end -->
                    
                    <h4 className="title mt-4 big-3">Quick Links</h4>
                    <ul className="footer-menu">
                        <li><a href="">Our Doctors</a></li>   
                        <li><a href="">Specialities</a></li> 
                        <li><a href="">International Patients Services</a></li> 
                        <li><a href="" target="_blank">Cost of Knee Implants</a></li> 
                        <li><a href="" target="_blank">Prices of Coronary Stents</a></li> 
                        <li><a href="">Check Blood Center Stock</a></li> 
                    </ul>
                    
                </div>
                <div className="col-xl-3 col-md-6">
                    <!-- footer contacts start-->
                    <div className="footer-contacts">
                        <h4 className="title big-3">Our Location</h4>
                        <p className="text-warning">Ahmednagar-Pune Highway</p>
                        <p className="address">MaxCare Multispeciality Hospital, 40, Baker Street, Ahmednagar-411001, Maharashtra, India</p>
                        <p className="e-main">Email: <a href="">info@maxcare.com</a></p>
                    
                    </div>
                    <!-- footer contacts end-->
                </div>
                <div className="col-xl-3 col-md-6">
                    <h4 className="title big-3">Emergency Cases</h4>
                    <p className="text-warning">Operator</p>
                    <p className="phone-number">Phone: <a href="">XXX-XXX-XXX</a></p>
                    <p className="phone-number">Phone: <a href="">XXX-XXX-XXX</a></p>
                    <p className="text-warning mt-3">Emergency</p>
                    <p className="phone-number">Phone: <a href="">XXX-XXX-XXX</a></p>
                    <p className="phone-number">Phone: <a href="">XXX-XXX-XXX</a></p>
                    <p className="text-warning mt-3">Ambulance</p>
                    <p className="phone-number">Phone: <a href="">XXX-XXX-XXX</a></p>
                    <p className="text-warning mt-3">Enquiry</p>
                    <p className="phone-number">Phone: <a href="">XXX-XXX-XXX</a></p>
                </div>
                <div className="col-xl-3 col-md-6">
                    <!-- footer downloads start-->
                    <div className="footer-downloads">
                        <h4 className="title big-3">About MaxCare Multispeciality Hospital</h4>
                        <p>MaxCare, in the past 50 years has set new bench marks for standards in the health care industry.</p>
                    </div>
                    
                    
                    
                    <i className="fab fa-facebook social-icon ms-2"></i>
                    <i className="fab fa-instagram social-icon ms-2"></i>
                    <i className="fab fa-linkedin social-icon ms-2"></i>
                    <i className="fab fa-twitter social-icon ms-2"></i>
                    <i className="fab fa-whatsapp social-icon ms-2"></i>
                  
                           
                        
                    <!-- footer downloads end-->
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5">               
        <div className="row">
            <div className="col-12">
                <div className="footer-lower">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="copyright">© 2020-21 MaxCare Health. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <!-- privacy start-->
                            <div className="privacy-block"><a href="">Privacy Policy <span className="separator">|</span> </a><a href="">Term and Conditions <span className="separator">|</span></a> <a href="">Support</a></div>
                            <!-- privacy end-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer> */
}

{
  /* <footer className="bg-white shadow md:px-6 dark:bg-gray-900">
        <div className="md:flex  md:justify-between">
          <div className="lg:w-1/5 w-1/2 mx-auto md:mx-8">
            <img className="" src="../../logo.png" alt="" />
          </div>
          <div className="address lg:mt-12 mx-8">
            <div className="  text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ashlesha Astronomy Club
            </div>
            <div className="footerText text-white mt-2">
              Visvesvaraya National Institute of Technology,<br></br> South
              Ambazari Rd, Ambazari, Nagpur,<br></br> Maharashtra 440010
            </div>
          </div>

          <div className=" text-lg px-10 mt-10 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2  ">
            <div className="text-left">
              <h2 className=" mb-3  font-semibold text-gray-900 uppercase dark:text-white">
                Quick Links
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Admin Access
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h2 className="mb-3  font-semibold text-gray-900 uppercase dark:text-white">
                Events
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="">
                  <a href="/" className="hover:underline ">
                    TalkShow
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Star Gazzing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 mt-2" />
        <div className="  sm:flex sm:items-center sm:justify-center">
          <div className=" text-lg flex space-x-6 justify-center">
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-linkedin  mt-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <span className="sr-only">LinkedIN page</span>
            </a>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white py-1"
            >
              <svg
                className="w-7 h-7  mt-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white py-1"
            >
              <svg
                className="w-7 h-7 mb-2 mt-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </footer> */
}
