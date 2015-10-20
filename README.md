Node.js application to get browser fingerprint.
=======


----------

Dependencies
------------

 1. [express](https://www.npmjs.com/package/express)

> Fast, unopinionated, minimalist web framework

 2. [browser_fingerprint](https://github.com/evantahler/browser_fingerprint)

> This module attempts to uniquely identify browsers by examining their
> header and connection information.


**Why this?**
This script it made to act as an internal end-point to serve the Browser Fingerprint print of the client who requests it.

**How to get Browser Fingerprint with this?**

1. Start the server using  `node index.js`

2. Make `http` call to the server eg: `http://localhost:3000`


you will see `fingerprint hash` like this `f3f476f7109a659d6055715c9dec2ccf27ff93d7`


here  `f3f476f7109a659d6055715c9dec2ccf27ff93d7` is your Browsers Fingerprint
