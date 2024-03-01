# 事件列表 {#event-list}

| 事件 | 事件名 | 是否开发(未开发可以订阅但是接收不到消息) | 
| ---- | ------- | --- |
| AT_MESSAGE_CREATE | 频道@消息事件 | 是 |
| PUBLIC_MESSAGE_DELETE | 频道消息撤回事件 | 否 |
| MESSAGE_CREATE | 频道全量消息事件(私域) | 是 |
| MESSAGE_DELETE | 频道全量消息撤回事件(私域) | 否 |
| GROUP_AT_MESSAGE_CREATE | 群@消息事件 | 是 |
| GUILD_CREATE | 机器人加入频道事件 | 否 |
| GUILD_UPDATE | 频道资料更新事件 | 否 |