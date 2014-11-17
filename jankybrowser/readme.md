## Setup

npm install

there are a couple useful things not covered in that example
like webview emits a console event
the basic approach I would take would be:
browser.html/browser.js take over as your test runner environment
would load a webview and set the src to your actually test/test runner (jasmine or what ever)
webview.addEventListener("console", reportBlahsAndDerps, false)

