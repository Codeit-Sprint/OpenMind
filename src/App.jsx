import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/reset';
import {
  AnswerPage,
  FeedPage,
  HomePage,
  QuestionListPage,
  NotFoundPage,
} from './pages';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="list" element={<QuestionListPage />} />
          <Route path="post">
            <Route index element={<FeedPage />} />
            <Route path=":subjectId" element={<FeedPage />} />
            <Route path=":subjectId/answer" element={<AnswerPage />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
