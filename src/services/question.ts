import axios, { ResDataType } from './ajax'

type SearchOption = {
    keyword: string
    isStar: boolean
    isDeleted: boolean
}

export async function getQuestionService(id: string): Promise<ResDataType> {
    const url = `/api/question/${id}`
    const data = await axios.get(url)
    return data
}

//创建问卷
export async function createQuestionService(): Promise<ResDataType> {
    const url = `/api/question`
    const data = await axios.post(url)
    return data

}

//获取问卷列表
export async function getQuestionListService(opt: Partial<SearchOption> = {}): Promise<ResDataType> {
    const url = `/api/question`
    const options = {}
    Object.keys(opt).forEach((key: any) => {
        if (opt[key] !== undefined) {
            options[key] = opt[key]
        }
    })

    const data = await axios.get(url, { params: options })
    return data

}

