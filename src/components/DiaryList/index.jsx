import { useNavigate } from "react-router-dom";

import DiaryItem from "./DiaryItem";

import clsx from "clsx";
import * as styles from "./styles.css";
import { flexWrap, gap } from "@styles/style.css";

const DiaryList = ({ data = [], markdate = false }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.dirayListContainer}>
      <ul className={clsx(flexWrap, gap.md)}>
        {data.map(({ id, date, title, content, emotion }) => (
          <DiaryItem
            key={id}
            id={id}
            date={date}
            title={title}
            content={content}
            emotion={emotion}
            markdate={markdate}
            onClick={() => navigate(`/diary/${id}`)}
          />
        ))}
      </ul>
    </div>
  );
};

export default DiaryList;
