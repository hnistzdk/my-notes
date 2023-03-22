(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{434:function(_,v,t){"use strict";t.r(v);var s=t(1),e=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("strong",[_._v("Table of Contents")]),_._v(" "),v("em",[_._v("generated with "),v("a",{attrs:{href:"https://github.com/thlorenz/doctoc",target:"_blank",rel:"noopener noreferrer"}},[_._v("DocToc"),v("OutboundLink")],1)])]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E4%B8%BB%E5%BA%93%E6%8C%82%E4%BA%86%E5%A6%82%E4%BD%95%E4%B8%8D%E9%97%B4%E6%96%AD%E6%9C%8D%E5%8A%A1"}},[_._v("主库挂了，如何不间断服务？")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#%E5%93%A8%E5%85%B5%E6%9C%BA%E5%88%B6"}},[_._v("哨兵机制")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E4%B8%BB%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BF%A1%E6%81%AF"}},[_._v("获取主服务器信息")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#%E5%93%A8%E5%85%B5%E6%9C%BA%E5%88%B6%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%B5%81%E7%A8%8B"}},[_._v("哨兵机制的基本流程")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E7%9B%91%E6%8E%A7"}},[_._v("监控")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E4%B8%BB%E8%A7%82%E4%B8%8B%E7%BA%BF%E5%92%8C%E5%AE%A2%E8%A7%82%E4%B8%8B%E7%BA%BF"}},[_._v("主观下线和客观下线")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#%E8%AF%AF%E5%88%A4"}},[_._v("误判")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E5%87%8F%E5%B0%91%E8%AF%AF%E5%88%A4"}},[_._v("如何减少误判")])])])]),_._v(" "),v("li",[v("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E9%80%89%E5%AE%9A%E6%96%B0%E4%B8%BB%E5%BA%93"}},[_._v("如何选定新主库")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E7%AD%9B%E9%80%89%E6%9D%A1%E4%BB%B6"}},[_._v("筛选条件")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#%E6%89%93%E5%88%86"}},[_._v("打分")])])])]),_._v(" "),v("li",[v("a",{attrs:{href:"#%E9%80%9A%E7%9F%A5"}},[_._v("通知")])])])])])])]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"主库挂了-如何不间断服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主库挂了-如何不间断服务"}},[_._v("#")]),_._v(" 主库挂了，如何不间断服务？")]),_._v(" "),v("p",[_._v("在这个Redis 主从模式下，如果从库发生故障，客户端可以继续向主库或其他从库发送请求，进行相关的操作。但是如果主库发生故障了，那直接就影响到从库的同步，因为从库没有相应的主库可以进行数据复制操作了。")]),_._v(" "),v("p",[_._v("如果说，客户端发送的都是读操作请求，那还可以由从库继续提供服务，这在纯读的业务场景下还能被接受。")]),_._v(" "),v("p",[_._v("一旦有写操作请求了，按照主从库模式下的读写分离要求，需要由主库来完成写操作。此时，没有实例可以服务客户端的写操作请求，如下图所示：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://images.zaiolos.top/images/202208021451939.png",alt:"image.png"}})]),_._v(" "),v("p",[_._v("所以，如果主库挂了，我们就需要运行一个新主库，比如说把一个从库切换为主库，把它当成主库。\n这就涉及到三个问题：")]),_._v(" "),v("ol",[v("li",[_._v("主库真的挂了吗？")]),_._v(" "),v("li",[_._v("该选择哪个从库作为主库？")]),_._v(" "),v("li",[_._v("如何把新主库的相关信息通知给从库和客户端？")])]),_._v(" "),v("blockquote",[v("p",[_._v("这就要提到 "),v("strong",[_._v("哨兵机制")]),_._v("了。\n在 Redis 主从集群中，"),v("strong",[_._v("哨兵机制是实现主从库自动切换的关键机制")]),_._v("，它有效地解决了主从复制模式下故障转移的这三个问题。")])]),_._v(" "),v("h2",{attrs:{id:"哨兵机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#哨兵机制"}},[_._v("#")]),_._v(" 哨兵机制")]),_._v(" "),v("p",[_._v("哨兵（Sentinel）是 Redis 高可用性的解决方案，它其实就是"),v("strong",[_._v("一个运行在特殊模式下的 Redis 进程")]),_._v("，主从库实例运行的同时，它也在运行。")]),_._v(" "),v("blockquote",[v("p",[_._v("由一个或多个 Sentinel 实例组成的 Sentinel 系统可以监视多个主服务器，以及这些主服务器属下的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器属下的某个服务器升级为新的主服务器，然后由新的主服务器代替已下线的主服务器继续处理命令请求。<<Redis 设计与实现>>")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://images.zaiolos.top/images/202208021452308.png",alt:"image.png"}})]),_._v(" "),v("h3",{attrs:{id:"获取主服务器信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取主服务器信息"}},[_._v("#")]),_._v(" 获取主服务器信息")]),_._v(" "),v("p",[v("strong",[_._v("Sentinel 通过发送INFO 命令来获取主库的当前信息以及该主库所有从库的信息")]),_._v("。如下图所示：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://images.zaiolos.top/images/202208021452430.png",alt:"image.png"}})]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),v("p",[_._v("当 "),v("code",[_._v("Sentinel")]),_._v(" 发现从库之后，"),v("code",[_._v("Sentinel")]),_._v(" 将对 slave0、slave1和 slave2分别创建命令连接和订阅连接。\n创建完命令连接之后，"),v("code",[_._v("Sentinel")]),_._v(" 会向从库发送 "),v("code",[_._v("INFO")]),_._v(" 命令 获得以下信息：")]),_._v(" "),v("ol",[v("li",[_._v("从库的运行id；")]),_._v(" "),v("li",[_._v("从库的角色")]),_._v(" "),v("li",[_._v("主库的ip和端口号；")]),_._v(" "),v("li",[_._v("主库的连接状态；")]),_._v(" "),v("li",[_._v("从库的优先级")]),_._v(" "),v("li",[_._v("从库复制偏移量")])]),_._v(" "),v("p",[_._v("根据这些信息，"),v("code",[_._v("Sentinel")]),_._v(" 会对从库的实例结构进行更新。")]),_._v(" "),v("p",[_._v("了解了 "),v("code",[_._v("Sentinel")]),_._v(" 如何获取主从库的信息之后，下面我们分析下哨兵机制的基本流程。")])]),_._v(" "),v("h3",{attrs:{id:"哨兵机制的基本流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#哨兵机制的基本流程"}},[_._v("#")]),_._v(" 哨兵机制的基本流程")]),_._v(" "),v("p",[_._v("哨兵主要负责的就是三个任务："),v("strong",[_._v("监控、选主（选择主库）和通知")]),_._v("。")]),_._v(" "),v("ul",[v("li",[_._v("监控：通过"),v("code",[_._v("PING")]),_._v(" 来监控主从服务器；")]),_._v(" "),v("li",[_._v("选主：主库挂了，"),v("strong",[_._v("在从库中按照一定机制选择一个新主库")]),_._v("；")]),_._v(" "),v("li",[_._v("通知："),v("strong",[_._v("通知其他从库和客户端新主库的相关信息")]),_._v("；")])]),_._v(" "),v("h4",{attrs:{id:"监控"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#监控"}},[_._v("#")]),_._v(" 监控")]),_._v(" "),v("p",[_._v("默认情况下，"),v("strong",[_._v("哨兵会以每秒一次的频率向所有主从库发送 PING 命令，检测它们是否仍然在线运行")]),_._v("。")]),_._v(" "),v("p",[v("code",[_._v("Sentinel")]),_._v(" 配置文件中的 "),v("code",[_._v("down-after-millisenconds")]),_._v(" 表示哨兵判断实例进入"),v("strong",[_._v("主观下线")]),_._v("所需的时间长度。")]),_._v(" "),v("p",[_._v("如果一个实例在 "),v("code",[_._v("down-after-millisenconds")]),_._v(" 毫秒内，连续向 "),v("code",[_._v("Sentinel")]),_._v(" 返回无效回复，那么 "),v("code",[_._v("Sentinel")]),_._v(" 会认为这个实例已经进入"),v("strong",[_._v("主观下线")]),_._v("状态。")]),_._v(" "),v("p",[_._v("哨兵对主库的下线判断有 "),v("strong",[_._v("主观下线")]),_._v(" 和 "),v("strong",[_._v("客观下线")]),_._v(" 两种。")]),_._v(" "),v("p",[_._v("那么，为什么会存在两种判断呢？它们的区别和联系是什么呢？")]),_._v(" "),v("h5",{attrs:{id:"主观下线和客观下线"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主观下线和客观下线"}},[_._v("#")]),_._v(" 主观下线和客观下线")]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("主观下线")]),_._v(" "),v("p",[v("strong",[_._v("哨兵进程会使用 PING 命令检测它自己和主、从库的网络连接情况，用来判断实例的状态")]),_._v("。")]),_._v(" "),v("p",[_._v("如果哨兵发现主库或从库对 PING 命令的响应超时了，那么，哨兵就会先把它标记为「主观下线」。如果检测的是从库，那么，哨兵简单地把它标记为「主观下线」就行了，因为从库的下线影响一般不太大，集群的对外服务不会间断。")]),_._v(" "),v("p",[_._v("但是，如果检测的是主库，那么，哨兵还不能简单地把它标记为「主观下线」，开启主从切换。")]),_._v(" "),v("p",[_._v("因为很有可能存在这么一个情况：那就是哨兵"),v("strong",[_._v("误判")]),_._v("了，其实主库并没有故障。而且，一旦启动了主从切换，后续的选主和通知操作都会带来额外的计算和通信开销。"),v("strong",[_._v("为了避免这些不必要的开销，我们要特别注意误判的情况。")])])]),_._v(" "),v("h5",{attrs:{id:"误判"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#误判"}},[_._v("#")]),_._v(" 误判")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),v("p",[_._v("误判就是主库实际并没有下线，但是哨兵误以为它下线了。误判一般会发生在集群网络压力较大、网络拥塞、或者是主库本身压力较大的情况下。\n一旦哨兵判断主库下线了，就会开始选择新主库，并让从库和新主库进行数据同步，这个过程本身就会有开销。")]),_._v(" "),v("p",[_._v("例如，哨兵要花时间选出新主库，从库也需要花时间和新主库同步。\n而真实的情况是，主库本身根本就不需要进行切换的，所以这个过程的开销是没有价值的。\n正因为这样，我们需要判断是否有误判，以及减少误判。")])]),_._v(" "),v("h5",{attrs:{id:"如何减少误判"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何减少误判"}},[_._v("#")]),_._v(" 如何减少误判")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("多个哨兵")]),_._v(" "),v("p",[_._v("在日常生活中，当我们要对一些重要的事情做判断的时候，经常会和家人或朋友一起商量一下，然后再做决定。")]),_._v(" "),v("p",[_._v("哨兵机制也是类似的，"),v("strong",[_._v("我们通常会采用多实例组成的集群模式进行部署，也被称为哨兵集群")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("引入多个哨兵实例一起来判断，就可以避免单个哨兵因为自身网络状况不好，而误判主库下线的情况。")])]),_._v(" "),v("p",[v("strong",[_._v("同时，多个哨兵的网络同时不稳定的概率较小，由它们一起做决策，误判率也能降低。")])])]),_._v(" "),v("ol",[v("li",[_._v("当 Sentinel 将一个主库判断为主观下线之后，为了确认是否误判，它会向同样监视这一主库的其他 Sentinel 进行询问。只有大多数的哨兵实例，都判断主库已经「主观下线」了，主库才会被判定为「客观下线」，这个叫法也是表明主库下线成为一个客观事实了。")]),_._v(" "),v("li",[_._v("这个判断条件在于 Sentinel 配置中设置的 quorum 参数的值，如果 Sentinel 做了如下配置："),v("code",[_._v("sentinel mointor master 127.0.0.1 6379 2")]),_._v("\n那么只要有两个 Sentinel 认为主库已经进入下线状态，那么该主库就被判断为「客观下线」。")]),_._v(" "),v("li",[_._v("一般来说，当有 N 个哨兵实例时，最好要有 N/2 + 1 个实例判断主库为「主观下线」，才能最终判定主库为「客观下线」。")]),_._v(" "),v("li",[_._v("这样一来，就可以减少误判的概率，也能避免误判带来的无谓的主从库切换。")])]),_._v(" "),v("blockquote",[v("p",[_._v("借助于多个哨兵实例的共同判断机制，我们就可以更准确地判断出主库是否处于下线状态。如果主库的确下线了，哨兵就要开始下一个决策过程了，即从许多从库中，选出一个从库来做新主库。")])]),_._v(" "),v("p",[_._v("然后是执行哨兵的第二个任务，选主")]),_._v(" "),v("h4",{attrs:{id:"如何选定新主库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何选定新主库"}},[_._v("#")]),_._v(" 如何选定新主库")]),_._v(" "),v("p",[_._v("主库挂了以后，Sentinel 就需要从已下线的主库属下的所有从库里，挑选出一个状态良好、数据完整的从库，把它作为新的主库。")]),_._v(" "),v("p",[_._v("这一步完成后，现在的集群里就有了新主库。")]),_._v(" "),v("p",[_._v("一般来说，我们把 Sentinel 选择新主库的过程称为「筛选 + 打分」。")]),_._v(" "),v("p",[_._v("我们先在多个从库中，先按照"),v("strong",[_._v("一定的筛选条件")]),_._v("，把不符合条件的从库过滤掉。\n然后，我们再按照"),v("strong",[_._v("一定的规则")]),_._v("，对剩下的从库逐个打分，将得分最高的从库选为新主库。")]),_._v(" "),v("h5",{attrs:{id:"筛选条件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#筛选条件"}},[_._v("#")]),_._v(" 筛选条件")]),_._v(" "),v("p",[_._v("Sentinel 会把已下线主库属下的所有从库保存到一个列表中。然后按照以下规则，进行筛选：")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("一般情况下，我们肯定要保证所选的从库仍然在线运行，所以首先就需要删除列表中处于下线或者断线状态的从库。不过，在选主时从库正常在线，这只能表示从库的现状良好，并不代表它就是最适合做主库的。\n设想一下，如果在选主时，一个从库正常运行，我们把它选为新主库开始使用了。可是，很快它的网络出了故障，此时，我们就得重新选主了。这显然不是我们期望的结果。\n所以，在选主时，"),v("strong",[_._v("除了要检查从库的当前在线状态，还要判断它之前的网络连接状态。")])])]),_._v(" "),v("li",[v("p",[_._v("删除列表中所有"),v("strong",[_._v("最近 5 秒没有回复过 INFO 命令的从库")]),_._v("，这可以保证剩余的从库都是最近成功进行过通信的。")])]),_._v(" "),v("li",[v("p",[_._v("如果从库总是和主库断连，而且断连次数超出了一定的阈值，我们就有理由相信，这个从库的网络状况并不是太好，就可以把这个从库筛掉了。\n具体怎么判断呢？")]),_._v(" "),v("blockquote",[v("p",[_._v("使用配置项"),v("code",[_._v("down-after-milliseconds")]),_._v(" * 10 。\n其中，"),v("code",[_._v("down-after-milliseconds")]),_._v(" 是我们认定主从库断连的最大连接超时时间。\n如果在 "),v("code",[_._v("down-after-milliseconds")]),_._v(" 毫秒内，主从节点都没有通过网络联系上，我们就可以认为主从节点断连了。如果发生断连的次数超过了 "),v("strong",[_._v("10 次")]),_._v("，就说明这个从库的网络状况不好，不适合作为新主库。")])])])]),_._v(" "),v("p",[_._v("好了，这样我们就过滤掉了不适合做主库的从库，完成了筛选工作。")]),_._v(" "),v("h5",{attrs:{id:"打分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#打分"}},[_._v("#")]),_._v(" 打分")]),_._v(" "),v("blockquote",[v("p",[_._v("接下来就要给剩余的从库打分了。我们可以分别按照三个规则依次进行三轮打分，这三个规则分别是"),v("strong",[_._v("从库优先级、从库复制进度以及从库 ID 号")]),_._v("。\n只要在某一轮中，有从库得分最高，那么它就是主库了，选主过程到此结束。如果没有出现得分最高的从库，那么就继续进行下一轮。")])]),_._v(" "),v("p",[v("strong",[_._v("第一轮：优先级最高的从库得分高。")])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("优先级")]),_._v(" "),v("p",[_._v("我们可以通过 slave-priority 配置项，给不同的从库设置不同优先级。\n"),v("code",[_._v("slave-priority 100")]),_._v("\n比如，你有两个从库，它们的内存大小不一样，你可以手动给内存大的实例设置一个高优先级。\n在选主时，哨兵会给优先级高的从库打高分，如果有一个从库优先级最高，那么它就是新主库了。\n如果从库的优先级都一样，那么哨兵开始第二轮打分。")])]),_._v(" "),v("p",[v("strong",[_._v("第二轮：复制偏移量最大的从库得分高。")])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("复制偏移量")]),_._v(" "),v("p",[_._v("这个规则的依据是，对具有相同最高优先级所有从库进行排序，选出其中偏移量最大也就是和旧主库数据同步最接近的那个从库作为主库。")]),_._v(" "),v("p",[v("strong",[_._v("如何判断从库和旧主库间的同步进度呢？")])]),_._v(" "),v("p",[_._v("前面我们提到过，主从库同步时有个命令传播的过程。\n在这个过程中，主库会用 "),v("code",[_._v("master_repl_offset")]),_._v(" 记录当前的最新写操作在 "),v("code",[_._v("repl_backlog_buffer")]),_._v(" 中的位置，而从库会用 "),v("code",[_._v("slave_repl_offset")]),_._v(" 这个值记录当前的复制进度。此时，我们想要找的从库，它的 "),v("code",[_._v("slave_repl_offset")]),_._v(" 需要最接近 "),v("code",[_._v("master_repl_offset")]),_._v("。\n如果在所有从库中，有从库的 "),v("code",[_._v("slave_repl_offset")]),_._v(" 最接近 "),v("code",[_._v("master_repl_offset")]),_._v("，那么它的得分就最高，可以作为新主库。")])]),_._v(" "),v("p",[_._v("就像下图所示，旧主库的 "),v("code",[_._v("master_repl_offset")]),_._v("是 1000，\n从库 1、2 和 3 的 "),v("code",[_._v("slave_repl_offset")]),_._v(" 分别是 950、990 和 900，那么，从库 2 就应该被选为新主库。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://images.zaiolos.top/images/202208021453175.png",alt:"image.png"}})]),_._v(" "),v("p",[_._v("如果有两个从库的 slave_repl_offset值大小是一样的（例如，从库 1 和从库 2 的 slave_repl_offset 值都是 990），\n我们就需要给它们进行第三轮打分了。")]),_._v(" "),v("p",[v("strong",[_._v("第三轮：运行 ID 最小的从库得分高。")])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("运行ID")]),_._v(" "),v("p",[_._v("每个实例都会有一个 ID，这个 ID 就类似于这里的从库的编号。")]),_._v(" "),v("p",[_._v("目前，Redis 在选主库时，有一个默认的规定："),v("strong",[_._v("在优先级和复制进度都相同的情况下，运行 ID 号最小的从库得分最高，会被选为新主库")]),_._v("。")])]),_._v(" "),v("p",[_._v("到这里，新主库就被选出来了，「选主」这个过程就完成了。")]),_._v(" "),v("p",[_._v("再回顾下这个流程：")]),_._v(" "),v("ul",[v("li",[_._v("首先，哨兵会按照"),v("strong",[_._v("在线状态")]),_._v("、"),v("strong",[_._v("网络状态")]),_._v("，筛选过滤掉一部分不符合要求的从库；")]),_._v(" "),v("li",[_._v("然后，依次按照"),v("strong",[_._v("优先级")]),_._v("、"),v("strong",[_._v("复制进度")]),_._v("、"),v("strong",[_._v("ID 号大小")]),_._v("再对剩余的从库进行"),v("strong",[_._v("打分")]),_._v("，只要有"),v("strong",[_._v("得分最高的从库")]),_._v("出现，就把它选为新主库。")])]),_._v(" "),v("h4",{attrs:{id:"通知"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通知"}},[_._v("#")]),_._v(" 通知")]),_._v(" "),v("blockquote",[v("p",[_._v("当新的主库出现之后，下一步，哨兵会执行最后一个任务：通知，即让已下线的所有从库去复制新的主库。")]),_._v(" "),v("p",[_._v("通过让从库执行 "),v("code",[_._v("slaveof")]),_._v(" 命令，和新主库建立连接，进行数据复制。")]),_._v(" "),v("p",[_._v("同时，哨兵会把新主库的连接信息通知给客户端，让它们把请求操作发到新主库上。并且会把已下线的主库设置为新主库的从库。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);