import 'server-only'
import { WorkflowRuntimeModel } from '@runtime/models'
import { WorkflowJSON } from '@flowgram.ai/free-layout-editor'

export const main = async (json: WorkflowJSON) => {
    WorkflowRuntimeModel.instance.run()
    return {
        timestamp: new Date().toISOString(),
        message: 'Server processing completed',
        input: json,
    }
}
