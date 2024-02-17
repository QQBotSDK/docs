# 频道 API

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

### Send_Guild_Message

发送频道消息

- 定义

```php
function Send_Guild_Message($channel_id,$content=null,$msg_id=null,$image=null,$event_id=null)
```

- 参数

| 名称        | 类型   | 默认值 | 描述     |
| ----------- | ------ | ------ | -------- |
| $channel_id | string |        | 频道 ID  |
| $content    | string |        | 消息内容 |
| $msg_id     | string |        | 消息 ID  |
| $image      | string |        | 图片地址 |
| $event_id   | string |        | 事件 ID  |

- 返回值

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| N/A  |      |      |

### Get_Message_Info

获取消息的详情信息

- 定义

```php
function Get_Message_Info($channel_id,$msg_id)
```

- 参数

| 名称        | 类型   | 默认值 | 描述    |
| ----------- | ------ | ------ | ------- |
| $channel_id | string |        | 频道 ID |
| $msg_id     | string |        | 消息 ID |

- 返回值

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| N/A  |      |      |

### Get_Guild_Info

获取频道信息

- 定义

```php
function Get_Guild_Info($guild_id)
```

- 参数

| 名称      | 类型   | 默认值 | 描述    |
| --------- | ------ | ------ | ------- |
| $guild_id | string |        | 频道 ID |

- 返回值

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| N/A  |      |      |

### Get_Channel_Info

获取子频道信息

- 定义

```php
function Get_Channel_Info($channel_id)
```

- 参数

| 名称        | 类型   | 默认值 | 描述      |
| ----------- | ------ | ------ | --------- |
| $channel_id | string |        | 子频道 ID |

- 返回值

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| N/A  |      |      |

### Get_Channel_List

获取频道的子频道列表

- 定义

```php
function Get_Channel_List($guild_id)
```

- 参数

| 名称      | 类型   | 默认值 | 描述    |
| --------- | ------ | ------ | ------- |
| $guild_id | string |        | 频道 ID |

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
