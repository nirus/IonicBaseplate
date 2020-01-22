export enum APP_CONST {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
}

export enum APP_EVENTS {
  RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount',
  DAEMON = '@@saga-injector/daemon',
  ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount',
}