import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Homepage.css';
import Books from './Books';
import Homepage from './Homepage';
import CreateBook from './CreateBook';
import Layout from './Layout'; // Import Layout component
import UpdateBook from './UpdateBook'; // Import UpdateBook component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book" element={<Layout><Books /></Layout>} />
        <Route path="/create" element={<Layout><CreateBook /></Layout>} />
        <Route path="/update/:id" element={<Layout><UpdateBook /></Layout>} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;

