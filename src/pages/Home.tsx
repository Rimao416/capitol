// import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Button from "../components/Button";
import Capitol from "../assets/capitol.png";
import Team from "../assets/team.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
function Home() {
  interface titleProps {
    title: string;
    description: string;
    size: string;
  }
  interface counterProps {
    count: number;
    description: string;
  }
  const [active, setActive] = useState(false);

  const Counter: React.FC<counterProps> = ({ count, description }) => {
    return (
      <div className="counter">
        <h1 className="counter__count">{count}+</h1>
        <p className="counter__description">{description}</p>
      </div>
    );
  };

  const counterMenuItems = [
    { count: 50, description: "Employés" },
    { count: 10, description: "Pays" },
    { count: 35, description: "Projets terminés" },
    { count: 21, description: "Bureaux" },
    { count: 15, description: "Projets récompensés" },
  ];
  const Title: React.FC<titleProps> = ({ title, description, size }) => {
    return (
      <div className={`title tittle__${size}`}>
        <h1 className="title__main">{title}</h1>
        <p className="title__description">{description}</p>
      </div>
    );
  };

  const menuItems = [
    { label: "A Propos", link: "#" },
    { label: "Projets", link: "#" },
    { label: "Agents", link: "#" },
    { label: "Services", link: "#" },
    { label: "Listings", link: "#" },
    { label: <IoSearchSharp />, link: "#" },
  ];
  return (
    <div className="app">
      <section className={`header`}>
        <img src={Capitol} alt="" className="header__logo" />

        <ul className={`header__wrapper ${active ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="header__item">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="header__features">
          <span className="header__services">
            Autres services{" "}
            <span className="header__icon">
              <IoIosArrowForward />
            </span>{" "}
          </span>

          <Button title="Connexion" type="inline" />
        </div>
        <div className="header__burger" onClick={() => setActive(!active)}>
          <GiHamburgerMenu />
        </div>
      </section>
      <section className={`navigation navigation__${active ? "active" : ""}`}>
        <h3 className="navigation__menu">Menu</h3>
        {menuItems.map((item, index) => (
          <li key={index} className="navigation__item">
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </section>
      <section className="about">
        <Title
          title="À Propos"
          description="Une équipe compétente avec des connaissances"
          size="large"
        />
        <img src={Team} alt="" className="about__img" />
        <div className="about__wrapper">
          {counterMenuItems.map((item, index) => (
            <Counter
              key={index}
              count={item.count}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <div
        className={`overlay ${active ? "active" : ""}`}
        onClick={() => setActive(false)}
      ></div>
    </div>
  );
}

export default Home;
