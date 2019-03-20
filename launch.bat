REM --- This is a launch script for Windows 10 I use to get the Magic Matta server, browsers, SteamVR, and OBS ready to go.
REM --- You will probably want to replace some of the paths below or remove lines like OBS.
REM --- I have linked to this bat file from a "3D Star" icon on my desktop.

start /b atom .
start /b explorer "steam://rungameid/250820"
start npm start
cd "C:\Program Files\Mozilla Firefox\"
start firefox.exe http://localhost:8080/server.html
cd "C:\Program Files\obs-studio\bin\64bit\"
start obs64.exe
exit
