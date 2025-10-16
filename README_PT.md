![Imagem](https://github.com/user-attachments/assets/4f9dfa0e-e600-4d4e-9e73-c919184f7573)

<div align="center">

[![Licença](https://img.shields.io/github/license/bytedance/flowgram.ai)](https://github.com/bytedance/flowgram.ai/blob/main/LICENSE) [![@flowgram.ai/editor](https://img.shields.io/npm/dm/%40flowgram.ai%2Fcore)](https://www.npmjs.com/package/@flowgram.ai/editor) [![Pergunte ao DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/bytedance/flowgram.ai) [![juejin](https://img.shields.io/badge/juejin-FFFFFF?logo=juejin&logoColor=%23007FFF)](https://juejin.cn/column/7479814468601315362)

[![](https://trendshift.io/api/badge/repositories/13877)](https://trendshift.io/repositories/13877)

</div>

# FlowGram | Estrutura de desenvolvimento de fluxo de trabalho

[English](README.md) | [中文](README_ZH.md) | [Español](README_ES.md) | [Русский](README_RU.md) | [Português](README_PT.md) | [Deutsch](README_DE.md) | [日本語](README_JA.md)

FlowGram é uma estrutura e kit de ferramentas de desenvolvimento de fluxo de trabalho componível, visual, fácil de integrar e extensível.
Nosso objetivo é ajudar os desenvolvedores a criar plataformas de fluxo de trabalho de IA de forma **mais rápida** e **simples**.
O FlowGram vem com um conjunto de ferramentas integradas para o desenvolvimento de fluxo de trabalho: uma tela de fluxo visual, formulários de configuração de nós, uma cadeia de escopo de variáveis e materiais prontos para uso (LLM, Condição, Editor de Código, etc.). Não é uma plataforma de fluxo de trabalho pronta; é a estrutura e o kit de ferramentas para construir a sua.

Saiba mais em 🌐 [FlowGram.AI](https://flowgram.ai)

## 🎬 Demonstração

<https://github.com/user-attachments/assets/fee87890-ceec-4c07-b659-08afc4dedc26>

Nesta demonstração, iteramos por uma lista de cidades, buscamos o clima em tempo real via HTTP, analisamos as temperaturas com um nó de Código, geramos sugestões de roupas com um LLM, controlamos por uma Condição, agregamos os resultados ao longo do loop e, finalmente, usamos um LLM Conselheiro para escolher a cidade mais confortável antes de enviar o resultado para o nó Final.

## 🚀 Início rápido

1. Crie um novo projeto FlowGram com modelos predefinidos

```sh
npx @flowgram.ai/create-app@latest
```

⭐️ Recomendo escolher `Demonstração de Layout Livre`

2. Inicie o projeto

```sh
cd demo-free-layout
npm install
npm start
```

3. Abra o navegador

Aproveite! [http://localhost:3000](http://localhost:3000)

## ✨ Recursos

| Recurso                                                                                      | Descrição                                                                                                                                                                            | Demonstração                                                                                   |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| [Tela de Layout Livre](https://flowgram.ai/examples/free-layout/free-feature-overview.html)  | Tela de layout livre onde os nós podem ser colocados em qualquer lugar e conectados usando linhas de forma livre.                                                                    | ![Demonstração de Layout Livre](./apps/docs/src/public/free-layout/free-layout-demo.gif)       |
| [Tela de Layout Fixo](https://flowgram.ai/examples/fixed-layout/fixed-feature-overview.html) | Tela de layout fixo onde os nós podem ser arrastados para posições especificadas, com suporte para nós compostos como ramificações e loops.                                          | ![Demonstração de Layout Fixo](./apps/docs/src/public/fixed-layout/fixed-layout-demo.gif)      |
| [Formulário](https://flowgram.ai/examples/node-form/basic.html)                              | Formulários integrados e o Formulário mantém as operações CRUD de dados do nó e fornece recursos para renderização, validação, efeitos colaterais, vinculação de tela/variável, etc. | ![Formulário](https://github.com/user-attachments/assets/13e9b4cd-e993-4d21-901c-fb6cf106de78) |
| [Variável](https://flowgram.ai/guide/variable/basic.html)                                    | As variáveis declarativas desempenham um papel semelhante aos "conectores". Elas são os "mensageiros" usados para passar informações entre diferentes nós.                           | ![Variável](https://github.com/user-attachments/assets/442006db-25e3-4fb5-972c-7a0545638ff5)   |


## 📖 Documentação

Você pode encontrar a documentação do FlowGram [no site](https://flowgram.ai).

A documentação está dividida em várias seções:

- [Início Rápido](https://flowgram.ai/guide/getting-started/install.html)
- [Tela](https://flowgram.ai/guide/free-layout/load.html)
- [Formulário](https://flowgram.ai/guide/form/form.html)
- [Variável](https://flowgram.ai/guide/variable/basic.html)
- [Material](https://flowgram.ai/materials/introduction.html)
- [Tempo de Execução](https://flowgram.ai/guide/runtime/introduction.html)
- [Guias Avançados](https://flowgram.ai/guide/advanced/zoom-scroll.html)
- [Referência da API](https://flowgram.ai/api/index.html)
- [Onde obter suporte](https://flowgram.ai/guide/contact-us.html)

## 🙌 Colaboradores

[![Colaboradores do FlowGram.AI](https://contrib.rocks/image?repo=bytedance/flowgram.ai)](https://github.com/bytedance/flowgram.ai/graphs/contributors)

## 🌍 Adoção

- [Coze Studio](https://github.com/coze-dev/coze-studio) é uma ferramenta de desenvolvimento de agente de IA tudo-em-um. Fornecendo os modelos e ferramentas mais recentes, vários modos e estruturas de desenvolvimento, o Coze Studio oferece o ambiente de desenvolvimento de agente de IA mais conveniente, do desenvolvimento à implantação.
- [NNDeploy](https://github.com/NNDeploy/nndeploy) é uma ferramenta de implantação de IA multiplataforma baseada em fluxo de trabalho.
- [Certimate](https://github.com/certimate-go/certimate) é uma ferramenta de gerenciamento de certificados SSL de código aberto que ajuda você a solicitar e implantar certificados SSL automaticamente com um fluxo de trabalho visual. É uma das opções de cliente ACME listadas na documentação oficial do Let's Encrypt.

## 📬 Contate-nos

- Problemas: [Problemas](https://github.com/bytedance/flowgram.ai/issues)
- Lark: Digitalize o código QR abaixo com [Registrar Feishu](https://www.feishu.cn/en/) para se juntar ao nosso grupo de usuários FlowGram.

<img src="./apps/docs/src/public/lark-group.png" width="200"/>
