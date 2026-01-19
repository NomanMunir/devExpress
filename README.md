# 🏢 Office Manager Pro - DevExtreme Demo

A modern **Employee & Task Management System** built with DevExpress DevExtreme - demonstrating how enterprise UI components can accelerate web application development.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://nomanmunir.github.io/devExpress/)
![DevExtreme](https://img.shields.io/badge/DevExtreme-23.2.5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![jQuery](https://img.shields.io/badge/jQuery-3.7.1-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌐 Live Demo

**[👉 View Live Demo](https://nomanmunir.github.io/devExpress/)**

## 📸 Features

### 📊 Dashboard
- Real-time statistics cards
- Task status pie chart
- Weekly completion bar chart

### 👥 Employee Management
- Full-featured data grid with sorting, filtering, grouping
- Add/Edit/Delete employees
- Export to Excel

### ✅ Task Management
- Priority-based task tracking
- Status badges (Pending, In Progress, Completed, Overdue)
- Assign tasks to employees

## 🚀 Key Features

| Feature | Description |
|---------|-------------|
| **📊 Dashboard** | Overview with stats cards and interactive charts |
| **👥 Employee Grid** | Manage employees with full CRUD operations |
| **✅ Task Grid** | Track tasks with priorities and due dates |
| **🔍 Search & Filter** | Instant search across all data |
| **📁 Grouping** | Drag column headers to group data |
| **📤 Excel Export** | One-click export to Excel |
| **🎨 Themes** | Professional DevExtreme Light theme |

## 🛠️ Tech Stack

- **DevExtreme** - UI Component Library by DevExpress
- **jQuery** - DOM manipulation
- **HTML5 / CSS3** - Structure and styling
- **GitHub Actions** - CI/CD for deployment

## 📦 What is DevExtreme?

**DevExtreme** is a commercial UI component library by DevExpress, similar to:
- Material UI (React)
- Ant Design (React)
- PrimeNG (Angular)
- Vuetify (Vue)

It provides **70+ UI components** including:
- Data Grid (the most powerful feature!)
- Charts & Graphs
- Form Controls
- Navigation Components
- Popups & Dialogs

### Why DevExtreme?

✅ **Enterprise-ready** - Used by Fortune 500 companies  
✅ **Feature-rich** - Sorting, filtering, grouping, export built-in  
✅ **Professional themes** - Office-like appearance  
✅ **Cross-platform** - Works with any JavaScript framework  
✅ **Excellent docs** - Comprehensive documentation and support  

## 🏃‍♂️ Getting Started

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/NomanMunir/devExpress.git
   cd devExpress
   ```

2. **Start a local server** (choose one):
   ```bash
   # Using Node.js
   npx serve
   
   # Using Python
   python -m http.server 8080
   
   # Using PHP
   php -S localhost:8080
   ```

3. **Open in browser**
   ```
   http://localhost:8080
   ```

### Or Simply Open the HTML File
Just double-click `index.html` to open directly in your browser!

## 📁 Project Structure

```
devExpress-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions CI/CD
├── index.html            # Main HTML file
├── styles.css            # Custom styles
├── app.js                # Application logic
└── README.md             # Documentation
```

## 🎯 Key DevExtreme Components Used

### dxDataGrid
```javascript
$("#employeeGrid").dxDataGrid({
    dataSource: employees,
    filterRow: { visible: true },
    searchPanel: { visible: true },
    groupPanel: { visible: true },
    editing: { allowUpdating: true, allowDeleting: true }
});
```

### dxChart
```javascript
$("#chart").dxChart({
    dataSource: data,
    series: [{ argumentField: "month", valueField: "sales" }]
});
```

### dxForm
```javascript
$("#form").dxForm({
    formData: employee,
    items: ["firstName", "lastName", "email"]
});
```

## 🚀 Deployment

This project uses **GitHub Actions** for automatic deployment to GitHub Pages.

Every push to the `main` branch triggers:
1. Checkout code
2. Deploy to GitHub Pages

The workflow file is located at `.github/workflows/deploy.yml`

## 📚 Learn More

- [DevExtreme Documentation](https://js.devexpress.com/Documentation/)
- [DevExtreme Demos](https://js.devexpress.com/Demos/)
- [DevExpress Website](https://www.devexpress.com/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Note:** DevExtreme itself requires a commercial license for production use. This demo uses the CDN version for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Noman Munir**
- GitHub: [@NomanMunir](https://github.com/NomanMunir)

---

⭐ **Star this repo if you found it helpful!**
