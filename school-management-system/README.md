# School Management System

## Getting Started

### Prerequisites
- Node.js
- MongoDB (Running locally or a cloud URI)

### Backend Setup
1. Navigate to the `backend` folder.
2. Create/Check `.env` file and set your `MONGODB_URI` and `JWT_SECRET`.
3. Run `npm install`.
4. Run `node seed.js` to create the initial admin account.
5. Run `npm start` (or `node src/index.js`) to start the server at `http://localhost:5000`.

**Admin Credentials:**
- Email: `admin@school.com`
- Password: `adminpassword123`

### Frontend Setup
1. Navigate to the `frontend` folder.
2. Run `npm install`.
3. Run `npm run dev` to start the development server at `http://localhost:5173`.

### Features
- **Public Site**: Home, About, Admissions (Functional), Gallery, Notice Board, Contact.
- **Admin Panel**: Dashboard Overview, Student/Teacher Management, Admission Approval, Notice Publishing, Gallery Management, Fee Tracking, Attendance marking, Timetable, Messaging.
- **Student Dashboard**: Timetable, Attendance overview, Fees status.
- **Teacher Dashboard**: Class management, Attendance marking.
- **Premium UI**: Tailwind CSS, Lucide Icons, Framer Motion animations.
