import DiaryItem from "./DiaryItem";

const DiaryList = ({ lists = []}) => {
    return (
        <div>
            <h2>지난 일기</h2>
            <span>{lists.length}개</span>
            <ul>
                {lists.map(({ id, author, content, createdDate }) => 
                    <DiaryItem key={id} author={author} content={content} createdDate={createdDate} />)}
            </ul>
        </div>
    )
}

export default DiaryList;
