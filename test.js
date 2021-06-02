var isValid = function (s) {
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
    ]);

    const stack = [];

    for (let i = 0; i < s.length; i += 1) {
        if (map.get(s[i])) {
            stack.push(s[i]);
        } else {
            const item = stack.pop();

            if (map.get(item) !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
