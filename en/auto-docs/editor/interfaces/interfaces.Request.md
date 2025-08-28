# Interface: Request

[interfaces](/en/auto-docs/editor/modules/interfaces.md).Request

## Table of contents

### Properties

* [bindings](/en/auto-docs/editor/interfaces/interfaces.Request.md#bindings)
* [childRequests](/en/auto-docs/editor/interfaces/interfaces.Request.md#childrequests)
* [id](/en/auto-docs/editor/interfaces/interfaces.Request.md#id)
* [parentContext](/en/auto-docs/editor/interfaces/interfaces.Request.md#parentcontext)
* [parentRequest](/en/auto-docs/editor/interfaces/interfaces.Request.md#parentrequest)
* [requestScope](/en/auto-docs/editor/interfaces/interfaces.Request.md#requestscope)
* [serviceIdentifier](/en/auto-docs/editor/interfaces/interfaces.Request.md#serviceidentifier)
* [target](/en/auto-docs/editor/interfaces/interfaces.Request.md#target)

### Methods

* [addChildRequest](/en/auto-docs/editor/interfaces/interfaces.Request.md#addchildrequest)

## Properties

### bindings

**bindings**: [`Binding`](/en/auto-docs/editor/interfaces/interfaces.Binding.md)<`unknown`>\[]

***

### childRequests

**childRequests**: [`Request`](/en/auto-docs/editor/interfaces/interfaces.Request.md)\[]

***

### id

**id**: `number`

***

### parentContext

**parentContext**: [`Context`](/en/auto-docs/editor/interfaces/interfaces.Context.md)

***

### parentRequest

**parentRequest**: `null` | [`Request`](/en/auto-docs/editor/interfaces/interfaces.Request.md)

***

### requestScope

**requestScope**: `null` | [`RequestScope`](/en/auto-docs/editor/types/interfaces.RequestScope.md)

***

### serviceIdentifier

**serviceIdentifier**: [`ServiceIdentifier`](/en/auto-docs/editor/types/interfaces.ServiceIdentifier.md)<`unknown`>

***

### target

**target**: `LegacyTarget`

## Methods

### addChildRequest

**addChildRequest**(`serviceIdentifier`, `bindings`, `target`): [`Request`](/en/auto-docs/editor/interfaces/interfaces.Request.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | [`ServiceIdentifier`](/en/auto-docs/editor/types/interfaces.ServiceIdentifier.md)<`unknown`> |
| `bindings` | [`Binding`](/en/auto-docs/editor/interfaces/interfaces.Binding.md)<`unknown`> | [`Binding`](/en/auto-docs/editor/interfaces/interfaces.Binding.md)<`unknown`>\[] |
| `target` | `LegacyTarget` |

#### Returns

[`Request`](/en/auto-docs/editor/interfaces/interfaces.Request.md)
