# 🏡 Modak Challenge – React Native Application

Welcome to the **Modak Challenge**, a mobile application built using **React Native** and **Expo**. This project showcases a clean architecture, reusable components, global state management with stores, and modern data fetching with React Query.

## 🚀 Tech Stack

- **React Native** with Expo
- **TypeScript**
- **React Query** for data handling and caching
- **Zustand** for global state management
- **Axios** for API requests
- **NativeWind** for UI
- **Reanimated** for animations
- **Expo notifications** for notifications and deep link

---

## 📦 Features

- 🛍️ Product listing with filters
- 🔍 Filter by category and sort by price or rating
- 📲 Responsive UI across iOS and Android
- 🧱 Domain mappers and custom hooks
- 🔄 State management with Zustand store
- 🎨 Themed design with reusable components
- 🧠 Smart loading states and error handling via React Query

---

## ⭐ Bonus

- 🔔 Local push notifications with dynamic data
- 🔗 Deep link to specific product when tapping push notification

---

## ✨ Extra improvements

- Added smooth animations
- Added clear filter functionality
- Cached API data for better performance
- Customized app name, icon and splash screen
- Added treatment in case of zero stock product
- Added treatment in case of products with no brand
- Clear notifications queue before scheduling a new one
- Followed Git best practices with small, concise and clear commit messages

   *To test notifications, use the notification button on the product details screen, grant permission, and close the app. You wil get a push notification after 5 seconds.*

---

## Get started

1. Clone the Repository

   ```bash
   git clone https://github.com/thiagomunich/modak-challenge.git
   cd modak-challenge
   ```

2. Install dependencies

   ```bash
   npm install
   npx expo install
   ```

3. Prebuild

   ```bash
   npx expo prebuild
   ```
   
4. Execute prebuild on simulator device
   ```bash
   npx expo run:android 
   #or 
   npx expo run:ios
   ```
   This will build the app and open it on the simulator or your connected device. It will also install the app icon so you can open it later.

5. Run on Expo Go (for quick tests without the 4th step)
   ```bash
   npx expo start
   ```
   Scan the QR code using the Expo Go app on your phone to quickly preview the app without needing a full native build.

---

## 🔗 Feel free to connect!

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiagomunich)
