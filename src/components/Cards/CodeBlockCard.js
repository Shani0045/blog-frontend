import React from 'react'
import {CodeBlock, github, CopyBlock, atomOneDark, a11yDark} from 'react-code-blocks';

function CodeBlockCard(props) {
  const codeString = `from django.http import HttpResponse
  from django.views import View

  class MyView(View):
      def get(self, request, *args, **kwargs):
          # Logic for handling GET requests
          return HttpResponse("Hello, GET request!")

      def post(self, request, *args, **kwargs):
          # Logic for handling POST requests
          return HttpResponse("Hello, POST request!")
`

return (
  <div className='code-block my-2 border'>
    <CodeBlock
    text={codeString}
    language={props.language}
    showLineNumbers={true}
    wrapLines
    theme={a11yDark}
  />
  </div>
);
}

export default CodeBlockCard