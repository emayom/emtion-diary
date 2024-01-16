import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDiaryStateContext } from "@context/DiaryProvider";

import Header from "@components/Header";
import Button from "@components/Button";

import EditSVG from "@assets/edit.svg?react";
import LeftChevronSVG from "@assets/left-chevron.svg?react";

import { emojis } from "@/data.json";

import clsx from "clsx";
import * as styles from "./styles.css";
import { font, text } from "../../styles/style.css";

const Diary = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState();

  const diaryList = useDiaryStateContext();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (el) => parseInt(el.id) === parseInt(id)
      );

      if (targetDiary) {
        setData(targetDiary);
        return;
      }
    }
    navigate("/", { replace: true });
  }, [id, diaryList, navigate]);

  if (!data) {
    return <div>로딩 중 ... </div>;
  } else {
    const emoji = emojis[data.emotion - 1];

    return (
      <>
        <Header
          leftChild={
            <Button onClick={() => navigate(-1)}>
              <LeftChevronSVG width="15" height="15" />
              뒤로 가기
            </Button>
          }
          rightChild={
            <Button variant="icon" onClick={() => navigate(`/edit/${id}`)}>
              <EditSVG width="18" height="18" />
              수정하기
            </Button>
          }
        >
          {format(new Date(data.date), "dd일 EEE요일", { locale: ko })}
        </Header>
        <section className={styles.diaryContainer}>
          <div className={styles.dailyEmotion}>
            <img
              src={emoji.imgSrc}
              srcSet={emoji.imgSrc}
              alt={emoji.description}
              width={150}
              height={150}
            />
          </div>
          <div>
            <h3 className={clsx(text.lg, font.medium)}>{data.title}</h3>
            <p className={clsx(text.base, text.secondary)}>{data.content}</p>
          </div>
        </section>
      </>
    );
  }
};

export default Diary;
