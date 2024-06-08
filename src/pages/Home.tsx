// import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Button from "../components/Button";
import Capitol from "../assets/capitol.png";
import House from "../assets/house_4.jpg";
import Commnunity from "../assets/community.jpg";
import Team from "../assets/team.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { featureData } from "../constant/FeatureData";
import Features from "../components/Features";
import { elevateData } from "../constant/ElevateData";
import Elevate from "../components/Elevate";
import { testimonialsData } from "../constant/TestimonialsData";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";
import Loader from "../components/Loader";
import Countdown from "../components/Countdown";
function Home() {
  const [active, setActive] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }
  interface titleProps {
    title: string;
    description: string;
    size: string;
  }
  interface counterProps {
    count: number;
    description: string;
  }

  const easing = [0.175, 0.85, 0.42, 0.96];

  // const container = {
  //   animate: {
  //     transition: {
  //       staggerChildren: 0.2, // Délais entre chaque enfant
  //     },
  //   },
  // };
  const zoomFade = {
    initial: {
      opacity: 0,
      scale: 2,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: easing,
        duration: 0.7,
      },
    },
  };
  const titleTransition = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easing,
        duration: 0.7,
        // delay: 0.5,
      },
    },
  };
  const headerTransition = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easing,
        duration: 0.7,
        delay: 1,
      },
    },
  };
  const recognition = {
    animate: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  const fadeUp = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easing,
        duration: 0.7,
      },
    },
  };
  const fadeDown = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easing,
        duration: 0.7,
      },
    },
  };

  const Counter: React.FC<counterProps> = ({ count, description }) => {
    return (
      <div className="counter">
        <Countdown targetCount={count} />
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
      <motion.div variants={titleTransition} className={`title`}>
        <h1 className="title__main">{title}</h1>
        <p className={`title__description ${size}`}>{description}</p>
      </motion.div>
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
    <motion.div className="app" initial="initial" animate="animate">
      <motion.section className={`header`} variants={headerTransition}>
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
      </motion.section>
      <section className={`navigation navigation__${active ? "active" : ""}`}>
        <h3 className="navigation__menu">Menu</h3>
        {menuItems.map((item, index) => (
          <li key={index} className="navigation__item">
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </section>
      <section className="about">
        <motion.span variants={titleTransition}>
          <Title
            title="À Propos"
            description="Une équipe compétente avec des connaissances"
            size="large"
          />
        </motion.span>
        <motion.img
          variants={zoomFade}
          initial="initial"
          animate="animate"
          src={Team}
          alt=""
          className="about__img"
        />
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
      <motion.section
        variants={recognition}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="features"
      >
        <Title
          title="Comment Pouvons-nous vous aider?"
          description="flexibilité de votre style de vie"
          size="medium"
        />
        <div className="features__wrapper">
          {featureData.map((item, index) => (
            <Features
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </motion.section>
      <motion.section
        variants={recognition}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="landing"
      >
        <motion.div variants={fadeUp} className="landing__wrapper">
          <img src={House} alt="" />
        </motion.div>
        <motion.div variants={fadeDown} className="landing__wrapper">
          <h1 className="landing__title">
            Atterrissage pour le logement d'entreprise
          </h1>
          <p className="landing__description">
            Découvrez notre service, conçu pour simplifier la transition de vos
            employés lors de leurs déplacements professionnels. Nous offrons des
            solutions d'hébergement flexibles et entièrement équipées, idéales
            pour les séjours de courte et de longue durée.
          </p>
          <motion.div variants={fadeUp} className="landing__button">
            <Button title="En savoir plus" type="inline" />
            <Button title="Contactez-nous" type="outline" />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section
        variants={recognition}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="elevate"
      >
        <Title
          title="Elevé"
          description="Renforcer L'engagement Communautaire"
          size="medium"
        />
        <div className="elevate__zone">
          <div className="elevate__wrapper">
            <motion.h1 variants={fadeDown} className="elevate__title">
              Une expérience de vie meublée et non un agrégateur
            </motion.h1>
            <div className="elevate__mana">
              {elevateData.map((item, index) => (
                <Elevate
                  key={index}
                  title={item.title}
                  description={item.description}
                  number={item.number}
                />
              ))}
            </div>
          </div>
          <div className="elevate__wrapper">
            <img src={Commnunity} alt="" />
          </div>
        </div>
      </motion.section>
      <motion.section variants={recognition} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} className="team">
        <Title
          title="Notre Equipe"
          description="Rencontrez notre ecurie"
          size="medium"
        />
        <div className="team__member">
          {testimonialsData.map((item, index) => (
            <Testimonials
              key={index}
              name={item.name}
              job={item.job}
              image={item.image}
            />
          ))}
        </div>
      </motion.section>
      <section className="newsletter">
        <div className="newsletter__wrapper">
          {" "}
          <h1 className="newsletter__title">Souscrivez à notre newsletter</h1>
          <p className="newsletter__description">
            Restez informé des dernières nouvelles, offres exclusives et
            conseils pratiques en vous abonnant à notre newsletter.
          </p>
        </div>
        <div className="newsletter__wrapper">
          <input type="text" placeholder="Votre adresse email" />
          <Button title="Souscrire" type="inline" />
        </div>
      </section>
      <section className="footer">
        <div className="footer__content">
          <img src={Capitol} alt="" />
          <p>© 2024. Tous droits reserves</p>
        </div>
        <div className="footer__content">
          <h4>HOME</h4>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">À propos</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>
        <div className="footer__content">
          <h4>COMPANY</h4>
          <li>
            <a href="#">À propos de nous</a>
          </li>
          <li>
            <a href="#">Notre équipe</a>
          </li>
          <li>
            <a href="#">Carrières</a>
          </li>
          <li>
            <a href="#">Partenaires</a>
          </li>
          <li>
            <a href="#">Presse</a>
          </li>
        </div>
        <div className="footer__content">
          <h4>RESOURCE</h4>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Tutoriels</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </div>
        <div className="footer__content">
          <h4>AUTRES CHOSES</h4>
          <li>
            <a href="#">Politique de confidentialité</a>
          </li>
          <li>
            <a href="#">Conditions d'utilisation</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Accessibilité</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </div>
      </section>
      <div
        className={`overlay ${active ? "active" : ""}`}
        onClick={() => setActive(false)}
      ></div>
    </motion.div>
  );
}

export default Home;
