(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1627:function(t,e){t.exports={content:["section",["p","树型选择控件。"],["h2","何时使用"],["p","类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。"]],meta:{category:"Components",subtitle:"树选择",type:"数据录入",title:"TreeSelect",filename:"components/tree-select/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Tree props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","allowClear"],["td","显示清除按钮"],["td","boolean"],["td","false"]],["tr",["td","autoClearSearchValue"],["td","当多选模式下值被选择，自动清空搜索框"],["td","boolean"],["td","true"]],["tr",["td","defaultValue"],["td","指定默认选中的条目"],["td","string/string","[","]"],["td","-"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"]],["tr",["td","dropdownClassName"],["td","下拉菜单的 className 属性"],["td","string"],["td","-"]],["tr",["td","dropdownMatchSelectWidth"],["td","下拉菜单和选择器同宽。默认将设置 ",["code","min-width"],"。"],["td","boolean"],["td","true"]],["tr",["td","dropdownStyle"],["td","下拉菜单的样式"],["td","object"],["td","-"]],["tr",["td","filterTreeNode"],["td","是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值"],["td","boolean","|","Function(inputValue: string, treeNode: TreeNode) (函数需要返回bool值)"],["td","Function"]],["tr",["td","getPopupContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"示例"]],["td","Function(triggerNode)"],["td","() => document.body"]],["tr",["td","labelInValue"],["td","是否把每个选项的 label 包装到 value 中，会把 value 类型从 ",["code","string"]," 变为 ",["code","{value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] }"]," 的格式"],["td","boolean"],["td","false"]],["tr",["td","loadData"],["td","异步加载数据"],["td","function(node)"],["td","-"]],["tr",["td","maxTagCount"],["td","最多显示多少个 tag"],["td","number"],["td","-"]],["tr",["td","maxTagPlaceholder"],["td","隐藏 tag 时显示的内容"],["td","ReactNode/function(omittedValues)"],["td","-"]],["tr",["td","multiple"],["td","支持多选（当设置 treeCheckable 时自动变为true）"],["td","boolean"],["td","false"]],["tr",["td","placeholder"],["td","选择框默认文字"],["td","string"],["td","-"]],["tr",["td","searchPlaceholder"],["td","搜索框默认文字"],["td","string"],["td","-"]],["tr",["td","searchValue"],["td","搜索框的值，可以通过 ",["code","onSearch"]," 获取用户输入"],["td","string"],["td","-"]],["tr",["td","treeIcon"],["td","是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式"],["td","boolean"],["td","false"]],["tr",["td","showCheckedStrategy"],["td","定义选中项回填的方式。",["code","TreeSelect.SHOW_ALL"],": 显示所有选中节点(包括父节点). ",["code","TreeSelect.SHOW_PARENT"],": 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点."],["td","enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }"],["td","TreeSelect.SHOW_CHILD"]],["tr",["td","showSearch"],["td","在下拉中显示搜索框(仅在单选模式下生效)"],["td","boolean"],["td","false"]],["tr",["td","size"],["td","选择框大小，可选 ",["code","large"]," ",["code","small"]],["td","string"],["td","'default'"]],["tr",["td","suffixIcon"],["td","自定义的选择框后缀图标"],["td","ReactNode"],["td","-"]],["tr",["td","treeCheckable"],["td","显示 checkbox"],["td","boolean"],["td","false"]],["tr",["td","treeCheckStrictly"],["td","checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 ",["code","labelInValue"]," 强制为 true"],["td","boolean"],["td","false"]],["tr",["td","treeData"],["td","treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）"],["td","array\\<{value, title, children, ","[","disabled, disableCheckbox, selectable]}>"],["td","[","]"]],["tr",["td","treeDataSimpleMode"],["td","使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: ","[","{id:1, pId:0, value:'1', title:\"test1\",...},...], ",["code","pId"]," 是父节点的 id)"],["td","false","|","Array\\<{ id: string, pId: string, rootPId: null }>"],["td","false"]],["tr",["td","treeDefaultExpandAll"],["td","默认展开所有树节点"],["td","boolean"],["td","false"]],["tr",["td","treeDefaultExpandedKeys"],["td","默认展开的树节点"],["td","string","[","]"],["td","-"]],["tr",["td","treeExpandedKeys"],["td","设置展开的树节点"],["td","string","[","]"],["td","-"]],["tr",["td","treeNodeFilterProp"],["td","输入项过滤对应的 treeNode 属性"],["td","string"],["td","'value'"]],["tr",["td","treeNodeLabelProp"],["td","作为显示的 prop 设置"],["td","string"],["td","'title'"]],["tr",["td","value"],["td","指定当前选中的条目"],["td","string/string","[","]"],["td","-"]],["tr",["td","onChange"],["td","选中树节点时调用此函数"],["td","function(value, label, extra)"],["td","-"]],["tr",["td","onSearch"],["td","文本框值变化时回调"],["td","function(value: string)"],["td","-"]],["tr",["td","onSelect"],["td","被选中时调用"],["td","function(value, node, extra)"],["td","-"]],["tr",["td","onTreeExpand"],["td","展示节点时调用"],["td","function(expandedKeys)"],["td","-"]]]],["h3","Tree 方法"],["table",["thead",["tr",["th","名称"],["th","描述"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"]],["tr",["td","focus()"],["td","获取焦点"]]]],["h3","TreeNode props"],["blockquote",["p","建议使用 treeData 来代替 TreeNode，免去手工构造麻烦"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","selectable"],["td","是否可选"],["td","boolean"],["td","true"]],["tr",["td","disableCheckbox"],["td","禁掉 checkbox"],["td","boolean"],["td","false"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"]],["tr",["td","isLeaf"],["td","是否是叶子节点"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","此项必须设置（其值在整个树范围内唯一）"],["td","string"],["td","-"]],["tr",["td","title"],["td","树节点显示的内容"],["td","string","|","ReactNode"],["td","'---'"]],["tr",["td","value"],["td","默认根据此属性值进行筛选（其值在整个树范围内唯一）"],["td","string"],["td","-"]]]]]}}}]);