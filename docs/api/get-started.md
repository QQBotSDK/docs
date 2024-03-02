# 文件创建 {#plugin-create}

本框架插件位于插件库的Plugin目录下，
开发插件请先在Plugin目录下创建一个文件夹（不建议使用中文）
文件夹内创建以下几个文件：
```
.
├─ Main.php
├─ Config.json
```
如图所示：
![createflie-1.png](/api/createflie-1.png)

# 插件配置 {#plugin-config}

基础配置可以定义插件的全局设置。是必须填写的配置文件。

## 基础配置 {#config}

Config.json文件：

::: code-group

```json [Config.json]
{
    "plugin":{
        "config":{
            "name":"插件名",
            "info":"插件介绍",
            "author":"插件作者",
            "version":"插件版本",
            "pluginadmin":是否拥有独立后台,
            "pluginadminurl":"独立后台地址",
            "mysql":是否申请数据库权限
        },
        "listenings":[
            订阅权限的JSON
        ]
    }
}
```

:::

config字段内参数说明：

| 参数           | 是否必填 | 类型 | 说明                                       |
| -------------- | -------- | ---- | ---------------------------------------- |
| name           | 是       | text | 插件名                                    |
| info           | 是       | text | 插件介绍                                  |
| author         | 是       | text | 插件作者                                  |
| version        | 是       | text | 插件版本                                  |
| pluginadmin    | 是       | bool | 是否拥有独立后台[只能填写true或者false]     |
| pluginadminurl | 是       | text | 独立后台地址                              |
| mysql          | 是       | bool | 是否申请数据库权限[只能填写true或者false]   |

什么是插件独立后台？[独立后台相关介绍](/api/what-admin)

config字段内参数填写示例：
::: code-group

```json [Config.json]
{
    "plugin":{
        "config":{
            "name":"插件管理工具",
            "info":"用于管理插件库的插件",
            "author":"JSRCode",
            "version":"V1.0.0",
            "pluginadmin":true,
            "pluginadminurl":"Admin.php",
            "mysql":true
        },
        "listenings":[
            订阅权限的JSON
        ]
    }
}
```

:::

## 事件订阅配置 {#listening-config}

使用 `listenings` 字段配置您需要订阅的事件。格式为：

::: code-group

```json [Config.json]
  {
      "name":"事件名"
  },
```

:::

<div class="tip custom-block" style="padding-top: 8px">

不知道可以订阅什么事件？跳到[可订阅事件列表](/api/event-list)。

</div>

例如：

::: code-group

```json [Config.json]
  {
      "name":"AT_MESSAGE_CREATE"
  },
```

:::

## 完整配置文件示例 {#config-example}

::: code-group

```json [Config.json]
{
  "plugin": {
    "config": {
      "name": "插件管理工具",
      "info": "用于管理插件库的插件",
      "author": "JSRCode",
      "version": "V1.0.0",
      "pluginadmin": true,
      "pluginadminurl": "Admin.php",
      "mysql": true
    },
    "listenings": [
      {
        "name": "AT_MESSAGE_CREATE"
      },
      {
        "name": "MESSAGE_CREATE"
      },
      {
        "name": "GROUP_AT_MESSAGE_CREATE"
      }
    ]
  }
}
```

:::
