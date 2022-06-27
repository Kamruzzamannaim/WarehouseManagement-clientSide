import './Footer.css';
const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer">
        <div className="footer-info">
        © Naim {year} 
        <p>get connected <a href="https://www.facebook.com/Naim109/" target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook p-1"></i></a>
        <a href="https://www.instagram.com/kamruzzaman_naim/"  target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram p-2"></i></a>
        </p>
        </div>
        </div>
       
    );
};

export default Footer;