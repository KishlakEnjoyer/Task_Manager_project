# 📋 XDGroup Task Manager

> A sleek, responsive, and intuitive task management app built for developers who value simplicity, productivity, and clean code.  
> Organize your day, set deadlines, and stay on track — all in one place.

![Demo](https://via.placeholder.com/800x400?text=Task+Manager+Preview+-+Ant+Design+%26+FastAPI)

## 🛠️ Tech Stack

| Layer       | Technologies |
|-------------|--------------|
| **Frontend** | React, TypeScript, Vite, Ant Design, Axios |
| **Backend**  | FastAPI, Python 3.10+, SQLAlchemy (async), Pydantic |
| **Database** | MySQL 8.0 |
| **Infra**    | Docker, Docker Compose |
| **Auth**     | JWT (stateless) |

> 💡 Why this stack?  
> FastAPI gives us blazing-fast async APIs with automatic OpenAPI docs. React + Ant Design = beautiful, consistent UI out of the box. MySQL — reliable, familiar, and production-ready.

---

## 🚀 Features

- ✅ Create, edit, delete, and mark tasks as complete  
- 📅 Set due dates and get visual deadline indicators  
- 🎨 Clean, responsive UI with dark/light mode (via Ant Design)  
- 🔒 Secure JWT-based authentication  
- 📦 Fully containerized with Docker  
- 📊 Interactive API docs at `/docs` (Swagger UI)

*(Planned: task categories, reminders, Telegram integration 🤖)*

---

## 🏗️ Project Structure

```
xdgroup-task-manager/
├── backend/               # FastAPI app
│   ├── main.py
│   ├── models/
│   ├── schemas/
│   ├── crud/
│   └── database.py
├── frontend/              # React + Ant Design
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/api.js
├── docker-compose.yml
└── README.md
```

---

## ▶️ Quick Start (Local Dev)

### Prerequisites
- Docker & Docker Compose
- Node.js (v18+)
- Python 3.10+

### 1. Clone the repo
```bash
git clone https://github.com/KishlakEnjoyer/xdgroup-task-manager.git
cd xdgroup-task-manager
```

### 2. Start services with Docker
```bash
docker-compose up -d
```

> This launches:
> - MySQL (port `3306`)
> - FastAPI backend (port `8000`)
> - React dev server (port `5173`)

### 3. Run frontend (optional: if not using dev container)
```bash
cd frontend
npm install
npm run dev
```

### 4. Explore
- 🌐 Frontend: [http://localhost:5173](http://localhost:5173)  
- 📡 API Docs: [http://localhost:8000/docs](http://localhost:8000/docs)  
- 🗄️ Database: MySQL (credentials in `docker-compose.yml`)

---

## 🧪 Environment Variables

### Backend (`.env`)
```env
DATABASE_URL=mysql+aiomysql://user:password@mysql:3306/task_manager
SECRET_KEY=your_strong_secret_here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### Frontend (`.env`)
```env
VITE_API_BASE_URL=http://localhost:8000
```

> 🔐 Never commit real secrets! Use `.env` only in development.

---

## 🤝 Contributing

PRs welcome! Please:
1. Follow existing code style  
2. Write meaningful commit messages  
3. Test your changes  

This project is part of my journey to master **full-stack development**, **clean architecture**, and **developer experience**.

---

## 📬 Contact

Made with ❤️ by **Erik Fayzullin**, **Roman Khasanov**, **Bulat Shaiheev** 
📧 [2016Elektronik123@gmail.com](mailto:2016Elektronik123@gmail.com)  
💬 Telegram: [@jdm_enjoyerr](https://t.me/jdm_enjoyerr)
💬 Telegram: [@khasa_88](https://t.me/khasa_88)

---

> ✨ **Keep coding. Keep shipping.**  
> — The XDGroup Team
