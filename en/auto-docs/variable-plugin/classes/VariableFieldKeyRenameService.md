# Class: VariableFieldKeyRenameService

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#constructor)

### Properties

* [disposeInListEmitter](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#disposeinlistemitter)
* [onDisposeInList](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#ondisposeinlist)
* [onRename](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#onrename)
* [renameEmitter](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#renameemitter)
* [toDispose](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#todispose)
* [variableEngine](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#variableengine)

### Methods

* [dispose](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#dispose)
* [handleFieldListChange](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#handlefieldlistchange)
* [init](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#init)
* [notifyFieldsDispose](/en/auto-docs/variable-plugin/classes/VariableFieldKeyRenameService.md#notifyfieldsdispose)

## Constructors

### constructor

**new VariableFieldKeyRenameService**()

## Properties

### disposeInListEmitter

**disposeInListEmitter**: `Emitter`<[`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>>

***

### onDisposeInList

**onDisposeInList**: `Event`<[`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>>

***

### onRename

**onRename**: `Event`<`RenameInfo`>

***

### renameEmitter

**renameEmitter**: `Emitter`<`RenameInfo`>

***

### toDispose

**toDispose**: `DisposableCollection`

***

### variableEngine

**variableEngine**: [`VariableEngine`](/en/auto-docs/variable-plugin/classes/VariableEngine.md)

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

***

### handleFieldListChange

**handleFieldListChange**(`ast?`, `prev?`, `next?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ast?` | [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`> |
| `prev?` | [`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[] |
| `next?` | [`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[] |

#### Returns

`void`

***

### init

**init**(): `void`

#### Returns

`void`

***

### notifyFieldsDispose

**notifyFieldsDispose**(`prev?`, `next?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prev?` | [`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[] |
| `next?` | [`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[] |

#### Returns

`void`
