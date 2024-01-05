import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDiaryStateContext } from "@/context/DiaryProvider";

import Header from "@components/layout/Header";
import Button from "@components/Button";
import DiaryEditor from "@components/DiaryEditor";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [origin, setOrigin] = useState();
  
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
      {origin && <DiaryEditor isEdit={true} data={origin}></DiaryEditor>}
    </>
  );
};

export default Edit;
