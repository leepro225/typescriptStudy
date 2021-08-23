{
    // 1. 인터페이스를 만든다.
    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>;
    }

    // 2. 인터페이스에 정의된 메서드들을 구현부에서 작성해 준다.
    class StackImpl<T> implements Stack<T> {
        // 내부에서 쓰이는 변수와 외부에서 쓰이는 변수가 같다면, 내부용에 _를 붙여준다.
        private _size: number = 0;
        private head?: StackNode<T>;

        constructor(private capacity: number) {}

        get size() {
            return this._size;
        }

        push(value: T) :void {
            if (this._size === this.capacity) {
                throw new Error('Stack is full!'); 
            }
            const node = {value, next: this.head};
            this.head = node;
            this._size++;
        }

        pop(): T { // null == undefined (true), null === undefined (false)
            if (this.head == null) {
                throw Error('Stack is empth!');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl<string>(10);
    stack.push('hi 1');
    stack.push('hello 2');
    stack.push('hoho 3');
    while (stack.size !== 0) {
        console.log(stack.pop());
    }

    const stack2 = new StackImpl<number>(10);
    stack2.push(1);
    stack2.push(2);
    stack2.push(3);
    while (stack2.size !== 0) {
        console.log(stack2.pop());
    }

    // stack.pop();
}