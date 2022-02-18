-- create animals table
CREATE TABLE animals (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(40) NOT NULL
);

-- Insert some animals (C in CRUD - Create)

INSERT INTO animals
(name)
VALUES
('Can of Teeth'),
('Your Face in A Jar'),
('Ostrichpillow'),
('Baby Mop'),
('Pet Rock'),
('Snowball Maker'),
('Alien Mind Control mask'),
('Ear Hat'),
('Finger Covers for Cheesy Fingers'),
('Cutting Board Bird Feeder'),
('Fetus Soap'),
('Scary Zombie Digital Mask'),
('Invisible Bike'),
('Toilet Golf Set'),
('Hamster Shredder'),
('Umbrella Hat');

-- Read some animals (R in CRUD - Read)
SELECT * FROM animals;
