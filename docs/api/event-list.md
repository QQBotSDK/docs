# 事件列表 {#event-list}

| 事件 | 事件名 | 是否开发(未开发可以订阅但是接收不到消息) | 
| ---- | ------- | --- |
| AT_MESSAGE_CREATE | 频道@消息事件 | 是 |
| MESSAGE_CREATE | 频道全量消息事件(私域) | 是 |
| GROUP_AT_MESSAGE_CREATE | 群@消息事件 | 是 |
| PUBLIC_MESSAGE_DELETE | 频道消息撤回事件 | 否 |
| MESSAGE_DELETE | 频道全量消息撤回事件(私域) | 否 |
| GUILD_CREATE | 机器人加入频道事件 | 否 |
| GUILD_UPDATE | 频道资料更新事件 | 否 |
| GUILD_DELETE | 机器人被移除频道事件 | 否 |
| CHANNEL_CREATE | 子频道创建事件 | 否 |
| CHANNEL_UPDATE | 子频道资料更新事件 | 否 |
| CHANNEL_DELETE | 子频道删除事件 | 否 |
| GUILD_MEMBER_ADD | 频道成员加入事件 | 否 |
| GUILD_MEMBER_UPDATE | 频道成员资料更新事件 | 否 |
| GUILD_MEMBER_REMOVE | 频道成员退出事件 | 否 |
| MESSAGE_REACTION_ADD | 用户为消息添加表情表态事件 | 否 |
| MESSAGE_REACTION_REMOVE | 用户为消息删除表情表态事件 | 否 |
| DIRECT_MESSAGE_CREATE | 频道私聊消息事件 | 否 |
| DIRECT_MESSAGE_DELETE | 频道私聊消息撤回事件 | 否 |
| INTERACTION_CREATE | 互动消息创建事件 | 否 |
| MESSAGE_AUDIT_PASS | 主动消息审核通过事件 | 否 |
| MESSAGE_AUDIT_REJECT | 主动消息审核不通过事件 | 否 |
<!-- |  |  | 否 | -->