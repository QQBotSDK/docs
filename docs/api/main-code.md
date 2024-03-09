# 插件主体开发 {#main-code}

## 一.开发提示{#tips}

- 1.插件主文件无需引入任何鉴权组件，可直接编写逻辑代码
- 2.如果您在配置文件中申请了Mysql数据库权限，请您做好判断，以免由于用户未授权造成插件崩溃
- 3.在开发过程中，建议您将插件库的开发者模式开启，这样可以输出插件报错，方便排查错误

## 二.插件库开发者模式开启引导{#open-debug}

- 1.登录插件库后台
- 2.点击三个横线展开菜单栏
  ![open-code-1.png](/api/open-code-1.png)
- 3.进入系统管理
  ![open-code-2.png](/api/open-code-2.png)
- 4.开启开发者模式中的Debug模式
  ![open-code-3.png](/api/open-code-3.png)
- 5.点击修改按钮保存设置
  ![open-code-4.png](/api/open-code-4.png)

## 三.框架会向插件下发什么参数{#what-can-get}

| 变量名    | 说明                                                                                                                        |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| path      | 插件所在目录                                                                                                                |
| botid     | 下发该事件的机器人ID，可用于验证该机器人是否被授权                                                                          |
| event     | 事件名，详见[可订阅事件列表](/api/event-list)                                                                               |
| data      | 消息详情，是一个object数组[事件data](/api/event-data)                                                                       |
| guild     | 频道类API调用对象，使用方法详见[怎么调用封装好的API函数](/api/how-use-function)                                             |
| guilduser | 频道私聊类API调用对象，使用方法详见[怎么调用封装好的API函数](/api/how-use-function)                                         |
| group     | 群聊类API调用对象，使用方法详见[怎么调用封装好的API函数](/api/how-use-function)                                             |
| bot       | 机器人自身API调用对象，使用方法详见[怎么调用封装好的API函数](/api/how-use-function)                                         |
| md        | 构建MarkDown的函数调用对象，使用方法详见[怎么调用封装好的API函数](/api/how-use-function)                                    |
| conn      | 数据库连接对象，请使用mysqli进行操作(在配置文件中申请且用户授权才有，否则传false)                                           |
| sql       | 数据库操作库对象(在配置文件中申请且用户授权才有，否则传false)，使用方法请查看[预置的Mysql操作库使用](/api/mysql-tool-about) |
