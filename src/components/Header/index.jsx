import * as styles from "./styles.css";

const Header = ({ children, leftChild, rightChild }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerBtn}>{leftChild}</div>
      <span className={styles.headerText}>{children}</span>
      <div className={styles.headerBtn}>{rightChild}</div>
    </header>
  );
};

export default Header;
