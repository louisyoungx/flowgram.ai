# 联动

import { NodeFormDynamicPreview } from '../../../../components';

当前例子展示了如何通过 `deps` 字段来声明表单项之间的联动更新关系。

例子说明：当 `Country` 有值时才会显示 `City` 字段。

你也可以将`form.getValueIn('country')` 作为 city `Field` 下组件的入参，来控制组件内的行为, 如筛选当前country下的cities。

<NodeFormDynamicPreview />
