-- create animals table
CREATE TABLE animals (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(40) NOT NULL,
  image varchar(80) NOT NULL,
  image description (500) NOT NULL
);

-- Insert some animals (C in CRUD - Create)

INSERT INTO animals
(name, image)
VALUES
('Can of Teeth', 'Image1.jpg'),
('Your Face in A Jar', 'Image2.jpg'),
('Ostrichpillow', 'Image3.jpg'),
('Baby Mop', 'Image4.jpg'),
('Pet Rock', 'Image5.jpg'),
('Snowball Maker', 'Image6.jpg'),
('Alien Mind Control mask', 'Image7.jpg'),
('Ear Hat', 'Image8.jpg'),
('Finger Covers for Cheesy Fingers', 'Image9.jpg'),
('Cutting Board Bird Feeder', 'Image10.jpg'),
('Fetus Soap', 'Image11.jpg'),
('Scary Zombie Digital Mask', 'Image12.jpg'),
('Invisible Bike', 'Image13.jpg'),
('Toilet Golf Set', 'Image14.jpg'),
('Hamster Shredder', 'Image15.jpg'),
('Umbrella Hat', 'Image16.jpg');

-- Read some animals (R in CRUD - Read)
SELECT * FROM animals;
