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

  const onClose = () => {
    setPrompt(null)
  }

  const _onClickOK = () => {
    props.callback(input)
    onClose()
  }

  return (
    <Dialog open={props !== null} onClose={onClose} maxWidth="xs">
      <DialogTitle>{props?.title}</DialogTitle>
      <DialogContent>
        <TextField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus={true}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              _onClickOK()
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={_onClickOK}>{props.okText ?? "OK"}</Button>
        <Button
          onClick={() => {
            props?.callback(null)
            onClose()
          }}
        >
          {props.cancelText ?? "Cancel"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
