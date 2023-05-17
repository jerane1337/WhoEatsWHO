function whoEatsWho(zoo) {
  const animals = zoo.split(",");
  const eatingLog = [zoo];

  const canEat = {
    antelope: ["grass"],
    "big-fish": ["little-fish"],
    bug: ["leaves"],
    bear: ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
    chicken: ["bug"],
    cow: ["grass"],
    fox: ["chicken", "sheep"],
    giraffe: ["leaves"],
    lion: ["antelope", "cow"],
    panda: ["leaves"],
    sheep: ["grass"],
  };

  let i = 0;
  while (i < animals.length) {
    const currentAnimal = animals[i];
    const leftAnimal = animals[i - 1];
    const rightAnimal = animals[i + 1];

    if (leftAnimal && canEat[currentAnimal] && canEat[currentAnimal].includes(leftAnimal)) {
      eatingLog.push(`${currentAnimal} eats ${leftAnimal}`);
      animals.splice(i - 1, 1);
      i = 0;
    } else if (rightAnimal && canEat[currentAnimal] && canEat[currentAnimal].includes(rightAnimal)) {
      eatingLog.push(`${currentAnimal} eats ${rightAnimal}`);
      animals.splice(i + 1, 1);
      i = 0;
    } else {
      i++;
    }
  }

  eatingLog.push(animals.join(","));
  return eatingLog;
}
