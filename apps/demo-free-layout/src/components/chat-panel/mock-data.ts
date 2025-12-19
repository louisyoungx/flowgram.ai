/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  status?: 'sending' | 'sent' | 'error';
}

export const mockMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: '你好！我是 FlowGram AI 助手。我可以帮你创建和编辑流程图，有什么我可以帮助你的吗？',
    timestamp: Date.now() - 1000 * 60 * 10,
    status: 'sent',
  },
  {
    id: '2',
    role: 'user',
    content: '请帮我创建一个简单的用户注册流程图',
    timestamp: Date.now() - 1000 * 60 * 9,
    status: 'sent',
  },
  {
    id: '3',
    role: 'assistant',
    content:
      '好的，我可以帮你创建一个用户注册流程图。这个流程图将包含以下步骤：\n\n1. 用户填写注册表单\n2. 验证邮箱格式\n3. 检查用户名是否已存在\n4. 密码强度验证\n5. 发送验证邮件\n6. 用户确认邮件\n7. 注册成功\n\n你想要调整这个流程吗？',
    timestamp: Date.now() - 1000 * 60 * 8,
    status: 'sent',
  },
  {
    id: '4',
    role: 'user',
    content: '很好，请添加一个手机号验证的步骤',
    timestamp: Date.now() - 1000 * 60 * 7,
    status: 'sent',
  },
  {
    id: '5',
    role: 'assistant',
    content:
      '已添加手机号验证步骤。现在流程图包含：\n\n1. 用户填写注册表单\n2. 验证邮箱格式\n3. **验证手机号格式（新增）**\n4. 检查用户名是否已存在\n5. 密码强度验证\n6. 发送验证短信和邮件\n7. 用户确认手机号和邮箱\n8. 注册成功\n\n流程图已更新到画布中。',
    timestamp: Date.now() - 1000 * 60 * 6,
    status: 'sent',
  },
];

export const mockSuggestions = [
  '帮我创建一个流程图',
  '优化当前流程图',
  '添加错误处理节点',
  '解释这个流程图的逻辑',
];
