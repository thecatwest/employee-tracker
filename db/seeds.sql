INSERT INTO department (department_name)
VALUES ('Management'),
    ('Facilities'),
    ('Teaching');
INSERT INTO roles (title, salary, department_id)
VALUES ('Caretaker', 35000.00, 2),
    ('Grounds Keeper', 50000.00, 2),
    ('Head Master', 300000.00, 1),
    ('Head Mistress', 350000.00, 1),
    ('Professor I', 80000.00, 3),
    ('Professor II', 85000.00, 3),
    ('Professor III', 90000.00, 3);
INSERT INTO manager (first_name, last_name)
VALUES ('Albus', 'Dumbledore'),
    ('Minerva', 'McGonagall');