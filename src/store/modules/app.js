/**
 * Created by hp on 2017/9/19.
 */
import Cookies from 'js-cookie'
const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus') // 侧边栏的隐藏显示
    },
    visitedViews: []
  },
  mutations: {
    // 侧边栏展开/关闭
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    // 添加视图
    ADD_VISITED_VIEWS: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push({ name: view.name, path: view.path })
    },
    // 删除视图
    DEL_VISITED_VIEWS: (state, view) => {
      let index;
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          index = i;
          break
        }
      }
      state.visitedViews.splice(index, 1)
    }
  },
  actions: {
    // 侧边栏展开/关闭
    ToggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    // 添加视图
    addVisitedViews({ commit }, view) {
      commit('ADD_VISITED_VIEWS', view)
    },
    // 删除视图
    delVisitedViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    }
  }
};

export default app;
