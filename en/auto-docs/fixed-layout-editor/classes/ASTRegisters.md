# Class: ASTRegisters

## Table of contents

### Constructors

* [constructor](/en/auto-docs/fixed-layout-editor/classes/ASTRegisters.md#constructor)

### Methods

* [createAST](/en/auto-docs/fixed-layout-editor/classes/ASTRegisters.md#createast)
* [getASTRegistryByKind](/en/auto-docs/fixed-layout-editor/classes/ASTRegisters.md#getastregistrybykind)
* [registerAST](/en/auto-docs/fixed-layout-editor/classes/ASTRegisters.md#registerast)

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
| `ReturnNode` | extends [`ASTNode`](/en/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`, `ReturnNode`> = [`ASTNode`](/en/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`ASTNodeJSON`](/en/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) |
| `«destructured»` | [`CreateASTParams`](/en/auto-docs/fixed-layout-editor/interfaces/CreateASTParams.md) |

#### Returns

`ReturnNode`

***

### getASTRegistryByKind

**getASTRegistryByKind**(`kind`): `undefined` | [`ASTNodeRegistry`](/en/auto-docs/fixed-layout-editor/interfaces/ASTNodeRegistry.md)<`any`, `any`>

根据 AST 节点类型获取节点 Registry

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind` | `string` |

#### Returns

`undefined` | [`ASTNodeRegistry`](/en/auto-docs/fixed-layout-editor/interfaces/ASTNodeRegistry.md)<`any`, `any`>

***

### registerAST

**registerAST**(`ASTNode`, `injector?`): `void`

注册 AST 节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `ASTNode` | [`ASTNodeRegistry`](/en/auto-docs/fixed-layout-editor/interfaces/ASTNodeRegistry.md)<`any`, `any`> |
| `injector?` | `DataInjector` |

#### Returns

`void`
