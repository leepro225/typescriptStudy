{
    // ErrorState
    /**
     * 에러를 타입으로 정의하고, 타입에 따라 에러를 안정적으로 예상가능하게 핸들링
     */
    type NetworkErrorState = {
        result: 'fail';
        reason: 'network error' | 'down' | 'timeout'
    }
    type SuccessState = {
        result: 'success';
    }
    type ResultState = SuccessState | NetworkErrorState;
    class NetWorkClient {
        tryConnect(): ResultState {
            // throw new Error('no network!'); throw 를 남발하지 말자.
        }
    }
    
    class UserService {
        constructor(private client: NetWorkClient) {}
    
        login() {
            this.client.tryConnect();
            // more logic
        }
    }
    
    class App {
        constructor(private userService: UserService) {}
        run() {
            try {
                this.userService.login();
            } catch (error) {
                // 여기서 error 는 any 타입이므로, 에러의 타입을 세부적으로 구분하기엔 부적절
                // 이럴땐 에러 스테이트를 사용한다.
                // 정말 예상하지 못한 에러가 발생할 거 같은 곳에서만 이거는 쓴다.
            }
        }
    }
    
    const client = new NetWorkClient();
    const service = new UserService(client);
    service.login();
}