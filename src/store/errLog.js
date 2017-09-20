/**
 * Created by hp on 2017/9/19.
 */
const errLog = {
  state: {
    errLog: []
  },
  pushLog(log) {
    this.state.errLog.unshift(log)
  },
  clearLog() {
    this.state.errLog = []
  }
};

export default errLog
