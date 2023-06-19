enum ROMAN { I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000 }

function romanToInt(s: string): number {
    return s.split('').reduceRight(
        (res: number, elem: string, index: number, array: string[]) =>
            ROMAN[array[index + 1]] > ROMAN[elem] ?
                res - ROMAN[elem]
                : res + ROMAN[elem]
        , 0)
};
