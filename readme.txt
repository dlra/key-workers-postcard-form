On Wix:

-Credentials are stored in a database named 'config'.
-The form (contained in `index.html`) is contained in an Wix html element with the id 'html2'.
It is contained in an iframe.
-Data is passed back and forth between this iframe and the main window through messages.

To deploy:
-Copy-paste `index.html` into the '#html2' Wix element.
-Copy-paste all .jsw files into their respective files on the Wix backend
-Do likewise with frontend .js files
-add node modules:
    * `googleapis`


Changelog

4th August 2020
- Changed 'sheet id' key to 'key worker sheet id' in the 'config' table
on the Wix database (value remained the same).
- Made a new sheet on google drive to store map data.
- Added 'map sheet id' key with the value set to the id of the new
google sheet just added.