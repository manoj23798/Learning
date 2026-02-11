## Student Management System (Frontend Only)

This is a small **React** mini project that demonstrates:

- **Add Student**
- **List Students**
- **View Student Details**
- **Delete Student**
- Usage of **`useState`**, **`useEffect`**, **`useNavigate`**, **`useParams`**, and **React Router**.

### Tech Stack

- React 18
- React Router DOM 6
- Vite (for dev/build tooling)

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the app in your browser (if it doesn't open automatically) and test:

- Add a student
- View the student list
- Click **View Details** to see an individual student's information
- Delete a student

Student data is kept purely on the frontend using React state, and is **optionally synced to `localStorage`** so a refresh keeps your data.
