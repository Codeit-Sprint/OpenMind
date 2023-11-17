# README

# Codeit Frontend Sprint 1기 Project

---

![MainPageImage](https://github.com/Codeit-Sprint/OpenMind/assets/97735859/844a6f34-afc8-4ec6-952b-71f3b57b2817)

## OpenMind

---

Codeit FrontEnd Sprint 1

개발기간: 2023.11.03 ~ 2023.11.17

### Deploy

---

https://open-mind-eight.vercel.app/

### Team

---

| 박종민 | 박세은 | 안윤진 |
| --- | --- | --- |
| https://github.com/qooktree1 | https://github.com/marchfirst01 | https://github.com/thisisthewa2 |

### Project Introduction

---
**질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼**

## 🦮 Start Guide

---

### Requirements

For building and running the application you need:

> Node.js 18.18.2
> Npm 9.8.1

### Installation & Start

```bash
$git clone https://github.com/Codeit-Sprint/OpenMind.git
cd OpenMind
npm install
npm run start
```

## ⚒️ Stacks

---

### Environment
- Visual Studio Code IDE 1.84
- Git
- Github
### Config
- Npm 9.8.1
### Development
- JavaScript
- React 18.2.0
- styled-components 6.1.0
### Communication
- Discord
- Notion, GitBook
### Deploy
- Vercel

## 🪧 협업 전략

---

- Github
  - 코드의 버전을 관리
  - 이슈 발행, 해결을 위한 토론
  - PR시, 팀원들이 코드 리뷰를 진행하고 Feedback 게시

- Gitbook, Notion
  - Convention 정리(PR, Commit, Naming)
  - Ground Rule 정리
  - Git branch 전략 정리(Git Flow 전략 사용)
  - Daily Scrum 기록

- 회의
  - 10 a.m. - Daily Scrum
  - 2 p.m. - 팀 회의 및 PR 코드 리뷰 회의
  - PR이 올리면 Code Review하며 코멘트


## 🧰 주요 기능

---

### 개인 피드

- 피드에 질문 작성 기능
- 좋아요, 싫어요 기능

### 피드 목록 보기

- 화면의 가로 비율에 따라 6 or 8개의 피드카드 보여주기(throttle 적용)
- 최신순, 이름순으로 정렬 기능
- Pagination

### 답변하기

- 질문에 답변 관련 기능
    - 답변 생성
    - 답변 수정
    - 답변 삭제
    - 답변 거절
    - 답변 거절 취소
        - 답변 거절 하기 이전의 상태로 되돌리기
- 좋아요, 싫어요 기능
- Infinite Scroll(throttle 적용)

## 💻 Service Layout

|메인 페이지|질문 목록 페이지|
|------|---|
|![MainPageImage](https://github.com/Codeit-Sprint/OpenMind/assets/97735859/844a6f34-afc8-4ec6-952b-71f3b57b2817)|![QuestionListPage](https://github.com/Codeit-Sprint/OpenMind/assets/97735859/89916b09-0aa7-40c2-a9fa-c7c0aaf69835)|
|개인 피드|답변하기|
|![FeedPage](https://github.com/Codeit-Sprint/OpenMind/assets/97735859/c927aa30-35e0-486f-9eaf-494a76a3b14e)|![AnswerPage](https://github.com/Codeit-Sprint/OpenMind/assets/97735859/63dfe5ba-d415-4861-82cb-212a18e32988)|


## 🏗️ Structure

---

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
