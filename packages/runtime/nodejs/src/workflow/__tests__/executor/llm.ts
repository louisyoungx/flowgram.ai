import { FlowGramNode } from '@flowgram.ai/runtime-interface';

import { ExecutionContext, ExecutionResult, INodeExecutor } from '@workflow/type';
import { delay } from '@workflow/infra';

interface LLMInputs {
  modelType: string;
  temperature: number;
  systemPrompt: string;
  prompt: string;
}

export class MockLLMExecutor implements INodeExecutor {
  public type = FlowGramNode.LLM;

  public async execute(context: ExecutionContext): Promise<ExecutionResult> {
    const inputs = context.inputs as LLMInputs;
    await delay(100); // TODO mock node run
    const result = `Hi, I'm an AI assistant, my name is ${inputs.modelType}, temperature is ${inputs.temperature}, system prompt is "${inputs.systemPrompt}", prompt is "${inputs.prompt}"`;
    return {
      outputs: {
        result,
      },
    };
  }
}
