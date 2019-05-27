Steps to reproduce the leak

1. Clone and run `npm run dev`
2. Open DevTools and click the Memory tab
3. Note current memory usage
4. Keep refreshing (10-20 times), watch the memory increase
5. Amount of memory won't decrase, clearing manually (via bin icon, top-left) or navigating to another tab, than back won't work either.

To clear the memory open the demo in a new tab (v8 will cache the transpiled script).