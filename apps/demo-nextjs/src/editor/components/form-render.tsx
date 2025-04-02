import { TextArea } from '@douyinfe/semi-ui'
import { Field } from '@flowgram.ai/free-layout-editor'

export const FormRender = () => (
    <>
        <Field<string> name='title'>
            {({ field }) => (
                <h1 className='text-xl font-bold'>{field.value}</h1>
            )}
        </Field>
        <div className='content'>
            <Field<string> name='input'>
                {({ field }) => (
                    <>
                        <h2 className='text-lg'>Input</h2>
                        <TextArea
                            autosize
                            value={field.value}
                            onChange={field.onChange}
                        />
                    </>
                )}
            </Field>
            <Field<string> name='output'>
                {({ field }) => (
                    <>
                        <h2 className='text-lg'>Output</h2>
                        <TextArea
                            autosize
                            value={field.value}
                            onChange={field.onChange}
                        />
                    </>
                )}
            </Field>
        </div>
    </>
)
