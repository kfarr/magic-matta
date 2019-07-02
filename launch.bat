:: This is a convenience launcher for Windows assuming:
:: (1) SteamVR is installed and configured properly via Steam
:: (2) You've already run npm install on project root directory and server/ directory
:: (3) You've already compiled a compatible version of exokit in ../exokit/
:: (4) You understand how to configure the rest of this project.
::
:: Make it fancy by creating a shortcut on your desktop with a pretty icon linking to this batch file.

:: Open code editor, default is Atom
start /b atom .

:: Open SteamVR
start /b explorer "steam://rungameid/250820"

:: Start Web Host
start npm start

:: Start Socket Server
cd server
start npm start

:: Start Browser after delay because web host isn't ready yet
cd ..\..\exokit
ping -n 10 127.0.0.1
node . -x webvr http://localhost:3000

exit
