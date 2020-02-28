  - VUE音乐播放器： 手机端的网页应用程序（SPA）
    - 查看作品：http://116.196.98.19:9000  
      - 请注意！ [新版的chrome浏览器有无法正常播放音乐的BUG。](https://stackoverflow.com/questions/37674223/domexception-failed-to-load-because-no-supported-source-was-found)
    - 我是怎么制作这个项目的？
      - 仿照了慕课网的视频教程，并在其基础上对项目的功能做了一些改进。
      - 我在这个项目中用到的技术：
        - 以VUE-CLI的webpack template 作为项目文件的基础分类框架。
        - 使用 ESLINT 按照 standardJS 规范格式化我的代码。
        - 使用 git 做项目代码的版本控制。
        - 以 nodeJS express 作为本网页应用的后台服务器，并通过 express 的 apiRoutes 功能伪造 QQ音乐 服务器所认可的 HTTP HEADER 来抓取该服务器上的数据资源。
        - 使用 VUE..JS 的生命周期钩子函数，让浏览器在渲染 DOM 之前完成了数据抓取与格式化，
        - 使用 VUE.JS 的模板指令集，动态渲染了一些网页数据
        - 使用 VUE.JS 内置的 `<translation>` 组件，完成了一些动画效果。
        - 使用 VUEX 储存并管理了 各个组件间需要共享的数据。
        - 使用 VUE-router 为一些组件建立了地址锚点，并针对一些特殊的用户访问的情况设置了地址重定向。
    - 我在制作该项目的过程中遇到的几个坑点：
        1. 视频作者所推荐的 better-scroll 是一个糟糕的插件，使用这个插件反而会使问题变得更难解决。因为这个插件不仅自身有BUG，而且它的API所提供的功能并不太符合此项目的业务需求，你需要对它的API做一些额外的编程，才能使其满足业务需求；而且事实上，你可以在不使用该插件的情况下通过少得多的编码量来实现同样的业务需求（反正我是这样做的）。 
        2. 
      - 这个项目可以改进的一些点：
        1. 文件目录结构。 我认为视频作者所设计文件目录结构的用途不够明确，可以按照 vue-cli 文档中所建议的目录结构进行改进，改进细节如下所示：
          <pre>
          "视频作者设计的目录结构"：
          src
            ├─api
            ├─assets
            ├─base    // 与业务需求无关的基础组件
            ├─common
            │   ├─fonts
            │   ├─image
            │   ├─javascript
            │   ├─stylesheet            
            ├─components
            ├─router
            ├─store

          “我建议的目录结构”：
            src
              ├─api
              ├─assets
              │   ├─javascript
              │   ├─stylesheet            
              ├─components
              │   ├─base    // 与业务需求无关的基础组件
              ├─router
              ├─static
              ├─store
            static
              ├─fonts
              ├─image
             </pre>
        2. 产品功能：
          - 为用户增加一些操作歌单的功能，例如：
            - 收藏歌单
            - 查看歌单的引言
            - 分享歌单
          - 为用户增加分享歌曲的功能
          - 歌手查询页的使用频率不高，不适合放在第一导航栏内。
        3. 交互界面：
          - 手指长按某一目标后弹出的选项菜单——改为扇形可能会更好。


