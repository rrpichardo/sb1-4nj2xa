import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import InstallationForm from './components/InstallationForm';
import InspectionForm from './components/InspectionForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/nueva-instalacion" element={<InstallationForm />} />
          <Route path="/nueva-inspeccion" element={<InspectionForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;