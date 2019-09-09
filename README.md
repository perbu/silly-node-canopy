# silly-node-canopy

Silly RESTlike calculator used for testing various stuff. I've used to see if c8 can be used to generate usage reports for Node applikations. 

In order to demonstrate c8 used this way do the following:
```
$ npm install -g c8      # install the c8 tool globally.
$ npm install            # install project dependencies
$ npm run instrumented   # start the server in instrumented mode
```
Then in another shell run the client:
```
$ node client.js
```
Then find the PID of the node process that is running server.js and send it a TERM or INT signal. It should shut down and generate data. In order to create a human readable report do:
```
$ c8 --reporter=html report
```

This will generate a HTML report in the coverage folder




