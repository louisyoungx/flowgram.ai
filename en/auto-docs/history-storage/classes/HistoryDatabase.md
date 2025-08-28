# Class: HistoryDatabase

历史数据库

## Hierarchy

* `Dexie`

  ↳ **`HistoryDatabase`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/history-storage/classes/HistoryDatabase.md#constructor)

### Properties

* [Collection](/en/auto-docs/history-storage/classes/HistoryDatabase.md#collection)
* [Table](/en/auto-docs/history-storage/classes/HistoryDatabase.md#table)
* [Transaction](/en/auto-docs/history-storage/classes/HistoryDatabase.md#transaction)
* [Version](/en/auto-docs/history-storage/classes/HistoryDatabase.md#version)
* [WhereClause](/en/auto-docs/history-storage/classes/HistoryDatabase.md#whereclause)
* [\_allTables](/en/auto-docs/history-storage/classes/HistoryDatabase.md#_alltables)
* [\_createTransaction](/en/auto-docs/history-storage/classes/HistoryDatabase.md#_createtransaction)
* [\_dbSchema](/en/auto-docs/history-storage/classes/HistoryDatabase.md#_dbschema)
* [\_novip](/en/auto-docs/history-storage/classes/HistoryDatabase.md#_novip)
* [core](/en/auto-docs/history-storage/classes/HistoryDatabase.md#core)
* [history](/en/auto-docs/history-storage/classes/HistoryDatabase.md#history)
* [name](/en/auto-docs/history-storage/classes/HistoryDatabase.md#name)
* [on](/en/auto-docs/history-storage/classes/HistoryDatabase.md#on)
* [operation](/en/auto-docs/history-storage/classes/HistoryDatabase.md#operation)
* [resourceStorageLimit](/en/auto-docs/history-storage/classes/HistoryDatabase.md#resourcestoragelimit)
* [tables](/en/auto-docs/history-storage/classes/HistoryDatabase.md#tables)
* [verno](/en/auto-docs/history-storage/classes/HistoryDatabase.md#verno)
* [vip](/en/auto-docs/history-storage/classes/HistoryDatabase.md#vip)
* [AbortError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#aborterror)
* [BulkError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#bulkerror)
* [ConstraintError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#constrainterror)
* [DataCloneError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#datacloneerror)
* [DataError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#dataerror)
* [DatabaseClosedError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#databaseclosederror)
* [DexieError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#dexieerror)
* [Events](/en/auto-docs/history-storage/classes/HistoryDatabase.md#events)
* [ForeignAwaitError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#foreignawaiterror)
* [InternalError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#internalerror)
* [InvalidAccessError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#invalidaccesserror)
* [InvalidArgumentError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#invalidargumenterror)
* [InvalidStateError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#invalidstateerror)
* [InvalidTableError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#invalidtableerror)
* [MissingAPIError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#missingapierror)
* [ModifyError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#modifyerror)
* [NoSuchDatabaseError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#nosuchdatabaseerror)
* [NotFoundError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#notfounderror)
* [OpenFailedError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#openfailederror)
* [PrematureCommitError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#prematurecommiterror)
* [Promise](/en/auto-docs/history-storage/classes/HistoryDatabase.md#promise)
* [QuotaExceededError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#quotaexceedederror)
* [ReadOnlyError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#readonlyerror)
* [SchemaError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#schemaerror)
* [SubTransactionError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#subtransactionerror)
* [TimeoutError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#timeouterror)
* [TransactionInactiveError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#transactioninactiveerror)
* [UnknownError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#unknownerror)
* [UnsupportedError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#unsupportederror)
* [UpgradeError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#upgradeerror)
* [VersionChangeError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#versionchangeerror)
* [VersionError](/en/auto-docs/history-storage/classes/HistoryDatabase.md#versionerror)
* [addons](/en/auto-docs/history-storage/classes/HistoryDatabase.md#addons)
* [cache](/en/auto-docs/history-storage/classes/HistoryDatabase.md#cache)
* [currentTransaction](/en/auto-docs/history-storage/classes/HistoryDatabase.md#currenttransaction)
* [debug](/en/auto-docs/history-storage/classes/HistoryDatabase.md#debug)
* [default](/en/auto-docs/history-storage/classes/HistoryDatabase.md#default)
* [dependencies](/en/auto-docs/history-storage/classes/HistoryDatabase.md#dependencies)
* [disableBfCache](/en/auto-docs/history-storage/classes/HistoryDatabase.md#disablebfcache)
* [errnames](/en/auto-docs/history-storage/classes/HistoryDatabase.md#errnames)
* [maxKey](/en/auto-docs/history-storage/classes/HistoryDatabase.md#maxkey)
* [minKey](/en/auto-docs/history-storage/classes/HistoryDatabase.md#minkey)
* [on](/en/auto-docs/history-storage/classes/HistoryDatabase.md#on-1)
* [semVer](/en/auto-docs/history-storage/classes/HistoryDatabase.md#semver)
* [version](/en/auto-docs/history-storage/classes/HistoryDatabase.md#version-1)

### Methods

* [addHistoryRecord](/en/auto-docs/history-storage/classes/HistoryDatabase.md#addhistoryrecord)
* [addOperationRecord](/en/auto-docs/history-storage/classes/HistoryDatabase.md#addoperationrecord)
* [allHistoryByResourceURI](/en/auto-docs/history-storage/classes/HistoryDatabase.md#allhistorybyresourceuri)
* [allOperationByResourceURI](/en/auto-docs/history-storage/classes/HistoryDatabase.md#alloperationbyresourceuri)
* [backendDB](/en/auto-docs/history-storage/classes/HistoryDatabase.md#backenddb)
* [close](/en/auto-docs/history-storage/classes/HistoryDatabase.md#close)
* [delete](/en/auto-docs/history-storage/classes/HistoryDatabase.md#delete)
* [dynamicallyOpened](/en/auto-docs/history-storage/classes/HistoryDatabase.md#dynamicallyopened)
* [getHistoryByUUID](/en/auto-docs/history-storage/classes/HistoryDatabase.md#gethistorybyuuid)
* [hasBeenClosed](/en/auto-docs/history-storage/classes/HistoryDatabase.md#hasbeenclosed)
* [hasFailed](/en/auto-docs/history-storage/classes/HistoryDatabase.md#hasfailed)
* [isOpen](/en/auto-docs/history-storage/classes/HistoryDatabase.md#isopen)
* [open](/en/auto-docs/history-storage/classes/HistoryDatabase.md#open)
* [reset](/en/auto-docs/history-storage/classes/HistoryDatabase.md#reset)
* [resetByResourceURI](/en/auto-docs/history-storage/classes/HistoryDatabase.md#resetbyresourceuri)
* [table](/en/auto-docs/history-storage/classes/HistoryDatabase.md#table-1)
* [transaction](/en/auto-docs/history-storage/classes/HistoryDatabase.md#transaction-1)
* [unuse](/en/auto-docs/history-storage/classes/HistoryDatabase.md#unuse)
* [updateHistoryByUUID](/en/auto-docs/history-storage/classes/HistoryDatabase.md#updatehistorybyuuid)
* [updateOperationRecord](/en/auto-docs/history-storage/classes/HistoryDatabase.md#updateoperationrecord)
* [use](/en/auto-docs/history-storage/classes/HistoryDatabase.md#use)
* [version](/en/auto-docs/history-storage/classes/HistoryDatabase.md#version-2)
* [asap](/en/auto-docs/history-storage/classes/HistoryDatabase.md#asap)
* [deepClone](/en/auto-docs/history-storage/classes/HistoryDatabase.md#deepclone)
* [delByKeyPath](/en/auto-docs/history-storage/classes/HistoryDatabase.md#delbykeypath)
* [delete](/en/auto-docs/history-storage/classes/HistoryDatabase.md#delete-1)
* [exists](/en/auto-docs/history-storage/classes/HistoryDatabase.md#exists)
* [extendObservabilitySet](/en/auto-docs/history-storage/classes/HistoryDatabase.md#extendobservabilityset)
* [getByKeyPath](/en/auto-docs/history-storage/classes/HistoryDatabase.md#getbykeypath)
* [getDatabaseNames](/en/auto-docs/history-storage/classes/HistoryDatabase.md#getdatabasenames)
* [ignoreTransaction](/en/auto-docs/history-storage/classes/HistoryDatabase.md#ignoretransaction)
* [liveQuery](/en/auto-docs/history-storage/classes/HistoryDatabase.md#livequery)
* [override](/en/auto-docs/history-storage/classes/HistoryDatabase.md#override)
* [setByKeyPath](/en/auto-docs/history-storage/classes/HistoryDatabase.md#setbykeypath)
* [shallowClone](/en/auto-docs/history-storage/classes/HistoryDatabase.md#shallowclone)
* [vip](/en/auto-docs/history-storage/classes/HistoryDatabase.md#vip-1)
* [waitFor](/en/auto-docs/history-storage/classes/HistoryDatabase.md#waitfor)

## Constructors

### constructor

**new HistoryDatabase**(`databaseName?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `databaseName` | `string` | `'ide-history-storage'` |

#### Overrides

Dexie.constructor

## Properties

### Collection

**Collection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `Collection`<`any`, `IndexableType`, `any`> |

#### Inherited from

Dexie.Collection

***

### Table

**Table**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `Table`<`any`, `any`, `any`> |

#### Inherited from

Dexie.Table

***

### Transaction

**Transaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `Transaction` |

#### Inherited from

Dexie.Transaction

***

### Version

**Version**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `Version` |

#### Inherited from

Dexie.Version

***

### WhereClause

**WhereClause**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `WhereClause`<`any`, `IndexableType`, `any`> |

#### Inherited from

Dexie.WhereClause

***

### \_allTables

`Readonly` **\_allTables**: `Object`

#### Index signature

▪ \[name: `string`]: `Table`<`any`, `IndexableType`>

#### Inherited from

Dexie.\_allTables

***

### \_createTransaction

**\_createTransaction**: (`this`: `Dexie`, `mode`: `IDBTransactionMode`, `storeNames`: `ArrayLike`<`string`>, `dbschema`: `DbSchema`, `parentTransaction?`: `null` | `Transaction`) => `Transaction`

#### Type declaration

(`this`, `mode`, `storeNames`, `dbschema`, `parentTransaction?`): `Transaction`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Dexie` |
| `mode` | `IDBTransactionMode` |
| `storeNames` | `ArrayLike`<`string`> |
| `dbschema` | `DbSchema` |
| `parentTransaction?` | `null` | `Transaction` |

##### Returns

`Transaction`

#### Inherited from

Dexie.\_createTransaction

***

### \_dbSchema

**\_dbSchema**: `DbSchema`

#### Inherited from

Dexie.\_dbSchema

***

### \_novip

`Readonly` **\_novip**: `Dexie`

#### Inherited from

Dexie.\_novip

***

### core

`Readonly` **core**: `DBCore`

#### Inherited from

Dexie.core

***

### history

`Readonly` **history**: `Table`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md), `any`, [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)>

***

### name

`Readonly` **name**: `string`

#### Inherited from

Dexie.name

***

### on

**on**: `DbEvents`

#### Inherited from

Dexie.on

***

### operation

`Readonly` **operation**: `Table`<[`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md), `any`, [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)>

***

### resourceStorageLimit

**resourceStorageLimit**: `number` = `100`

***

### tables

`Readonly` **tables**: `Table`<`any`, `any`, `any`>\[]

#### Inherited from

Dexie.tables

***

### verno

`Readonly` **verno**: `number`

#### Inherited from

Dexie.verno

***

### vip

`Readonly` **vip**: `Dexie`

#### Inherited from

Dexie.vip

***

### AbortError

`Static` **AbortError**: `DexieErrorConstructor`

#### Inherited from

Dexie.AbortError

***

### BulkError

`Static` **BulkError**: `BulkErrorConstructor`

#### Inherited from

Dexie.BulkError

***

### ConstraintError

`Static` **ConstraintError**: `DexieErrorConstructor`

#### Inherited from

Dexie.ConstraintError

***

### DataCloneError

`Static` **DataCloneError**: `DexieErrorConstructor`

#### Inherited from

Dexie.DataCloneError

***

### DataError

`Static` **DataError**: `DexieErrorConstructor`

#### Inherited from

Dexie.DataError

***

### DatabaseClosedError

`Static` **DatabaseClosedError**: `DexieErrorConstructor`

#### Inherited from

Dexie.DatabaseClosedError

***

### DexieError

`Static` **DexieError**: `DexieErrorConstructor`

#### Inherited from

Dexie.DexieError

***

### Events

`Static` **Events**: (`ctx?`: `any`) => `DexieEventSet`

#### Type declaration

(`ctx?`): `DexieEventSet`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx?` | `any` |

##### Returns

`DexieEventSet`

#### Inherited from

Dexie.Events

***

### ForeignAwaitError

`Static` **ForeignAwaitError**: `DexieErrorConstructor`

#### Inherited from

Dexie.ForeignAwaitError

***

### InternalError

`Static` **InternalError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InternalError

***

### InvalidAccessError

`Static` **InvalidAccessError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InvalidAccessError

***

### InvalidArgumentError

`Static` **InvalidArgumentError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InvalidArgumentError

***

### InvalidStateError

`Static` **InvalidStateError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InvalidStateError

***

### InvalidTableError

`Static` **InvalidTableError**: `DexieErrorConstructor`

#### Inherited from

Dexie.InvalidTableError

***

### MissingAPIError

`Static` **MissingAPIError**: `DexieErrorConstructor`

#### Inherited from

Dexie.MissingAPIError

***

### ModifyError

`Static` **ModifyError**: `ModifyErrorConstructor`

#### Inherited from

Dexie.ModifyError

***

### NoSuchDatabaseError

`Static` **NoSuchDatabaseError**: `DexieErrorConstructor`

#### Inherited from

Dexie.NoSuchDatabaseError

***

### NotFoundError

`Static` **NotFoundError**: `DexieErrorConstructor`

#### Inherited from

Dexie.NotFoundError

***

### OpenFailedError

`Static` **OpenFailedError**: `DexieErrorConstructor`

#### Inherited from

Dexie.OpenFailedError

***

### PrematureCommitError

`Static` **PrematureCommitError**: `DexieErrorConstructor`

#### Inherited from

Dexie.PrematureCommitError

***

### Promise

`Static` **Promise**: `PromiseExtendedConstructor`

#### Inherited from

Dexie.Promise

***

### QuotaExceededError

`Static` **QuotaExceededError**: `DexieErrorConstructor`

#### Inherited from

Dexie.QuotaExceededError

***

### ReadOnlyError

`Static` **ReadOnlyError**: `DexieErrorConstructor`

#### Inherited from

Dexie.ReadOnlyError

***

### SchemaError

`Static` **SchemaError**: `DexieErrorConstructor`

#### Inherited from

Dexie.SchemaError

***

### SubTransactionError

`Static` **SubTransactionError**: `DexieErrorConstructor`

#### Inherited from

Dexie.SubTransactionError

***

### TimeoutError

`Static` **TimeoutError**: `DexieErrorConstructor`

#### Inherited from

Dexie.TimeoutError

***

### TransactionInactiveError

`Static` **TransactionInactiveError**: `DexieErrorConstructor`

#### Inherited from

Dexie.TransactionInactiveError

***

### UnknownError

`Static` **UnknownError**: `DexieErrorConstructor`

#### Inherited from

Dexie.UnknownError

***

### UnsupportedError

`Static` **UnsupportedError**: `DexieErrorConstructor`

#### Inherited from

Dexie.UnsupportedError

***

### UpgradeError

`Static` **UpgradeError**: `DexieErrorConstructor`

#### Inherited from

Dexie.UpgradeError

***

### VersionChangeError

`Static` **VersionChangeError**: `DexieErrorConstructor`

#### Inherited from

Dexie.VersionChangeError

***

### VersionError

`Static` **VersionError**: `DexieErrorConstructor`

#### Inherited from

Dexie.VersionError

***

### addons

`Static` **addons**: (`db`: `Dexie`) => `void`\[]

#### Inherited from

Dexie.addons

***

### cache

`Static` **cache**: `GlobalQueryCache`

#### Inherited from

Dexie.cache

***

### currentTransaction

`Static` **currentTransaction**: `Transaction`

#### Inherited from

Dexie.currentTransaction

***

### debug

`Static` **debug**: `boolean` | `"dexie"`

#### Inherited from

Dexie.debug

***

### default

`Static` **default**: `Dexie`

#### Inherited from

Dexie.default

***

### dependencies

`Static` **dependencies**: `DexieDOMDependencies`

#### Inherited from

Dexie.dependencies

***

### disableBfCache

`Static` `Optional` **disableBfCache**: `boolean`

#### Inherited from

Dexie.disableBfCache

***

### errnames

`Static` **errnames**: `DexieErrors`

#### Inherited from

Dexie.errnames

***

### maxKey

`Static` **maxKey**: `string` | `void`\[]\[]

#### Inherited from

Dexie.maxKey

***

### minKey

`Static` **minKey**: `number`

#### Inherited from

Dexie.minKey

***

### on

`Static` **on**: `GlobalDexieEvents`

#### Inherited from

Dexie.on

***

### semVer

`Static` **semVer**: `string`

#### Inherited from

Dexie.semVer

***

### version

`Static` **version**: `number`

#### Inherited from

Dexie.version

## Methods

### addHistoryRecord

**addHistoryRecord**(`history`, `operations`): `PromiseExtended`<\[`any`, `any`]>

添加历史记录

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `history` | [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md) | 历史记录 |
| `operations` | [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)\[] | 操作记录 |

#### Returns

`PromiseExtended`<\[`any`, `any`]>

***

### addOperationRecord

**addOperationRecord**(`record`): `PromiseExtended`<`any`>

添加操作记录

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `record` | [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md) | 操作记录 |

#### Returns

`PromiseExtended`<`any`>

***

### allHistoryByResourceURI

**allHistoryByResourceURI**(`resourceURI`): `PromiseExtended`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)\[]>

某个uri下所有的history记录

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceURI` | `string` | 资源uri |

#### Returns

`PromiseExtended`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)\[]>

***

### allOperationByResourceURI

**allOperationByResourceURI**(`resourceURI`): `PromiseExtended`<[`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)\[]>

某个uri下所有的operation记录

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceURI` | `string` | 资源uri |

#### Returns

`PromiseExtended`<[`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)\[]>

***

### backendDB

**backendDB**(): `IDBDatabase`

#### Returns

`IDBDatabase`

#### Inherited from

Dexie.backendDB

***

### close

**close**(`closeOptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeOptions?` | `Object` |
| `closeOptions.disableAutoOpen` | `boolean` |

#### Returns

`void`

#### Inherited from

Dexie.close

***

### delete

**delete**(`closeOptions?`): `PromiseExtended`<`void`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeOptions?` | `Object` |
| `closeOptions.disableAutoOpen` | `boolean` |

#### Returns

`PromiseExtended`<`void`>

#### Inherited from

Dexie.delete

***

### dynamicallyOpened

**dynamicallyOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Dexie.dynamicallyOpened

***

### getHistoryByUUID

**getHistoryByUUID**(`uuid`): `PromiseExtended`<`undefined` | [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)>

根据uuid获取历史

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`PromiseExtended`<`undefined` | [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)>

***

### hasBeenClosed

**hasBeenClosed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Dexie.hasBeenClosed

***

### hasFailed

**hasFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Dexie.hasFailed

***

### isOpen

**isOpen**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Dexie.isOpen

***

### open

**open**(): `PromiseExtended`<`Dexie`>

#### Returns

`PromiseExtended`<`Dexie`>

#### Inherited from

Dexie.open

***

### reset

**reset**(): `PromiseExtended`<`void`>

重置数据库

#### Returns

`PromiseExtended`<`void`>

***

### resetByResourceURI

**resetByResourceURI**(`resourceURI`): `PromiseExtended`<`void`>

清空某个资源下所有的数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceURI` | `string` |

#### Returns

`PromiseExtended`<`void`>

***

### table

**table**<`T`, `TKey`>(`tableName`): `Table`<`T`, `TKey`, `T`>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `TKey` | `IndexableType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`Table`<`T`, `TKey`, `T`>

#### Inherited from

Dexie.table

***

### transaction

**transaction**<`U`>(`mode`, `tables`, `scope`): `PromiseExtended`<`U`>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `tables` | readonly (`string` | `Table`<`any`, `any`, `any`>)\[] |
| `scope` | (`trans`: `Transaction` & { `history`: `Table`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md), `any`, [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)> ; `operation`: `Table`<[`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md), `any`, [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)>  }) => `U` | `PromiseLike`<`U`> |

#### Returns

`PromiseExtended`<`U`>

#### Inherited from

Dexie.transaction

**transaction**<`U`>(`mode`, `table`, `scope`): `PromiseExtended`<`U`>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` | `Table`<`any`, `any`, `any`> |
| `scope` | (`trans`: `Transaction` & { `history`: `Table`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md), `any`, [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)> ; `operation`: `Table`<[`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md), `any`, [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)>  }) => `U` | `PromiseLike`<`U`> |

#### Returns

`PromiseExtended`<`U`>

#### Inherited from

Dexie.transaction

**transaction**<`U`>(`mode`, `table`, `table2`, `scope`): `PromiseExtended`<`U`>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` | `Table`<`any`, `any`, `any`> |
| `table2` | `string` | `Table`<`any`, `any`, `any`> |
| `scope` | (`trans`: `Transaction` & { `history`: `Table`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md), `any`, [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)> ; `operation`: `Table`<[`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md), `any`, [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)>  }) => `U` | `PromiseLike`<`U`> |

#### Returns

`PromiseExtended`<`U`>

#### Inherited from

Dexie.transaction

**transaction**<`U`>(`mode`, `table`, `table2`, `table3`, `scope`): `PromiseExtended`<`U`>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` | `Table`<`any`, `any`, `any`> |
| `table2` | `string` | `Table`<`any`, `any`, `any`> |
| `table3` | `string` | `Table`<`any`, `any`, `any`> |
| `scope` | (`trans`: `Transaction` & { `history`: `Table`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md), `any`, [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)> ; `operation`: `Table`<[`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md), `any`, [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)>  }) => `U` | `PromiseLike`<`U`> |

#### Returns

`PromiseExtended`<`U`>

#### Inherited from

Dexie.transaction

**transaction**<`U`>(`mode`, `table`, `table2`, `table3`, `table4`, `scope`): `PromiseExtended`<`U`>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` | `Table`<`any`, `any`, `any`> |
| `table2` | `string` | `Table`<`any`, `any`, `any`> |
| `table3` | `string` | `Table`<`any`, `any`, `any`> |
| `table4` | `string` | `Table`<`any`, `any`, `any`> |
| `scope` | (`trans`: `Transaction` & { `history`: `Table`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md), `any`, [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)> ; `operation`: `Table`<[`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md), `any`, [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)>  }) => `U` | `PromiseLike`<`U`> |

#### Returns

`PromiseExtended`<`U`>

#### Inherited from

Dexie.transaction

**transaction**<`U`>(`mode`, `table`, `table2`, `table3`, `table5`, `scope`): `PromiseExtended`<`U`>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `TransactionMode` |
| `table` | `string` | `Table`<`any`, `any`, `any`> |
| `table2` | `string` | `Table`<`any`, `any`, `any`> |
| `table3` | `string` | `Table`<`any`, `any`, `any`> |
| `table5` | `string` | `Table`<`any`, `any`, `any`> |
| `scope` | (`trans`: `Transaction` & { `history`: `Table`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md), `any`, [`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)> ; `operation`: `Table`<[`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md), `any`, [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md)>  }) => `U` | `PromiseLike`<`U`> |

#### Returns

`PromiseExtended`<`U`>

#### Inherited from

Dexie.transaction

***

### unuse

**unuse**(`«destructured»`): [`HistoryDatabase`](/en/auto-docs/history-storage/classes/HistoryDatabase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Middleware`<{ `stack`: `"dbcore"`  }> |

#### Returns

[`HistoryDatabase`](/en/auto-docs/history-storage/classes/HistoryDatabase.md)

#### Inherited from

Dexie.unuse

**unuse**(`«destructured»`): [`HistoryDatabase`](/en/auto-docs/history-storage/classes/HistoryDatabase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `name` | `string` |
| › `stack` | `"dbcore"` |

#### Returns

[`HistoryDatabase`](/en/auto-docs/history-storage/classes/HistoryDatabase.md)

#### Inherited from

Dexie.unuse

***

### updateHistoryByUUID

**updateHistoryByUUID**(`uuid`, `historyRecord`): `Promise`<`undefined` | `number`>

更新历史记录

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |
| `historyRecord` | `Partial`<[`HistoryRecord`](/en/auto-docs/history-storage/interfaces/HistoryRecord.md)> |

#### Returns

`Promise`<`undefined` | `number`>

***

### updateOperationRecord

**updateOperationRecord**(`record`): `Promise`<`any`>

更新操作记录

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `record` | [`HistoryOperationRecord`](/en/auto-docs/history-storage/interfaces/HistoryOperationRecord.md) | 操作记录 |

#### Returns

`Promise`<`any`>

***

### use

**use**(`middleware`): [`HistoryDatabase`](/en/auto-docs/history-storage/classes/HistoryDatabase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | `Middleware`<`DBCore`> |

#### Returns

[`HistoryDatabase`](/en/auto-docs/history-storage/classes/HistoryDatabase.md)

#### Inherited from

Dexie.use

***

### version

**version**(`versionNumber`): `Version`

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionNumber` | `number` |

#### Returns

`Version`

#### Inherited from

Dexie.version

***

### asap

`Static` **asap**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`void`

#### Inherited from

Dexie.asap

***

### deepClone

`Static` **deepClone**<`T`>(`obj`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`T`

#### Inherited from

Dexie.deepClone

***

### delByKeyPath

`Static` **delByKeyPath**(`obj`, `keyPath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `keyPath` | `string` | `string`\[] |

#### Returns

`void`

#### Inherited from

Dexie.delByKeyPath

***

### delete

`Static` **delete**(`dbName`): `Promise`<`void`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName` | `string` |

#### Returns

`Promise`<`void`>

#### Inherited from

Dexie.delete

***

### exists

`Static` **exists**(`dbName`): `Promise`<`boolean`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName` | `string` |

#### Returns

`Promise`<`boolean`>

#### Inherited from

Dexie.exists

***

### extendObservabilitySet

`Static` **extendObservabilitySet**(`target`, `newSet`): `ObservabilitySet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ObservabilitySet` |
| `newSet` | `ObservabilitySet` |

#### Returns

`ObservabilitySet`

#### Inherited from

Dexie.extendObservabilitySet

***

### getByKeyPath

`Static` **getByKeyPath**(`obj`, `keyPath`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `keyPath` | `string` | `string`\[] |

#### Returns

`any`

#### Inherited from

Dexie.getByKeyPath

***

### getDatabaseNames

`Static` **getDatabaseNames**(): `Promise`<`string`\[]>

#### Returns

`Promise`<`string`\[]>

#### Inherited from

Dexie.getDatabaseNames

`Static` **getDatabaseNames**<`R`>(`thenShortcut`): `Promise`<`R`>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thenShortcut` | `ThenShortcut`<`string`\[], `R`> |

#### Returns

`Promise`<`R`>

#### Inherited from

Dexie.getDatabaseNames

***

### ignoreTransaction

`Static` **ignoreTransaction**<`U`>(`fn`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `U` |

#### Returns

`U`

#### Inherited from

Dexie.ignoreTransaction

***

### liveQuery

`Static` **liveQuery**<`T`>(`fn`): `Observable`<`T`>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `T` | `Promise`<`T`> |

#### Returns

`Observable`<`T`>

#### Inherited from

Dexie.liveQuery

***

### override

`Static` **override**<`F`>(`origFunc`, `overridedFactory`): `F`

#### Type parameters

| Name |
| :------ |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `origFunc` | `F` |
| `overridedFactory` | (`fn`: `any`) => `any` |

#### Returns

`F`

#### Inherited from

Dexie.override

***

### setByKeyPath

`Static` **setByKeyPath**(`obj`, `keyPath`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `keyPath` | `string` | `string`\[] |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

Dexie.setByKeyPath

***

### shallowClone

`Static` **shallowClone**<`T`>(`obj`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`T`

#### Inherited from

Dexie.shallowClone

***

### vip

`Static` **vip**<`U`>(`scopeFunction`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeFunction` | () => `U` |

#### Returns

`U`

#### Inherited from

Dexie.vip

***

### waitFor

`Static` **waitFor**<`T`>(`promise`, `timeoutMilliseconds?`): `Promise`<`T`>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `T` | `PromiseLike`<`T`> |
| `timeoutMilliseconds?` | `number` |

#### Returns

`Promise`<`T`>

#### Inherited from

Dexie.waitFor
