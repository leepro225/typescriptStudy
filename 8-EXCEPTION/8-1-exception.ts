// JavaScript: Error 라는 클래스ㅏ 있다.

const array = new Array(1000000000000000000);

// error : Invalid array length;
/**
 * 컴파일 단계에서는 에러가 발생하지 않아, 런타임에서 에러가 발생함.
 */

{ 
    type Directions = 'up' | 'down' | 'left' | 'right' | 'hi';

    function move(directions: Directions): void {
        switch (directions) {
            case 'up':
                position.y += 1; 
                break;
            case 'down':
                position.y -= 1; 
                break;
            case 'left':
                position.x -= 1; 
                break;
            case 'right':
                position.x += 1; 
                break;    
            default:
                // 컴파일 단계에서 에러가 나게 하기 위해 never 타입을 할당, 
                // 현재 여기 올 수있는 값은 'hi' 뿐인데 'hi'는 string 타입이라 에러가 남.
                const invalid: never = directions;
                throw new Error('problem')
                break;
        }
    }
    move('down');
}