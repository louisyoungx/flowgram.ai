# Class: ASTRegisters

Register the AST node to the engine.

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-plugin/classes/ASTRegisters.md#constructor)

### Methods

* [createAST](/auto-docs/variable-plugin/classes/ASTRegisters.md#createast)
* [getASTRegistryByKind](/auto-docs/variable-plugin/classes/ASTRegisters.md#getastregistrybykind)
* [registerAST](/auto-docs/variable-plugin/classes/ASTRegisters.md#registerast)

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
| `ReturnNode` | extends [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`, `ReturnNode`> = [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) |
| `«destructured»` | [`CreateASTParams`](/auto-docs/variable-plugin/interfaces/CreateASTParams.md) |

#### Returns

`ReturnNode`

***

### getASTRegistryByKind

**getASTRegistryByKind**(`kind`): `undefined` | [`ASTNodeRegistry`](/auto-docs/variable-plugin/interfaces/ASTNodeRegistry.md)<`any`, `any`>

Gets the node Registry by AST node type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind` | `string` |

#### Returns

`undefined` | [`ASTNodeRegistry`](/auto-docs/variable-plugin/interfaces/ASTNodeRegistry.md)<`any`, `any`>

***

### registerAST

**registerAST**(`ASTNode`, `injector?`): `void`

Registers an AST node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ASTNode` | [`ASTNodeRegistry`](/auto-docs/variable-plugin/interfaces/ASTNodeRegistry.md)<`any`, `any`> |
| `injector?` | `DataInjector` |

#### Returns

`void`
