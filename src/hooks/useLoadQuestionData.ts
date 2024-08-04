// useLoadQuestionData.ts
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getQuestionService } from "@/services/question.ts";
import { useRequest } from 'ahooks'
export const useLoadQuestionData = () => {
    const { id = '' } = useParams();
    // const [questionData, setQuestionData] = useState<any>(null);
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     async function fetchData() {
    //         const data = await getQuestionService(id);
    //         setQuestionData(data);
    //         setLoading(false);
    //     }
    //     fetchData();
    // }, [])
    async function fetchData() {
        const data = await getQuestionService(id);
        return data;

    }
    const { data: questionData, loading, error } = useRequest(fetchData)
    return {
        questionData,
        loading,
        error
    }
}