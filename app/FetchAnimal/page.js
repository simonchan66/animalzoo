const animals = [
    'cat',
    'dog',
    'bird',
    'panda',
    'redpanda',
    'koala',
    'fox',
    'whale',
    'dolphin',
    'kangaroo',
    'rabbit',
    'lion',
    'bear',
    'frog',
    'duck',
    'penguin',
    'axolotl',
    'capybara',
    'hedgehog',
    'turtle',
    'narwhal',
    'squirrel',
    'fish',
    'horse'
  ];
  
  async function getAnimalData(type) {
    if (!animals.includes(type.toLowerCase())) {
      throw new TypeError(`'${type}' is not a valid type, the valid types are: ${animals.join(', ')}, random`);
    }
  
    try {
      const response = await fetch(`/api/all/${type.toLowerCase()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const animalData = await response.json();
      return animalData;
    } catch (error) {
      console.error('Error:', error);
      throw new Error(`Failed to get type '${type}' from API: ${error.message}`);
    }
  }
  
  module.exports = {
    getAnimalData
  };