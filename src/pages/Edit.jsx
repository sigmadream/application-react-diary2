import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log(id);

  const mode = searchParams.get("mode");
  console.log(mode);

  return (
    <div>
      <h1>Edit</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
