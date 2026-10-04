"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

const TetrisGame = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gameContainerRef.current) {
      return initSimpleTetris(gameContainerRef.current);
    }
  }, []);

  return (
    <div className="page-shell">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/projects/tetris-game" className="back-link mb-8">
          <HiArrowLeft className="w-5 h-5" />
          Back to Project Details
        </Link>

        {/* Game Title */}
        <div className="text-center mb-8">
          <h1 className="page-title">Play Tetris</h1>
          <p className="page-lead mx-auto">
            Experience the reactive TypeScript + RxJS Tetris game directly in
            your browser
          </p>
        </div>

        {/* Game Container */}
        <div
          ref={gameContainerRef}
          className="flex justify-center"
          id="tetris-game-container"
          tabIndex={0}
          role="region"
          aria-label="Tetris game. Use arrow keys to move and rotate, Space to drop, C to hold."
          dangerouslySetInnerHTML={{ __html: gameMarkup }}
        />

        {/* Game Instructions */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="glass-panel p-6">
            <h3 className="text-xl font-bold mb-4 text-center">
              Game Controls
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="bg-surface px-3 py-2 rounded mb-2">↑</div>
                <p>Rotate</p>
              </div>
              <div className="text-center">
                <div className="bg-surface px-3 py-2 rounded mb-2">← → ↓</div>
                <p>Move</p>
              </div>
              <div className="text-center">
                <div className="bg-surface px-3 py-2 rounded mb-2">Space</div>
                <p>Hard Drop</p>
              </div>
              <div className="text-center">
                <div className="bg-surface px-3 py-2 rounded mb-2">C</div>
                <p>Hold/Swap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const gameMarkup = `
    <style>
      .tetris-game {
        font-family: var(--font-sans);
        background: var(--glass);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 1em;
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
      }
      
      .tetris-main {
        display: flex;
        gap: 1em;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .tetris-canvas {
        border-radius: 8px;
        border: 5px solid rgb(2, 82, 125);
        background-color: rgba(31, 31, 31, 0.95);
      }
      
      .tetris-sidebar {
        display: flex;
        flex-direction: column;
        gap: 1em;
        min-width: 160px;
      }
      
      .tetris-preview {
        border: 2px solid rgb(2, 82, 125);
        border-radius: 8px;
        background-color: rgba(31, 31, 31, 0.95);
        height: 80px;
        width: 160px;
      }
      
      .tetris-info {
        background: var(--surface);
        padding: 1em;
        border-radius: 12px;
        color: var(--foreground);
      }
      
      .tetris-info .text {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5em;
        font-weight: bold;
      }
      
      .tetris-button {
        padding: 10px 20px;
        font-size: 1.2em;
        font-weight: bold;
        border: none;
        cursor: pointer;
        border-radius: 12px;
        margin: 0.25em 0;
        transition: all 0.3s;
      }
      
      .pause-button {
        background-color: #17a2b8;
        color: var(--foreground);
      }
      
      .pause-button:hover {
        background-color: #138496;
        transform: translateY(-2px);
      }
      
      .restart-button {
        background-color: #007bff;
        color: var(--foreground);
      }
      
      .restart-button:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
      }
      
      .tetris-block {
        stroke: rgb(0, 0, 0);
        stroke-width: 1px;
      }
      
      .game-message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        color: black;
        padding: 20px;
        border-radius: 8px;
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
        z-index: 10;
        display: none;
      }
      
      .instructions {
        margin-top: 15px;
        background-color: var(--surface);
        color: var(--muted);
        padding: 10px;
        border-radius: 8px;
        font-size: 12px;
        font-family: monospace;
      }
      
      .key {
        background-color: var(--muted);
        padding: 2px 6px;
        border: 1px solid #000000;
        border-radius: 5px;
        color: #000;
        font-family: 'Courier New', monospace;
      }
    </style>
    
    <div class="tetris-game">
      <div class="tetris-main">
        <div style="position: relative;">
          <svg id="tetris-canvas" class="tetris-canvas" width="200" height="400"></svg>
          <div id="game-over" class="game-message">Game Over</div>
          <div id="game-pause" class="game-message">Game Paused</div>
        </div>
        
        <div class="tetris-sidebar">
          <svg id="tetris-next" class="tetris-preview">
            <text x="80" y="50" text-anchor="middle" fill="#9eb9d0" font-size="16" font-weight="bold">NEXT</text>
          </svg>
          
          <svg id="tetris-hold" class="tetris-preview">
            <text x="80" y="50" text-anchor="middle" fill="#9eb9d0" font-size="16" font-weight="bold">HOLD</text>
          </svg>
          
          <div class="tetris-info">
            <div class="text">
              <span>Level:</span>
              <span id="level-text">0</span>
            </div>
            <div class="text">
              <span>Score:</span>
              <span id="score-text">0</span>
            </div>
            <div class="text">
              <span>High Score:</span>
              <span id="high-score-text">0</span>
            </div>
            <button id="pause-button" class="tetris-button pause-button" aria-label="Pause or resume game">⏸️ | ▶️</button>
            <button id="restart-button" class="tetris-button restart-button">Restart</button>
          </div>
        </div>
      </div>
      
      <div class="tetris-touch-controls" role="group" aria-label="Game controls">
        <button data-code="ArrowLeft" aria-label="Move left">←</button>
        <button data-code="ArrowUp" aria-label="Rotate piece">↑</button>
        <button data-code="ArrowRight" aria-label="Move right">→</button>
        <button data-code="ArrowDown" aria-label="Move down">↓</button>
        <button data-code="Space" aria-label="Hard drop">⤓</button>
        <button data-code="KeyC" aria-label="Hold or swap piece">C</button>
      </div>
      <div class="instructions">
        <p><span class="key">↑</span> : rotate</p>
        <p><span class="key">←</span> <span class="key">↓</span> <span class="key">→</span> : move</p>
        <p><span class="key">space</span> : hard drop</p>
        <p><span class="key">c</span> : hold/swap</p>
      </div>
    </div>
  `;

interface TetrisPiece {
  shape: number[][];
  color: string;
  x: number;
  y: number;
}

interface GameState {
  grid: number[][];
  currentPiece: TetrisPiece | null;
  nextPiece: TetrisPiece | null;
  holdPiece: TetrisPiece | null;
  score: number;
  level: number;
  highScore: number;
  gameOver: boolean;
  paused: boolean;
  dropTime: number;
  dropInterval: number;
}

function initSimpleTetris(container: HTMLElement) {
  const controller = new AbortController();
  const signal = controller.signal;
  let frame = 0;
  // Game state
  let gameState: GameState = {
    grid: Array(20)
      .fill(null)
      .map(() => Array(10).fill(0)),
    currentPiece: null,
    nextPiece: null,
    holdPiece: null,
    score: 0,
    level: 0,
    highScore: parseInt(localStorage.getItem("tetris-high-score") || "0"),
    gameOver: false,
    paused: false,
    dropTime: 0,
    dropInterval: 1000,
  };

  // Tetromino shapes
  const TETROMINOES = {
    I: {
      shape: [[1, 1, 1, 1]],
      color: "cyan",
    },
    O: {
      shape: [
        [1, 1],
        [1, 1],
      ],
      color: "yellow",
    },
    T: {
      shape: [
        [0, 1, 0],
        [1, 1, 1],
      ],
      color: "magenta",
    },
    S: {
      shape: [
        [0, 1, 1],
        [1, 1, 0],
      ],
      color: "green",
    },
    Z: {
      shape: [
        [1, 1, 0],
        [0, 1, 1],
      ],
      color: "red",
    },
    J: {
      shape: [
        [1, 0, 0],
        [1, 1, 1],
      ],
      color: "blue",
    },
    L: {
      shape: [
        [0, 0, 1],
        [1, 1, 1],
      ],
      color: "orange",
    },
  };

  const canvas = document.getElementById(
    "tetris-canvas"
  ) as unknown as SVGElement;
  const nextCanvas = document.getElementById(
    "tetris-next"
  ) as unknown as SVGElement;
  const holdCanvas = document.getElementById(
    "tetris-hold"
  ) as unknown as SVGElement;
  const levelText = document.getElementById("level-text")!;
  const scoreText = document.getElementById("score-text")!;
  const highScoreText = document.getElementById("high-score-text")!;
  const pauseBtn = document.getElementById("pause-button")!;
  const restartBtn = document.getElementById("restart-button")!;
  const gameOverDiv = document.getElementById("game-over")!;
  const gamePauseDiv = document.getElementById("game-pause")!;

  // Create a random piece
  function createPiece(): TetrisPiece {
    const pieces = Object.keys(TETROMINOES);
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    const piece = TETROMINOES[randomPiece as keyof typeof TETROMINOES];

    return {
      shape: piece.shape,
      color: piece.color,
      x: Math.floor(10 / 2) - Math.floor(piece.shape[0].length / 2),
      y: 0,
    };
  }

  // Check collision
  function isValidMove(
    piece: TetrisPiece,
    dx: number,
    dy: number,
    newShape?: number[][]
  ) {
    const shape = newShape || piece.shape;
    const newX = piece.x + dx;
    const newY = piece.y + dy;

    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x]) {
          const boardX = newX + x;
          const boardY = newY + y;

          if (boardX < 0 || boardX >= 10 || boardY >= 20) {
            return false;
          }

          if (boardY >= 0 && gameState.grid[boardY][boardX]) {
            return false;
          }
        }
      }
    }
    return true;
  }

  // Rotate piece
  function rotatePiece(piece: TetrisPiece) {
    const rotated = piece.shape[0].map((_, index) =>
      piece.shape.map((row) => row[index]).reverse()
    );

    if (isValidMove(piece, 0, 0, rotated)) {
      piece.shape = rotated;
    }
  }

  // Place piece on board
  function placePiece() {
    if (!gameState.currentPiece) return;

    const piece = gameState.currentPiece;
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          const boardY = piece.y + y;
          const boardX = piece.x + x;
          if (boardY >= 0) {
            gameState.grid[boardY][boardX] = 1;
          }
        }
      }
    }

    // Clear lines
    clearLines();

    // Spawn next piece
    gameState.currentPiece = gameState.nextPiece;
    gameState.nextPiece = createPiece();

    // Check game over
    if (gameState.currentPiece && !isValidMove(gameState.currentPiece, 0, 0)) {
      gameState.gameOver = true;
      gameOverDiv.style.display = "block";
      if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem(
          "tetris-high-score",
          gameState.highScore.toString()
        );
      }
    }
  }

  // Clear completed lines
  function clearLines() {
    let linesCleared = 0;
    for (let y = gameState.grid.length - 1; y >= 0; y--) {
      if (gameState.grid[y].every((cell) => cell === 1)) {
        gameState.grid.splice(y, 1);
        gameState.grid.unshift(Array(10).fill(0));
        linesCleared++;
        y++; // Check the same line again
      }
    }

    if (linesCleared > 0) {
      gameState.score += linesCleared * 100 * (gameState.level + 1);
      gameState.level = Math.floor(gameState.score / 1000);
      gameState.dropInterval = Math.max(100, 1000 - gameState.level * 50);
    }
  }

  // Render game
  function render() {
    // Clear canvas
    canvas.innerHTML = "";
    nextCanvas.innerHTML =
      '<text x="80" y="50" text-anchor="middle" fill="#9eb9d0" font-size="16" font-weight="bold">NEXT</text>';
    holdCanvas.innerHTML =
      '<text x="80" y="50" text-anchor="middle" fill="#9eb9d0" font-size="16" font-weight="bold">HOLD</text>';

    // Draw grid
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 10; x++) {
        if (gameState.grid[y][x]) {
          const rect = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
          );
          rect.setAttribute("x", (x * 20).toString());
          rect.setAttribute("y", (y * 20).toString());
          rect.setAttribute("width", "20");
          rect.setAttribute("height", "20");
          rect.setAttribute("fill", "gray");
          rect.setAttribute("class", "tetris-block");
          canvas.appendChild(rect);
        }
      }
    }

    // Draw current piece
    if (gameState.currentPiece) {
      const piece = gameState.currentPiece;
      for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
          if (piece.shape[y][x]) {
            const rect = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "rect"
            );
            rect.setAttribute("x", ((piece.x + x) * 20).toString());
            rect.setAttribute("y", ((piece.y + y) * 20).toString());
            rect.setAttribute("width", "20");
            rect.setAttribute("height", "20");
            rect.setAttribute("fill", piece.color);
            rect.setAttribute("class", "tetris-block");
            canvas.appendChild(rect);
          }
        }
      }
    }

    // Draw next piece
    if (gameState.nextPiece) {
      const piece = gameState.nextPiece;
      for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
          if (piece.shape[y][x]) {
            const rect = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "rect"
            );
            rect.setAttribute("x", ((x + 3) * 15).toString());
            rect.setAttribute("y", ((y + 2) * 15).toString());
            rect.setAttribute("width", "15");
            rect.setAttribute("height", "15");
            rect.setAttribute("fill", piece.color);
            rect.setAttribute("class", "tetris-block");
            nextCanvas.appendChild(rect);
          }
        }
      }
    }

    if (gameState.holdPiece) {
      gameState.holdPiece.shape.forEach((row, y) =>
        row.forEach((cell, x) => {
          if (!cell) return;
          const rect = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
          );
          rect.setAttribute("x", String((x + 3) * 15));
          rect.setAttribute("y", String((y + 2) * 15));
          rect.setAttribute("width", "15");
          rect.setAttribute("height", "15");
          rect.setAttribute("fill", gameState.holdPiece!.color);
          rect.setAttribute("class", "tetris-block");
          holdCanvas.appendChild(rect);
        })
      );
    }

    // Update UI
    levelText.textContent = gameState.level.toString();
    scoreText.textContent = gameState.score.toString();
    highScoreText.textContent = gameState.highScore.toString();
  }

  // Game loop
  function gameLoop(timestamp: number) {
    if (!gameState.gameOver && !gameState.paused) {
      if (timestamp - gameState.dropTime > gameState.dropInterval) {
        if (
          gameState.currentPiece &&
          isValidMove(gameState.currentPiece, 0, 1)
        ) {
          gameState.currentPiece.y++;
        } else {
          placePiece();
        }
        gameState.dropTime = timestamp;
        render();
      }
    }
    frame = requestAnimationFrame(gameLoop);
  }

  const gameKeys = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowDown",
    "ArrowUp",
    "Space",
    "KeyC",
  ];
  function control(code: string) {
    if (gameState.gameOver || gameState.paused || !gameState.currentPiece)
      return;
    switch (code) {
      case "ArrowLeft":
        if (isValidMove(gameState.currentPiece, -1, 0)) {
          gameState.currentPiece.x--;
        }
        break;
      case "ArrowRight":
        if (isValidMove(gameState.currentPiece, 1, 0)) {
          gameState.currentPiece.x++;
        }
        break;
      case "ArrowDown":
        if (isValidMove(gameState.currentPiece, 0, 1)) {
          gameState.currentPiece.y++;
          gameState.score++;
        }
        break;
      case "ArrowUp":
        rotatePiece(gameState.currentPiece);
        break;
      case "KeyC": {
        const held = gameState.holdPiece;
        gameState.holdPiece = { ...gameState.currentPiece, x: 0, y: 0 };
        gameState.currentPiece = held || gameState.nextPiece;
        if (!held) gameState.nextPiece = createPiece();
        if (gameState.currentPiece) {
          gameState.currentPiece.x =
            5 - Math.floor(gameState.currentPiece.shape[0].length / 2);
          gameState.currentPiece.y = 0;
        }
        break;
      }
      case "Space":
        while (isValidMove(gameState.currentPiece, 0, 1)) {
          gameState.currentPiece.y++;
          gameState.score += 2;
        }
        placePiece();
        break;
    }
    render();
  }
  container.addEventListener(
    "keydown",
    (event) => {
      if (
        (event.target as HTMLElement).tagName === "BUTTON" ||
        !gameKeys.includes(event.code)
      )
        return;
      event.preventDefault();
      control(event.code);
    },
    { signal }
  );
  container.addEventListener(
    "click",
    (event) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
        "button[data-code]"
      );
      if (button?.dataset.code) control(button.dataset.code);
    },
    { signal }
  );

  // Button controls
  pauseBtn.addEventListener(
    "click",
    () => {
      gameState.paused = !gameState.paused;
      if (gameState.paused) {
        gamePauseDiv.style.display = "block";
      } else {
        gamePauseDiv.style.display = "none";
      }
    },
    { signal }
  );

  restartBtn.addEventListener(
    "click",
    () => {
      gameState = {
        grid: Array(20)
          .fill(null)
          .map(() => Array(10).fill(0)),
        currentPiece: createPiece(),
        nextPiece: createPiece(),
        holdPiece: null,
        score: 0,
        level: 0,
        highScore: parseInt(localStorage.getItem("tetris-high-score") || "0"),
        gameOver: false,
        paused: false,
        dropTime: 0,
        dropInterval: 1000,
      };
      gameOverDiv.style.display = "none";
      gamePauseDiv.style.display = "none";
      render();
    },
    { signal }
  );

  // Initialize game
  gameState.currentPiece = createPiece();
  gameState.nextPiece = createPiece();

  // Start game loop and release it when leaving the route.
  render();
  frame = requestAnimationFrame(gameLoop);
  return () => {
    cancelAnimationFrame(frame);
    controller.abort();
  };
}

export default TetrisGame;
