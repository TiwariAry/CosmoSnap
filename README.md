# 🌌 CosmoSnap
**NASA Astronomy Picture of the Day Viewer**

CosmoSnap is a lightweight web application that fetches and displays NASA's Astronomy Picture of the Day (APOD) along with its description using NASA's public API. The application focuses on clean data consumption, efficient API usage, and a responsive user interface for daily content updates.

🌐 **Live App**: [CosmoSnap](#)
<br/>

<!-- Add screenshots here -->
<!-- ![Home Screenshot](image-link) -->
<!-- ![APOD Detail Screenshot](image-link) -->

---

## 📸 Features

- 🌠 **Daily Astronomy Content** – Fetches NASA's Astronomy Picture of the Day using the APOD API
- 📝 **Detailed Metadata** – Displays image title, date, and explanation
- ⚡ **Smart Caching** – Implements response caching to reduce redundant API calls
- 📱 **Responsive Design** – Optimized UI for desktop and mobile devices
- 🎨 **Clean Interface** – Minimalist design that puts the cosmos front and center

---

## 🧱 Tech Stack

| Frontend       | API              | Deployment       |
|----------------|------------------|------------------|
| React.js       | NASA APOD API    | (Optional)       |
| CSS            |                  |                  |

---

## 🌿 System Overview

<img width="1297" height="565" alt="image" src="https://github.com/user-attachments/assets/4e2f60fa-c2cf-411c-9816-6109f95f3468" />

---

## 🗂️ Project Structure
```bash
CosmoSnap/
├── src/                 # Frontend application
├── public/              # Static assets
├── .env.example         # Environment variable template
├── package.json
└── README.md            # You're here!
```

---

## 🚀 How It Works

### 🌌 Daily Content Fetch
1. Client sends a request to the backend.
2. Backend queries the **NASA APOD API** for the daily image.
3. API response is cached to minimize repeated external requests.
4. Image and metadata are returned to the frontend for display.

---

## 🛠️ Installation & Setup

### 📦 Prerequisites
- Node.js v18+
- NASA API Key ([Get one here](https://api.nasa.gov/))

---

### 🔌 Clone the Repository
```bash
git clone https://github.com/TiwariAry/CosmoSnap.git
cd CosmoSnap
```

---

### ⚙️ Setup Instructions

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Configure Environment Variables

Create a `.env` file in the root directory:
```env
NASA_API_KEY=your_nasa_api_key
```

#### 3. Start the Application
```bash
npm run dev
```

Visit: `http://localhost:3000`

---

## 🧠 Learnings & Highlights

- Integrated **third-party public APIs** with backend abstraction
- Implemented **caching strategies** to optimize API usage and respect rate limits
- Built a clean, **responsive UI** for daily dynamic content
- Gained experience in **handling external API limits** and error management
- Learned about NASA's open data ecosystem and astronomical content delivery

---

## 📣 Future Enhancements

- 📅 Browse APOD images by date with calendar navigation
- ⭐ Save favorite images locally or to user account
- 📥 Download images directly from the app
- 🌐 Multi-language support for descriptions
- 🔍 Search functionality for past APOD entries
- 🎥 Support for video content from APOD

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.  
Let's explore the cosmos together with **CosmoSnap**.

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/TiwariAry/CosmoSnap/blob/main/LICENSE).  
Feel free to fork, modify, and build upon it.

---

## 👨‍💻 Author

**Aryan Tiwari**  
📫 [LinkedIn](https://www.linkedin.com/in/aryan-tiwari-6844a9250)  
💻 [GitHub](https://github.com/TiwariAry)

---
