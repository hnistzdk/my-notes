// import vue from 'vue/dist/vue.esm.browser'
import copy from './copy'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
  setTimeout(() => {
    try {
      document && (() => { //对document的判断是防止编译的时候报错
        copy()
      })()
    } catch (e) {
      console.error(e.message)
    }
  }, 500)

  function integrateGitalk(router) {
    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    document.body.appendChild(linkGitalk);
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    document.body.appendChild(scriptGitalk);

    router.afterEach((to) => {
      if (scriptGitalk.onload) {
        loadGitalk(to);
      } else {
        scriptGitalk.onload = () => {
          loadGitalk(to);
        }
      }
    });

    function loadGitalk(to) {
      let commentsContainer = document.getElementById('gitalk-container');
      if (!commentsContainer) {
        commentsContainer = document.createElement('div');
        commentsContainer.id = 'gitalk-container';
        commentsContainer.classList.add('content');
      }
      const $page = document.querySelector('.page');
      if ($page) {
        $page.appendChild(commentsContainer);
        if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
          renderGitalk(to.fullPath);
        }
      }
    }

    function renderGitalk(fullPath) {
      const gitalk = new Gitalk({
        clientID: '47277731802090a63814',
        clientSecret: 'dc6f628c6202184333d4fd8097fdb6312b651d63', // come from github development
        repo: 'my-notes',
        owner: 'hnistzdk',
        admin: ['hnistzdk'],
        id: 'comment',
        distractionFreeMode: false,
        language: 'zh-CN',
      });
      gitalk.render('gitalk-container');
    }
  }
  try {
    document && integrateGitalk(router)
  } catch (e) {
    console.error(e.message)
  }
}