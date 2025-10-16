![Image](https://github.com/user-attachments/assets/4f9dfa0e-e600-4d4e-9e73-c919184f7573)

<div align="center">

[![License](https://img.shields.io/github/license/bytedance/flowgram.ai)](https://github.com/bytedance/flowgram.ai/blob/main/LICENSE) [![@flowgram.ai/editor](https://img.shields.io/npm/dm/%40flowgram.ai%2Fcore)](https://www.npmjs.com/package/@flowgram.ai/editor) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/bytedance/flowgram.ai) [![juejin](https://img.shields.io/badge/juejin-FFFFFF?logo=juejin&logoColor=%23007FFF)](https://juejin.cn/column/7479814468601315362)

[![](https://trendshift.io/api/badge/repositories/13877)](https://trendshift.io/repositories/13877)

</div>

# FlowGram｜Workflow development framework

[English](README.md) | [简体中文](README-zh.md)

FlowGram is a composable, visual, easy-to-integrate, and extensible workflow development framework & toolkit.
Our goal is to help developers build AI workflow platforms **faster** and **simpler**.
FlowGram comes with a suite of built-in tools for workflow development: a visual flow canvas, node configuration forms, a variable scope chain, and ready-to-use materials (LLM, Condition, Code Editor etc). It’s not a ready-made workflow platform; it’s the framework and toolkit to build yours.

Learn more at 🌐 [FlowGram.AI](https://flowgram.ai)

## 🎬 Demo

<https://github.com/user-attachments/assets/fee87890-ceec-4c07-b659-08afc4dedc26>

In this demo, we iterate through a list of cities, fetch real-time weather via HTTP, parse temperatures with a Code node, generate outfit suggestions with an LLM, gate by a Condition, aggregate results across the loop, and finally use an Advisor LLM to pick the most comfortable city before sending the result to the End node.

## 🚀 Quick start

1. Create a new FlowGram project with preset templates

```sh
npx @flowgram.ai/create-app@latest
```

⭐️ Recommend to choose `Free Layout Demo`

2. Start the project

```sh
cd demo-free-layout
npm install
npm start
```

3. Open the browser

Enjoy it! [http://localhost:3000](http://localhost:3000)

## ✨ Features

| Feature                                                                               | Description                                                                                                                                                  | Demo                                                                                         |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| [Free Layout](https://flowgram.ai/examples/free-layout/free-feature-overview.html)    | Free layout where nodes can be placed anywhere and connected using free-form lines.                                                                          | ![Free Layout Demo](./apps/docs/src/public/free-layout/free-layout-demo.gif)                 |
| [Fixed Layout](https://flowgram.ai/examples/fixed-layout/fixed-feature-overview.html) | Fixed layout where nodes can be dragged to specified positions, with support for compound nodes like branches and loops.                                     | ![Fixed Layout Demo](./apps/docs/src/public/fixed-layout/fixed-layout-demo.gif)              |
| [Form](https://flowgram.ai/examples/node-form/basic.html)                             | Built-in forms and Form maintains node data CRUD operations and provides capabilities for rendering, validation, side effects, canvas/variable linkage, etc. | ![Form](https://github.com/user-attachments/assets/13e9b4cd-e993-4d21-901c-fb6cf106de78)     |
| [Variable](https://flowgram.ai/guide/variable/basic.html)                             | Declarative Variable play a similar role as "connectors." They are the "messengers" used to pass information between different nodes.                        | ![Variable](https://github.com/user-attachments/assets/442006db-25e3-4fb5-972c-7a0545638ff5) |


## 📖 Documentation

You can find the FlowGram documentation [on the website](https://flowgram.ai).

The documentation is divided into several sections:

- [Quick Start](https://flowgram.ai/guide/getting-started/install.html)
- [Canvas](https://flowgram.ai/guide/free-layout/load.html)
- [Form](https://flowgram.ai/guide/form/form.html)
- [Variable](https://flowgram.ai/guide/variable/basic.html)
- [Material](https://flowgram.ai/materials/introduction.html)
- [Runtime](https://flowgram.ai/guide/runtime/introduction.html)
- [Advanced Guides](https://flowgram.ai/guide/advanced/zoom-scroll.html)
- [API Reference](https://flowgram.ai/api/index.html)
- [Where to get Support](https://flowgram.ai/guide/contact-us.html)

## 🙌 Contributors

[![FlowGram.AI Contributors](https://contrib.rocks/image?repo=bytedance/flowgram.ai)](https://github.com/bytedance/flowgram.ai/graphs/contributors)

## 🌍 Adoption

- [Coze Studio](https://github.com/coze-dev/coze-studio) is an all-in-one AI agent development tool. Providing the latest large models and tools, various development modes and frameworks, Coze Studio offers the most convenient AI agent development environment, from development to deployment.
- [NNDeploy](https://github.com/NNDeploy/nndeploy) is a workflow-based multi-platform ai deployment tool.
- [Certimate](https://github.com/certimate-go/certimate)  is an open-source SSL certificate management tool that helps you automatically apply for and deploy SSL certificates with a visual workflow. It is one of the ACME client options listed in the official documentation of Let's Encrypt.

## 📬 Contact us

- Issues: [Issues](https://github.com/bytedance/flowgram.ai/issues)
- Lark: Scan the QR code below with [Register Feishu](https://www.feishu.cn/en/) to join our FlowGram user group.

<img src="./apps/docs/src/public/lark-group.png" width="200"/>
