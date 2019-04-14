# NextJS + Typescript + Sass + Redux + I18N

## 프로젝트 생성 및 넥스트 설치

```sh
yarn init
yarn add next react react-dom
```

### 페이지 생성

```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      Hello NextJS
    </div>
  )
}
```

---

## Sass 설치 및 설정

```sh
yarn add @zeit/next-sass node-sass
```

### NextJS 설정

```javascript
// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass()
```

### 스타일 작성

```scss
// pages/index.scss
$myBackgroundColor: #123456;
$myFontColor: white;

.root {
  background-color: $myBackgroundColor;
  color: $myFontColor;
}
```

### 스타일 추가

```javascript
// pages/index.js
import ./index.scss
...
```

---

## 타입스크립트 설치 및 설정

```sh
yarn add @zeit/next-typescript
yarn add --dev @types/next @types/react @types/react-dom
```

### NextJS 설정

```javascript
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    webpack(config, options) {
      // Further custom configuration here
      return config;
    }
  })
);
```

### Babel 설정

```json
{
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel"
  ]
}
```

### 타입스크립트 설정

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "preserveConstEnums": true,
    "removeComments": false,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "target": "esnext"
  }
}
```

---

## Custom App

- Persisting layout between page changes
- Keeping state when navigating pages
- Custom error handling using componentDidCatch
- Inject additional data into pages (for example by processing GraphQL queries)

```tsx
import React from 'react'
import App, { Container } from 'next/app'

export default class _App extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
```

### 타입스크립트 설정 수정

위 코드를 입력하면 Component 가 any 라고 IDE 에서 오류로 표시한다. 귀찮으니 다음을 추가하자.

```json
{
  ...,
  "noImplicitAny": false,
}
```

---

## Custom Document

- Is rendered on the server side
- Is used to change the initial server side rendered document markup
- Commonly used to implement server side rendering for css-in-js libraries like styled-components or emotion. styled-jsx is included with Next.js by default.

```tsx
// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

---

### 인덱스 페이지 타입스크립트로 변경

```tsx
// pages/index.js => pages/index.tsx
import React from 'react'

import "./index.scss"

interface IndexProps = {
  title: string;
}

class IndexPage extends React.Component<IndexProps> {
  static async getInitialProps() {
    return {
      title: 'NextJS + Typescript + Sass + Redux + I18N + MaterialUI'
    }
  }
  render(): JSX.Element {
    const { title } = this.props
    return (
      <div className="root">
        {title}
      </div>
    )
  }
}
```

---

### stateful compomnents

prop 이나 state 가 없을때 그냥 다음과 같이 넣어주면 타입스크립트가 귀찮게 하지 않는다

```tsx
import React from 'react'

class StatefulComponents extends React.Component<{},{}> {

}

export default StatefulComponents
```

---

## 리덕스 설치 및 설정

```sh
yarn add redux react-redux next-redux-wrapper redux-devtools-extension redux-thunk
yarn add --dev @types/react-redux @types/next-redux-wrapper
```

- redux — for managing application state
- react-redux — make React bindings for Redux
- next-redux-wrapper — wrapper Redux for Next.js
- redux-devtools-extension — for debugging application’s state changes.(https://github.com/zalmoxisus/redux-devtools-extension — download extension for your browser)
- redux-thunk — middleware allows you to write action creators that return a function instead of an action.

설치가 완료되면 src/redux 폴더 안에 `state`, `actions`, `reducer` 파일을 생성하자

폴더 구조는 본인 스타일로 생성하면 된다. src/redux 도 그냥 내가 생각한거니까 src/store 로 하든 어떻게 하든 그건 니 맴이다



---

# 참고

1. [NextJS 홈페이지](https://nextjs.org/docs)
2. [NextJS + Typescript + Redux](https://medium.com/@raphat/next-js-typescript-redux-3fbc990cb901)
3. [Build a todo pwa with nextjs redux typescript docket and now cloud](https://medium.com/@johhansantana/build-a-todo-pwa-with-nextjs-redux-typescript-docker-and-now-cloud-v2-serverless-docker-9f61bb22f88c)
4. [next-redux-wrapper github](https://github.com/kirill-konshin/next-redux-wrapper)