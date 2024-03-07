
// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer bg-gray-900 text-white flex justify-center">
        Created By  :{" "}    
        {/* <i class="fa-solid fa-heart"></i> */}
        <a href="https://www.linkedin.com/in/jadvani-khush-14315a295/" target="_blank">
           Khush Jadvani
        </a>
        <i class="fa-solid fa-copyright"></i>
        {year}
        fresh
        <strong>
          HomeMade<span>dishes</span>
        </strong>
      </div>
    );
  };

  
  export default Footer;