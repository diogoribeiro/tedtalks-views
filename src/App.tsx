import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import YearReview from './pages/YearReview/YearReview';
import { rootRoute, yearReviewRoute } from './utils/routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={rootRoute} element={<Home />} />
          <Route path={yearReviewRoute} element={<YearReview />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
