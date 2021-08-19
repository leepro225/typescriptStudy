{
    /**
     * Union Types: OR 
     * 많이 쓰임
     * 발생할 수 있는 다양한 케이스 중에 하나만 정하고 싶을 때
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 7 | 39 |99;
    const tile: TileSize = 7;

    // function: login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;
    function login(): LoginState {
        return {
            response: {
                body: 'logged in!',
            }
        }
    }

    // printLoginState(state: LoginState)
    // success => body
    // fail -> reason
    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    }
}