import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material"
import { FC, useContext, useState } from "react"
import { PromptContext, PromptProps } from "./usePrompt.js"

export const PromptDialog: FC<PromptProps> = (props) => {
  const [input, setInput] = useState(props.initialText)
  const { setPrompt } = useContext(PromptContext)

  const close = () => {
    setPrompt(null)
  }

  const onCancel = () => {
    props.callback(null)
    close()
  }

  const onClickOK = () => {
    props.callback(input)
    close()
  }

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="xs">
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <TextField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus={true}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onClickOK()
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickOK}>{props.okText ?? "OK"}</Button>
        <Button onClick={onCancel}>{props.cancelText ?? "Cancel"}</Button>
      </DialogActions>
    </Dialog>
  )
}
