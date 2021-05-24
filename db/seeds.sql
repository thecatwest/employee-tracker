INSERT INTO department (department_name)
VALUES ('Management'),
    ('Facilities'),
    ('Teaching');
INSERT INTO roles (title, salary, department_id)
VALUES ('Caretaker', 35000.00, 2),
    ('Grounds Keeper', 50000.00, 2),
    ('Head Master', 300000.00, 1),
    ('Head Mistress', 350000.00, 1),
    ('Divinations', 80000.00, 3),
    ('Charms', 85000.00, 3),
    ('Care of Magical Creatures', 90000.00, 3),
    ('Flying', 100000.00, 3),
    ('Defence Against the Dark Arts', 120000.00, 3),
    ('Transfiguration', 150000.00, 3),
    ('Astronomy', 110000.00, 3),
    ('Potions', 90000.00, 3),
    ('Herbology', 90000.00, 3);
INSERT INTO manager (first_name, last_name)
VALUES ('Albus', 'Dumbledore'),
    ('Minerva', 'McGonagall');