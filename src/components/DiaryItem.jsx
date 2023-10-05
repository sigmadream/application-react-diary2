import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {
  const strDate = new Date(parseInt(date)).toLocaleString();
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  console.log(emotion);

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={`assets/emotion${emotion}.png`} />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diray_content_prview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
