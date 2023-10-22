export const createGameboard = (size) => {
  const gameboard = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const randomValue = Math.random() > 0.5 ? 1 : 0;
      row.push(randomValue);
    }

    gameboard.push(row);
  }

  return gameboard;
};

export const countAliveNeighbors = (gameboard, x, y) => {
  let alive = 0;
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (i !== x || j !== y) {
        if (gameboard[i] && gameboard[i][j] === 1) {
          alive++;
        }
      }
    }
  }

  return alive;
};

export const nextGeneration = (gameboard) => {
  const size = gameboard.length;
  const newGameboard = JSON.parse(JSON.stringify(gameboard));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const aliveNeighbors = countAliveNeighbors(gameboard, i, j);
      if (gameboard[i][j] === 0) {
        if (aliveNeighbors === 3) {
          newGameboard[i][j] = 1;
        }
      } else if (aliveNeighbors < 2 || aliveNeighbors > 3) {
        newGameboard[i][j] = 0;
      }
    }
  }

  return newGameboard;
};

export const runGame = (numGenerations, initialGameboard) => {
  console.clear();
  console.log(initialGameboard);

  if (numGenerations > 0) {
    const newGameboard = nextGeneration(initialGameboard);
    setTimeout(() => {
      runGame(numGenerations - 1, newGameboard);
    }, 1500);
  }
};
