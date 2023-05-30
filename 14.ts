function longestCommonPrefix(strs: string[]): string {
    const checkWithPrefix = (prefixLen: number, prefix: string): boolean => {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i].slice(0, prefixLen) !== prefix) {
                return false;
            }
        }
        return true;
    }
    const word = strs[0];
    let i = 0;
    while(checkWithPrefix(i, word.slice(0, i)) && i <= word.length) {
        i++;
    }
    return word.slice(0, i-1);
};