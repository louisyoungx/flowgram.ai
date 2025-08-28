# Interface: VariableProviderAbilityOptions\<V>

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `any` |

## Hierarchy

* `VariableAbilityOptions`

  ↳ **`VariableProviderAbilityOptions`**

## Table of contents

### Properties

* [key](/auto-docs/node-variable-plugin/interfaces/VariableProviderAbilityOptions.md#key)
* [namespace](/auto-docs/node-variable-plugin/interfaces/VariableProviderAbilityOptions.md#namespace)
* [onInit](/auto-docs/node-variable-plugin/interfaces/VariableProviderAbilityOptions.md#oninit)
* [parse](/auto-docs/node-variable-plugin/interfaces/VariableProviderAbilityOptions.md#parse)
* [private](/auto-docs/node-variable-plugin/interfaces/VariableProviderAbilityOptions.md#private)
* [scope](/auto-docs/node-variable-plugin/interfaces/VariableProviderAbilityOptions.md#scope)

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

`Optional` **onInit**: (`ctx`: `VariableAbilityInitCtx`) => `undefined` | `Disposable`

#### Type declaration

(`ctx`): `undefined` | `Disposable`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `VariableAbilityInitCtx` |

##### Returns

`undefined` | `Disposable`

#### Inherited from

VariableAbilityOptions.onInit

***

### parse

**parse**: (`v`: `V`, `ctx`: [`VariableAbilityParseContext`](/auto-docs/node-variable-plugin/interfaces/VariableAbilityParseContext.md)) => `VariableDeclarationJSON`\[]

#### Type declaration

(`v`, `ctx`): `VariableDeclarationJSON`\[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `V` |
| `ctx` | [`VariableAbilityParseContext`](/auto-docs/node-variable-plugin/interfaces/VariableAbilityParseContext.md) |

##### Returns

`VariableDeclarationJSON`\[]

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
