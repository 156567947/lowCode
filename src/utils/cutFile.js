const CHHUNK_SIZE= 1024*1024*5; // 5MB
let THREAD_COUNT=navigator.hardwareConcurrency || 4;

export function cutFile(file){
    const chunk_count = Math.ceil(file.size / CHHUNK_SIZE);
    const result=[]

}