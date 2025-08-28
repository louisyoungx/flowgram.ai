# Class: ScopeChainTransformService

## Table of contents

### Constructors

* [constructor](/auto-docs/fixed-layout-editor/classes/ScopeChainTransformService.md#constructor)

### Properties

* [document](/auto-docs/fixed-layout-editor/classes/ScopeChainTransformService.md#document)
* [variableEngine](/auto-docs/fixed-layout-editor/classes/ScopeChainTransformService.md#variableengine)

### Methods

* [hasTransformer](/auto-docs/fixed-layout-editor/classes/ScopeChainTransformService.md#hastransformer)
* [registerTransformer](/auto-docs/fixed-layout-editor/classes/ScopeChainTransformService.md#registertransformer)
* [transformCovers](/auto-docs/fixed-layout-editor/classes/ScopeChainTransformService.md#transformcovers)
* [transformDeps](/auto-docs/fixed-layout-editor/classes/ScopeChainTransformService.md#transformdeps)

## Constructors

### constructor

**new ScopeChainTransformService**(`configs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs?` | `VariableChainConfig` |

## Properties

### document

**document**: [`FlowDocument`](/auto-docs/fixed-layout-editor/classes/FlowDocument.md)<[`FlowDocumentJSON`](/auto-docs/fixed-layout-editor/types/FlowDocumentJSON.md)>

***

### variableEngine

**variableEngine**: [`VariableEngine`](/auto-docs/fixed-layout-editor/classes/VariableEngine.md)

## Methods

### hasTransformer

**hasTransformer**(`transformerId`): `boolean`

check if transformer registered

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformerId` | `string` | used to identify transformer, prevent duplicated |

#### Returns

`boolean`

***

### registerTransformer

**registerTransformer**(`transformerId`, `transformer`): `void`

register new transform function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformerId` | `string` | used to identify transformer, prevent duplicated transformer |
| `transformer` | `Object` |  |
| `transformer.transformCovers` | `IScopeTransformer` | - |
| `transformer.transformDeps` | `IScopeTransformer` | - |

#### Returns

`void`

***

### transformCovers

**transformCovers**(`scopes`, `«destructured»`): [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopes` | [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[] |
| `«destructured»` | `Object` |
| › `scope` | [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### transformDeps

**transformDeps**(`scopes`, `«destructured»`): [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopes` | [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[] |
| `«destructured»` | `Object` |
| › `scope` | [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]
