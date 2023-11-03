import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/reset.css';
import { FeedPage, HomePage, QuestionListPage } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="list" element={<QuestionListPage />} />
          <Route path="post">
            <Route index element={<FeedPage />} />
            <Route path=":userId" element={<FeedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
