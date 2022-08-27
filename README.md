# use-prompt-mui

React alternative to window.prompt() using MUI

## Installation

```sh
npm install use-prompt-mui
```

## Setup

```js
<PromptProvider>
  <App />
</PromptProvider>
```

## usePrompt

```js
const ExampleButton = () => {
  const prompt = usePrompt()
  return <button onClick={async () =>
    const message = await prompt.show({
      title: "Enter your message",
    })
    if (message !== null) {
      console.log(message)
    }
  }>
    Push me
  </button>
}
```

## API

### show(options: PromptOptions): Promise<string | null>

```ts
interface PromptOptions {
  title: string
  message?: string
  initialText?: string
  okText?: string
  cancelText?: string
}
```
