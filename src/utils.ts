/**
 * 生成链表
 * @param startInt 链表头节点的值
 * @param endInt 链表尾节点的值
 */
export function genLink (startInt: number, endInt: number): ILink {
  return startInt <= endInt
    ? {
        v: startInt,
        next: genLink(startInt+1, endInt)
      }
    : null
}