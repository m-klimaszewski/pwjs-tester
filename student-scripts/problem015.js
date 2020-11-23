let Stack = {
    stack: [],
    push: (a, b = 1) => {
        for (let i = 0; i < b - 1; i++) {
            Stack.stack.push(null)
        }

        Stack.stack.push(a)
    },
    pop: (a = 1) => {
        let last_var = Stack.stack[Stack.stack.length-a]
        for (let i = 0; i < a; i++) {
            Stack.stack.pop()
        }
        return last_var;

    }
};

