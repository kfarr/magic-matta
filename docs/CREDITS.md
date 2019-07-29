# aframe-bus
This experiment originally started to make a city "paper" bus in XR form inspired by #Codevember 2018. It eventually morphed into a more complicated project.

## Running bus tracker broadcaster app in exokit:
Tested on Windows 10 PC with HTC Vive and Trackers. It's recommended that you run SteamVR Room Setup and set the play zone to match exactly the dimensions of your projector screen area.
0) Clone this repo
1) Open a command shell in this repo's /server directory and run:
`npm run forever` (after running `npm install` once)
2) Navigate back to this repo's root directory and run:
`http-server` (install with `npm install -g http-server` first if you don't have already)
2) Note the IP address when you run the above, use this to update the `url` value on the `broadcast` component on the `a-scene` entity. Use port 12000, so your attribute will look something like: `broadcast="url: http://192.168.1.1:12000"`
4) Open another command shell in your exokit directory (after building exokit from repo HASH value e5d38a6ca5f2c5cc03f79e0b5ec8d0fcad6c142a) then run:
`node . -x webvr http://localhost:8080/bus-broadcast.html`
5) On another machine attached to a projector pointed at the floor, use the IP address noted in (1) and open [localip]:8080/bus-broadcast.html in any browser. Open the console and run `makeProjector();` Do not enter VR mode, instead use browser Fullscreen to stretch 3d view to full edges. Use the mouse to click, drag and "double drag" (using middle mouse button or two fingers touchpad) to adjust the projector's camera position while using the VR headset and tracked object to manually calibrate the projector.

## Quick links to Codevember 2018 static pages
* https://kfarr.github.io/aframe-bus/index.html
* https://kfarr.github.io/aframe-bus/index-night.html
* https://kfarr.github.io/aframe-bus/codevember-02-time.html
* https://kfarr.github.io/aframe-bus/codevember-03-carrot.html
* https://kfarr.github.io/aframe-bus/codevember-04-sky.html
* https://kfarr.github.io/aframe-bus/codevember-07-sea.html
* https://kfarr.github.io/aframe-bus/codevember-09-green.html
* https://kfarr.github.io/aframe-bus/codevember-15-fire.html

## About the Bus
1:43 scale NYC MTA Bus Toy:
https://www.amazon.com/Daron-RT8468-MTA-11-Bus/dp/B00EVQJ5I2

In Real Life: Orion Model VII Next Generation
https://cptdb.ca/wiki/index.php/Orion_International_%27Orion_VII%27
https://en.wikipedia.org/wiki/MTA_Regional_Bus_Operations_bus_fleet (search "Orion VII
Next Generation" for pictures)

Length 40' 10.5" = 12.459m
Width: 102" = 2.59 m
Height: 118.5” = 3.0099m (not including HVAC or battery, otherwise 132” or 335.28m for full HEV )

## "Paper" Model Bus Dimensions
168 - height in px of front from bumper to roof
186 - height in px of right from bottom of wheels to roof
ratio = 168 / 186 = 0.903225806451613
height of front in m = 3.0099 * 0.903225806 = 2.7186
and move up 0.2913m

## Credits
Besides my code, art and models, I attempted to source everything in the repo from creative commons, MIT, apache, etc licensed material. Credits and notes below:

trees:
https://poly.google.com/view/2y-Cl3E7lMf
https://poly.google.com/view/8ICCdgc7CQd

island:
https://poly.google.com/view/eEz9hdknXOi

grass:
https://opengameart.org/content/3-seamless-grass-textures

fence:
https://poly.google.com/view/8ySm0IGHA5W

“Paper bus” source texture
http://i841.photobucket.com/albums/zz339/akamtabx36/Paperbuses/1722-3.png
https://cptdb.ca/uploads/monthly_06_2008/post-2065-1214100948.png

LED signs:
https://www.nyctransitforums.com/topic/13822-animated-luminator-bus-signs/?page=17

FONT for custom signs:
https://www.nyctransitforums.com/topic/11534-mta-luminator-bus-sign-fonts/

Top down cars and trucks both:
https://www.123rf.com/clipart-vector/bus_top_view.html?sti=od03in9pydp16ysu7p|&mediapopup=96963891
Bus only:
https://www.123rf.com/clipart-vector/bus_top_view.html?sti=lbyvx0m172ctlhijwo|&mediapopup=64825323

A-Frame clock component:
https://themarklee.com/2017/04/17/build-your-own-building-blocks-for-webvr-using-a-frame/

number placement:
https://untappedcities.com/2014/02/25/cities-101-what-are-those-numbers-on-top-of-buses-for/

streetlight:
https://poly.google.com/view/a7GJySoqzuL

sky:
https://www.flickr.com/photos/gadl/1374935110
sky2: https://spacedock.info/mod/924/Pood%27s%20Calm%20Nebula%20Skybox

ocean:
sky for environment map: https://www.cgskies.com/sky.php?sky=343
water normals: https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/waternormals.jpg

lens flares:
http://pngimg.com/imgs/nature/light/

building ideas:
https://poly.google.com/view/c-5balfj4bu
https://poly.google.com/view/6FQ_iKCIQd7

bus stop: Jeremy Eyring https://poly.google.com/view/7iBPwMlmfge
roadway: https://poly.google.com/view/dY7A5u4uuxE
tram: https://poly.google.com/view/2cVnZdfj-Gd
sidewalk: https://poly.google.com/view/8MDQir-qOAT

additional road texture options:
https://github.com/MicroGSD/RoadArchitect/blob/master/Materials/Textures/GSDRoad1_Diffuse.png

More Inspiration:
fast train https://vimeo.com/stock/clip-298549118-low-poly-3d-animation-of-the-city-life--the-high-speed-passenger-train-travels-through-the-countryside--modern-electric-railway
https://vimeo.com/stock/clip-298549147-a-white--delivery-truck-with-a-trailer-driving-down-the-road-from-a-city-to-the-small--rural-town--the-vehicle-is-carrying-heavy

Caltrain paper bus:
https://cptdb.ca/topic/9470-papertrain-thread/
