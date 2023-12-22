import { useRef, useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    date: new Date(),
    author: "",
    content: "",
    emotion: 1,
  });
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  const handleChangeState = (e) => {
    const { name, value } = e.target; 

    setState({
      ...state,
      [name]: value,
    });
  }

  const handleSubmit = () => {
    if(state.author.length < 1){
      // alert("작성자는 최소 1글자 이상 입력해 주세요.");
      inputRef.current.focus();
      return;
    }

    if(state.content.length < 1){
      // alert("컨텐츠를 최소 1글자 이상 입력해 주세요.");
      textareaRef.current.focus();
      return;
    }

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
            ref={inputRef}
            type="text"
            name="author"
            value={state.author}
            placeholder="작성자"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <textarea
            ref={textareaRef}
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
