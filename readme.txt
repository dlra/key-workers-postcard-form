On Wix:

-Credentials are stored in a database named 'config'.
-The form (contained in `index.html`) is contained in an Wix html element with the id 'html2'.
It is contained in an iframe.
-Data is passed back and forth between this iframe and the main window through messages.

To deploy:
-Copy-paste `index.html` into the '#html2' Wix element.
-Copy-paste all .jsw files into their respective
-add node modules:
    * `googleapis`