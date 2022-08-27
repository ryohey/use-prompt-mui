import { createContext, useContext } from "react"

export interface PromptOptions {
  title: string
  message?: string
  initialText?: string
  okText?: string
  cancelText?: string
}

export type PromptProps = PromptOptions & {
  callback: (text: string | null) => void
}

export const PromptContext = createContext<{
  setPrompt: (props: PromptProps) => void
}>(null as never)

export const usePrompt = () => {
  const { setPrompt } = useContext(PromptContext)

  return {
    async show(options: PromptOptions): Promise<string | null> {
      return new Promise((resolve, _reject) => {
        setPrompt({
          ...options,
          callback: (text) => resolve(text),
        })
      })
    },
  }
}
