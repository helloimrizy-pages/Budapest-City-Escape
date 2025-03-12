# 🏙️ Interactive City Exploration Game  

**Discover historical city walls through a gamified adventure with location-based riddles and real-time navigation.**  

[![Explore-Budapest-Living-Past.jpg](https://i.postimg.cc/Pxx5tXqZ/Explore-Budapest-Living-Past.jpg)](https://postimg.cc/yJMHjzcY)

## 🚀 Overview  

This project is an interactive outdoor city exploration game that blends historical storytelling about city walls that once divided communities, engaging riddles, and real-time navigation. Players embark on a journey through the city, visiting landmarks, solving riddles, and unlocking new locations using passcodes.

## ✨ Features  

- **🗺️ Interactive Map** – Built with **Leaflet.js**, players navigate real-world locations with a dynamically styled map.
- **🔐 Passcode-locked Riddles** – Players solve **location-based riddles** to unlock the next checkpoint.  
- **📜 Historical Storytelling** – Each location reveals historical insights about the city's walls and past.  
- **💡 Gamified Experience** – Engaging puzzles, visual elements, and a rewarding progression system.  
- **📍 Multi-Tile Map Styles** – Users can switch between **light, dark, voyager, and local tile maps (historical map)**.  
- **🌐 Web-Based & Mobile-Friendly** – Fully responsive design, accessible via browsers on **smartphones, tablets, and desktops**.  

## 🛠️ Tech Stack  

- **Frontend**: React (TypeScript), Tailwind CSS
- **Database**: JSON-based storage (for riddle and passcode management)  
- **Map & Navigation**: Leaflet.js, OpenStreetMap
- **Custom Map**: QGIS
- **Other Tools**: React Router, Vite

## 🎮 How to Play  

1. **Start the Game** – Visit the homepage and click **"Start the Game"**.  
2. **Explore the City** – Use the interactive map to navigate to the **first location**. Password for the first location is **1332**.  
3. **Solve Riddles** – Answer questions to unlock the **passcode** for the next location.  
4. **Enter Passcode** – Input the correct passcode at each checkpoint to proceed.  
5. **Complete the Journey** – Solve all riddles and uncover the city's hidden history.  

## 📸 Screenshots  

*The interactive home screen with game introduction.*  
[![Explore-Budapest-Living-Past.jpg](https://i.postimg.cc/Pxx5tXqZ/Explore-Budapest-Living-Past.jpg)](https://postimg.cc/yJMHjzcY)

*Dynamic map with real-world locations and riddles.*  
[![Explore-Budapest-Living-Past-4-33pm-03-12.jpg](https://i.postimg.cc/0QB2jT64/Explore-Budapest-Living-Past-4-33pm-03-12.jpg)](https://postimg.cc/vg5dSSt7)

*Historical map when it's shown.*
[![Explore-Budapest-Living-Past-4-37pm-03-12-1.jpg](https://i.postimg.cc/sgYXmH8B/Explore-Budapest-Living-Past-4-37pm-03-12-1.jpg)](https://postimg.cc/G4pdhKbr)

*Riddle Page*

[![Explore-Budapest-Living-Past-4-37pm-03-12.jpg](https://i.postimg.cc/N0b0q9QB/Explore-Budapest-Living-Past-4-37pm-03-12.jpg)](https://postimg.cc/sBQz52BN)

*"How It Works" Page*

[![Explore-Budapest-Living-Past-4-38pm-03-12.jpg](https://i.postimg.cc/MHfZQ9Vp/Explore-Budapest-Living-Past-4-38pm-03-12.jpg)](https://postimg.cc/fSZh4j8G)

*FAQ Page*

[![Explore-Budapest-Living-Past-4-38pm-03-12-1.jpg](https://i.postimg.cc/VshdkCnN/Explore-Budapest-Living-Past-4-38pm-03-12-1.jpg)](https://postimg.cc/yWFVfWfq)

*About Us Page*

[![Explore-Budapest-Living-Past-4-38pm-03-12-2.jpg](https://i.postimg.cc/zXR3bGFF/Explore-Budapest-Living-Past-4-38pm-03-12-2.jpg)](https://postimg.cc/8jNTxD37)

*Contact Page*

[![Explore-Budapest-Living-Past-4-38pm-03-12-3.jpg](https://i.postimg.cc/3RSWpyqn/Explore-Budapest-Living-Past-4-38pm-03-12-3.jpg)](https://postimg.cc/BLFqfv4K)

## 🔧 Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/yourusername/Budapest-City-Escape.git
cd Budapest-City-Escape
```

### 2️⃣ Install Frontend Dependencies
```bash
cd client
npm install
```

### 3️⃣ Start Frontend
```bash
npm run dev
```

### 5️⃣ Open in Browser
```Visit http://localhost:3000 to start playing!```

## 🚀 Deployment to Render

This project can be deployed using [Render](https://render.com/). Follow the instructions below to deploy your project.

### Prerequisites

- A [Render](https://render.com/) account. Sign up if you haven't already.
- A Git repository containing your project code.
- Familiarity with deploying applications and configuring environment variables (if needed).

### Deployment Instructions

1. **Push Your Code to a Git Repository**  
   Ensure your project is pushed to a Git repository (e.g., GitHub, GitLab, Bitbucket).

2. **Create a New Web Service on Render**  
   - Log in to your Render account.
   - Click on the **New** button and select **Web Service**.
   - Connect your Git repository (GitHub, GitLab, etc.) to Render.
   - Select the repository containing your project.

3. **Configure the Service**

   - **Environment:** Choose the appropriate environment (e.g., Node for a Node.js project).
   - **Build Command:**  
     Use the following build command:  
     ```bash
     npm install; npm run build
     ```

4. **Deploy the Application**

   - Once you have configured your build commands, click **Create Web Service**.
   - Render will automatically build and deploy your project.
   - You can view the deployment logs to monitor the build process.

5. **Access Your Application**

   - After the deployment is successful, Render will provide a URL where your application is hosted.
   - Visit the URL to ensure your application is running as expected.

### Troubleshooting

- **Build Failures:**  
  If the build fails, check the build logs for errors. Verify that your `package.json` contains the correct scripts for building and starting your application.
  
- **Custom Domains:**  
  If you wish to use a custom domain, refer to Render's documentation on [Custom Domains](https://render.com/docs/custom-domains).

### Additional Resources

- [Render Documentation](https://render.com/docs)
- [Render GitHub Repository Setup](https://render.com/docs/deploy-from-github)

---

## 🤝 Contribution
Want to improve the game? Contributions are welcome!

1. **Fork** the repository
2. **Create** a new branch:
   ```bash
   git checkout -b feature-new-feature
   ```
4. **Commit** your changes:
   ```bash
   git commit -m "Add new feature"
   ```
6. **Push** the branch:
   ```bash
   git push origin feature-new-feature
   ```
7. **Submit** a PR

## 📩 Contact
For inquiries, feel free to reach out:

📧 Email: rizy.izy15@gmail.com
🌍 Website: https://living-past-city-escape.onrender.com


