{
    // 1. 인터페이스를 만든다.
    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;
    }

    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    }

    // 2. 인터페이스에 정의된 메서드들을 구현부에서 작성해 준다.
    class StackImpl implements Stack {
        // 내부에서 쓰이는 변수와 외부에서 쓰이는 변수가 같다면, 내부용에 _를 붙여준다.
        private _size: number = 0;
        private head?: StackNode;

        constructor(private capacity: number) {}

        get size() {
            return this._size;
        }

        push(value: string) :void {
            if (this._size === this.capacity) {
                throw new Error('Stack is full!'); 
            }
            const node: StackNode = {value, next: this.head};
            this.head = node;
            this._size++;
        }

        pop(): string { // null == undefined (true), null === undefined (false)
            if (this.head == null) {
                throw Error('Stack is empth!');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl(10);
    stack.push('hi 1');
    stack.push('hello 2');
    stack.push('hoho 3');
    while (stack.size !== 0) {
        console.log(stack.pop());
    }

    // stack.pop();
}