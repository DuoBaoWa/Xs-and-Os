# 井字棋游戏 | Tic Tac Toe Game

一个使用 React + TypeScript + Vite 构建的现代化井字棋游戏。

A modern Tic Tac Toe game built with React + TypeScript + Vite.

## 功能特性 | Features

- 🎮 经典的井字棋游戏玩法 | Classic Tic Tac Toe gameplay
- 🎯 实时显示游戏状态和胜负结果 | Real-time game status and result display
- 🔄 一键重新开始游戏 | One-click game restart
- 📱 响应式设计，支持多种设备 | Responsive design, supporting various devices
- 🎨 现代化的 UI 设计 | Modern UI design

## 技术栈 | Tech Stack

- React 18
- TypeScript
- Vite
- CSS Modules

## 快速开始 | Quick Start

### 安装依赖 | Install Dependencies

```bash
npm install
```

### 开发环境运行 | Run Development Server

```bash
npm run dev
```

### 构建生产版本 | Build for Production

```bash
npm run build
```

## 游戏规则 | Game Rules

1. 游戏在 3x3 的棋盘上进行 | The game is played on a 3x3 grid
2. 两位玩家轮流落子，一位使用 "X"，另一位使用 "O" | Two players take turns, one using "X" and the other using "O"
3. 率先在横向、纵向或对角线上连成一线的玩家获胜 | The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
4. 如果棋盘被填满但没有玩家获胜，则游戏平局 | If the grid is filled without a winner, the game is a draw

## 项目结构 | Project Structure

```
src/
├── components/     # 组件文件夹 | Components directory
├── assets/         # 静态资源 | Static assets
├── App.tsx         # 主应用组件 | Main application component
├── main.tsx        # 应用入口 | Application entry point
└── index.css       # 全局样式 | Global styles
```

## 贡献 | Contributing

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

Issues and Pull Requests are welcome to help improve this project!

## 许可证 | License

MIT License
