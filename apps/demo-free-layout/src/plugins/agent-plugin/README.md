# Agent Plugin

AI 对话插件，用于在 FlowGram 中集成大模型 API，实现 AI 助手功能。

## 功能特性

- 支持 OpenAI 兼容的 API 接口
- 支持流式响应（SSE）
- 可配置的模型参数（temperature、max_tokens 等）
- 完整的错误处理
- TypeScript 类型支持

## 使用方法

### 1. 注册插件

在编辑器配置中注册 `createAgentPlugin`：

```typescript
import { createAgentPlugin } from './plugins';

const editorProps = {
  plugins: () => [
    // ... 其他插件
    createAgentPlugin({
      config: {
        apiKey: 'your-api-key',
        baseURL: 'https://api.openai.com/v1',
        model: 'gpt-4o-mini',
        temperature: 0.7,
        maxTokens: 2000,
      },
    }),
  ],
};
```

### 2. 在组件中使用

使用 `useAgentService` hook 来访问 AI 服务：

```typescript
import { useAgentService } from '../../plugins/agent-plugin/hooks';

const MyComponent = () => {
  const agentService = useAgentService();

  const handleChat = async (message: string) => {
    const messages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: message },
    ];

    // 普通请求
    const response = await agentService.sendMessage(messages);
    console.log(response);

    // 流式请求
    await agentService.streamMessage(messages, (chunk) => {
      console.log('Received chunk:', chunk);
    });
  };
};
```

## API 配置

### 环境变量

可以通过环境变量配置默认参数：

```bash
OPENAI_API_KEY=sk-xxx
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4o-mini
```

### 运行时更新配置

```typescript
agentService.updateConfig({
  apiKey: 'new-api-key',
  model: 'gpt-4',
  temperature: 0.9,
});
```

## 支持的模型提供商

由于使用 OpenAI 兼容的 API 格式，本插件支持多种 AI 服务：

- **OpenAI**: `https://api.openai.com/v1`
- **Azure OpenAI**: `https://your-resource.openai.azure.com/`
- **Anthropic (via proxy)**: 需要使用兼容代理
- **本地模型**: 使用 vLLM、LocalAI 等本地服务
- **国内服务**: 如智谱AI、文心一言等（需要支持 OpenAI API 格式）

## 类型定义

```typescript
interface AgentConfig {
  apiKey?: string;
  baseURL?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface AgentService {
  sendMessage: (messages: ChatMessage[]) => Promise<string>;
  streamMessage: (
    messages: ChatMessage[],
    onChunk: (chunk: string) => void
  ) => Promise<void>;
  updateConfig: (config: Partial<AgentConfig>) => void;
}
```

## 集成示例

查看 `apps/demo-free-layout/src/components/chat-panel/chat-panel.tsx` 了解完整的集成示例。

## 错误处理

插件会抛出友好的错误信息：

```typescript
try {
  await agentService.sendMessage(messages);
} catch (error) {
  console.error('AI request failed:', error.message);
  // 例如: "API Key is not configured. Please set the API key in settings."
  // 或: "Failed to send message: API request failed with status 429"
}
```

## 注意事项

1. **API Key 安全**: 不要在前端代码中硬编码 API Key，应通过环境变量或用户设置提供
2. **CORS 问题**: 某些 API 服务可能需要配置 CORS 或使用代理
3. **费用控制**: 建议设置 `maxTokens` 限制以控制 API 调用成本
4. **错误重试**: 生产环境建议实现请求重试机制

## License

MIT
