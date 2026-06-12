import React from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import useGameStore from './store/useGameStore';
import GameScene from './components/GameScene';
import { Trophy, Play, RotateCcw, Keyboard, ChevronLeft, ChevronRight } from 'lucide-react';
import './index.css';

function App() {
  const { gameState, score, highScore, startGame, resetGame, setTouchLeft, setTouchRight } = useGameStore();

  const handleLeftDown = (e) => { e.preventDefault(); setTouchLeft(true); };
  const handleLeftUp = (e) => { e.preventDefault(); setTouchLeft(false); };
  const handleRightDown = (e) => { e.preventDefault(); setTouchRight(true); };
  const handleRightUp = (e) => { e.preventDefault(); setTouchRight(false); };

  return (
    <>
      <Canvas shadows camera={{ position: [0, 4, 10], fov: 75 }}>
        <color attach="background" args={['#020205']} />
        <fog attach="fog" args={['#020205', 10, 50]} />

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 20, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        <GameScene />

        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
        </EffectComposer>
      </Canvas>

      {/* Score HUD */}
      {gameState === 'playing' && (
        <div className="ui-layer score-display">
          <div className="score-inner">
            <Trophy size={20} color="#00f2fe" />
            <span>{Math.floor(score)}</span>
          </div>
        </div>
      )}

      {/* Touch controls - mobile only */}
      {gameState === 'playing' && (
        <div className="touch-controls">
          <div
            className="touch-btn touch-btn-left"
            onPointerDown={handleLeftDown}
            onPointerUp={handleLeftUp}
            onPointerLeave={handleLeftUp}
            onPointerCancel={handleLeftUp}
          >
            <ChevronLeft size={40} />
          </div>
          <div
            className="touch-btn touch-btn-right"
            onPointerDown={handleRightDown}
            onPointerUp={handleRightUp}
            onPointerLeave={handleRightUp}
            onPointerCancel={handleRightUp}
          >
            <ChevronRight size={40} />
          </div>
        </div>
      )}

      {/* Start screen */}
      {gameState === 'start' && (
        <div className="ui-layer">
          <div className="ui-card">
            <h1>Neon Runner</h1>
            <h2>Dodging into the void</h2>

            <div className="instructions">
              <div className="key-hint keyboard-hint">
                <Keyboard size={18} />
                <span>Use <b>A / D</b> or <b>Arrow Keys</b> to move</span>
              </div>
              <div className="key-hint touch-hint">
                <span>Tap &amp; hold <b>◀ ▶</b> buttons to move</span>
              </div>
            </div>

            <button onClick={startGame} className="btn-main">
              <Play size={18} fill="currentColor" />
              START GAME
            </button>

            {highScore > 0 && (
              <div className="high-score-hint">
                Best Run: {highScore}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Game over screen */}
      {gameState === 'gameover' && (
        <div className="ui-layer">
          <div className="ui-card">
            <h1 className="game-over-text">Game Over</h1>
            <div className="final-stats">
              <div className="stat-item">
                <span className="label">SCORE</span>
                <span className="value">{Math.floor(score)}</span>
              </div>
              <div className="stat-item">
                <span className="label">BEST</span>
                <span className="value">{highScore}</span>
              </div>
            </div>

            <button onClick={resetGame} className="btn-main">
              <RotateCcw size={18} />
              TRY AGAIN
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
