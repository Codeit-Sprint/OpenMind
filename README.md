# OpenMind

### [오픈마인드 링크](https://open-mind-eight.vercel.app/)

---

## 📖 주제

- **질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼**

---

## ⏲️ 프로젝트 진행 기간

- 2023.11.03(금) ~ 2023.11.17(금) [Codeit Sprint 1기]

---

## 서비스 특징

---

## 주요 기능

### 메인 페이지

- 피드 생성 기능
    - 질문 받기를 통하여 피드를 생성하여 질문 목록 페이지로 이동
- 질문하러 가기 버튼을 통해 피드를 생성하지 않고 질문 목록 페이지로 이동
- 피드를 생성하며 localStorage에 User와 관련된 기본 정보들을 저장

### 질문 목록 페이지

- 

### 개인 피드

- 질문 작성하기 기능
    - • 피드를 생성한 사람이 아닐 경우 해당 피드에 질문을 작성 가능
- 좋아요, 싫어요 기능

### 답변 하기 페이지

- 답변하기 기능
- 답변 수정 기능
- 답변 거절 기능
- 답변 거절 취소 기능
- 답변 삭제 기능

### 404 페이지

- 사용자가 존재하지 않는 경로로 접근하려 할 때 띄워주는 화면을 만들고 route로 연결

---

## 주요 기술

### **FrontEnd**

- Visual Studio Code IDE 1.84
- React 18.2.0
- styled-components 6.1.0
- prettier
- eslint
- Vercel

---

## 🔧 협업 툴

- Github
- Gitbook
- Notion
- Discord

---

## 🏞️ 협업 환경

- Github
    - 코드의 버전을 관리
    - 이슈 발행, 해결을 위한 토론
    - PR시, 팀원들이 코드 리뷰를 진행하고 Feedback 게시
- 회의
    - 오전 10시 - Daily Scrum
    - 오후 2시 - 팀 회의 및 PR 코드 리뷰 회의
    - PR이 올리면 Code Review하며 코멘트
- GitBook, Notion
    - Convention 정리(PR, Commit, Naming)
    - Ground Rule 정리
    - Git branch 전략 정리(Git Flow 전략 사용)
    - Daily Scrum 기록

---

## 🏗️ 프로젝트 파일 구조

### FrontEnd

```bash
─public
└─src
    ├─apis
    ├─assets
    ├─components
    │  ├─Answer
    │  ├─common
    │  │  ├─Badge
    │  │  ├─Button
    │  │  ├─DropDown
    │  │  ├─InputField
    │  │  ├─InputTextArea
    │  │  ├─Reaction
    │  │  ├─SelectMenu
    │  │  ├─Toast
    │  │  └─UserCard
    │  ├─Content
    │  ├─FeedCard
    │  ├─Modal
    │  └─Pagination
    ├─constants
    ├─containers
    ├─fonts
    ├─hooks
    ├─pages
    │  ├─AnswerPage
    │  ├─FeedPage
    │  ├─HomePage
    │  ├─NotFoundPage
    │  └─QuestionListPage
    ├─styles
    └─utils
```

---

## 👥팀원 역할

- **박종민**
    - HomePage, QuestionListPage, AnswerPage 구현
    - API 연동
    - Pagination, 무한 스크롤 담당
- **안윤진**
- **박세은**
