# Class: ScopeChainTransformService

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-plugin/classes/ScopeChainTransformService.md#constructor)

### Properties

* [document](/auto-docs/variable-plugin/classes/ScopeChainTransformService.md#document)
* [variableEngine](/auto-docs/variable-plugin/classes/ScopeChainTransformService.md#variableengine)

### Methods

* [hasTransformer](/auto-docs/variable-plugin/classes/ScopeChainTransformService.md#hastransformer)
* [registerTransformer](/auto-docs/variable-plugin/classes/ScopeChainTransformService.md#registertransformer)
* [transformCovers](/auto-docs/variable-plugin/classes/ScopeChainTransformService.md#transformcovers)
* [transformDeps](/auto-docs/variable-plugin/classes/ScopeChainTransformService.md#transformdeps)

## Constructors

### constructor

**new ScopeChainTransformService**(`configs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs?` | `VariableChainConfig` |

## Properties

### document

**document**: `FlowDocument`<`FlowDocumentJSON`>

***

### variableEngine

**variableEngine**: [`VariableEngine`](/auto-docs/variable-plugin/classes/VariableEngine.md)

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

**transformCovers**(`scopes`, `«destructured»`): [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopes` | [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[] |
| `«destructured»` | `Object` |
| › `scope` | [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### transformDeps

**transformDeps**(`scopes`, `«destructured»`): [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopes` | [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[] |
| `«destructured»` | `Object` |
| › `scope` | [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]
