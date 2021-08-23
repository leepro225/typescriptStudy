{
    // 자료를 담는 기능
    // 자료를 빼내는 기능
    // 자료를 보관하는 곳

    class Stack {
        private constructor(data: String) {}

        private stack = '|';

        get getStack(): String {
            return this.stack;
        }

        pushData(data: String) {
            this.stack += data + '|';
            const split = this.stack.split('|');
            const dataLength = split.filter(item => item !== '').length;
            return dataLength;
        }
        
        popData(): String {
            const split = this.stack.split('|').filter(item => item !== '');
            const lastData = split[split.length - 1];
            return lastData;
        }

        static makeStack(): Stack {
            return new Stack('');
        }
    }

    const stack = Stack.makeStack();
    console.log(stack.pushData('hello'), stack.getStack);
    console.log(stack.pushData('hi'), stack.getStack);
    console.log(stack.popData(), stack.getStack);
}