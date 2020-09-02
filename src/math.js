const calculateTip = (total, percent = 0.25) => {
  const tip = total * percent;
  return total + tip;
};

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject("Error! Numbers must be positive");
      }
      resolve(a + b);
    }, 2000);
  });
};

module.exports = {
  calculateTip,
  add,
};
