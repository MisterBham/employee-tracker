INSERT INTO department (id, name)
VALUES  (001, "Leadership"),
        (002, "Engineering"),
        (003, "Sales"),
        (004, "Finance"),
        (005, "Human Resources");
       
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Executive Officer", 212000, 001),
        ("Chief Engineer", 198000, 001),
        ("Sales Manager", 135000, 001),
        ("Chief Financial Officer", 135000, 001),
        ("VP of Human Resources", 100000, 001),
        ("Engineering Lead", 125000, 002),
        ("Engineer", 100000, 002),
        ("Sales Lead", 75000, 003),
        ("Sales Specialist", 65000, 003),
        ("Finance Lead", 75000, 004),
        ("Financial Analyst", 65000, 004),
        ("HR Lead", 75000, 005),
        ("Human Resource Analyst", 65000, 005);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brad", "Jackson", 001, null),
        ("Henry", "Jenkins", 002, 001),
        ("Michelle", "Tenton", 003, 001),
        ("Ronald", "Umensa", 004, 001),
        ("Nick", "Dickinson", 005, 001),
        ("Sarah", "Dumas", 006, 002),
        ("Brian", "Taft", 007, 002),
        ("Morgan", "Harrison", 007, 002),
        ("Sandeep", "Patel", 007, 002),
        ("Marissa", "Wilk", 007, 002),
        ("Mohammed", "Tarik", 008, 003),
        ("Victor", "Rodriguez", 009, 003),
        ("Michael", "Nang", 009, 003),
        ("Frank", "Renan", 010, 004),
        ("Kimberly", "Smeck", 011, 004),
        ("Sarah", "Franklin", 011, 004),
        ("Robert", "Nuevon", 012, 005),
        ("Jennifer", "Quill", 013, 005);
