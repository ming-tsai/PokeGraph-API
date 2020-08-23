export function asNumber(value: string): number {
    let numb = Number(value);
    if (isNaN(numb)) {
        numb = 0;
    }

    return numb;
}