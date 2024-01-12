import defaultsDeep from "lodash/defaultsDeep"

export type DebugbarConfigOptions = {
  mode: "ws" | "off"
  cable: {
    url: string
    prefix: string
  }
  channelName: string
}

export function newDebugbarConfig(options: DebugbarConfigOptions) {
  const obj = defaultsDeep(options, {
    mode: "ws",
    cable: {
      url: "ws://127.0.0.1:3000",
      prefix: "/_debugbar",
    },
    channelName: "Debugbar::DebugbarChannel",
  } as DebugbarConfigOptions)

  obj.actionCableUrl = `${obj.cable.url}${obj.cable.prefix}/cable`

  return obj
}
