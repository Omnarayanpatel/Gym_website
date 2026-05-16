import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <AppRoutes />
    </MainLayout>
  );
}
