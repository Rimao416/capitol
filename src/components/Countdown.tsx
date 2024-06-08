import { motion } from "framer-motion";
import useInterval from "@use-it/interval/dist";
import { useState } from "react";

interface CountdownProps {
  targetCount: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetCount }) => {
  const [count, setCount] = useState(0);


  useInterval(() => {
    setCount((prevCount: number) => {
      if (prevCount >= targetCount) {
        return prevCount; // Arrêter l'incrémentation lorsqu'on atteint le nombre cible
      }
      return prevCount + 1;
    });
  }, 50); // Définir l'intervalle à 1000 millisecondes (1 seconde)

  return (
    <motion.h1 className="counter__count" key={"countdown " + count}>
      {count}+
    </motion.h1>
  );
}

export default Countdown;
