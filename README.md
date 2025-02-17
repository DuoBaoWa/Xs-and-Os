# 井字棋游戏

一个使用 React + TypeScript + Vite 构建的现代化井字棋游戏。

## 功能特性

- 🎮 经典的井字棋游戏玩法
- 🎯 实时显示游戏状态和胜负结果
- 🔄 一键重新开始游戏
- 📱 响应式设计，支持多种设备
- 🎨 现代化的 UI 设计

## 技术栈

- React 18
- TypeScript
- Vite
- CSS Modules

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 游戏规则

1. 游戏在 3x3 的棋盘上进行
2. 两位玩家轮流落子，一位使用 "X"，另一位使用 "O"
3. 率先在横向、纵向或对角线上连成一线的玩家获胜
4. 如果棋盘被填满但没有玩家获胜，则游戏平局

## 项目结构

```
src/
├── components/     # 组件文件夹
├── assets/         # 静态资源
├── App.tsx         # 主应用组件
├── main.tsx        # 应用入口
└── index.css       # 全局样式
```

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 许可证

MIT License
