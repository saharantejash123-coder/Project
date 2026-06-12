import { create } from 'zustand';

const useGameStore = create((set) => ({
  gameState: 'start', // 'start', 'playing', 'gameover'
  score: 0,
  highScore: parseInt(localStorage.getItem('neon-runner-highscore')) || 0,
  speed: 10,
  touchLeft: false,
  touchRight: false,

  startGame: () => set({ gameState: 'playing', score: 0, speed: 10 }),
  gameOver: () => set((state) => {
    const newHighScore = Math.max(state.highScore, Math.floor(state.score));
    localStorage.setItem('neon-runner-highscore', newHighScore);
    return { gameState: 'gameover', highScore: newHighScore };
  }),
  resetGame: () => set({ gameState: 'start', score: 0, speed: 10 }),
  incrementScore: (amount = 1) => set((state) => ({ score: state.score + amount })),
  increaseSpeed: (amount = 0.1) => set((state) => ({ speed: Math.min(state.speed + amount, 40) })),
  setTouchLeft: (val) => set({ touchLeft: val }),
  setTouchRight: (val) => set({ touchRight: val }),
}));

export default useGameStore;
