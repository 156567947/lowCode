import { useLoadQuestionData } from "../../../hooks/useLoadQuestionData";
export default function Edit() {
  const { loading, questionData,error } = useLoadQuestionData();
  return (
    <div>
      <p>Edit page</p>
      <div>
        {loading && <p>Loading...</p>}
        {!loading && <div>shuju </div>}
      </div>
    </div>
  );
}
