# react에서 Typescript 사용하기

아래는 리엑트 type의 usecase이다. 아래자세한 내용이 나와 있다.

[Typing Component Props | React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)

```ts
type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
  obj: object;
  obj2: {}; // almost the same as `object`, exactly the same as `Object`
  /** an object with any number of properties (PREFERRED) */
  obj3: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  /** a dict object with any number of properties of the same type */
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // equivalent to dict1
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** an optional prop (VERY COMMON!) */
  optional?: OptionalType;
};
```

## react - ts 이용하여 파일 업로드하기

우선 포토카드 인풋을 받을 버튼을 만들어 주었다.

```js
<input id='fileinput' type='file' onChange={handlefileChange} />
<label className="photocardinputbtn" htmlFor="fileinput">
  <img
    alt="imageinputbtn"
    width={24}
    height={24}
    src={`${fileSelected ? URL.createObjectURL(fileSelected) : ImgBtn}`}
  />
</label>
```

인풋이 아직 생성되지 않았을 때는 ImgBtn 이라는 image url 을 보여주고 해당 버튼을 클릭해서 새로운 이미지를 받으면
새로 업로드된 이미지를 preview할 수 있도록 해준다.

이제 인풋을 받을 핸들러 함수를 작성해 보자.

```js
  const [fileSelected, setFileSelected] = useState<File>()
  const handlefileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files

    if (!fileList) return

    setFileSelected(fileList[0])
  }
```

useState 를 통해서 파일을 담아줄 state를 만들어주자. 이때 state의 타입 캐스팅을 위하여 `<File>`을 명시해주자.(한번 하지 않은 상태로 해보면 어떤 이유로 타입캐스팅이 필수적인지 알 수 있을 것이다.)

파일을 받을 핸들러에서 `event type`에 대한 명시가 필요한 것을 기억하자.

이렇게하면 클라이언트에서 파일을 받아올수 있다는 것까지는 알았고, 어떻게 하면 서버에 보내줄 수 있을까

```js
const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  e.preventDefault();
  //사진 업로드 과정
  if (fileSelected) {
    const formData = new FormData();
    formData.set("image", fileSelected, fileSelected.name);
  }
};
```

`FormData`로 이제 image form을 받아올 수 있다.

```js
import React, { useState } from 'react'
import {
  PhotoCardInputContainer,
  ImageInputbtn,
} from '../styles/photo-card-input'
import LocationInfo from './LocationInfo'
import { Button } from '../styles/common'

interface props {
  location?: string
  onChange: React.ChangeEvent<HTMLTextAreaElement>
}

const PhotoCardInput = ({ location = '서울식물원' }: props) => {
  const [fileSelected, setFileSelected] = useState<File>()
  const handlefileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files

    if (!fileList) return

    setFileSelected(fileList[0])
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    //사진 업로드 과정
    if (fileSelected) {
      const formData = new FormData()
      formData.set('image', fileSelected, fileSelected.name)
    }
  }

  const ImgBtn = '/src/iconmonstr-picture-2.svg'
  return (
    <div>
      <ImageInputbtn id='fileinput' type='file' onChange={handlefileChange} />
      <label className='photocardinputbtn' htmlFor='fileinput'>
        <img
          alt='imageinputbtn'
          width={24}
          height={24}
          src={`${fileSelected ? URL.createObjectURL(fileSelected) : ImgBtn}`}
        />
      </label>
    </div>
  )
}

export default PhotoCardInput
```
