// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminDashboard.scss';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [usersRes, propertiesRes, bookingsRes, reviewsRes] = await Promise.all([
//           axios.get('/api/admin/users'),
//           axios.get('/api/admin/properties'),
//           axios.get('/api/admin/bookings'),
//           axios.get('/api/admin/reviews'),
//         ]);
//         setUsers(usersRes.data);
//         setProperties(propertiesRes.data);
//         setBookings(bookingsRes.data);
//         setReviews(reviewsRes.data);
//       } catch (error) {
//         console.error('Error fetching admin data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>
//       <div className="dashboard-section">
//         <h2>User Management</h2>
//         <p>Total Users: {users.length}</p>
//       </div>
//       <div className="dashboard-section">
//         <h2>Property Approvals</h2>
//         <p>Pending Approvals: {properties.filter(p => !p.approved).length}</p>
//       </div>
//       <div className="dashboard-section">
//         <h2>Booking Oversight</h2>
//         <p>Total Bookings: {bookings.length}</p>
//       </div>
//       <div className="dashboard-section">
//         <h2>Manage Reviews</h2>
//         <p>Total Reviews: {reviews.length}</p>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
