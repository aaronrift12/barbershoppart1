import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const { id } = useParams();  // Get the book ID from the URL
  const [formData, setFormData] = useState({
    publisher: '',
    name: '',
    date: ''
  });
  const navigate = useNavigate();

  // Fetch the book details for updating
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${id}`)
      .then((res) => {
        setFormData({
          publisher: res.data.publisher,
          name: res.data.name,
          date: res.data.date,
        });
      })
      .catch((err) => {
        console.log('Error fetching book:', err);
      });
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3030/update/${id}`, formData)
      .then((res) => {
        console.log('Book updated:', res.data);
        navigate('/book');  // Go back to the Books page
      })
      .catch((err) => {
        console.log('Error updating book:', err);
      });
  };

  return (
    <div className="container mt-3">
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">Publisher</label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            name="publisher"
            value={formData.publisher}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Book Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Publish Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default UpdateBook;
