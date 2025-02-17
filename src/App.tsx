import { useState } from 'react'
import './App.css'

type SquareValue = 'X' | 'O' | null
type GameMode = 'PVP' | 'PVE'
type Difficulty = 'Easy' | 'Medium' | 'Hard'

interface SquareProps {
  value: SquareValue
  onSquareClick: () => void
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

function App() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const [gameMode, setGameMode] = useState<GameMode>('PVP')
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium')

  function minimax(board: SquareValue[], depth: number, isMaximizing: boolean): number {
    const winner = calculateWinner(board)
    if (winner === 'O') return 10 - depth
    if (winner === 'X') return depth - 10
    if (board.every(square => square !== null)) return 0
    if (depth >= getMaxDepth()) return 0

    if (isMaximizing) {
      let bestScore = -Infinity
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = 'O'
          const score = minimax(board, depth + 1, false)
          board[i] = null
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
    } else {
      let bestScore = Infinity
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = 'X'
          const score = minimax(board, depth + 1, true)
          board[i] = null
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }

  function getMaxDepth(): number {
    switch (difficulty) {
      case 'Easy': return 2
      case 'Medium': return 4
      case 'Hard': return 6
      default: return 4
    }
  }

  function findBestMove(board: SquareValue[]): number {
    let bestScore = -Infinity
    let bestMove = 0

    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'O'
        const score = minimax(board, 0, false)
        board[i] = null
        if (score > bestScore) {
          bestScore = score
          bestMove = i
        }
      }
    }

    return bestMove
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return

    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(nextSquares)
    setXIsNext(!xIsNext)

    // AI move in PVE mode
    if (gameMode === 'PVE' && !calculateWinner(nextSquares) && xIsNext) {
      setTimeout(() => {
        const aiMove = findBestMove(nextSquares)
        const aiNextSquares = nextSquares.slice()
        aiNextSquares[aiMove] = 'O'
        setSquares(aiNextSquares)
        setXIsNext(true)
      }, 500)
    }
  }

  function calculateWinner(squares: SquareValue[]): SquareValue {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  function resetGame() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  const winner = calculateWinner(squares)
  const isDraw = !winner && squares.every(square => square !== null)
  let status

  if (winner) {
    status = `获胜者: ${winner}`
  } else if (isDraw) {
    status = '平局！'
  } else {
    status = `下一步: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <h1>井字棋</h1>
      <div className="game-controls">
        <select value={gameMode} onChange={(e) => setGameMode(e.target.value as GameMode)}>
          <option value="PVP">玩家对战</option>
          <option value="PVE">人机对战</option>
        </select>
        {gameMode === 'PVE' && (
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value as Difficulty)}>
            <option value="Easy">简单</option>
            <option value="Medium">中等</option>
            <option value="Hard">困难</option>
          </select>
        )}
      </div>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <button className="reset-button" onClick={resetGame}>重新开始</button>
    </div>
  )
}

export default App
