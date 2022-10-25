import { useState } from "react";
import styles from "../../styles/Home.module.css";

const TableLetter = ({ letter, index }) => {
  const [flip, setFlip] = useState(false);

  setTimeout(() => {
    setFlip(true);
  }, 100 * index);

  return (
    <div className={flip ? styles.flip : null}>{flip ? letter : null}</div>
  );
};
export default TableLetter;
