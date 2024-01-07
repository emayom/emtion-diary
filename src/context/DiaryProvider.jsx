import React, { useContext, useReducer } from "react";

export const reducer = (state, action) => {
  return {
    INIT: () => action.data,
    CREATE: () => [{ ...action.data }, ...state],
    REMOVE: () => state.filter((el) => el.id !== parseInt(action.targetId)),
    EDIT: () =>
      state.map((el) => (el.id === action.targetId ? { ...action.data } : el)),
  }[action.type]();
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

export const DiaryProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, []);

  const onCreate = ({ date, title, content, emotion }) => {
    const timestamp = new Date(date).getTime();

    dispatch({
      type: "CREATE",
      data: {
        id: timestamp,
        date: timestamp,
        title,
        content,
        emotion,
      },
    });
  };

  const onRemove = (targetId) => dispatch({ type: "REMOVE", targetId })

  const onEdit = (targeId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targeId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        {children}
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export const useDiaryStateContext = () => useContext(DiaryStateContext);
export const useDiaryDispatchContext = () => useContext(DiaryDispatchContext);
