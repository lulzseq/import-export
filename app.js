import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './src/game.js';

const game = new Game();
game.start();