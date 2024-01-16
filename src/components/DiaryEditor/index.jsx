import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

import { useDiaryDispatchContext } from "@context/DiaryProvider";

import { emojis } from "../../data.json";

import Button from "@components/Button";
import EmotionItem from "@components/EmotionItem";

import clsx from "clsx";
import * as styles from "./styles.css";
import { text } from "../../styles/style.css";

const DiaryEditor = ({ isEdit = false, data }) => {
  const navigate = useNavigate();

  const { onCreate, onEdit } = useDiaryDispatchContext();

  const [state, setState] = useState({
    date: format(new Date(), "yyyy-MM-dd"),
    title: "",
    content: "",
    emotion: 3,
  });

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const dateRef = useRef(null);

  const handleChangeState = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickEmoji = (value) => setState({ ...state, emotion: value });

  const handleSubmit = () => {
    if (state.title.length < 1) {
      titleRef.current.focus();
      return;
    }

    if (state.content.length < 1) {
      contentRef.current.focus();
      return;
    }

    isEdit ? onEdit(data.id, { ...state }) : onCreate(state);

    navigate("/", { replace: "true" });
  };

  useEffect(() => {
    if (data) {
      const { date, title, content, emotion } = data;

      setState({
        date: format(date, "yyyy-MM-dd"),
        title,
        content,
        emotion,
      });
    }
  }, [isEdit, data]);

  return (
    <section className={styles.diaryEditor}>
      <header className={styles.header}>
        <div className={clsx(text.base, text.secondary)}>
          <label className={styles.datePicker}>
            {new Date(state.date).toLocaleDateString("ko-KR", {
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
            <input
              className={styles.datePickerInput}
              ref={dateRef}
              type="date"
              name="date"
              value={state.date}
              onChange={handleChangeState}
            />
          </label>
          오늘은 어떤 하루였나요?
        </div>
        <div className={styles.emotionSet}>
          {emojis.map((data) => (
            <EmotionItem
              key={data.id}
              {...data}
              onClick={handleClickEmoji}
              isSelected={data.id === state.emotion}
            />
          ))}
        </div>
      </header>
      <div className={styles.section}>
        <div>
          <input
            className={styles.titleInput}
            ref={titleRef}
            type="text"
            name="title"
            value={state.title}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <textarea
            className={styles.textarea}
            ref={contentRef}
            value={state.content}
            name="content"
            placeholder="오늘은 어떤 하루였나요?"
            onChange={handleChangeState}
          />
        </div>
        <div className={styles.buttonWrap}>
          <Button type="button" onClick={() => navigate(-1)}>
            취소하기
          </Button>
          <Button type="button" variant="positive" onClick={handleSubmit}>
            저장하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiaryEditor;
