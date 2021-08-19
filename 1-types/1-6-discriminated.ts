{
    /**
     *  차별화하는, 구분할 수 있는 : discriminated
     *  타입안에 공통적인 키를 가짐으로써 구분자로 사용하는 것
     *  직관적인 코드를 작성할 수 있다.
     */  

    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: 'string';
    }
    type LoginState = SuccessState | FailState;

    function printLoginState(state: LoginState) {
        if (state.result === 'success') {
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    }
}