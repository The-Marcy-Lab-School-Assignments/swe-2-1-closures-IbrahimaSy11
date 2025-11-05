const makeIdFunc = () => {
  let counter = 0;

  return innerfunction = () => {
    counter ++; 
    return counter;
  }

};
const makePasswordChecker = (correctPassword) => {
  let counter = 0;

  return (guess) => {
    if (counter >= 3) {
      return 'Account locked'; 
    }
    counter++;
    return guess === correctPassword;
  };
};



const makeMultiplier = (multiplier) => {
  return (numbersArray) => {
    return numbersArray.map((num) => num * multiplier);
  };
};


const makeFilterByLength = (maxLength) => {
  return (stringsArray) => {
    return stringsArray.filter((str) => str.length <= maxLength);
  };
};

const makeGradeTracker = () => {
  const grades = [];
  return {
    addGrade(grade) {
      if (grade >= 0 && grade <= 100) {
        grades.push(grade);
        return true;
      } 
      return false;
    },
    getAverage() {
      if (grades.length === 0) return 0;

      const sum = grades.reduce((total, g) => total + g, 0);
      return sum / grades.length;
    }
  };
};

const makeShoppingList = () => {
  const items = [];

  return {
    getItems() {
      return [...items];
    },
    addItem(item) {
      items.push(item);
      console.log(`${item} successfully added! Now you have ${items.length} item(s).`);
      return items.length;
    },
    removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} successfully removed. You now have ${items.length} item(s).`);
        return true;
      }
      console.log(`${item} not found.`);
      return false;
    }
  };
};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
