import { FC, ReactNode, useState } from "react"
import { PromptDialog } from "./PromptDialog.js"
import { PromptContext, PromptProps } from "./usePrompt.js"

export const PromptProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [prompt, setPrompt] = useState<PromptProps | null>(null)

  return (
    <PromptContext.Provider
      value={{
        setPrompt,
      }}
    >
      {children}
      {prompt !== null && <PromptDialog {...prompt} />}
    </PromptContext.Provider>
  )
}
