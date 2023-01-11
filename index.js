// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = () => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = () => {
  return drivers.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) =>
  function fareMultiplier() {
    return fare * 5;
  };

const fareDoubler = (fare) => {
  return fare * 2;
};

const fareTripler = (fare) => {
  return fare * 3;
};

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers();
};
