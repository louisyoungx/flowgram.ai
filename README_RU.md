![Изображение](https://github.com/user-attachments/assets/4f9dfa0e-e600-4d4e-9e73-c919184f7573)

<div align="center">

[![Лицензия](https://img.shields.io/github/license/bytedance/flowgram.ai)](https://github.com/bytedance/flowgram.ai/blob/main/LICENSE) [![@flowgram.ai/editor](https://img.shields.io/npm/dm/%40flowgram.ai%2Fcore)](https://www.npmjs.com/package/@flowgram.ai/editor) [![Спросить DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/bytedance/flowgram.ai) [![juejin](https://img.shields.io/badge/juejin-FFFFFF?logo=juejin&logoColor=%23007FFF)](https://juejin.cn/column/7479814468601315362)

[![](https://trendshift.io/api/badge/repositories/13877)](https://trendshift.io/repositories/13877)

</div>

# FlowGram | Фреймворк для разработки рабочих процессов

[English](README.md) | [中文](README_ZH.md) | [Español](README_ES.md) | [Русский](README_RU.md) | [Português](README_PT.md) | [Deutsch](README_DE.md) | [日本語](README_JA.md)

FlowGram — это компонуемый, визуальный, легко интегрируемый и расширяемый фреймворк и набор инструментов для разработки рабочих процессов.
Наша цель — помочь разработчикам создавать платформы для рабочих процессов ИИ **быстрее** и **проще**.
FlowGram поставляется со встроенным набором инструментов для разработки рабочих процессов: визуальным холстом потока, формами конфигурации узлов, цепочкой области видимости переменных и готовыми к использованию материалами (LLM, Условие, Редактор кода и т. д.). Это не готовая платформа для рабочих процессов; это фреймворк и набор инструментов для создания вашей собственной.

Узнайте больше на 🌐 [FlowGram.AI](https://flowgram.ai)

## 🎬 Демо

<https://github.com/user-attachments/assets/fee87890-ceec-4c07-b659-08afc4dedc26>

В этом демо мы перебираем список городов, получаем погоду в реальном времени по HTTP, анализируем температуру с помощью узла «Код», генерируем предложения по одежде с помощью LLM, управляем с помощью «Условия», агрегируем результаты по циклу и, наконец, используем LLM-советника, чтобы выбрать самый комфортный город, прежде чем отправить результат в конечный узел.

## 🚀 Быстрый старт

1. Создайте новый проект FlowGram с предустановленными шаблонами

```sh
npx @flowgram.ai/create-app@latest
```

⭐️ Рекомендуется выбрать `Демо со свободной компоновкой`

2. Запустите проект

```sh
cd demo-free-layout
npm install
npm start
```

3. Откройте браузер

Наслаждайтесь! [http://localhost:3000](http://localhost:3000)

## ✨ Особенности

| Особенность                                                                                                | Описание                                                                                                                                                                          | Демо                                                                                           |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [Холст со свободной компоновкой](https://flowgram.ai/examples/free-layout/free-feature-overview.html)      | Холст со свободной компоновкой, где узлы можно размещать где угодно и соединять линиями произвольной формы.                                                                       | ![Демо со свободной компоновкой](./apps/docs/src/public/free-layout/free-layout-demo.gif)      |
| [Холст с фиксированной компоновкой](https://flowgram.ai/examples/fixed-layout/fixed-feature-overview.html) | Холст с фиксированной компоновкой, где узлы можно перетаскивать в указанные позиции, с поддержкой составных узлов, таких как ветви и циклы.                                       | ![Демо с фиксированной компоновкой](./apps/docs/src/public/fixed-layout/fixed-layout-demo.gif) |
| [Форма](https://flowgram.ai/examples/node-form/basic.html)                                                 | Встроенные формы и Форма поддерживают операции CRUD с данными узлов и предоставляют возможности для рендеринга, проверки, побочных эффектов, связывания холста/переменных и т. д. | ![Форма](https://github.com/user-attachments/assets/13e9b4cd-e993-4d21-901c-fb6cf106de78)      |
| [Переменная](https://flowgram.ai/guide/variable/basic.html)                                                | Декларативные переменные играют роль, аналогичную «коннекторам». Это «посланники», используемые для передачи информации между различными узлами.                                  | ![Переменная](https://github.com/user-attachments/assets/442006db-25e3-4fb5-972c-7a0545638ff5) |


## 📖 Документация

Вы можете найти документацию FlowGram [на веб-сайте](https://flowgram.ai).

Документация разделена на несколько разделов:

- [Быстрый старт](https://flowgram.ai/guide/getting-started/install.html)
- [Холст](https://flowgram.ai/guide/free-layout/load.html)
- [Форма](https://flowgram.ai/guide/form/form.html)
- [Переменная](https://flowgram.ai/guide/variable/basic.html)
- [Материал](https://flowgram.ai/materials/introduction.html)
- [Среда выполнения](https://flowgram.ai/guide/runtime/introduction.html)
- [Расширенные руководства](https://flowgram.ai/guide/advanced/zoom-scroll.html)
- [Справочник по API](https://flowgram.ai/api/index.html)
- [Где получить поддержку](https://flowgram.ai/guide/contact-us.html)

## 🙌 Участники

[![Участники FlowGram.AI](https://contrib.rocks/image?repo=bytedance/flowgram.ai)](https://github.com/bytedance/flowgram.ai/graphs/contributors)

## 🌍 Внедрение

- [Coze Studio](https://github.com/coze-dev/coze-studio) — это универсальный инструмент для разработки агентов ИИ. Предоставляя новейшие большие модели и инструменты, различные режимы и фреймворки разработки, Coze Studio предлагает наиболее удобную среду разработки агентов ИИ, от разработки до развертывания.
- [NNDeploy](https://github.com/NNDeploy/nndeploy) — это мультиплатформенный инструмент развертывания ИИ на основе рабочих процессов.
- [Certimate](https://github.com/certimate-go/certimate) — это инструмент управления SSL-сертификатами с открытым исходным кодом, который помогает автоматически подавать заявки и развертывать SSL-сертификаты с помощью визуального рабочего процесса. Это один из вариантов клиента ACME, перечисленных в официальной документации Let's Encrypt.

## 📬 Свяжитесь с нами

- Проблемы: [Проблемы](https://github.com/bytedance/flowgram.ai/issues)
- Lark: отсканируйте QR-код ниже с помощью [Register Feishu](https://www.feishu.cn/en/), чтобы присоединиться к нашей группе пользователей FlowGram.

<img src="./apps/docs/src/public/lark-group.png" width="200"/>
