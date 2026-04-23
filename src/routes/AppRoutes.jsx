import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Plans from '../pages/Plans';
import Trainers from '../pages/Trainers';
import Programs from '../pages/Programs';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
