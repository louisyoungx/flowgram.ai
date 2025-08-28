# Class: ASTRegisters

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-core/classes/ASTRegisters.md#constructor)

### Methods

* [createAST](/auto-docs/variable-core/classes/ASTRegisters.md#createast)
* [getASTRegistryByKind](/auto-docs/variable-core/classes/ASTRegisters.md#getastregistrybykind)
* [registerAST](/auto-docs/variable-core/classes/ASTRegisters.md#registerast)

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
| `ReturnNode` | extends [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`, `ReturnNode`> = [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md) |
| `«destructured»` | [`CreateASTParams`](/auto-docs/variable-core/interfaces/CreateASTParams.md) |

#### Returns

`ReturnNode`

***

### getASTRegistryByKind

**getASTRegistryByKind**(`kind`): `undefined` | [`ASTNodeRegistry`](/auto-docs/variable-core/interfaces/ASTNodeRegistry.md)<`any`, `any`>

根据 AST 节点类型获取节点 Registry

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind` | `string` |

#### Returns

`undefined` | [`ASTNodeRegistry`](/auto-docs/variable-core/interfaces/ASTNodeRegistry.md)<`any`, `any`>

***

### registerAST

**registerAST**(`ASTNode`, `injector?`): `void`

注册 AST 节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `ASTNode` | [`ASTNodeRegistry`](/auto-docs/variable-core/interfaces/ASTNodeRegistry.md)<`any`, `any`> |
| `injector?` | `DataInjector` |

#### Returns

`void`
