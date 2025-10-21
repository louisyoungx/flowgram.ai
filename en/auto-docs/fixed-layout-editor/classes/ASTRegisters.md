# Class: ASTRegisters

Register the AST node to the engine.

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

Core AST node registration.

## Methods

### createAST

**createAST**<`ReturnNode`>(`json`, `«destructured»`): `ReturnNode`

Creates an AST node.

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

Gets the node Registry by AST node type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind` | `string` |

#### Returns

`undefined` | [`ASTNodeRegistry`](/en/auto-docs/fixed-layout-editor/interfaces/ASTNodeRegistry.md)<`any`, `any`>

***

### registerAST

**registerAST**(`ASTNode`, `injector?`): `void`

Registers an AST node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ASTNode` | [`ASTNodeRegistry`](/en/auto-docs/fixed-layout-editor/interfaces/ASTNodeRegistry.md)<`any`, `any`> |
| `injector?` | `DataInjector` |

#### Returns

`void`
