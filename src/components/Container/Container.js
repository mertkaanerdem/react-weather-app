import styles from "./Container.module.css";
import Cities from "../Cities/Cities";
import Days from "../Days/Days";

function Container() {
  return (
    <div className={styles.container}>
      <Cities />
      <Days />
    </div>
  );
}

export default Container;
