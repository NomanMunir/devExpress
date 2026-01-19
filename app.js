$(function() {
    // ========================================
    // SAMPLE DATA - In real app, this comes from API
    // ========================================
    var employees = [
        { id: 1, firstName: "John", lastName: "Smith", email: "john.smith@company.com", department: "Development", position: "Senior Developer", salary: 85000, hireDate: new Date(2019, 2, 15), phone: "555-0101", status: "Active" },
        { id: 2, firstName: "Sarah", lastName: "Johnson", email: "sarah.j@company.com", department: "Design", position: "UI/UX Designer", salary: 72000, hireDate: new Date(2020, 5, 22), phone: "555-0102", status: "Active" },
        { id: 3, firstName: "Michael", lastName: "Brown", email: "m.brown@company.com", department: "Management", position: "Project Manager", salary: 95000, hireDate: new Date(2018, 0, 10), phone: "555-0103", status: "Active" },
        { id: 4, firstName: "Emily", lastName: "Davis", email: "emily.d@company.com", department: "Development", position: "Frontend Developer", salary: 68000, hireDate: new Date(2021, 8, 5), phone: "555-0104", status: "Active" },
        { id: 5, firstName: "David", lastName: "Wilson", email: "d.wilson@company.com", department: "QA", position: "QA Engineer", salary: 65000, hireDate: new Date(2022, 1, 28), phone: "555-0105", status: "Active" },
        { id: 6, firstName: "Lisa", lastName: "Anderson", email: "lisa.a@company.com", department: "HR", position: "HR Manager", salary: 78000, hireDate: new Date(2019, 11, 1), phone: "555-0106", status: "Active" },
        { id: 7, firstName: "James", lastName: "Taylor", email: "j.taylor@company.com", department: "Development", position: "Backend Developer", salary: 82000, hireDate: new Date(2020, 3, 15), phone: "555-0107", status: "On Leave" },
        { id: 8, firstName: "Jennifer", lastName: "Martinez", email: "jen.m@company.com", department: "Marketing", position: "Marketing Specialist", salary: 62000, hireDate: new Date(2023, 0, 10), phone: "555-0108", status: "Active" }
    ];

    var tasks = [
        { id: 1, title: "Complete project documentation", assignedTo: 1, priority: "High", status: "In Progress", dueDate: new Date(2026, 0, 25), description: "Write technical documentation for the new feature", createdDate: new Date(2026, 0, 10) },
        { id: 2, title: "Design new landing page", assignedTo: 2, priority: "Medium", status: "Pending", dueDate: new Date(2026, 0, 30), description: "Create mockups for the new marketing landing page", createdDate: new Date(2026, 0, 12) },
        { id: 3, title: "Code review for PR #234", assignedTo: 1, priority: "High", status: "Completed", dueDate: new Date(2026, 0, 18), description: "Review and approve pull request", createdDate: new Date(2026, 0, 15) },
        { id: 4, title: "Quarterly budget planning", assignedTo: 3, priority: "High", status: "In Progress", dueDate: new Date(2026, 0, 28), description: "Prepare Q2 budget proposals", createdDate: new Date(2026, 0, 5) },
        { id: 5, title: "Fix login page bug", assignedTo: 4, priority: "High", status: "Completed", dueDate: new Date(2026, 0, 15), description: "Fix the CSS issue on mobile devices", createdDate: new Date(2026, 0, 13) },
        { id: 6, title: "Write unit tests", assignedTo: 5, priority: "Medium", status: "Pending", dueDate: new Date(2026, 1, 5), description: "Add unit tests for the payment module", createdDate: new Date(2026, 0, 18) },
        { id: 7, title: "Employee onboarding docs", assignedTo: 6, priority: "Low", status: "Completed", dueDate: new Date(2026, 0, 10), description: "Update onboarding documentation", createdDate: new Date(2026, 0, 2) },
        { id: 8, title: "API optimization", assignedTo: 7, priority: "Medium", status: "Overdue", dueDate: new Date(2026, 0, 12), description: "Optimize slow API endpoints", createdDate: new Date(2026, 0, 1) },
        { id: 9, title: "Social media campaign", assignedTo: 8, priority: "Medium", status: "In Progress", dueDate: new Date(2026, 1, 1), description: "Plan February social media posts", createdDate: new Date(2026, 0, 15) },
        { id: 10, title: "Database backup setup", assignedTo: 1, priority: "High", status: "Pending", dueDate: new Date(2026, 0, 22), description: "Configure automated daily backups", createdDate: new Date(2026, 0, 17) }
    ];

    var departments = ["Development", "Design", "Management", "QA", "HR", "Marketing", "Finance"];
    var positions = ["Senior Developer", "Junior Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer", "Project Manager", "QA Engineer", "HR Manager", "Marketing Specialist"];

    // ========================================
    // NAVBAR
    // ========================================
    $("#navbar").dxToolbar({
        items: [
            {
                location: "before",
                template: function() {
                    return $("<div>").addClass("app-title").html("🏢 <strong>Office Manager Pro</strong>");
                }
            },
            {
                location: "after",
                widget: "dxButton",
                options: {
                    icon: "bell",
                    hint: "Notifications"
                }
            },
            {
                location: "after",
                widget: "dxButton",
                options: {
                    icon: "user",
                    text: "Admin",
                    hint: "User Profile"
                }
            }
        ]
    }).css({
        "background": "#1976d2",
        "padding": "8px 20px",
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 0,
        "z-index": 1000
    }).find(".app-title").css({ "color": "white", "font-size": "18px" });

    // ========================================
    // SIDEBAR NAVIGATION
    // ========================================
    var menuItems = [
        { id: "dashboard", text: "Dashboard", icon: "chart" },
        { id: "employees", text: "Employees", icon: "group" },
        { id: "tasks", text: "Tasks", icon: "checklist" }
    ];

    $("#sidebar").dxList({
        dataSource: menuItems,
        selectionMode: "single",
        selectedItemKeys: ["dashboard"],
        keyExpr: "id",
        itemTemplate: function(data) {
            return $("<div>").addClass("menu-item")
                .append($("<i>").addClass("dx-icon-" + data.icon))
                .append($("<span>").text(" " + data.text));
        },
        onSelectionChanged: function(e) {
            if (e.addedItems.length > 0) {
                showSection(e.addedItems[0].id);
            }
        }
    }).css({
        "width": "250px",
        "background": "#fff",
        "position": "fixed",
        "top": "56px",
        "left": 0,
        "bottom": 0,
        "box-shadow": "2px 0 10px rgba(0,0,0,0.1)",
        "padding-top": "10px"
    });

    // ========================================
    // EMPLOYEE GRID
    // ========================================
    $("#employeeToolbar").dxToolbar({
        items: [
            {
                location: "before",
                widget: "dxButton",
                options: {
                    text: "Add Employee",
                    icon: "plus",
                    type: "success",
                    onClick: function() {
                        employeePopup.option("title", "Add New Employee");
                        employeeForm.resetValues();
                        employeePopup.show();
                    }
                }
            },
            {
                location: "before",
                widget: "dxButton",
                options: {
                    text: "Export to Excel",
                    icon: "exportxlsx",
                    onClick: function() {
                        employeeGrid.exportToExcel();
                    }
                }
            }
        ]
    });

    var employeeGrid = $("#employeeGrid").dxDataGrid({
        dataSource: employees,
        keyExpr: "id",
        showBorders: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        columnAutoWidth: true,
        wordWrapEnabled: true,
        filterRow: { visible: true },
        searchPanel: { visible: true, width: 240, placeholder: "Search employees..." },
        headerFilter: { visible: true },
        groupPanel: { visible: true },
        paging: { pageSize: 10 },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        editing: {
            mode: "popup",
            allowUpdating: true,
            allowDeleting: true
        },
        columns: [
            { dataField: "id", caption: "ID", width: 60, allowEditing: false },
            { dataField: "firstName", caption: "First Name", validationRules: [{ type: "required" }] },
            { dataField: "lastName", caption: "Last Name", validationRules: [{ type: "required" }] },
            { dataField: "email", caption: "Email", validationRules: [{ type: "email" }] },
            { dataField: "department", caption: "Department", lookup: { dataSource: departments } },
            { dataField: "position", caption: "Position" },
            { 
                dataField: "salary", 
                caption: "Salary",
                format: { type: "currency", precision: 0 }
            },
            { 
                dataField: "hireDate", 
                caption: "Hire Date",
                dataType: "date"
            },
            { 
                dataField: "status", 
                caption: "Status",
                cellTemplate: function(container, options) {
                    var statusClass = options.value === "Active" ? "status-completed" : "status-pending";
                    $("<span>").addClass("status-badge " + statusClass).text(options.value).appendTo(container);
                }
            }
        ],
        onRowRemoving: function(e) {
            updateDashboard();
        },
        export: {
            enabled: true,
            fileName: "Employees"
        }
    }).dxDataGrid("instance");

    // ========================================
    // TASK GRID
    // ========================================
    $("#taskToolbar").dxToolbar({
        items: [
            {
                location: "before",
                widget: "dxButton",
                options: {
                    text: "Add Task",
                    icon: "plus",
                    type: "success",
                    onClick: function() {
                        taskPopup.option("title", "Add New Task");
                        taskForm.resetValues();
                        taskPopup.show();
                    }
                }
            },
            {
                location: "before",
                widget: "dxButton",
                options: {
                    text: "Export to Excel",
                    icon: "exportxlsx",
                    onClick: function() {
                        taskGrid.exportToExcel();
                    }
                }
            }
        ]
    });

    var taskGrid = $("#taskGrid").dxDataGrid({
        dataSource: tasks,
        keyExpr: "id",
        showBorders: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        columnAutoWidth: true,
        filterRow: { visible: true },
        searchPanel: { visible: true, width: 240, placeholder: "Search tasks..." },
        headerFilter: { visible: true },
        groupPanel: { visible: true },
        paging: { pageSize: 10 },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        editing: {
            mode: "popup",
            allowUpdating: true,
            allowDeleting: true
        },
        columns: [
            { dataField: "id", caption: "ID", width: 60, allowEditing: false },
            { dataField: "title", caption: "Task Title", width: 250, validationRules: [{ type: "required" }] },
            { 
                dataField: "assignedTo", 
                caption: "Assigned To",
                lookup: {
                    dataSource: employees,
                    valueExpr: "id",
                    displayExpr: function(item) {
                        return item ? item.firstName + " " + item.lastName : "";
                    }
                }
            },
            { 
                dataField: "priority", 
                caption: "Priority",
                cellTemplate: function(container, options) {
                    var priorityClass = "priority-" + options.value.toLowerCase();
                    $("<span>").addClass(priorityClass).text(options.value).appendTo(container);
                },
                lookup: { dataSource: ["High", "Medium", "Low"] }
            },
            { 
                dataField: "status", 
                caption: "Status",
                cellTemplate: function(container, options) {
                    var statusMap = {
                        "Pending": "status-pending",
                        "In Progress": "status-progress",
                        "Completed": "status-completed",
                        "Overdue": "status-overdue"
                    };
                    $("<span>").addClass("status-badge " + statusMap[options.value]).text(options.value).appendTo(container);
                },
                lookup: { dataSource: ["Pending", "In Progress", "Completed", "Overdue"] }
            },
            { 
                dataField: "dueDate", 
                caption: "Due Date",
                dataType: "date"
            },
            { dataField: "description", caption: "Description", visible: false }
        ],
        onRowUpdated: function() { updateDashboard(); },
        onRowRemoved: function() { updateDashboard(); },
        masterDetail: {
            enabled: true,
            template: function(container, options) {
                $("<div>").addClass("task-detail")
                    .append($("<strong>").text("Description: "))
                    .append($("<p>").text(options.data.description || "No description"))
                    .append($("<br>"))
                    .append($("<strong>").text("Created: "))
                    .append($("<span>").text(DevExpress.localization.formatDate(options.data.createdDate, "longDate")))
                    .appendTo(container);
            }
        },
        export: {
            enabled: true,
            fileName: "Tasks"
        }
    }).dxDataGrid("instance");

    // ========================================
    // EMPLOYEE POPUP FORM
    // ========================================
    var employeeFormData = {};
    
    var employeePopup = $("#employeePopup").dxPopup({
        title: "Add New Employee",
        width: 500,
        height: "auto",
        showCloseButton: true,
        contentTemplate: function(container) {
            $("<div>").attr("id", "employeeForm").appendTo(container);
        },
        onShown: function() {
            if (!employeeForm) {
                employeeForm = $("#employeeForm").dxForm({
                    formData: employeeFormData,
                    labelLocation: "top",
                    items: [
                        { dataField: "firstName", validationRules: [{ type: "required" }] },
                        { dataField: "lastName", validationRules: [{ type: "required" }] },
                        { dataField: "email", validationRules: [{ type: "required" }, { type: "email" }] },
                        { dataField: "phone" },
                        { dataField: "department", editorType: "dxSelectBox", editorOptions: { items: departments } },
                        { dataField: "position", editorType: "dxSelectBox", editorOptions: { items: positions } },
                        { dataField: "salary", editorType: "dxNumberBox", editorOptions: { format: "currency", min: 30000 } },
                        { dataField: "hireDate", editorType: "dxDateBox" },
                        {
                            itemType: "button",
                            horizontalAlignment: "center",
                            buttonOptions: {
                                text: "Save Employee",
                                type: "success",
                                onClick: function() {
                                    var formData = employeeForm.option("formData");
                                    formData.id = employees.length + 1;
                                    formData.status = "Active";
                                    employees.push(formData);
                                    employeeGrid.refresh();
                                    updateDashboard();
                                    employeePopup.hide();
                                    DevExpress.ui.notify("Employee added successfully!", "success", 3000);
                                }
                            }
                        }
                    ]
                }).dxForm("instance");
            }
        }
    }).dxPopup("instance");
    
    var employeeForm;

    // ========================================
    // TASK POPUP FORM
    // ========================================
    var taskFormData = {};
    
    var taskPopup = $("#taskPopup").dxPopup({
        title: "Add New Task",
        width: 500,
        height: "auto",
        showCloseButton: true,
        contentTemplate: function(container) {
            $("<div>").attr("id", "taskForm").appendTo(container);
        },
        onShown: function() {
            if (!taskForm) {
                taskForm = $("#taskForm").dxForm({
                    formData: taskFormData,
                    labelLocation: "top",
                    items: [
                        { dataField: "title", validationRules: [{ type: "required" }] },
                        { 
                            dataField: "assignedTo", 
                            editorType: "dxSelectBox",
                            editorOptions: {
                                dataSource: employees,
                                valueExpr: "id",
                                displayExpr: function(item) {
                                    return item ? item.firstName + " " + item.lastName : "";
                                }
                            }
                        },
                        { dataField: "priority", editorType: "dxSelectBox", editorOptions: { items: ["High", "Medium", "Low"] } },
                        { dataField: "status", editorType: "dxSelectBox", editorOptions: { items: ["Pending", "In Progress", "Completed"] } },
                        { dataField: "dueDate", editorType: "dxDateBox" },
                        { dataField: "description", editorType: "dxTextArea", editorOptions: { height: 100 } },
                        {
                            itemType: "button",
                            horizontalAlignment: "center",
                            buttonOptions: {
                                text: "Save Task",
                                type: "success",
                                onClick: function() {
                                    var formData = taskForm.option("formData");
                                    formData.id = tasks.length + 1;
                                    formData.createdDate = new Date();
                                    tasks.push(formData);
                                    taskGrid.refresh();
                                    updateDashboard();
                                    taskPopup.hide();
                                    DevExpress.ui.notify("Task added successfully!", "success", 3000);
                                }
                            }
                        }
                    ]
                }).dxForm("instance");
            }
        }
    }).dxPopup("instance");
    
    var taskForm;

    // ========================================
    // CHARTS
    // ========================================
    $("#taskPieChart").dxPieChart({
        dataSource: getTaskStatusData(),
        series: [{
            argumentField: "status",
            valueField: "count",
            label: {
                visible: true,
                connector: { visible: true }
            }
        }],
        legend: { horizontalAlignment: "center", verticalAlignment: "bottom" }
    });

    $("#weeklyChart").dxChart({
        dataSource: [
            { day: "Mon", completed: 3 },
            { day: "Tue", completed: 5 },
            { day: "Wed", completed: 2 },
            { day: "Thu", completed: 4 },
            { day: "Fri", completed: 6 },
            { day: "Sat", completed: 1 },
            { day: "Sun", completed: 0 }
        ],
        series: [{
            argumentField: "day",
            valueField: "completed",
            name: "Tasks Completed",
            type: "bar",
            color: "#4caf50"
        }],
        legend: { visible: false }
    });

    // ========================================
    // HELPER FUNCTIONS
    // ========================================
    function showSection(sectionId) {
        $(".section").removeClass("active");
        $("#" + sectionId + "-section").addClass("active");
    }

    function getTaskStatusData() {
        var statusCounts = {};
        tasks.forEach(function(task) {
            statusCounts[task.status] = (statusCounts[task.status] || 0) + 1;
        });
        return Object.keys(statusCounts).map(function(status) {
            return { status: status, count: statusCounts[status] };
        });
    }

    function updateDashboard() {
        $("#totalEmployees").text(employees.length);
        $("#completedTasks").text(tasks.filter(t => t.status === "Completed").length);
        $("#pendingTasks").text(tasks.filter(t => t.status === "Pending" || t.status === "In Progress").length);
        $("#overdueTasks").text(tasks.filter(t => t.status === "Overdue").length);
        
        // Update pie chart
        $("#taskPieChart").dxPieChart("instance").option("dataSource", getTaskStatusData());
    }

    // Initialize dashboard
    updateDashboard();
});
