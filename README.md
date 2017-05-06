# service-worker-cache-example
Very simple javascript app to demonstrate caching of files using JavaScript Service Workers

I believe service workers can do way more than just create cache of file, for more you can check my [blog](http://www.nodexperts.com/blog/5-things-need-know-javascript-service-workers/).

## Usage

```
npm start
```

This simply creates a server using `http-server` module, so it should be globbalyt installed in your machine.
To check if it's installed globally or not, run this command in your shell:
```
npm list -g http-server
```

If it's not then, you can install it using this command,

```
npm i -g http-server
```
or you can use any other server like Python's `simpleHttpServer`.

So, to use this, open the application in browser, make sure your browser supports service-workers. [Here's](http://www.caniuse.com/#search=service) you can see if your browser can run service-workers or not.
Once service-worker is activated, you can stop the server and refressh (not hard-refresh, as that will delete the cache) the page and see if cached files are still displaying or not.

Also you can see in chrome if your service worker is registered or not by going in `chrome://serviceworker-internals/`.

You can add/remove files from `service-worker.js` to see changes after stoping the server (don't forget to unregister the old service worker from browser console).
