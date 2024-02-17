# 群 API

## 类构造函数

- 定义

```php
public function __construct($url,$headers)
```

- 参数

| 名称     | 类型   | 默认值 | 描述              |
| -------- | ------ | ------ | ----------------- |
| $url     | string |        | 机器人 API 的地址 |
| $headers | string |        |                   |

## 类方法

### Send_Group_Message

发送群消息

- 定义

```php
function Send_Group_Message($group_openid,$content=null,$msg_id=null,$markdown=null,$keyboard=null)
```

- 参数

| 名称          | 类型 | 默认值 | 描述 |
| ------------- | ---- | ------ | ---- |
| $group_openid |      |        |      |
| $content      |      |        |      |
| $msg_id       |      |        |      |
| $markdown     |      |        |      |
| $keyboard     |      |        |      |

- 返回值

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| N/A  |      |      |

### Get_Plugin_Return

返回日志

- 定义

```php
function Get_Plugin_Return()
```

- 返回值

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| N/A  |      |      |
