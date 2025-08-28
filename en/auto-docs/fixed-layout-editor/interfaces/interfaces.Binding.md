# Interface: Binding\<TActivated>

[interfaces](/en/auto-docs/fixed-layout-editor/modules/interfaces.md).Binding

## Type parameters

| Name | Type |
| :------ | :------ |
| `TActivated` | `unknown` |

## Hierarchy

* [`Clonable`](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Clonable.md)<[`Binding`](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md)<`TActivated`>>

  ↳ **`Binding`**

## Table of contents

### Properties

* [activated](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#activated)
* [cache](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#cache)
* [constraint](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#constraint)
* [dynamicValue](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#dynamicvalue)
* [factory](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#factory)
* [id](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#id)
* [implementationType](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#implementationtype)
* [moduleId](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#moduleid)
* [onActivation](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#onactivation)
* [onDeactivation](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#ondeactivation)
* [provider](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#provider)
* [scope](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#scope)
* [serviceIdentifier](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#serviceidentifier)
* [type](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#type)

### Methods

* [clone](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md#clone)

## Properties

### activated

**activated**: `boolean`

***

### cache

**cache**: `null` | `TActivated` | `Promise`<`TActivated`>

***

### constraint

**constraint**: [`ConstraintFunction`](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.ConstraintFunction.md)

***

### dynamicValue

**dynamicValue**: `null` | [`DynamicValue`](/en/auto-docs/fixed-layout-editor/types/interfaces.DynamicValue.md)<`TActivated`>

***

### factory

**factory**: `null` | [`FactoryCreator`](/en/auto-docs/fixed-layout-editor/types/interfaces.FactoryCreator.md)<`unknown`, `unknown`\[], `unknown`\[]>

***

### id

**id**: `number`

***

### implementationType

**implementationType**: `null` | `TActivated` | [`Newable`](/en/auto-docs/fixed-layout-editor/types/interfaces.Newable.md)<`TActivated`>

***

### moduleId

**moduleId**: `number`

***

### onActivation

**onActivation**: `null` | [`BindingActivation`](/en/auto-docs/fixed-layout-editor/types/interfaces.BindingActivation.md)<`TActivated`>

***

### onDeactivation

**onDeactivation**: `null` | [`BindingDeactivation`](/en/auto-docs/fixed-layout-editor/types/interfaces.BindingDeactivation.md)<`TActivated`>

***

### provider

**provider**: `null` | [`ProviderCreator`](/en/auto-docs/fixed-layout-editor/types/interfaces.ProviderCreator.md)<`unknown`>

***

### scope

**scope**: [`BindingScope`](/en/auto-docs/fixed-layout-editor/types/interfaces.BindingScope.md)

***

### serviceIdentifier

**serviceIdentifier**: [`ServiceIdentifier`](/en/auto-docs/fixed-layout-editor/types/interfaces.ServiceIdentifier.md)<`TActivated`>

***

### type

**type**: [`BindingType`](/en/auto-docs/fixed-layout-editor/types/interfaces.BindingType.md)

## Methods

### clone

**clone**(): [`Binding`](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md)<`TActivated`>

#### Returns

[`Binding`](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Binding.md)<`TActivated`>

#### Inherited from

[Clonable](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Clonable.md).[clone](/en/auto-docs/fixed-layout-editor/interfaces/interfaces.Clonable.md#clone)
