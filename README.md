# README for Invoice App

## Introduction
Invoice App is a cutting-edge web application designed for managing invoices with ease and efficiency. Leveraging the power of Vue 3 integrated through Vite with Laravel 10, this application offers a comprehensive CRUD system for manipulating invoice data using Vue components. Our intuitive router facilitates seamless navigation across different components, enhancing user experience.

## Features
- **Vue 3 Integration**: Utilizes Vue 3 with Vite for a responsive and dynamic frontend.
- **Laravel 10 Backend**: Robust backend support with Laravel 10.
- **CRUD System**: Complete Create, Read, Update, and Delete functionality for invoices.
- **Routing**: Efficient routing system for smooth transitions between components.
- **Database Integration**: Includes 5 tables - Products, Customers, Orders, Counters, and a Many-to-Many relation table between Orders and Products.
- **Factory Classes**: Each table has corresponding factory classes for initial data seeding and manipulation.
- **Comprehensive Invoice Management**: Customize invoices with date range, customer selection, reference, item code, terms and conditions, and a list of orderable products with quantities.
- **Dynamic Pricing**: Automatic price calculation with support for discounts.
- **Printable Invoices**: Option to print invoices post-creation.
- **Editable Orders**: Flexibility to edit or delete orders as needed.

## Installation

1. **Clone the Repository**
   ```
   git clone https://github.com/Zholamanm/Invoice-app.git
   ```

2. **Install Dependencies**
    - For Laravel (Backend):
      ```
      cd invoice-app
      composer install
      ```
    - For Vue 3 (Frontend):
      ```
      npm install
      ```

3. **Environment Setup**
    - Copy `.env.example` to `.env` and configure your database and other settings.

4. **Database Migration and Seeding**
   ```
   php artisan migrate --seed
   ```

5. **Run the Application**
    - Backend:
      ```
      php artisan serve
      ```
    - Frontend:
      ```
      npm run dev
      ```

## Usage
- Navigate through the application using the sidebar to access different functionalities.
- Create new invoices by filling in the required fields and selecting products.
- View all invoices in the dashboard with options to edit or delete.
- Print invoices using the print option available on each invoice detail page.

## Contributing
Contributions to improve Invoice App are welcome. Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the [MIT License](LICENSE.md).

## Contact
For any queries or suggestions, feel free to reach out through [Email](mailto:zholaman223@gmail.com).

---

Invoice App aims to streamline the process of invoice management with a user-friendly interface and robust functionality. We hope you find this application valuable and efficient for your invoicing needs.
