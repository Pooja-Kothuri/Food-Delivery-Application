TasteHub - Online Food Delivery Platform
Table of Contents
Project Overview
Features
Tech Stack
Installation
Usage
Future Enhancements


Project Overview
TasteHub is a comprehensive online food delivery platform designed to address the dynamic needs of users and restaurant owners in the Indian market. 
Unlike existing solutions that focus primarily on either users or restaurant owners, TasteHub provides an integrated platform that caters to both.
The platform features advanced user authentication through Auth0, a robust search and filtering system for discovering restaurants, and real-time order management capabilities.
Restaurant owners can efficiently manage their menus and orders, update order statuses.
Secure payment processing is facilitated by Stripe, and high-quality media management is handled by Cloudinary.
Future enhancements include the implementation of reviews and ratings, personalized recommendations, and loyalty programs. 
TasteHub aims to streamline food ordering and restaurant management processes, thereby enhancing the overall user experience and operational efficiency in the online food delivery industry.

Features
User Authentication: Secure login and registration using Auth0.
Restaurant Discovery: Search and filter restaurants based on location and cuisine.
Order Management: Real-time order tracking and management for users and restaurant owners.
Menu Management: Easy menu updates and management for restaurant owners.
Payment Processing: Secure payments through Stripe.
Media Management: Efficient handling of images and videos using Cloudinary.
Tech Stack
Frontend: ReactJS, TypeScript, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Auth0
Payment Gateway: Stripe
Media Management: Cloudinary
Development Tools: Visual Studio Code, GitHub

Installation
To set up the project locally, follow these steps:

Clone the repository:


Copy code
git clone https://github.com/yourusername/tastehub.git
cd tastehub
Install dependencies:


Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add your environment variables:

env
Copy code
MONGODB_URI=your_mongodb_uri
AUTH0_DOMAIN=your_auth0_domain
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_URL=your_cloudinary_url
Start the development server:


Copy code
npm start


TasteHub - Online Food Delivery Platform
Table of Contents
Project Overview
Features
Tech Stack
Installation
Usage
Folder Structure
Future Enhancements
Contributing
License
References
Project Overview
TasteHub is a comprehensive online food delivery platform designed to address the dynamic needs of users and restaurant owners in the Indian market. Unlike existing solutions that focus primarily on either users or restaurant owners, TasteHub provides an integrated platform that caters to both. The platform features advanced user authentication through Auth0, a robust search and filtering system for discovering restaurants, and real-time order management capabilities. Restaurant owners can efficiently manage their menus and orders, update order statuses, and gain insights through analytics. Secure payment processing is facilitated by Stripe, and high-quality media management is handled by Cloudinary. Future enhancements include the implementation of reviews and ratings, personalized recommendations, and loyalty programs. TasteHub aims to streamline food ordering and restaurant management processes, thereby enhancing the overall user experience and operational efficiency in the online food delivery industry.

Features
User Authentication: Secure login and registration using Auth0.
Restaurant Discovery: Search and filter restaurants based on location and cuisine.
Order Management: Real-time order tracking and management for users and restaurant owners.
Menu Management: Easy menu updates and management for restaurant owners.
Payment Processing: Secure payments through Stripe.
Media Management: Efficient handling of images and videos using Cloudinary.
Tech Stack
Frontend: ReactJS, TypeScript, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Auth0
Payment Gateway: Stripe
Media Management: Cloudinary
Development Tools: Visual Studio Code, GitHub
Installation
To set up the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/tastehub.git
cd tastehub
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add your environment variables:

env
Copy code
MONGODB_URI=your_mongodb_uri
AUTH0_DOMAIN=your_auth0_domain
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_URL=your_cloudinary_url
Start the development server:

bash
Copy code
npm start
Usage
User Registration and Login:

Register a new user or restaurant owner account.
Log in using the registered credentials.
Restaurant Discovery:

Search for restaurants based on city and cuisine.
View restaurant details and menus.
Order Management:

Place an order from a selected restaurant.
Track order status in real-time.
Restaurant Management:

Restaurant owners can manage their menu items and orders.
Update restaurant profile and order statuses.
