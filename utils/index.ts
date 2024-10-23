// 统计所有数组的长度
export function sumOfArrayLengths(obj:any) {
    let totalLength = 0;
    for (let key in obj) {
        if (Array.isArray(obj[key])) { // 检查obj[key]是否为数组
            totalLength += obj[key].length;
        }
    }
    return totalLength;
}