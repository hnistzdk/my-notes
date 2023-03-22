(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{433:function(e,s,a){"use strict";a.r(s);var t=a(1),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("strong",[e._v("Table of Contents")]),e._v(" "),s("em",[e._v("generated with "),s("a",{attrs:{href:"https://github.com/thlorenz/doctoc",target:"_blank",rel:"noopener noreferrer"}},[e._v("DocToc"),s("OutboundLink")],1)])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%BB%E4%BB%8E%E6%A8%A1%E5%BC%8F"}},[e._v("主从模式")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E9%87%87%E7%94%A8%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB%E6%96%B9%E5%BC%8F"}},[e._v("为什么要采用读写分离方式？")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%BB%E4%BB%8E%E5%BA%93%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%8C%E6%AD%A5"}},[e._v("主从库如何进行第一次同步")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%BB%8E%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE"}},[e._v("从节点配置")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5"}},[e._v("第一阶段")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E7%AC%AC%E4%BA%8C%E9%98%B6%E6%AE%B5"}},[e._v("第二阶段")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E7%AC%AC%E4%B8%89%E9%98%B6%E6%AE%B5"}},[e._v("第三阶段")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#psyn20"}},[e._v("PSYN2.0")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%BB%E4%BB%8E%E7%BA%A7%E8%81%94%E6%A8%A1%E5%BC%8F%E5%88%86%E6%8B%85%E5%85%A8%E9%87%8F%E5%A4%8D%E5%88%B6%E6%97%B6%E7%9A%84%E4%B8%BB%E5%BA%93%E5%8E%8B%E5%8A%9B"}},[e._v("「主从级联模式」分担全量复制时的主库压力")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%BB---%E4%BB%8E---%E4%BB%8E%E6%A8%A1%E5%BC%8F"}},[s("strong",[e._v('"主 - 从 - 从"模式')])])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%BB%E4%BB%8E%E5%BA%93%E9%97%B4%E7%BD%91%E7%BB%9C%E6%96%AD%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E"}},[e._v("主从库间网络断了怎么办")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E5%A2%9E%E9%87%8F%E5%A4%8D%E5%88%B6%E5%A4%B1%E6%95%88"}},[e._v("如何避免增量复制失效")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#replication_buffer-%E4%B8%8Ereplication_backlog_buffer"}},[e._v("replication_buffer 与replication_backlog_buffer")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#replication_buffer"}},[e._v("replication_buffer")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#replication_backlog_buffer"}},[e._v("replication_backlog_buffer")])])])])])])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"主从模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主从模式"}},[e._v("#")]),e._v(" 主从模式")]),e._v(" "),s("p",[e._v("Redis 提供了主从库模式，以保证数据副本的一致，主从库之间采用的是「读写分离」的方式。")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("读操作")]),e._v("：主库、从库都可以接收；")]),e._v(" "),s("li",[s("strong",[e._v("写操作")]),e._v("：首先到主库执行，然后，主库将写操作同步给从库。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images.zaiolos.top/images/202208021041581.png",alt:"image.png"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images.zaiolos.top/images/202208021140736.png",alt:"image-20220802114034611"}})]),e._v(" "),s("h3",{attrs:{id:"为什么要采用读写分离方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要采用读写分离方式"}},[e._v("#")]),e._v(" 为什么要采用读写分离方式？")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("笔记")]),e._v(" "),s("p",[e._v("如果说从库也可以像主库一样，可以接收到写请求的话，一个直接的问题就是「数据不一致」。")]),e._v(" "),s("p",[e._v("例如客户端对同一个 key 连续修改了三次，这三次请求分别发送到三个不同的实例上。 那么，这个数据在这三个实例上的副本就不一致了（分别是 v1、v2 和 v3）。后续在读取这个数据的时候，就可能读取到旧的值。")]),e._v(" "),s("p",[e._v("如果要保持这个数据在三个实例上一致，就要涉及到加锁、实例间协商是否完成修改等一系列操作， 但这会带来巨额的开销，显然是不太能接受的。\n采用「读写分离」，所有数据的修改只会在主库上进行，不用协调三个实例。 主库有了最新的数据后，会同步给从库，这样，主从库的数据就是一致的。")]),e._v(" "),s("p",[e._v("分析主从同步之前，我们需要弄清楚三个问题：")]),e._v(" "),s("p",[e._v("主从库同步是如何完成的呢？")]),e._v(" "),s("p",[e._v("主库数据是一次性传给从库，还是分批同步？")]),e._v(" "),s("p",[e._v("主从库间的网络断连了，数据还能保持一致吗？")]),e._v(" "),s("p",[e._v("接下来，首先分析主从库间的第一次同步是如何进行的？这也是Redis 实例建立主从库模式后的规定动作。")])]),e._v(" "),s("h3",{attrs:{id:"主从库如何进行第一次同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主从库如何进行第一次同步"}},[e._v("#")]),e._v(" 主从库如何进行第一次同步")]),e._v(" "),s("h4",{attrs:{id:"从节点配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从节点配置"}},[e._v("#")]),e._v(" 从节点配置")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("################################# REPLICATION #################################\n\n# Master-Replica replication. Use replicaof to make a Redis instance a copy of\n# another Redis server. A few things to understand ASAP about Redis replication.\n#\n#   +------------------+      +---------------+\n#   |      Master      | ---\x3e |    Replica    |\n#   | (receive writes) |      |  (exact copy) |\n#   +------------------+      +---------------+\n#\n# 1) Redis replication is asynchronous, but you can configure a master to\n#    stop accepting writes if it appears to be not connected with at least\n#    a given number of replicas.\n# 2) Redis replicas are able to perform a partial resynchronization with the\n#    master if the replication link is lost for a relatively small amount of\n#    time. You may want to configure the replication backlog size (see the next\n#    sections of this file) with a sensible value depending on your needs.\n# 3) Replication is automatic and does not need user intervention. After a\n#    network partition replicas automatically try to reconnect to masters\n#    and resynchronize with them.\n#\n# replicaof <masterip> <masterport>\n\n# If the master is password protected (using the \"requirepass\" configuration\n# directive below) it is possible to tell the replica to authenticate before\n# starting the replication synchronization process, otherwise the master will\n# refuse the replica request.\n#\n# masterauth <master-password>\n#\n# However this is not enough if you are using Redis ACLs (for Redis version\n# 6 or greater), and the default user is not capable of running the PSYNC\n# command and/or other commands needed for replication. In this case it's\n# better to configure a special user to use with replication, and specify the\n# masteruser configuration as such:\n#\n# masteruser <username>\n#\n# When masteruser is specified, the replica will authenticate against its\n# master using the new AUTH form: AUTH <username> <password>.\n\n# When a replica loses its connection with the master, or when the replication\n# is still in progress, the replica can act in two different ways:\n#\n# 1) if replica-serve-stale-data is set to 'yes' (the default) the replica will\n#    still reply to client requests, possibly with out of date data, or the\n#    data set may just be empty if this is the first synchronization.\n#\n# 2) If replica-serve-stale-data is set to 'no' the replica will reply with\n#    an error \"SYNC with master in progress\" to all commands except:\n#    INFO, REPLICAOF, AUTH, PING, SHUTDOWN, REPLCONF, ROLE, CONFIG, SUBSCRIBE,\n#    UNSUBSCRIBE, PSUBSCRIBE, PUNSUBSCRIBE, PUBLISH, PUBSUB, COMMAND, POST,\n#    HOST and LATENCY.\n#\nreplica-serve-stale-data yes\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br")])]),s("p",[e._v("使用默认的配置启动机器，机器都是主节点。如果想要让机器变成从节点，需要在 conf 文件上配置主从复制的相关参数。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 配置主节点的ip和端口\nslaveof 192.168.1.1 6379\n# 从redis2.6开始，从节点默认是只读的\nslave-read-only yes\n# 假设主节点有登录密码，是123456\nmasterauth 123456\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("主从库间数据第一次同步包含三个阶段：\n"),s("img",{attrs:{src:"https://images.zaiolos.top/images/202208021042939.png",alt:"image.png"}})]),e._v(" "),s("h4",{attrs:{id:"第一阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一阶段"}},[e._v("#")]),e._v(" 第一阶段")]),e._v(" "),s("p",[e._v("第一阶段是主从库间建立连接、协商同步的过程，主要是为全量复制做准备。\n命令格式：\n"),s("code",[e._v("PSYNC <runid> <offset>")]),e._v("\n具体来说，从库给主库发送 "),s("code",[e._v("psync")]),e._v(" 命令，表示要进行数据同步，主库根据这个命令的参数来启动复制。 "),s("code",[e._v("psync")]),e._v(" 命令包含了主库的 "),s("code",[e._v("runID")]),e._v(" 和复制进度 "),s("code",[e._v("offset")]),e._v("两个参数。")]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("psync")]),e._v(" 是 Redis 2.8 版本提供的命令，用于解决 sync 「"),s("strong",[e._v("断线后重复制")]),e._v("」的低效问题。")])]),e._v(" "),s("ul",[s("li",[e._v("runID：是每个 Redis 实例启动时都会自动生成的一个随机 ID，用来唯一标记这个实例。 当从库和主库第一次复制时，因为不知道主库的 runID，所以将 runID 设为“？”。")]),e._v(" "),s("li",[e._v("offset：复制偏移量，此时设为 -1，表示第一次复制。")])]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("PSYNC ? -1")]),e._v(" 表示全量复制。")])]),e._v(" "),s("p",[e._v("主库收到 "),s("code",[e._v("psync")]),e._v(" 命令后，会用 "),s("code",[e._v("FULLRESYNC")]),e._v(" 响应命令带上两个参数：「主库 runID」 和主库目前的「复制进度 offset」，返回给从库。 从库收到响应后，会记录下这两个参数，在下一次发送"),s("code",[e._v("psync")]),e._v(" 命令时使用。")]),e._v(" "),s("blockquote",[s("p",[e._v("需要注意的是，"),s("code",[e._v("FULLRESYNC")]),e._v(" 响应表示「"),s("strong",[e._v("第一次复制采用的全量复制")]),e._v("」，也就是说，主库会把当前所有的数据都复制给从库。\n如果主服务器返回的是 "),s("code",[e._v("+CONTINUE")]),e._v(" 则表示需要进行「部分同步」。")])]),e._v(" "),s("h4",{attrs:{id:"第二阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段"}},[e._v("#")]),e._v(" 第二阶段")]),e._v(" "),s("p",[e._v("在第二阶段，主库将所有数据同步给从库。从库收到数据后，在本地完成数据加载。\n具体步骤如下：")]),e._v(" "),s("ol",[s("li",[e._v("主库收到完整重同步请求后，会在后台执行 bgsave 命令，生成 RDB 文件，"),s("strong",[e._v("并使用一个「缓冲区：replication buffer」记录「从现在开始所有的写命令」")]),e._v("。")]),e._v(" "),s("li",[e._v("当"),s("code",[e._v("bgsave")]),e._v(" 命令执行完毕，主服务会将 RDB 文件发给从库。从库接收到 RDB 文件后，会先清空当前数据库，然后加载 RDB 文件。")])]),e._v(" "),s("blockquote",[s("p",[e._v("为什么要有清空的动作？\n这是因为从库在通过 slaveof 命令开始和主库同步前，可能保存了其他数据。为了避免之前数据的影响，从库需要先把当前数据库清空。")])]),e._v(" "),s("p",[s("strong",[e._v("在主库将数据同步给从库的过程中，主库不会被阻塞，仍然可以正常接收请求。")]),e._v(" 否则，Redis 的服务就被中断了。但是，这些请求中的写操作并没有记录到刚刚生成的 RDB 文件中。为了保证主从库的数据一致性，主库会在内存中用专门的 "),s("code",[e._v("replication buffer")]),e._v(" （ "),s("strong",[e._v("复制缓冲区")]),e._v("），记录 RDB 文件生成后收到的所有写操作。")]),e._v(" "),s("h4",{attrs:{id:"第三阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三阶段"}},[e._v("#")]),e._v(" 第三阶段")]),e._v(" "),s("p",[e._v("最后，也就是第三个阶段，主库会把第二阶段执行过程中新收到的写命令，再发送给从库。\n具体的操作是，当主库完成 RDB 文件发送后，就会把此时 "),s("code",[e._v("replication buffer")]),e._v(" 中的修改操作发给从库，从库再重新执行这些操作。这样一来，主从库就实现同步了。")]),e._v(" "),s("h4",{attrs:{id:"psyn2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#psyn2-0"}},[e._v("#")]),e._v(" PSYN2.0")]),e._v(" "),s("p",[s("code",[e._v("PSYN2.0")]),e._v(" 是 Redis 4.0 的 其中一个新特性。相比原来的 PSYN 功能，最大的变化就是支持两种场景下的部分重同步。")]),e._v(" "),s("ul",[s("li",[e._v("slave 节点提升为 master 节点后，其他 slave 节点可以从新提升的 master 进行部分重同步；")]),e._v(" "),s("li",[e._v("另外一个场景就是slave重启后，可以进行部分重同步。")])]),e._v(" "),s("h3",{attrs:{id:"「主从级联模式」分担全量复制时的主库压力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#「主从级联模式」分担全量复制时的主库压力"}},[e._v("#")]),e._v(" 「主从级联模式」分担全量复制时的主库压力")]),e._v(" "),s("p",[e._v("通过上面分析「主从库间第一次数据同步」的过程，可以看到，一次全量复制，对于主库来说有两个耗时的操作：")]),e._v(" "),s("ul",[s("li",[e._v("生成 RDB文件；")]),e._v(" "),s("li",[e._v("传输 RDB 文件。")])]),e._v(" "),s("p",[e._v("如果说从库数量很多，而且都要和主库进行全量复制的话，就会导致两个问题：")]),e._v(" "),s("ul",[s("li",[e._v("主库忙于 fork 子进程生成 RDB 文件，进行数据全量同步，"),s("strong",[e._v("fork 这个操作会阻塞主线程处理正常请求，从而导致主库响应应用程序的请求速度变慢。")])]),e._v(" "),s("li",[e._v("生成 RDB 文件 需要耗费主服务器大量的CPU，内存和磁盘I/O资源。传输 RDB 文件也会占用主库的网络带宽，并对主服务器响应命令请求的时间产生影响。")])]),e._v(" "),s("p",[e._v("那么，有没有好的解决方法可以分担主库压力呢？")]),e._v(" "),s("p",[e._v("其实是有的，这就是 "),s("strong",[e._v('「"主 - 从 - 从"模式」')]),e._v("。")]),e._v(" "),s("h4",{attrs:{id:"主-从-从-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主-从-从-模式"}},[e._v("#")]),e._v(" "),s("strong",[e._v('"主 - 从 - 从"模式')])]),e._v(" "),s("p",[e._v("上面介绍的主从库模式，是所有的从库都是和主库连接，所有的全量复制也都是和主库进行的。\n现在，我们可以通过「“主 - 从 - 从”模式」将主库生成 RDB 和传输 RDB 的压力，以级联的方式分散到从库上。")]),e._v(" "),s("p",[e._v("简单来说，我们在部署主从集群的时候，可以手动选择一个从库（比如选择内存资源配置较高的从库），用于级联其他的从库。 然后，我们可以再选择一些从库（例如三分之一的从库），在这些从库上执行如下命令，让它们和刚才所选的从库，建立起主从关系。")]),e._v(" "),s("p",[s("code",[e._v("salveof 所选从库的IP 6379")]),e._v("命令")]),e._v(" "),s("p",[e._v("这样一来，这些从库就会知道，在进行同步时，不用再和主库进行交互了，只要和级联的从库进行写操作同步就行了，这就可以减轻主库上的压力，如下图所示：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images.zaiolos.top/images/202208021042531.png",alt:"image.png"}})]),e._v(" "),s("p",[e._v("那么，一旦主从库完成了全量复制，它们之间就会一直维护一个网络连接，主库会通过这个连接将后续陆续收到的命令操作再同步给从库， 这个过程也称为基于长连接的命令传播，可以避免频繁建立连接的开销。")]),e._v(" "),s("p",[e._v("听上去好像很简单，但不可忽视的是，这个过程中存在着风险点，最常见的就是网络断连或阻塞。如果网络断连，主从库之间就无法进行命令传播了， 从库的数据自然也就没办法和主库保持一致了，客户端就可能从从库读到旧数据。")]),e._v(" "),s("p",[e._v("接下来，看看网络断连后的解决办法。")]),e._v(" "),s("h3",{attrs:{id:"主从库间网络断了怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主从库间网络断了怎么办"}},[e._v("#")]),e._v(" 主从库间网络断了怎么办")]),e._v(" "),s("p",[e._v("在 Redis 2.8 之前，主从库是使用 sync 命令进行同步。如果在命令传播时出现了网络闪断，那么，从库就会和主库重新进行一次全量复制，开销非常大。\n我们上面页提到了全量复制的影响：")]),e._v(" "),s("ul",[s("li",[e._v("生成 RDB文件：需要耗费主服务器大量的CPU，内存和磁盘I/O资源；")]),e._v(" "),s("li",[e._v("传输 RDB 文件：占用主库的网络带宽，并对主服务器响应命令请求的时间产生影响。")])]),e._v(" "),s("p",[e._v("从 Redis 2.8 开始，网络断了之后，主从库会采用「增量复制」的方式继续同步。 听名字大概就可以猜到它和全量复制的不同：全量复制是同步所有数据，而"),s("strong",[e._v("增量复制只会把主从库网络断连期间主库收到的命令，同步给从库")]),e._v("。")]),e._v(" "),s("p",[e._v("那么，增量复制时，主从库之间具体是怎么保持同步的呢？这个问题的答案和 "),s("code",[e._v("repl_backlog_buffer")]),e._v(" （复制积压缓冲区）有关。")]),e._v(" "),s("blockquote",[s("p",[e._v("复制积压缓冲区：是主库维护的一个固定长度的队列，默认大小是1MB。")])]),e._v(" "),s("p",[e._v("我们先来分析下主从库增量同步的流程。")]),e._v(" "),s("p",[e._v("1）、当主从库进行数据同步时，主库会把 RDB 通信期间收到新的操作命令写入 "),s("code",[e._v("replication buffer")]),e._v("，同时也会把这些操作命令也写入 "),s("code",[e._v("repl_backlog_buffer")]),e._v(" 这个缓冲区。")]),e._v(" "),s("p",[s("code",[e._v("repl_backlog_buffer")]),e._v(" 是一个环形缓冲区，主库会记录自己写到的位置，从库则会记录自己已经读到的位置。")]),e._v(" "),s("p",[e._v("2）、刚开始的时候，主库和从库的写读位置在一起，也就是「复制偏移量」相同，这算是它们的起始位置。 随着主库不断接收新的写操作，它在缓冲区中的写位置会逐步偏离起始位置，我们通常用偏移量来衡量这个偏移距离的大小，对主库来说，对应的偏移量就是 "),s("code",[e._v("master_repl_offset")]),e._v("。 主库接收的新写操作越多，这个值就会越大。")]),e._v(" "),s("p",[e._v("同样，从库在复制完写操作命令后，它在缓冲区中的读位置也开始逐步偏移刚才的起始位置， 此时，从库已复制的偏移量 slave_repl_offset 也在不断增加。正常情况下，这两个偏移量基本相等。")]),e._v(" "),s("p",[e._v("3）、如果发生从库断线，在重启之后，主从库的连接恢复，从库首先会给主库发送 "),s("code",[e._v("psync")]),e._v(" 命令，并把自己当前的"),s("code",[e._v("slave_repl_offset")]),e._v(" 发给主库， 主库会判断自己的"),s("code",[e._v("master_repl_offset")]),e._v(" 和 "),s("code",[e._v("slave_repl_offset")]),e._v(" 之间的差距。如果发现在"),s("code",[e._v("slave_repl_offset")]),e._v(" 之后的数据仍然存在于复制积压缓冲区里面，主库发送 "),s("code",[e._v("+CONTINUE")]),e._v(" 回复，表示进行增量复制。")]),e._v(" "),s("p",[e._v("如下图所示：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images.zaiolos.top/images/202208021043937.png",alt:"image.png"}})]),e._v(" "),s("p",[e._v("这里有一个地方需要重点考虑。")]),e._v(" "),s("p",[e._v("因为 "),s("code",[e._v("repl_backlog_buffer")]),e._v(" 是一个环形缓冲区，所以在缓冲区写满后，主库会继续写入，此时，就会覆盖掉之前写入的操作。 如果从库的读取速度比较慢，就有")]),e._v(" "),s("p",[e._v("可能导致从库还未读取的操作被主库新写的操作覆盖了，这会导致不能进行增量复制，必须采用全量复制。")]),e._v(" "),s("p",[e._v("因此要想办法避免这一情况，一般而言，我们可以调整配置文件中 repl-backlog-size 这个参数。")]),e._v(" "),s("h4",{attrs:{id:"如何避免增量复制失效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何避免增量复制失效"}},[e._v("#")]),e._v(" 如何避免增量复制失效")]),e._v(" "),s("p",[e._v("Redis 为复制积压缓冲区设置的默认大小是 1MB。如果主库需要执行大量的写命令，又或者断线后需要重连的时间比较长，这个大小显然不合适。")]),e._v(" "),s("p",[e._v("我们可以根据： second * "),s("code",[e._v("write_size_per_second")]),e._v(" 公式来估算缓冲区的「最小」大小。")]),e._v(" "),s("ul",[s("li",[e._v("second ：从库断线后重新连上主库所需的平均时间，单位：秒；")]),e._v(" "),s("li",[s("code",[e._v("write_size_per_second")]),e._v("：主库平均每秒产生的写命令数据量。")])]),e._v(" "),s("p",[e._v("我们在实际应用中，考虑到可能存在一些突发的请求压力，我们通常需要把这个缓冲空间扩大一倍，即 "),s("code",[e._v("repl-backlog-size")]),e._v(" = second * "),s("code",[e._v("write_size_per_second")]),e._v(" * 2。")]),e._v(" "),s("p",[e._v("举个例子，如果主库每秒产生1 MB的写数据，从库断线后平均要 5 秒才能重新连上主库。这就至少需要 5 MB 的缓冲空间。 否则，新写的命令就会覆盖掉旧操作了。为了应对可能的突发压力，我们最终把 "),s("code",[e._v("repl-backlog-size")]),e._v(" 设为 10 MB。")]),e._v(" "),s("p",[e._v("这样一来，增量复制时主从库的数据不一致风险就降低了。不过，如果并发请求量非常大，连两倍的缓冲空间都存不下新操作请求的话，此时，主从库数据仍然可能不一致。")]),e._v(" "),s("blockquote",[s("p",[e._v("针对这种情况，一方面，可以根据 Redis 所在服务器的内存资源再适当增加 repl-backlog-size 值，比如说设置成缓冲空间大小的 4 倍")]),e._v(" "),s("p",[e._v("另一方面，可以考虑使用"),s("strong",[e._v("切片集群")]),e._v("来分担单个主库的请求压力。")])]),e._v(" "),s("h3",{attrs:{id:"replication-buffer-与replication-backlog-buffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replication-buffer-与replication-backlog-buffer"}},[e._v("#")]),e._v(" replication_buffer 与replication_backlog_buffer")]),e._v(" "),s("h4",{attrs:{id:"replication-buffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replication-buffer"}},[e._v("#")]),e._v(" replication_buffer")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("对于客户端或从库与 Redis 通信，Redis 都会分配一个内存 buffer 进行数据交互。所有数据交互都是通过这个buffer进行的。Redis先把数据写入这个buffer中，然后再把buffer中的数据发到 "),s("code",[e._v("client socket")]),e._v(" 中再通过网络发送出去，这样就完成了数据交互。")])]),e._v(" "),s("li",[s("p",[e._v("所以主从在增量同步时，从库作为一个client，也会分配一个buffer，只不过这个buffer专门用来传播用户的写命令到从库，保证主从数据一致。我们通常把它叫做 "),s("code",[e._v("Replication Buffer")]),e._v("。")])]),e._v(" "),s("li",[s("p",[e._v("Redis 通过"),s("code",[e._v("client-output-buffer-limit")]),e._v(" 参数设置这个buffer的大小。主库会给每个从库建立一个客户端，所以 "),s("code",[e._v("replication buffer")]),e._v(" 不是共享的，而是每个从库都有一个对应的客户端。")])])]),e._v(" "),s("blockquote",[s("p",[e._v("如果主从在传播命令时，因为某些原因从库处理得非常慢，那么主库上的这个buffer就会持续增长，消耗大量的内存资源，甚至OOM。")]),e._v(" "),s("p",[e._v("所以Redis提供了"),s("code",[e._v("client-output-buffer-limit")]),e._v("参数限制这个buffer的大小，如果超过限制，主库会强制断开这个client的连接，")]),e._v(" "),s("p",[e._v("也就是说从库处理慢导致主库内存buffer的积压达到限制后，主库会强制断开从库的连接，")]),e._v(" "),s("p",[e._v("此时主从复制会中断，中断后如果从库再次发起复制请求，那么此时可能会导致恶性循环，引发复制风暴，这种情况需要格外注意。")])]),e._v(" "),s("h4",{attrs:{id:"replication-backlog-buffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replication-backlog-buffer"}},[e._v("#")]),e._v(" replication_backlog_buffer")]),e._v(" "),s("p",[e._v("和 "),s("code",[e._v("replication_buffer")]),e._v(" 不一样，"),s("code",[e._v("repl_backlog_buffer")]),e._v(" 是所有从库共享的，"),s("code",[e._v("slave_repl_offset")]),e._v(" 由从库自己记录的，这也是因为每个从库的复制进度不一定相同。从库断连后再恢复时，会给主库发送 "),s("code",[e._v("psync")]),e._v(" 命令，并把自己当前的"),s("code",[e._v("slave_repl_offset")]),e._v(" 发给主库。"),s("code",[e._v("slave_repl_offset")]),e._v(" 指向的数据没有被覆盖，就能继续恢复。如果从库断开时间过长，"),s("code",[e._v("repl_backlog_buffer")]),e._v("环形缓冲区会被主库的写命令覆盖，那么从库重连后只能全量同步。")])])}),[],!1,null,null,null);s.default=r.exports}}]);