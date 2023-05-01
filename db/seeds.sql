INSERT INTO department (id, name)
VALUES  (001, "Leadership"),
        (002, "Engineering"),
        (003, "Sales"),
        (004, "Finance"),
        (005, "Human Resources");
       
INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Chief Executive Officer", 212000, 001),
        (002, "Chief Engineer", 198000, 001),
        (003, "Sales Manager", 135000, 001),
        (004, "Chief Financial Officer", 135000, 001),
        (005, "VP of Human Resources", 100000, 001),
        (006, "Engineering Lead", 125000, 002),
        (007, "Engineer", 100000, 002),
        (008, "Sales Lead", 75000, 003),
        (009, "Sales Specialist", 65000, 003),
        (010, "Finance Lead", 75000, 004),
        (011, "Financial Analyst", 65000, 004),
        (012, "HR Lead", 75000, 005),
        (013, "Human Resource Analyst", 65000, 005);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Brad", "Jackson", 001, null),
        (002, "Henry", "Jenkins", 002, 001),
        (003, "Michelle", "Tenton", 003, 001),
        (004, "Ronald", "Umensa", 004, 001),
        (005, "Nick", "Dickinson", 005, 001),
        (006, "Sarah", "Dumas", 006, 002),
        (007, "Brian", "Taft", 007, 002),
        (008, "Morgan", "Harrison", 007, 002),
        (009, "Sandeep", "Patel", 007, 002),
        (010, "Marissa", "Wilk", 007, 002),
        (011, "Mohammed", "Tarik", 008, 003),
        (012, "Victor", "Rodriguez", 009, 003),
        (013, "Michael", "Nang", 009, 003),
        (014, "Frank", "Renan", 010, 004),
        (015, "Kimberly", "Smeck", 011, 004),
        (016, "Sarah", "Franklin", 011, 004),
        (017, "Robert", "Nuevon", 012, 005),
        (018, "Jennifer", "Quill", 013, 005);
