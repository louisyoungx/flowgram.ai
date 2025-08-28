# Class: ScopeChainTransformService

## Table of contents

### Constructors

* [constructor](/en/auto-docs/editor/classes/ScopeChainTransformService.md#constructor)

### Properties

* [document](/en/auto-docs/editor/classes/ScopeChainTransformService.md#document)
* [variableEngine](/en/auto-docs/editor/classes/ScopeChainTransformService.md#variableengine)

### Methods

* [hasTransformer](/en/auto-docs/editor/classes/ScopeChainTransformService.md#hastransformer)
* [registerTransformer](/en/auto-docs/editor/classes/ScopeChainTransformService.md#registertransformer)
* [transformCovers](/en/auto-docs/editor/classes/ScopeChainTransformService.md#transformcovers)
* [transformDeps](/en/auto-docs/editor/classes/ScopeChainTransformService.md#transformdeps)

## Constructors

### constructor

**new ScopeChainTransformService**(`configs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs?` | `VariableChainConfig` |

## Properties

### document

**document**: [`FlowDocument`](/en/auto-docs/editor/classes/FlowDocument.md)<[`FlowDocumentJSON`](/en/auto-docs/editor/types/FlowDocumentJSON.md)>

***

### variableEngine

**variableEngine**: [`VariableEngine`](/en/auto-docs/editor/classes/VariableEngine.md)

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

**transformCovers**(`scopes`, `«destructured»`): [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopes` | [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[] |
| `«destructured»` | `Object` |
| › `scope` | [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### transformDeps

**transformDeps**(`scopes`, `«destructured»`): [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopes` | [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[] |
| `«destructured»` | `Object` |
| › `scope` | [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]
