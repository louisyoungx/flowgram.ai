# Interface: VariableDeclarationListJSON\<VariableMeta>

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

## Table of contents

### Properties

* [declarations](/en/auto-docs/editor/interfaces/VariableDeclarationListJSON.md#declarations)
* [startOrder](/en/auto-docs/editor/interfaces/VariableDeclarationListJSON.md#startorder)

## Properties

### declarations

`Optional` **declarations**: [`VariableDeclarationJSON`](/en/auto-docs/editor/types/VariableDeclarationJSON.md)<`VariableMeta`>\[]

declarations 一定是 VariableDeclaration 类型，因此业务可以不用填 kind

***

### startOrder

`Optional` **startOrder**: `number`
