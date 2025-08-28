# Interface: PlaygroundContainerFactory

## Table of contents

### Properties

* [createChild](/auto-docs/free-layout-editor/interfaces/PlaygroundContainerFactory.md#createchild)
* [get](/auto-docs/free-layout-editor/interfaces/PlaygroundContainerFactory.md#get)
* [getAll](/auto-docs/free-layout-editor/interfaces/PlaygroundContainerFactory.md#getall)

## Properties

### createChild

**createChild**: () => [`Container`](/auto-docs/free-layout-editor/interfaces/interfaces.Container.md)

#### Type declaration

(): [`Container`](/auto-docs/free-layout-editor/interfaces/interfaces.Container.md)

##### Returns

[`Container`](/auto-docs/free-layout-editor/interfaces/interfaces.Container.md)

***

### get

**get**: \<T>(`serviceIdentifier`: [`ServiceIdentifier`](/auto-docs/free-layout-editor/types/interfaces.ServiceIdentifier.md)<`T`>) => `T`

#### Type declaration

<`T`>(`serviceIdentifier`): `T`

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | [`ServiceIdentifier`](/auto-docs/free-layout-editor/types/interfaces.ServiceIdentifier.md)<`T`> |

##### Returns

`T`

***

### getAll

**getAll**: \<T>(`serviceIdentifier`: [`ServiceIdentifier`](/auto-docs/free-layout-editor/types/interfaces.ServiceIdentifier.md)<`T`>, `options?`: [`GetAllOptions`](/auto-docs/free-layout-editor/interfaces/interfaces.GetAllOptions.md)) => `T`\[]

#### Type declaration

<`T`>(`serviceIdentifier`, `options?`): `T`\[]

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | [`ServiceIdentifier`](/auto-docs/free-layout-editor/types/interfaces.ServiceIdentifier.md)<`T`> |
| `options?` | [`GetAllOptions`](/auto-docs/free-layout-editor/interfaces/interfaces.GetAllOptions.md) |

##### Returns

`T`\[]
