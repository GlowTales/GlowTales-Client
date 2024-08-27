# GlowTales-Client

애자일 팀의 글로우테일 서비스 FE 레포입니다


## 글로우 테일 GlowTales

<aside>
팀 애자일은 청각장애인, 그리고 다문화 가정에서의 문제점을 찾았습니다. <br/>

말이 어눌한 청각장애인 부모나 자녀와 구사하는 언어가 다른 다문화 가정의 부모님들은 동화책을 생생하게 읽어주며 언어를 함께 학습하는 것에 대한 어려움을 겪고 있습니다. 이러한 문제는 부모와 자녀 간의 정서적 유대감을 약화시키고, 아이들의 언어 발달에도 부정적인 영향을 미치고 있습니다.<br/>

저희는 이 문제를 해결하기 위해 사진, 텍스트 등 일상에서 떠오른 것을 입력하면 다양한 언어로 Ai가 동화를 생성해주는 서비스를 제작하고자 합니다. 동화 생성에서 더 나아가 이를 기반으로 언어 학습까지 연계할 수 있습니다.<br/>

이 서비스는 청각장애인, 다문화 가정에서의 문제를 해결하고, 모든 아이들이 평등하게 언어 학습을 할 수 있도록 돕는 중요한 도구가 될 것 입니다.<br/>

</aside>

<br>

## 배포 주소

> 프론트 서버 : https://glowtales.netlify.app/
</br>StoryBook : https://66c36b48991224f3d12e1659-fqyfttmdwy.chromatic.com/?path=/docs/glowtales--docs

## Usage

```
$ git clone https://github.com/GlowTales/GlowTales-Client.git
$ cd GlowTales-Client
$ npm install
$ npm run dev
```

<br>

## Contributors ✨

<div align=center>

|           | <img width="30" src="https://avatars.githubusercontent.com/u/101329724?v=4">[@gominzip](https://github.com/gominzip)                                                                                                 | <img width="30" src="https://github.com/user-attachments/assets/198c6cdb-9338-49a1-9bab-ee830ed7dd20">[@cjy3458](https://github.com/cjy3458)                          |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 역할      | 프론트엔드 개발                                                                                                                                                                                                      | 프론트엔드 개발                                                                                                                                                         |
| 담당 부분 | <li>카카오 로그인 및 온보딩</li><li>스토리북 세팅 및 배포</li></li><li>학습 퀴즈</li><li>메인화면</li><li>공통 컴포넌트<ul><li>Dropdown</li><li>SelectOptionList</li><li>ProgressBar</li></ul> | <li>CICD 세팅          </li><li>동화 생성</li><li>동화 읽기</li></li><li>메인화면</li><li>공통 컴포넌트<ul><li>Card</li><li>TabBar</li><li>Modal</li></ul> |

</div>


## Architecture

<br>



## 📁 폴더 구조

```
GlowTales-Client
 ┣ public
 ┣ src
 ┃ ┣ apis
 ┃ ┣ components
 ┃ ┃ ┣ common
 ┃ ┃ ┣ learn
 ┃ ┃ ┣ login
 ┃ ┃ ┣ main
 ┃ ┃ ┣ onboarding
 ┃ ┃ ┣ splash
 ┃ ┃ ┗ tales
 ┃ ┣ hooks
 ┃ ┣ pages
 ┃ ┣ stories
 ┃ ┣ styles
 ┃ ┣ type
 ┃ ┣ utils
 ┃ ┣ App.tsx
 ┃ ┣ Layout.tsx
 ┃ ┣ main.tsx
 ┃ ┣ router.tsx
 ┃ ┗ vite-env.d.ts
 ┣ index.html
 ┣ package.json
 ┣ tsconfig.json
 ┗ vite.config.ts
```



## Branch Convention

- `main` : 프로덕트를 배포하는 브랜치입니다.
- `develop`: 프로덕트 배포 전 기능을 개발하는 브랜치입니다.
- `feat`: 단위 기능을 개발하는 브랜치로 단위 기능 개발이 완료되면 develop 브랜치에 merge 합니다.
- `hotfix`: main 브랜치로 프로덕트가 배포 된 이후 이슈가 발생했을 때 이를 긴급하게 해결하는 브랜치입니다.



## Commit Convetion

- **feat** : 새로운 기능 구현 `feat: 객관식 퀴즈 선지 셔플 구현 (#33)`
- **fix** : 코드 오류 수정 `fix : 타입 에러 해결`
- **design** : 디자인 수정 `design: 퀴즈 디자인 변경 사항 반영 (#33)`
- **cicd** : cicd 관련 변경 사항 `github action을 통한 스토리북 지속적 배포 (#16)`
- **chore** : 의존성 추가, 패키지 구조 변경, 파일 이동 등의 작업 `chore: Interface 파일 분리`
- **refactor**: 내부 로직은 변경 하지 않고 기존의 코드를 개선하는 리팩터링 `refactor: 퀴즈 진행부분 함수 분리`
- **setting**: 세팅 `setting: fonts 파일 추가 (#2)`

<br>

## Teck Stack ✨

| IDE           | VSCode                 |
| :------------ | :--------------------- |
| Language      | TypeScript (v5.5.3)    |
| Framework     | React (v18.3.1)        |
| Build Tool    | Vite (v5.4.1)          |
| Styling       | Styled Components      |
| Config        | NPM                    |
| UI Testing    | Storybook, Chromatic   |
| CI/CD         | Netlify, Github Action |
| Other Tool    | Notion, Postman, Figma |
| Communication | Discord, GoogleMeet    |

<br>

<!-- | ![이미지1](이미지1-경로) | ![이미지3](이미지3-경로) |
| :----------------------- | :----------------------- |
| ![이미지6](이미지6-경로) | ![이미지8](이미지8-경로) | -->

