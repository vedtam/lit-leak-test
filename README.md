Steps to reproduce the leak

1. open DevTools and click the Memory tab
2. note curr. memory of the row lit-element-leak-demo.stackblitz.io usually is ~10 MB (when starting)
3. keep refreshing (5-10 times) the preview iframe and watch the memory increase
4. amount of memory won't decrase, clearing manually (via bin icon, top-left) or navigating to another tab, than back won't work either.

To clear the memory open the demo in a new tab (v8 will cache the transpiled script).