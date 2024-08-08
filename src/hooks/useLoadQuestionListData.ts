
import { useRequest } from 'ahooks'
import { getQuestionListService } from '@/services/question'
import { useSearchParams } from 'react-router-dom'

type OptionType = {
    isStar: boolean
    isDeleted: boolean
}

function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
    const { isStar, isDeleted } = opt
    const [searchParams] = useSearchParams()
    const { data, error, loading } = useRequest(async () => {

        const keyword = searchParams.get('keyword') || ''
        const pageNum = Number(searchParams.get('pageNum')) || 1 
        const pageSize = Number(searchParams.get('pageSize')) || 10
        const data = await getQuestionListService({ keyword, isStar, isDeleted, pageNum, pageSize })
        return data
    }, {
        refreshDeps: [searchParams]
    })
    return {
        data,
        error,
        loading
    }
}
export default useLoadQuestionListData
