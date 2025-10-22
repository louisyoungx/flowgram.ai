"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["463858"],{562913:function(e,t,r){r.d(t,{Z:()=>n});var l=r(908600);let n=(0,r(524053).A)(function(e){return l.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-11 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.11 8.11a1 1 0 0 1 1.42 0L12 10.6l2.47-2.48a1 1 0 1 1 1.42 1.42L13.4 12l2.48 2.47a1 1 0 0 1-1.42 1.42L12 13.4 9.53 15.9a1 1 0 0 1-1.42-1.42L10.6 12 8.1 9.53a1 1 0 0 1 0-1.42Z",fill:"currentColor"}))},"cross_circle_stroked")},633988:function(e,t,r){r.d(t,{Z:()=>n});var l=r(908600);let n=(0,r(524053).A)(function(e){return l.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),l.createElement("path",{d:"M20.5 13.5a1.5 1.5 0 0 0 0-3h-7v-7a1.5 1.5 0 0 0-3 0v7h-7a1.5 1.5 0 0 0 0 3h7v7a1.5 1.5 0 0 0 3 0v-7h7Z",fill:"currentColor"}))},"plus")},352463:function(e,t,r){r.r(t),r.d(t,{default:()=>o});var l=r(110239),n=r(437562),a=r(887902);function i(e){let t={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.h1,{id:"数组",children:[(0,l.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#数组",children:"#"}),"数组"]}),"\n","\n",(0,l.jsx)(t.p,{children:"以下例子展示了数组的基本用法，包含："}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"基本写法（渲染、增删）。"}),"\n",(0,l.jsx)(t.li,{children:"如何对数组每项配置校验逻辑。 此处的校验规则为每项最大长度不超过8个英文字符。"}),"\n",(0,l.jsxs)(t.li,{children:["如何对数组每项配置副作用。 此处的副作用为每项在初始化时控制台输出 ",(0,l.jsx)(t.code,{children:"${name} value init to ${value}"}),", 值变更时输出 ",(0,l.jsx)(t.code,{children:"${name} value changed to ${value}"})]}),"\n",(0,l.jsx)(t.li,{children:"数组项如何做交换。"}),"\n"]}),"\n",(0,l.jsx)(a.o,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fexamples%2Fnode-form%2Farray.mdx"]={toc:[],title:"数组",headingTitle:"数组",frontmatter:{outline:!1}}},887902:function(e,t,r){r.d(t,{o:()=>f});var l=r(110239),n=r(649414),a=r(262922),i=r(954272),o=r(640898),d=r(617704),s=r(908600);let c=(0,r(524053).A)(function(e){return s.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1c.83 0 1.5.67 1.5 1.5v15.38l6.44-6.44a1.5 1.5 0 0 1 2.12 2.12l-9 9a1.5 1.5 0 0 1-2.12 0l-9-9a1.5 1.5 0 0 1 2.12-2.12l6.44 6.44V2.5c0-.83.67-1.5 1.5-1.5Z",fill:"currentColor"}))},"arrow_down");var m=r(562913),u=r(633988);r(378794),r(156774);let p={type:"custom",meta:{},defaultPorts:[{type:"output"},{type:"input"}],formMeta:{render:()=>(0,l.jsxs)("div",{className:"demo-node-content",children:[(0,l.jsx)("div",{className:"demo-node-title",children:"Array Examples"}),(0,l.jsx)(o.F26,{name:"array",children:e=>{let{field:t,fieldState:r}=e;return(0,l.jsxs)(n.FieldWrapper,{title:"My Array",children:[t.map((e,r)=>(0,l.jsx)(o.gNt,{name:e.name,children:e=>{var a,i;let{field:o,fieldState:s}=e;return(0,l.jsx)(n.FieldWrapper,{error:null==(i=s.errors)||null==(a=i[0])?void 0:a.message,children:(0,l.jsxs)("div",{className:"array-item-wrapper",children:[(0,l.jsx)(d.II,{...o,size:"small"}),r<t.value.length-1?(0,l.jsx)(d.J2,{content:"swap with next element",className:"icon-button-popover",showArrow:!0,position:"topLeft",children:(0,l.jsx)(d.zx,{theme:"borderless",size:"small",icon:(0,l.jsx)(c,{}),onClick:()=>t.swap(r,r+1)})}):null,(0,l.jsx)(d.J2,{content:"delete current element",className:"icon-button-popover",showArrow:!0,position:"topLeft",children:(0,l.jsx)(d.zx,{theme:"borderless",size:"small",icon:(0,l.jsx)(m.Z,{}),onClick:()=>t.delete(r)})})]})})}},e.key)),(0,l.jsx)("div",{children:(0,l.jsx)(d.zx,{size:"small",theme:"borderless",icon:(0,l.jsx)(u.Z,{}),onClick:()=>t.append("default"),children:"Add"})})]})}})]}),validateTrigger:o.C$T.onChange,defaultValues:{array:["default"]},validate:{"array.*":e=>{let{value:t}=e;return t.length>8?"max length exceeded: current length is "+t.length:void 0}},effect:{"array.*":[{event:o.zEJ.onValueInit,effect:e=>{let{value:t,name:r}=e;console.log(r+" value init to ",t)}},{event:o.zEJ.onValueChange,effect:e=>{let{value:t,name:r}=e;console.log(r+" value changed to ",t)}}]}}},h={code:`import {
  DataEvent,
  EffectFuncProps,
  Field,
  FieldRenderProps,
  FormMeta,
  ValidateTrigger,
  WorkflowNodeRegistry,
  FieldArray,
  FieldArrayRenderProps,
} from '@flowgram.ai/free-layout-editor';
import { FieldWrapper } from '@flowgram.ai/demo-node-form';
import { Input, Button, Popover } from '@douyinfe/semi-ui';
import { IconPlus, IconCrossCircleStroked, IconArrowDown } from '@douyinfe/semi-icons';
import './index.css';
import '../index.css';

export const render = () => (
  <div className="demo-node-content">
    <div className="demo-node-title">Array Examples</div>
    <FieldArray name="array">
      {({ field, fieldState }: FieldArrayRenderProps<string>) => (
        <FieldWrapper title={'My Array'}>
          {field.map((child, index) => (
            <Field name={child.name} key={child.key}>
              {({ field: childField, fieldState: childState }: FieldRenderProps<string>) => (
                <FieldWrapper error={childState.errors?.[0]?.message}>
                  <div className="array-item-wrapper">
                    <Input {...childField} size={'small'} />
                    {index < field.value!.length - 1 ? (
                      <Popover
                        content={'swap with next element'}
                        className={'icon-button-popover'}
                        showArrow
                        position={'topLeft'}
                      >
                        <Button
                          theme="borderless"
                          size={'small'}
                          icon={<IconArrowDown />}
                          onClick={() => field.swap(index, index + 1)}
                        />
                      </Popover>
                    ) : null}
                    <Popover
                      content={'delete current element'}
                      className={'icon-button-popover'}
                      showArrow
                      position={'topLeft'}
                    >
                      <Button
                        theme="borderless"
                        size={'small'}
                        icon={<IconCrossCircleStroked />}
                        onClick={() => field.delete(index)}
                      />
                    </Popover>
                  </div>
                </FieldWrapper>
              )}
            </Field>
          ))}
          <div>
            <Button
              size={'small'}
              theme="borderless"
              icon={<IconPlus />}
              onClick={() => field.append('default')}
            >
              Add
            </Button>
          </div>
        </FieldWrapper>
      )}
    </FieldArray>
  </div>
);

interface FormData {
  array: string[];
}

const formMeta: FormMeta<FormData> = {
  render,
  validateTrigger: ValidateTrigger.onChange,
  defaultValues: {
    array: ['default'],
  },
  validate: {
    'array.*': ({ value }) =>
      value.length > 8 ? 'max length exceeded: current length is ' + value.length : undefined,
  },
  effect: {
    'array.*': [
      {
        event: DataEvent.onValueInit,
        effect: ({ value, name }: EffectFuncProps<string, FormData>) => {
          console.log(name + ' value init to ', value);
        },
      },
      {
        event: DataEvent.onValueChange,
        effect: ({ value, name }: EffectFuncProps<string, FormData>) => {
          console.log(name + ' value changed to ', value);
        },
      },
    ],
  },
};

export const nodeRegistry: WorkflowNodeRegistry = {
  type: 'custom',
  meta: {},
  defaultPorts: [{ type: 'output' }, { type: 'input' }],
  formMeta,
};

`,active:!0},f=()=>{let e={"node-registry.tsx":h,"initial-data.ts":{code:n.defaultInitialDataTs,active:!0},"field-wrapper.tsx":{code:n.fieldWrapperTs,active:!0},"field-wrapper.css":{code:n.fieldWrapperCss,active:!0}};return(0,l.jsx)(i.g,{files:e,previewStyle:{height:500},editorStyle:{height:500},children:(0,l.jsx)(a.M,{registry:p,initialData:n.DEFAULT_INITIAL_DATA})})}}}]);