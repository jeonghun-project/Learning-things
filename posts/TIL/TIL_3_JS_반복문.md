# TIL 반복문(iteration)

반복 작업을 컴퓨터에게 보다 쉽게 시킬 수 있는 기능을 가지고 있는 컴퓨터 문법

자바스크립트에서는

- 재귀함수를 통한 반복
- for 루프
- for in , of 루프
- while 루프
- do..while 루프


## For Loo

for  (변수 선언 ; 조건문 ; 증감 문) {실행} 으로 이루어져있다.

```jsx
for(let n = 0; expr; n++) {
	//반복할 실행문
}
```

`for key in obj` - 객체 루프

`for el of arr` - 배열 루프

## While Loops

while 

```jsx
let count = 0;
while(count < 5) {
	count++;
}
console.log(count) // 5
```

while - break

```jsx
let count = 0;

while (true) {
    count++;
    
    if(count >= 20) {
        break;
    }
}

console.log(count); // 20
```

while - do

```jsx
let count = 0;

do {
    count++;
    
    if(count >= 20) {
        break;
    }
}
while (false) {
 
}

console.log(count); // 1
```