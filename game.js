import { runGame, createGameboard } from './tools.js';

const gameboardSize = 5;
const initialGameboard = createGameboard(gameboardSize);
runGame(5, initialGameboard);
