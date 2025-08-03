# SCIEnT_Task
# SCIEnT Research Project Application Portal

This web project serves as an interactive portal for students to explore research projects offered by faculty at NIT Trichy and apply to work on them. The system includes project listings, modal-based details, login/signup functionality, and an application form with input validations.

## 🔗 Live Structure

- `index.html`: Home page displaying project cards, modals, and navigation.
- `login.html`: User registration (Sign Up) page.
- `signin.html`: Existing user login (Sign In) page.
- `application.html`: Student application form to register interest in a project.
- `script.js`: JavaScript for modal handling, validations, and navigation logic.
- `index.css`: CSS styling for layout, responsiveness, animations, and theming.

---

## 📁 Folder Structure

```
/
├── index.html
├── login.html
├── signin.html
├── application.html
├── index.css
├── script.js
├── img/
│   ├── bg.jpg
│   ├── nitt.png
│   └── scient.webp
```

---

## 💡 Features

### 1. **Homepage (`index.html`)**
- Navigation bar with links to different sections.
- Project cards with "View Details" buttons.
- Modal pop-ups for each project with detailed descriptions and "Apply Now" buttons.

### 2. **Authentication**
- **Sign Up (`login.html`)** and **Sign In (`signin.html`)** pages.
- Username and password validation (minimum 5 characters).
- Visual feedback for validation errors.
- Social login placeholders (Google, Apple).

### 3. **Application Form (`application.html`)**
- Inputs for Roll No, Department, Course, Year, and Web-mail.
- Real-time validation for input fields (e.g., NITT email check).
- Success and error alert messages on form submission.

### 4. **Modal System (`script.js`)**
- Smooth open/close modal logic.
- `openModal(id)` and `closeModal(id)` functions.
- External click dismiss functionality.
- Navigation from modal to Sign Up page using `open_login()`.

---

## ✅ Validations

- **Roll No**: Must be numeric and 8+ digits.
- **Department**: Cannot be empty.
- **Email**: Must end with `@nitt.edu`.
- **Username/Password**: Minimum 5 characters each.

---

## 📦 Dependencies

- Google Fonts: Poppins
- Font Awesome Icons
- No external frameworks (pure HTML/CSS/JS)

---

## 📌 How to Run

1. Open `index.html` in your browser to start the portal.
2. Navigate to projects and click “Apply Now”.
3. Sign up or sign in before accessing the application form.
4. Submit your form with required details.

---

## ✨ Credits

Developed for SCIEnT (Students Center for Innovation in Engineering and Technology), NIT Trichy.
