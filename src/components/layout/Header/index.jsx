import * as styles from "./styles.css";

const Header = ({ children, leftChild, rightChild }) => {
  return (
    <header className={styles.header}>
      <div>{leftChild}</div>
      <span style={{textAlign: 'center'}}>{children}</span>
      <div>{rightChild}</div>
    </header>
  );
};

export default Header;
