const animalsDatabase = [
  {
    image: 'Image1.jpg',
    id: 1,
    name: 'Can of Teeth',
    //description:
    //',,,,, ...... ,,,, .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  ',//

    type: 'Dragon',
    accessory: 'Monacle',
    age: 47,
  },
  {
    image: 'Image2.jpg',
    id: 2,
    name: 'Your Face in A Jar',
    //description:
    //'bbbb bbbb bbbb bbb Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//

    type: 'Iguana',
    accessory: 'Tophat',
    age: 3,
  },
  {
    image: 'Image3.jpg',
    id: 3,
    name: 'Ostrichpillow',
    //description:
    //'asdfadsfa Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  ',//
    type: 'Monkey',
    accessory: 'Cane',
    age: 7,
  },
  {
    image: 'Image4.jpg',
    id: 4,
    name: 'Baby Mop',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  },
  {
    image: 'Image5.jpg',
    id: 5,
    name: 'Pet Rock',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  },
  {
    image: 'Image6.jpg',
    id: 6,
    name: 'Snowball Maker',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  },
  {
    image: 'Image7-2.jpg',
    id: 7,
    name: 'Alien Mind Control mask',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  },
  {
    image: 'Image8.jpg',
    id: 8,
    name: 'Ear Hat',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  },
  {
    image: 'Image9.jpg',
    id: 9,
    name: 'Finger Covers for Cheesy, Greasy, Sticky Fingers',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  },
  {
    image: 'Image10.jpg',
    id: 10,
    name: 'Cutting Board Bird Feeder',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  },
  {
    image: 'Image11.jpg',
    id: 11,
    name: 'Potato Pal',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  },

  /*{
    image: 'Image12.jpg',
    id: 12,
    name: 'Scary Zombie Digital Mask',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  },
  {
    image: 'Image13.jpg',
    id: 13,
    name: 'Invisible Bike',
    //description:
    //'24234234 234 234234234234 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',//
    type: 'Bear',
    accessory: 'Honey',
    age: 6,
  }, */
];

export default animalsDatabase;
