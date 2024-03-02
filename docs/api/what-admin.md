# 插件独立管理后台 是什么？ {#what-is-admin}

PHPQQ机器人框架 为插件提供独立管理页面的接入，可以在页面内进行本插件的一些配置。

## 使用场景 {#use-cases}

### 有数据配置需要的插件 {#type1}

- 如果您的插件需要用户进行一些修改例如设置自动回复等，可以选择开启独立管理后台

### 有权限控制需要的插件 {#type2}

- 如果您的插件需要配置管理员等，可以选择开启独立管理后台

## 怎么样开启独立管理后台 {#how-open}

### 第一步：在插件配置文件内修改两行内容

::: code-group

```json [json]
{
    "pluginadmin":true,
    "pluginadminurl":"Admin.php",
```

:::

- 1.将pluginadmin设置为true
- 2.将pluginadminurl设置为独立管理页面的入口，例如Admin.php

### 第二步：在插件目录创建独立管理页面入口文件(例如Admin.php)

创建后的文件结构为：

```
.
├─ Main.php
├─ Admin.php
├─ Config.json
```
如图所示：
![createflie-2.png](/api/createflie-2.png)

### 第三步：在独立管理页面入口文件开头引入鉴权组件

::: code-group

```php [Admin.php]
<?php
$name='PluginList';
include '../../Core/PluginAdminAuth.php';//鉴权组件
```

:::
请注意，请将$name变量内的PluginList改成你的插件名

### 第四步：编写后台逻辑代码

- 1.建议操作数据库等代码与入口文件分离， 前后端分离好维护~
- 2.任何文件都可以引入鉴权组件