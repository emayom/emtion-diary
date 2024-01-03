import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDiaryStateContext } from "../../../context/DiaryProvider";

import Header from "../../layout/Header";
import Button from "../../Button";
import DiaryEditor from "../../DiaryEditor";

const Edit = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState();

  const { id } = useParams();
  const diaryList = useDiaryStateContext();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (el) => parseInt(el.id) === parseInt(id)
      );

      if (targetDiary) {
        setOrigin(targetDiary);
        return;
      }
    }
    navigate("/", { replace: true });
  }, [id, diaryList, navigate]);

  return (
    <>
      <Header
        leftChild={<Button onClick={() => navigate(-1)}>뒤로 가기</Button>}
      >
        일기 수정하기
      </Header>
      {origin && <DiaryEditor mode="edit" data={origin}></DiaryEditor>}
    </>
  );
};

export default Edit;
