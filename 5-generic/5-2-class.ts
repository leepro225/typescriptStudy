{// either: a or b
interface Either<L, R> {
    left: () => L;
    right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
    constructor(private _left: L, private _right: R) {}

    left(): L {
        return this._left;
    }   
    right(): R {
        return this._right;
    }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left();
either.right();
const best = new SimpleEither({}, 'hello');}