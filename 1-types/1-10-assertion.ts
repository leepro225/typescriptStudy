{
    /**
     * Type Assertions ๐ฉ
     * ์ ๋ง ํ์ ํ ๋๊ฐ ์๋๋ฉด ๊ฐ๊ธ์  ์ฌ์ฉํ์ง ์๋๋ค.
     */

    function jsStrFunc(): any {
        return 'hello'; // ์ ๋์ ์ผ๋ก ์คํธ๋ง์ ๋ฐํํ๋ ํจ์
    }
    const result = jsStrFunc(); // ์ด ํจ์๋ฅผ ์คํํ๊ธฐ ์ ๊น์ง๋ result๋ any ํ์์ด๋ผ ๋ฌธ์์ด API๋ฅผ ์ฌ์ฉํ  ์ ์์
    console.log((result as string).length); // ๊ฐ๋ฐ์๊ฐ ํ์์ ํ์ ํ ๋ ์ด๋ค.
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)) // error

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    // numbers.push(2);  error  
    numbers!.push(2); // ๊ฐ๋ฐ์๊ฐ ๋ฐฐ์ด์ ๋ฆฌํดํ๋ค๊ณ  ํ์ ํ๋ ๊ฒฝ์ฐ, numbers์ ๊ฐ์ด ์๋ค๊ณ  ํ์ ํ๋ ๊ฒฝ์ฐ

    const button = document.querySelector('class');
    
    // button์ด null์ผ ์ ์๊ธฐ ๋๋ฌธ์ ์์ธ์ฒ๋ฆฌ๋ฅผ ๋ณดํต ํด์ค 
    // ๊ทผ๋ฐ, button์ด ์๋ค๊ณ  ์ ๋ง ํ์ ํ๋ ๊ฒฝ์ฐ์๋ 
    // const button = document.querySelector('class')!;
    // ์ด๋ ๊ฒ ๋ค์ ๋๋ํ๋ฅผ ๋ถ์ฌ์ค
    
    if (button) {
        button.nodeName
    }
}