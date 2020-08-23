import { PageInfo } from '../models/page-info';

export const getPageInfo = (
    count: number,
    first: number,
    after: number): PageInfo => {
    let result = new PageInfo();
    result.hasNext = count > (first + after);
    result.hasPrevious = after > 0;
    result.next = (result.hasNext) ? first + after : null;
    result.previous = (after - first) < 0 ? null : after - first;
    return result;
}