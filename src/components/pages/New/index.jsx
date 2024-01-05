import { useNavigate } from "react-router-dom";

import Header from "@components/layout/Header";
import Button from "@components/Button";
import DiaryEditor from "@components/DiaryEditor";

const New = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        leftChild={<Button onClick={() => navigate(-1)}>뒤로 가기</Button>}
      >
        새로운 일기 쓰기
      </Header>
      <DiaryEditor></DiaryEditor>
    </>
  );
};

export default New;
