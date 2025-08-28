# Interface: VariableConsumerAbilityOptions\<V>

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `any` |

## Hierarchy

* `VariableAbilityOptions`

  ↳ **`VariableConsumerAbilityOptions`**

## Table of contents

### Properties

* [key](/auto-docs/fixed-layout-editor/interfaces/VariableConsumerAbilityOptions.md#key)
* [namespace](/auto-docs/fixed-layout-editor/interfaces/VariableConsumerAbilityOptions.md#namespace)
* [onInit](/auto-docs/fixed-layout-editor/interfaces/VariableConsumerAbilityOptions.md#oninit)
* [parse](/auto-docs/fixed-layout-editor/interfaces/VariableConsumerAbilityOptions.md#parse)
* [private](/auto-docs/fixed-layout-editor/interfaces/VariableConsumerAbilityOptions.md#private)
* [scope](/auto-docs/fixed-layout-editor/interfaces/VariableConsumerAbilityOptions.md#scope)

## Properties

### key

`Optional` **key**: `string`

#### Inherited from

VariableAbilityOptions.key

***

### namespace

`Optional` **namespace**: `string`

#### Inherited from

VariableAbilityOptions.namespace

***

### onInit

`Optional` **onInit**: (`ctx`: `VariableAbilityInitCtx`) => `undefined` | [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

#### Type declaration

(`ctx`): `undefined` | [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `VariableAbilityInitCtx` |

##### Returns

`undefined` | [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

VariableAbilityOptions.onInit

***

### parse

**parse**: (`v`: `V`, `ctx`: [`VariableAbilityParseContext`](/auto-docs/fixed-layout-editor/interfaces/VariableAbilityParseContext.md)) => `undefined` | [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md)

#### Type declaration

(`v`, `ctx`): `undefined` | [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `V` |
| `ctx` | [`VariableAbilityParseContext`](/auto-docs/fixed-layout-editor/interfaces/VariableAbilityParseContext.md) |

##### Returns

`undefined` | [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md)

***

### private

`Optional` **private**: `boolean`

**`Deprecated`**

use scope: 'private'

#### Inherited from

VariableAbilityOptions.private

***

### scope

`Optional` **scope**: `"private"` | `"public"`

#### Inherited from

VariableAbilityOptions.scope
