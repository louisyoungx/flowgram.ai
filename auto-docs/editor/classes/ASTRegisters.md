# Class: ASTRegisters

## Table of contents

### Constructors

* [constructor](/auto-docs/editor/classes/ASTRegisters.md#constructor)

### Methods

* [createAST](/auto-docs/editor/classes/ASTRegisters.md#createast)
* [getASTRegistryByKind](/auto-docs/editor/classes/ASTRegisters.md#getastregistrybykind)
* [registerAST](/auto-docs/editor/classes/ASTRegisters.md#registerast)

## Constructors

### constructor

**new ASTRegisters**()

核心 AST 节点注册

## Methods

### createAST

**createAST**<`ReturnNode`>(`json`, `«destructured»`): `ReturnNode`

创建 AST 节点

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnNode` | extends [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`, `ReturnNode`> = [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`ASTNodeJSON`](/auto-docs/editor/interfaces/ASTNodeJSON.md) |
| `«destructured»` | [`CreateASTParams`](/auto-docs/editor/interfaces/CreateASTParams.md) |

#### Returns

`ReturnNode`

***

### getASTRegistryByKind

**getASTRegistryByKind**(`kind`): `undefined` | [`ASTNodeRegistry`](/auto-docs/editor/interfaces/ASTNodeRegistry.md)<`any`, `any`>

根据 AST 节点类型获取节点 Registry

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind` | `string` |

#### Returns

`undefined` | [`ASTNodeRegistry`](/auto-docs/editor/interfaces/ASTNodeRegistry.md)<`any`, `any`>

***

### registerAST

**registerAST**(`ASTNode`, `injector?`): `void`

注册 AST 节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `ASTNode` | [`ASTNodeRegistry`](/auto-docs/editor/interfaces/ASTNodeRegistry.md)<`any`, `any`> |
| `injector?` | `DataInjector` |

#### Returns

`void`
