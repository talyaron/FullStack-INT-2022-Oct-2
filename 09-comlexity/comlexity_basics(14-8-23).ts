//Adi Diamant

const usersData = {
    '123i1hbfi3ubenir34nf': { name: 'Adi', dateCreated: 4234234234 },
    '124i1hbfi3ubenir34nf': { name: 'Nikita', dateCreated: 6234234234 },
  };
  
  type UserData = {
    name: string;
    dateCreated: number;
  };
  
  type UsersData = { [key: string]: UserData };
  
  
  // by ID: 124i1hbfi3ubenir34nf => O(1)
  
  //by > dateCreated => O(n)
  const func1 = (usersData: UsersData, dateCreatedToBeBiggerOf) => {
    const users = Object.values(usersData).find((userData: UserData) => userData.dateCreated < dateCreatedToBeBiggerOf);
    if(users) {
      return users[0];
    }
    return undefined;
  }
  
  // find two users equals by dateCreated:
  // 1st version - only working, not best performance
  const func2_1 = (usersData: UsersData) => {
    const usersValues = Object.values(usersData);
    for (let i = 0; i < usersValues.length; i++) {
      for (let j = 0; j < usersValues.length; j++) {
        const firstUserDate = new Date(usersValues[i].dateCreated);
        const secondUserDate = new Date(usersValues[j].dateCreated);
        if (i != j && firstUserDate.toDateString() == secondUserDate.toDateString()) {
          return [usersValues[i], usersValues[j]];
        }
      }
    }
    return null;
  };
  // 2st version - better performance => O(n^2) but practically better (actually O(n^2 / 2) but we ignore the multiplication inside the O)
  const func2_2 = (usersData: UsersData) => {
    const usersValues = Object.values(usersData);
    for (let i = 0; i < usersValues.length; i++) {
      if (i >= usersValues.length - 1) {
        break;
      }
      for (let j = i + 1; j < usersValues.length; j++) {
        const firstUserDate = new Date(usersValues[i].dateCreated);
        const secondUserDate = new Date(usersValues[j].dateCreated);
        if (firstUserDate.toDateString() == secondUserDate.toDateString()) {
          return [usersValues[i], usersValues[j]];
        }
      }
    }
    return null;
  };
  
  // 3rd version - not make sense solution but yes => O(n^3)
  
  const func2_3 = (usersData: UsersData) => {
    const usersValues = Object.values(usersData);
    for (let i = 0; i < usersValues.length; i++) {
      for (let j = 0; j < usersValues.length; j++) {
        for (let k = 0; k < usersValues.length; k++) {
          const firstUserDate = new Date(usersValues[i].dateCreated);
          const secondUserDate = new Date(usersValues[j].dateCreated);
          if (i != j && firstUserDate.toDateString() == secondUserDate.toDateString()) {
            return [usersValues[i], usersValues[j]];
          }
        }
      }
    }
    return null;
  };
  
  // 4th version - O(n^2 * 2)
  const func2_4 = (usersData: UsersData) => {
    const usersValues = Object.values(usersData);
    for (let i = 0; i < 2; i ++) {
      for (let i = 0; i < usersValues.length; i++) {
        if (i >= usersValues.length - 1) {
          break;
        }
        for (let j = i + 1; j < usersValues.length; j++) {
          const firstUserDate = new Date(usersValues[i].dateCreated);
          const secondUserDate = new Date(usersValues[j].dateCreated);
          if (firstUserDate.toDateString() == secondUserDate.toDateString()) {
            return [usersValues[i], usersValues[j]];
          }
        }
      }
    }
    return null;
  };
  
  // weird but O(1):
  const func2_5 = (usersData: UsersData) => {
    const usersValues = Object.values(usersData);
    for (let i = 0; i < usersValues.length; i++) {
      for (let j = 0; j < usersValues.length; j++) {
        for (let k = 0; k < usersValues.length; k++) {
          return i == 50;
        }
      }
    }
    return null;
  };
  
  // O(n^2) even if we are in 3 loops - since i is looped only 50 times, and we do 50 X n X n => O(n^2)
  
  const func2_6 = (usersData: UsersData) => {
    const usersValues = Object.values(usersData);
    for (let i = 0; i < usersValues.length; i++) {
      for (let j = 0; j < usersValues.length; j++) {
        for (let k = 0; k < usersValues.length; k++) {
          if (i == 50) {
            return true;
          }
        }
      }
    }
    return null;
  };
  
  // find if element is in array - recursive solution
  
  const func3_1 = (sortedArr: Array<number>, numToFind: number) => {
    if (numToFind > sortedArr[sortedArr.length - 1]) {
      return null;
    }
  
    const middleNum = sortedArr[sortedArr.length / 2];
  
    if (middleNum == numToFind) {
      return true;
    } else if (numToFind > middleNum) {
      return func3_1(sortedArr.slice(sortedArr.length / 2), numToFind);
    } else { // numToFind < num
      return func3_1(sortedArr.slice(0, sortedArr.length / 2), numToFind);
    }
  };
  
  // find numToFind in an sortedArray => O(log(n))
  // example: [0,2,4,5,6,8,9] => 0
  
  const func3_2 = (sortedArr: Array<number>, numToFind: number): boolean | null => {
    if (numToFind > sortedArr[sortedArr.length - 1]) { // really nice to have - checking if we got a way bigger num than our numbers array
      return null;
    }
  
    let middleNum = sortedArr[sortedArr.length / 2];
    let leftIndex = 0;
    let rightIndex = sortedArr.length - 1;
    let middleIndex = sortedArr.length / 2;
  
    while (leftIndex != rightIndex) {
      if (middleNum == numToFind) {
        return true;
      } else if (numToFind > middleNum) {
        leftIndex = middleIndex + 1;
        middleIndex = (middleIndex + rightIndex) / 2;
      } else { // numToFind < middleNum
        rightIndex = middleIndex - 1;
        middleIndex = (leftIndex + middleIndex) / 2;
      }
      middleNum = sortedArr[middleIndex];
    }
  
    if (middleNum == numToFind) {
      return true;
    }
    return false;
  };
  
  
  /**
  log2_n
  
  log2_16 => 1 * 2 * 2 * 2 * 2 = 16
  log2_16 => 16 / 2 / 2 / 2 / 2 = 1 => 4
  
  log2_2 = 2 / 2 = 1 => 1
  
  log2_n => n / 2 / 2 / 2 / 2 = 1/16 * n
  n -1 -1 -1 -1 = 1
  
  
  100
  
  50 -> broken
  
  25 -> broken
  
  18 -> broken
  
  17 -> broken
  
  16 -> not broken
  
  15 -> not broken
  
  12 -> not broken
  
  1
  **/




  ///Home Puzzle///

  "https://leetcode.com/problems/longest-common-prefix/"
