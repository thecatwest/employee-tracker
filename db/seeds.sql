INSERT INTO department (department_name)
VALUES ('Management'),
    ('Facilities'),
    ('Teaching');
INSERT INTO roles (title, salary, department_id)
VALUES ('Caretaker', 35.00, 2),
    ('Grounds Keeper', 50.00, 2),
    ('Head Master', 300.00, 1),
    ('Head Mistress', 350.00, 1),
    ('Divinations', 80.00, 3),
    ('Charms', 85.00, 3),
    ('Care of Magical Creatures', 90.00, 3),
    ('Flying', 100.00, 3),
    ('Defence Against the Dark Arts', 120.00, 3),
    ('Transfiguration', 150.00, 3),
    ('Astronomy', 110.00, 3),
    ('Potions', 90.00, 3),
    ('Herbology', 90.00, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Argus', 'Filch', 1, 1),
    ('Rubeus', 'Hagrid', 2, 1),
    ('Albus', 'Dumbledore', 3, NULL),
    ('Minerva', 'McGonagall', 4),
    ('Sybill', 'Trelawney', 5, 2),
    ('Filius', 'Flitwick', 6, 2),
    ('Wilhelmina', 'Grubbly-Plank', 7, 2),
    ('Rolanda', 'Hooch', 8, 2),
    ('Gilderoy', 'Lockhart', 9, 2),
    ('Aurora', 'Sinistra', 10, 2),
    ('Severus', 'Snape', 11, 2),
    ('Pomona', 'Sprout', 12, 2);