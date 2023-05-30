function isValid(s: string): boolean {
    const [open, close] = [['(', '[', '{'], [')', ']', '}'] ]
    const stack: number[] = [];
    for (const e of s) {
        if (open.includes(e)) {
            stack.push(open.indexOf(e));
            continue;
        }
        if (stack[stack.length-1] !== close.indexOf(e)) {
            return false;
        }
        stack.pop();
    }
    return stack.length === 0;
};