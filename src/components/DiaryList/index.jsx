import clsx from "clsx";
import * as styles from "./styles.css";
import DiaryItem from "../DiaryItem";
import { flexContainer, flexWrap, font, gap, text } from "../../styles/style.css";

const DiaryList = ({ lists = [] }) => {
  return (
    <div className={styles.dirayListContainer}>
      <div className={clsx(flexContainer.row, gap.sm)}>
        <h2 className={clsx(text.lg, text.primary, font.bold)}>지난 일기</h2>
        <span className={clsx(text.base, text.secondary)}>{lists.length}개</span>
      </div>
      <ul className={clsx(flexWrap, gap.md)}>
        {lists.map(({ id, title, content, createdDate }) => (
          <DiaryItem
            key={id}
            title={title}
            content={content}
            createdDate={createdDate}
          />
        ))}
      </ul>
    </div>
  );
};

export default DiaryList;
