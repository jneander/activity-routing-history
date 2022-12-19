import type {Activity, ActivityQuery, Router} from '@jneander/activity-routing'
import type {History} from 'history'

export interface RoutingOptions {
  history: History
  router: Router
}

export type ActivitySetMethod = 'push' | 'replace'

export class Routing {
  private _history: History
  private _router: Router

  constructor({history, router}: RoutingOptions) {
    this._history = history
    this._router = router
  }

  get history(): History {
    return this._history
  }

  get router(): Router {
    return this._router
  }

  getCurrentActivity(): Activity {
    const {pathname, search} = this.history.location
    return this.router.buildActivityFromLocation(pathname, search.replace(/^\?/, ''))
  }

  setActivity(activity: Activity, method: ActivitySetMethod = 'push'): void {
    const currentActivity = this.getCurrentActivity()
    if (activity.url === currentActivity.url) {
      return
    }

    if (method === 'replace') {
      this.history.replace(activity.url)
    } else {
      this.history.push(activity.url)
    }
  }

  setQuery(queryDatum: ActivityQuery, method: ActivitySetMethod = 'push'): void {
    const {name, params} = this.getCurrentActivity()
    const activity = this.router.buildActivity(name, params, queryDatum)
    this.setActivity(activity, method)
  }

  updateQuery(queryDatum: ActivityQuery, method: ActivitySetMethod = 'push'): void {
    const {query} = this.getCurrentActivity()
    this.setQuery({...query, ...queryDatum}, method)
  }

  subscribe(callback: (activity: Activity) => void): () => void {
    return this.history.listen(({location}) => {
      const {pathname, search} = location
      callback(this.router.buildActivityFromLocation(pathname, search))
    })
  }
}
