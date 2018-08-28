# CoSpaces-Code
This repository contains JavaScript code for programs on the CoSpaces VR platform - demos and templates so that it's easier to write interactive programs from scratch without knowing much JavaScript. It might help to start with the demo folder to get familiar with the platform and/or language. If you want to start tinkering and making your own games and simulations right away, check out the other folders (although the demo is good for this too). If you have any questions/concerns/suggestions please don't hesitate to email chloecoleongco@gmail.com or get in touch with CoSpaces.

A very helpful group of people: https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!forum/cospaces-scripting

WE ARE MOVING

Hey everyone!

We have created new and better forums for CoSpaces Edu (http://forum.edu.cospaces.io/) and CoSpaces Maker (http://forum.maker.cospaces.io/).

Please create an account in these forums if you want to continue exchanging with us there.
We look forward to seeing you in the new forums!

Other Materials:
While you can code and render 3D scenes right on your computer/tablet, to view them in virtual reality, you'll need viewers or goggles (Google Cardboard V2 or IAMCARDBOARD V2 are recommended as they are very affordable (under $10) and work even on phones without a compass), and a smart phone with Android version 4.1 or higher (most phones are like this) and a gyroscope (be sure to check your specs!) and a compass if your cardboard uses a magnet button.  

CoSpaces has developed a unique set of functions for use in their programming environment. You can find them here: https://cospaces.io/api/. Any function not listed there (e.g. faceTo(), getCamera(), onCollisionEnter(), etc.) may be subject to change in the future.

The CoSpaces programming environment may not render scenes reliably either on the website or the app due to the active expansion and updating of their API and the fact that it’s a browser-based, internet-supported platform, but for simpler beginner programs this should not be an issue. Tip: only use loops if you absolutely have to and try not to use too many or have a very large one. And if interactivity functions like onActivate and onHover don't work in VR mode, put all your code inside a function, call it using CoSpaces' schedule function with a delay of about 2 seconds to give the player time to put it in VR mode before the items render, or you can create your items directly in the scene (see programs for examples).

Note on CoSpaces Cameras: Unless you only want to be able to move along the horizontal plane (i.e. if it's a maze and you don't want your player to be able to cheat and fly out), make sure your camera is set to Fly rather than Walk (default) so that you can adjust the Z position (height off the ground) to get the best view of the scene layout and the user can have a wide range of movement to explore your scene. Double click the camera item > click the second icon > click Fly

Note on CoSpaces IDs:
Every created item and scene in CoSpaces has it's own unique item id.
You would need to access the ids of your item(s) and scene(s).
For items: double click item > click first icon > click copy id.
For scenes: click environment > copy id in top right corner of pop-up.

Note on CoSpaces getItem function:
getItem function assumes you have created an item directly in the scene to be accessed via id or name.
Setting item name: double click item > click second item > type desired name > make sure to hit enter to save changes.

This is a research project for the University of Alberta Computing Science Department High School Internship Program.
