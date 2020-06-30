# Curl Usage and Examples

* __Basic Usage__

    ```bash
    curl example.com
    ```

* __Unix Socket Usage__

    ```bash
    curl --unix-socket /var/run/docker.sock http:/images/json
    ```


* __File Download__

    * `-o <filename>` - Output to file.

    * `-O` - Output to name of resource.

    * `-C` - Continue existing partial download.

    ```bash
    curl -o file.txt http://example.com/file.txt
    ```

* __File Upload__

    * `-F file=@<file>` - Upload a file.

    ```bash
    curl -F file=@test.c https://example.com/post
    ```

* __Follow Redirects__

    * `-L` - Follow redirects.

    ```bash
    curl -L http://www.example.com
    ```

* __Disable Certificate Checking__

    * `-k` - Disable certificate checking.

    ```bash
    curl -k https://www.example.com
    ```

* __Verbose Mode__

    * `-v` - View HTTP request header and connection details.

    ```bash
    curl -v https://www.example.com
    ```

* __Profile Mode (Timing Breakdown)__

    * `-w ` - View HTTP request header and connection details.

    ```bash
    curl https://www.example.com -sSo /dev/null -w 'namelookup:\t%{time_namelookup}\nconnect:\t%{time_connect}\nappconnect:\t%{time_appconnect}\npretransfer:\t%{time_pretransfer}\nredirect:\t%{time_redirect}\nstarttransfer:\t%{time_starttransfer}\ntotal:\t\t%{time_total}\n'
    ```

    * `namelookup` — The time required for DNS resolution.
    * `connect` — The time required to establish the TCP connection.
    * `appconnect` — This is the time taken to establish connections for any layers between TCP and the application layer, such as SSL/TLS.
    * `pretransfer` — This is the time taken from the start to when the transfer of the file is just about to begin.
    * `redirect` — This is the total time taken to process any redirects.
    * `starttransfer` — Time it took from the start to when the first byte is about to be transferred.
    * `total` — The total time taken for cURL to complete the entire process.

* __Quiet Mode__

    * `-s` - Hide the progress bar.

    ```bash
    curl -s https://www.example.com
    ```

* __Include HTTP Response Header__

    * `-i` -  Include HTTP response headers.
    
    ```bash
    curl -i http://www.example.com`
    ```


* __Change HTTP Request Method__

    * `-X <http-method>` - Include HTTP response headers.

    * `-I` - HEAD method shortcut.

    ```bash
    curl -X POST https://example.com/post
    ```

* __Add Request Headers__

    * `-H` -  Set HTTP request headers.

    * `-A` - Set `User-Agent` shortcut.

    * `-e` - Set `Referrer` shortcut.

    ```bash
    curl -H 'X-My-Custom-Header: 123' https://example.com/get
    ```

* __Add HTTP Data - Request Body__

    * `--data <data>` - Add post data.

    * `-d <data>` - Add post data.

    * `--data-urlencode` - Add url-encoded data

        * NB: Special characters (e.g. '@', '%', '=') should be [URL-encoded](https://en.wikipedia.org/wiki/Percent-encoding).
    
    * `-d @some.json` - Add post data from local file.

    ```bash
    curl -d "firstname=temple&lastname=cloud" https://example.com/post`
    ```

* __Add HTTP Data - Upload a File__

    * `-F file=@<file>` - Upload a file

    ```bash
    curl -F file=@test.c https://example.com/post
    ```

* __Submit JSON__

    * `-H 'Content-Type: application/json'` - Include JSON header.

    * `-d <json_data>` - Include JSON data.

    ```bash
    curl -H 'Content-Type: application/json' https://example.com/post \
        -d '{"email":"test@example.com", "name": ["Temple", "Cloud]}' 
    ```

* __Get HTTP Return code__

    * `cURL` doesn’t differentiate between a successful HTTP request (2xx) and a failed HTTP request (4xx/5xx). 
    
    * `curl` always returns an exit status of 0 as long as there was no problem connecting to the site.

    * `-f` stores the curl mapped HTTP response code in the `shell exit-code variable`.

    ```bash
    curl -f https://example.com/bad
    echo $?
    ```

* __HTTP Authenticated Requests__

    * `-u <username>:<passwd>` - Specify `HTTP BAsic Auth` username and password.

    * `<username>:<passwd>@<host>` - This can also be use in the `URL`.

    ```bash
    curl -u username:passwd https://example.com
    ```

* __Test Protocol Support__

    * `--sslv3` - Specify the protocol to use. This can be used to check if it is accepted by the server..

    ```bash
    curl -v --tlsv1.2 https://www.example.com
    curl -v --sslv3 https://www.example.com
    ```

* __Interact with Virtual Hosts__

    * `--resolve` - Specify the virtual host and port of the target.

    ```bash
    curl https://example1.com/ --resolve example1.com:192.168.0.1:443
    ```

* __Test IPv4 and IPv6 Capabilities__

    * `-4` - Use IPv4 addressing.

    * `-6` - Use IPv4 addressing.

    ```bash
    curl -6 https://www.example.com
    ```

* __Configuration__

    * `~/.curlrc` - Allows global configuration options to be defined.

    * `-K` - Allow an arbitrary configuration file to be set.

    ```bash
    curl -K config.txt example.com
    ```