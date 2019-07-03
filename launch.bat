:: This is a convenience launcher for Windows assuming:
:: (1) SteamVR is installed and you've run room setup with the border of your play area
:: (2) You've already run npm install on magic-matta base directory and server/ directory
:: (3) You've already compiled a compatible version of exokit in ../exokit/
:: (4) You understand how to configure the rest of this project.
::
:: Make it fancy by creating a shortcut on your desktop with a pretty icon linking to this batch file.

:: Open code editor, I use Atom
start /b atom .

:: Open SteamVR
start /b explorer "steam://rungameid/250820"

:: Start Web Host
start npm start

:: Start Socket Server
cd server
start npm start

:: Wait 10 seconds while servers start before launching browser
ping -n 10 127.0.0.1

:: Start Exokit browser
cd ..\..\exokit
node . -x webvr http://localhost:3000

exit
