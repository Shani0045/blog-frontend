import React from 'react'
import {CodeBlock, github, CopyBlock, atomOneDark, a11yDark, a11yLight, atomOneLight} from 'react-code-blocks';

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
    text={props.codeString}
    language={props.language}
    showLineNumbers={true}
    wrapLines
    theme={a11yLight}
  />
  </div>
);
}

export default CodeBlockCard