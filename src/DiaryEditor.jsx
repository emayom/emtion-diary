import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    date: new Date(),
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = () => {
    console.log(state);
    alert("저장 성공");
  };

  return (
    <div className="diary-editor">
      <header>
        <h2>오늘의 일기</h2>
        <p>
          <span>
            {state.date.toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>{state.date.toLocaleDateString("ko-KR", { weekday: "long" })}</span>은 어떤 하루였나요?
        </p>
      </header>
      <section>
        <div>
          <input
            type="text"
            name="author"
            value={state.author}
            placeholder="작성자"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <textarea
            name="content"
            value={state.content}
            placeholder="오늘은 어떤 하루였나요?"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <select
            name="emotion"
            value={state.emotion}
            onChange={handleChangeState}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button onClick={handleSubmit}>저장하기</button>
        </div>
      </section>
    </div>
  );
};

export default DiaryEditor;
