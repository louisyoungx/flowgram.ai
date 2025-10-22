"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["17011"],{562913:function(e,t,r){r.d(t,{Z:()=>n});var a=r(908600);let n=(0,r(524053).A)(function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-11 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.11 8.11a1 1 0 0 1 1.42 0L12 10.6l2.47-2.48a1 1 0 1 1 1.42 1.42L13.4 12l2.48 2.47a1 1 0 0 1-1.42 1.42L12 13.4 9.53 15.9a1 1 0 0 1-1.42-1.42L10.6 12 8.1 9.53a1 1 0 0 1 0-1.42Z",fill:"currentColor"}))},"cross_circle_stroked")},633988:function(e,t,r){r.d(t,{Z:()=>n});var a=r(908600);let n=(0,r(524053).A)(function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),a.createElement("path",{d:"M20.5 13.5a1.5 1.5 0 0 0 0-3h-7v-7a1.5 1.5 0 0 0-3 0v7h-7a1.5 1.5 0 0 0 0 3h7v7a1.5 1.5 0 0 0 3 0v-7h7Z",fill:"currentColor"}))},"plus")},33582:function(e,t,r){r.r(t),r.d(t,{default:()=>o});var a=r(110239),n=r(437562),l=r(887902);function i(e){let t={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"array",children:[(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#array",children:"#"}),"Array"]}),"\n","\n",(0,a.jsx)(t.p,{children:"The following example demonstrates the basic usage of arrays, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Basic implementation (rendering, adding and removing items)."}),"\n",(0,a.jsx)(t.li,{children:"How to configure validation logic for each array item. In this case, the validation rule is that each item should not exceed 8 English characters."}),"\n",(0,a.jsxs)(t.li,{children:["How to configure side effects for each array item. Here, the side effect outputs ",(0,a.jsx)(t.code,{children:"${name} value init to ${value}"})," to the console during initialization, and ",(0,a.jsx)(t.code,{children:"${name} value changed to ${value}"})," when the value changes."]}),"\n",(0,a.jsx)(t.li,{children:"How to swap array items."}),"\n"]}),"\n",(0,a.jsx)(l.o,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fexamples%2Fnode-form%2Farray.mdx"]={toc:[],title:"Array",headingTitle:"Array",frontmatter:{outline:!1}}},887902:function(e,t,r){r.d(t,{o:()=>f});var a=r(110239),n=r(649414),l=r(262922),i=r(954272),o=r(640898),s=r(617704),d=r(908600);let c=(0,r(524053).A)(function(e){return d.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1c.83 0 1.5.67 1.5 1.5v15.38l6.44-6.44a1.5 1.5 0 0 1 2.12 2.12l-9 9a1.5 1.5 0 0 1-2.12 0l-9-9a1.5 1.5 0 0 1 2.12-2.12l6.44 6.44V2.5c0-.83.67-1.5 1.5-1.5Z",fill:"currentColor"}))},"arrow_down");var m=r(562913),u=r(633988);r(378794),r(156774);let h={type:"custom",meta:{},defaultPorts:[{type:"output"},{type:"input"}],formMeta:{render:()=>(0,a.jsxs)("div",{className:"demo-node-content",children:[(0,a.jsx)("div",{className:"demo-node-title",children:"Array Examples"}),(0,a.jsx)(o.F26,{name:"array",children:e=>{let{field:t,fieldState:r}=e;return(0,a.jsxs)(n.FieldWrapper,{title:"My Array",children:[t.map((e,r)=>(0,a.jsx)(o.gNt,{name:e.name,children:e=>{var l,i;let{field:o,fieldState:d}=e;return(0,a.jsx)(n.FieldWrapper,{error:null==(i=d.errors)||null==(l=i[0])?void 0:l.message,children:(0,a.jsxs)("div",{className:"array-item-wrapper",children:[(0,a.jsx)(s.II,{...o,size:"small"}),r<t.value.length-1?(0,a.jsx)(s.J2,{content:"swap with next element",className:"icon-button-popover",showArrow:!0,position:"topLeft",children:(0,a.jsx)(s.zx,{theme:"borderless",size:"small",icon:(0,a.jsx)(c,{}),onClick:()=>t.swap(r,r+1)})}):null,(0,a.jsx)(s.J2,{content:"delete current element",className:"icon-button-popover",showArrow:!0,position:"topLeft",children:(0,a.jsx)(s.zx,{theme:"borderless",size:"small",icon:(0,a.jsx)(m.Z,{}),onClick:()=>t.delete(r)})})]})})}},e.key)),(0,a.jsx)("div",{children:(0,a.jsx)(s.zx,{size:"small",theme:"borderless",icon:(0,a.jsx)(u.Z,{}),onClick:()=>t.append("default"),children:"Add"})})]})}})]}),validateTrigger:o.C$T.onChange,defaultValues:{array:["default"]},validate:{"array.*":e=>{let{value:t}=e;return t.length>8?"max length exceeded: current length is "+t.length:void 0}},effect:{"array.*":[{event:o.zEJ.onValueInit,effect:e=>{let{value:t,name:r}=e;console.log(r+" value init to ",t)}},{event:o.zEJ.onValueChange,effect:e=>{let{value:t,name:r}=e;console.log(r+" value changed to ",t)}}]}}},p={code:`import {
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

`,active:!0},f=()=>{let e={"node-registry.tsx":p,"initial-data.ts":{code:n.defaultInitialDataTs,active:!0},"field-wrapper.tsx":{code:n.fieldWrapperTs,active:!0},"field-wrapper.css":{code:n.fieldWrapperCss,active:!0}};return(0,a.jsx)(i.g,{files:e,previewStyle:{height:500},editorStyle:{height:500},children:(0,a.jsx)(l.M,{registry:h,initialData:n.DEFAULT_INITIAL_DATA})})}}}]);