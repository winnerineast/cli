const BaseCommand = require('./base-command.js')
class Root extends BaseCommand {
  /* istanbul ignore next - see test/lib/load-all-commands.js */
  static get description () {
    return 'Display npm root'
  }

  /* istanbul ignore next - see test/lib/load-all-commands.js */
  static get name () {
    return 'root'
  }

  /* istanbul ignore next - see test/lib/load-all-commands.js */
  static get params () {
    return ['global']
  }

  exec (args, cb) {
    this.root(args).then(() => cb()).catch(cb)
  }

  async root () {
    this.npm.output(this.npm.dir)
  }
}
module.exports = Root
