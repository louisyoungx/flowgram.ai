# Class: FlowNodeVariableData

## Hierarchy

* `EntityData`

  ↳ **`FlowNodeVariableData`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#constructor)

### Properties

* [entity](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#entity)
* [onDataChange](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#ondatachange)
* [onWillChange](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#onwillchange)
* [opts](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#opts)
* [toDispose](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#todispose)
* [variableEngine](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#variableengine)
* [type](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#type)

### Accessors

* [allScopes](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#allscopes)
* [changeLocked](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#changelocked)
* [data](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#data)
* [disposed](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#disposed)
* [onDispose](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#ondispose)
* [private](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#private)
* [public](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#public)
* [type](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#type-1)
* [version](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#version)

### Methods

* [checkChanged](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#checkchanged)
* [clearPrivateVar](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#clearprivatevar)
* [clearVar](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#clearvar)
* [dispose](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#dispose)
* [fireChange](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#firechange)
* [fireWillChange](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#firewillchange)
* [fromJSON](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#fromjson)
* [fullyUpdate](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#fullyupdate)
* [getByKeyPath](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#getbykeypath)
* [getByKeyPathInPrivate](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#getbykeypathinprivate)
* [getDefaultData](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#getdefaultdata)
* [getPrivateVar](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#getprivatevar)
* [getVar](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#getvar)
* [initPrivate](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#initprivate)
* [setPrivateVar](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#setprivatevar)
* [setVar](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#setvar)
* [toJSON](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#tojson)
* [update](/auto-docs/variable-plugin/classes/FlowNodeVariableData.md#update)

## Constructors

### constructor

**new FlowNodeVariableData**(`entity`, `opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `FlowNodeEntity` |
| `opts` | `Options` |

#### Overrides

EntityData.constructor

## Properties

### entity

**entity**: `FlowNodeEntity`

#### Overrides

EntityData.entity

***

### onDataChange

`Readonly` **onDataChange**: `Event`<`EntityData`<`any`, {}>>

修改后触发

#### Inherited from

EntityData.onDataChange

***

### onWillChange

`Readonly` **onWillChange**: `Event`<`EntityData`<`any`, {}>>

修改前触发

#### Inherited from

EntityData.onWillChange

***

### opts

`Readonly` **opts**: `Options`

#### Overrides

EntityData.opts

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

#### Inherited from

EntityData.toDispose

***

### variableEngine

`Readonly` **variableEngine**: [`VariableEngine`](/auto-docs/variable-plugin/classes/VariableEngine.md)

***

### type

`Static` **type**: `string`

#### Overrides

EntityData.type

## Accessors

### allScopes

`get` **allScopes**(): [`FlowNodeScope`](/auto-docs/variable-plugin/interfaces/FlowNodeScope.md)\[]

#### Returns

[`FlowNodeScope`](/auto-docs/variable-plugin/interfaces/FlowNodeScope.md)\[]

***

### changeLocked

`get` **changeLocked**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EntityData.changeLocked

`set` **changeLocked**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `boolean` |

#### Returns

`void`

#### Inherited from

EntityData.changeLocked

***

### data

`get` **data**(): `DATA`

当前数据

#### Returns

`DATA`

#### Inherited from

EntityData.data

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EntityData.disposed

***

### onDispose

`get` **onDispose**(): `Event`<`void`>

#### Returns

`Event`<`void`>

#### Inherited from

EntityData.onDispose

***

### private

`get` **private**(): `undefined` | [`FlowNodeScope`](/auto-docs/variable-plugin/interfaces/FlowNodeScope.md)

#### Returns

`undefined` | [`FlowNodeScope`](/auto-docs/variable-plugin/interfaces/FlowNodeScope.md)

***

### public

`get` **public**(): [`FlowNodeScope`](/auto-docs/variable-plugin/interfaces/FlowNodeScope.md)

#### Returns

[`FlowNodeScope`](/auto-docs/variable-plugin/interfaces/FlowNodeScope.md)

***

### type

`get` **type**(): `string`

data 类型

#### Returns

`string`

#### Inherited from

EntityData.type

***

### version

`get` **version**(): `number`

#### Returns

`number`

#### Inherited from

EntityData.version

## Methods

### checkChanged

**checkChanged**(`newProps`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newProps` | `any` |

#### Returns

`boolean`

**`Deprecated`**

检测属性是否更改，默认采用浅比较

#### Inherited from

EntityData.checkChanged

***

### clearPrivateVar

**clearPrivateVar**(`key?`): `undefined` | `void`

Clears a variable from the private AST (Abstract Syntax Tree) by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to clear. Defaults to 'outputs'. |

#### Returns

`undefined` | `void`

The updated AST node.

***

### clearVar

**clearVar**(`key?`): `void`

Clears a variable from the public AST (Abstract Syntax Tree) by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to clear. Defaults to 'outputs'. |

#### Returns

`void`

The updated AST node.

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

EntityData.dispose

***

### fireChange

**fireChange**(): `void`

#### Returns

`void`

#### Inherited from

EntityData.fireChange

***

### fireWillChange

**fireWillChange**(): `void`

#### Returns

`void`

#### Inherited from

EntityData.fireWillChange

***

### fromJSON

**fromJSON**(`data`): `void`

还原数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`void`

#### Inherited from

EntityData.fromJSON

***

### fullyUpdate

**fullyUpdate**(`props`): `void`

更新全量数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`void`

#### Inherited from

EntityData.fullyUpdate

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

Find a variable field by key path in the public scope by scope chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyPath` | `string`\[] | The key path of the variable field. |

#### Returns

`undefined` | [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

The variable field, or undefined if not found.

***

### getByKeyPathInPrivate

**getByKeyPathInPrivate**(`keyPath`): `undefined` | [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

Find a variable field by key path in the private scope by scope chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyPath` | `string`\[] | The key path of the variable field. |

#### Returns

`undefined` | [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

The variable field, or undefined if not found.

***

### getDefaultData

**getDefaultData**(): `Object`

#### Returns

`Object`

#### Overrides

EntityData.getDefaultData

***

### getPrivateVar

**getPrivateVar**(`key?`): `undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Retrieves a variable from the private AST (Abstract Syntax Tree) by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to retrieve. Defaults to 'outputs'. |

#### Returns

`undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The value of the variable, or undefined if not found.

***

### getVar

**getVar**(`key?`): `undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Retrieves a variable from the public AST (Abstract Syntax Tree) by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to retrieve. Defaults to 'outputs'. |

#### Returns

`undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The value of the variable, or undefined if not found.

***

### initPrivate

**initPrivate**(): [`FlowNodeScope`](/auto-docs/variable-plugin/interfaces/FlowNodeScope.md)

#### Returns

[`FlowNodeScope`](/auto-docs/variable-plugin/interfaces/FlowNodeScope.md)

***

### setPrivateVar

**setPrivateVar**(`key`, `json`): [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the private AST (Abstract Syntax Tree) with the given key and JSON value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key under which the variable will be stored. |
| `json` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

**setPrivateVar**(`json`): [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the private AST (Abstract Syntax Tree) with the default key 'outputs'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

***

### setVar

**setVar**(`key`, `json`): [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the public AST (Abstract Syntax Tree) with the given key and JSON value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key under which the variable will be stored. |
| `json` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

**setVar**(`json`): [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the public AST (Abstract Syntax Tree) with the default key 'outputs'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

***

### toJSON

**toJSON**(): `any`

存储数据，一般在关闭浏览器后需要暂时存到 localStorage

#### Returns

`any`

#### Inherited from

EntityData.toJSON

***

### update

**update**(`props`, `value?`): `void`

更新单个数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |
| `value?` | `any` |

#### Returns

`void`

#### Inherited from

EntityData.update
