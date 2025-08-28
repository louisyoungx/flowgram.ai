# Interface: VariableDeclarationListJSON\<VariableMeta>

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

## Table of contents

### Properties

* [declarations](/auto-docs/fixed-layout-editor/interfaces/VariableDeclarationListJSON.md#declarations)
* [startOrder](/auto-docs/fixed-layout-editor/interfaces/VariableDeclarationListJSON.md#startorder)

## Properties

### declarations

`Optional` **declarations**: [`VariableDeclarationJSON`](/auto-docs/fixed-layout-editor/types/VariableDeclarationJSON.md)<`VariableMeta`>\[]

declarations 一定是 VariableDeclaration 类型，因此业务可以不用填 kind

***

### startOrder

`Optional` **startOrder**: `number`
