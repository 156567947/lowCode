import { useLoadQuestionData } from "../../../hooks/useLoadQuestionData";

export default function Stat() {
  const { loading, questionData } = useLoadQuestionData();

  return (
    <div>{loading&&<p>加载中...</p>}</div>
  )
}
