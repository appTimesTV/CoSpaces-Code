//see space: https://cospac.es/aEbD
//navigate to scene 3 using the toggle at the bottom of the scene

//slightly modified version of parallel circuits

//need to put pink speaker and resistor in correct places otherwise none of them will work
//...weird glitch

function delay() { //wrapping everything in a function for later use

    //marker
    var marker = Scene.getItem('marker');

    //cube (battery)
    var cube = Scene.getItem("battery");
    var cubetalk = cube.say("I'm a battery! I'll power your circuit!");
    var cubePos;
    cube.addMoveOnItemInteraction(marker, function() {
        cubePos = cube.getPosition();
        cube.say('x: ' + cubePos.x.toFixed(2) + ', y: ' + cubePos.y.toFixed(2));
        if (cubePos.x >= 1 && cubePos.x <= 2 && cubePos.y >= 0 && cubePos.y <= 1) {
            cube.say("Looking good!");
        }
        else {
            cube.say("Hmm... It doesn't look like I fit here.")
        }
    });

    var speaker = Scene.createItem("Cuboid", -1.75, 2, 0);
    speaker.setScale(0.5);
    speaker.setColor(255, 0, 255);
    speaker.say("I'm a buzzer! Sound me!");
    var speakerPos;
    speaker.addMoveOnItemInteraction(marker, function() {
        speakerPos = speaker.getPosition();
        speaker.say('x: ' + speakerPos.x.toFixed(2) + ', y: ' + speakerPos.y.toFixed(2));
        if (speakerPos.x >= 1.5 && speakerPos.x <= 2.5 && speakerPos.y >= 2.5 && speakerPos.y <= 3.5) {
            speaker.say("Looking good!")
        }
        else {
            speaker.say("Hmm... It doesn't look like I fit here.")
        }
    });

    var speaker2 = Scene.createItem("Cuboid", -1.75, 3, 0);
    speaker2.setScale(0.5);
    speaker2.setColor(0, 255, 0);
    speaker2.say("I'm a buzzer! Sound me!");
    var speaker2Pos;
    speaker2.addMoveOnItemInteraction(marker, function() {
        speaker2Pos = speaker2.getPosition();
        speaker2.say('x: ' + speaker2Pos.x.toFixed(2) + ', y: ' + speaker2Pos.y.toFixed(2));
        if (speaker2Pos.x >= 3 && speaker2Pos.x <= 4 && speaker2Pos.y >= 2.5 && speaker2Pos.y <= 3.5) {
            speaker2.say("Looking good!")
        }
        else {
            speaker2.say("Hmm... It doesn't look like I fit here.")
        }
    });

    var speaker3 = Scene.createItem("Cuboid", -1.75, 4, 0);
    speaker3.setScale(0.5);
    speaker3.setColor(0, 0, 0);
    speaker3.say("I'm a buzzer! Sound me!");
    var speaker3Pos;
    speaker3.addMoveOnItemInteraction(marker, function() {
        speaker3Pos = speaker3.getPosition();
        speaker3.say('x: ' + speaker3Pos.x.toFixed(2) + ', y: ' + speaker3Pos.y.toFixed(2));
        if (speaker3Pos.x >= 4.5 && speaker3Pos.x <= 5.5 && speaker3Pos.y >= 2.5 && speaker3Pos.y <= 3.5) {
            speaker3.say("Looking good!")
        }
        else {
            speaker3.say("Hmm... It doesn't look like I fit here.")
        }
    });

    var resistor = Scene.createItem("Ellipsoid", 1, 0, 0);
    resistor.setScale(0.25);
    resistor.setColor(255, 0, 255);
    resistor.say("I'm a low ohms resistor!");
    var resistorPos;
    resistor.addMoveOnItemInteraction(marker, function() {
        resistorPos = resistor.getPosition();
        resistor.say('x: ' + resistorPos.x.toFixed(2) + ', y: ' + resistorPos.y.toFixed(2));
        if (resistorPos.x >= 1.5 && resistorPos.x <= 2.5 && resistorPos.y >= 1 && resistorPos.y <= 2) {
            resistor.say("Looking good!")
        }
        else {
            resistor.say("Hmm... It doesn't look like I fit here.")
        }
    });


    var r2 = Scene.createItem("Ellipsoid", 3, -0.5, 0);
    r2.setScale(0.25);
    r2.setColor(0, 255, 0);
    r2.say("I'm a medium ohms resistor!");
    var r2Pos;
    r2.addMoveOnItemInteraction(marker, function() {
        r2Pos = r2.getPosition();
        r2.say('x: ' + r2Pos.x.toFixed(2) + ', y: ' + r2Pos.y.toFixed(2));
        if (r2Pos.x >= 3 && r2Pos.x <= 4 && r2Pos.y >= 1 && r2Pos.y <= 2) {
            r2.say("Looking good!")
        }
        else {
            r2.say("Hmm... It doesn't look like I fit here.")
        }
    });

    var r3 = Scene.createItem("Ellipsoid", 5, -1, 0);
    r3.setScale(0.25);
    r3.setColor(0, 0, 0);
    r3.say("I'm a high ohms resistor!");
    var r3Pos;
    r3.addMoveOnItemInteraction(marker, function() {
        r3Pos = r3.getPosition();
        r3.say('x: ' + r3Pos.x.toFixed(2) + ', y: ' + r3Pos.y.toFixed(2));
        if (r3Pos.x >= 4.5 && r3Pos.x <= 5.5 && r3Pos.y >= 1 && r3Pos.y <= 2) {
            r3.say("Looking good!")
        }
        else {
            r3.say("Hmm... It doesn't look like I fit here.")
        }
    });


    //button (switch)
    var button = Scene.createItem("Hemiellipsoid", 1.9, 4.7, 0);
    button.setScale(0.35);
    button.setColor(220, 50, 50);

    var button2 = Scene.createItem("Hemiellipsoid", 3.44, 4.7, 0);
    button2.setScale(0.35);
    button2.setColor(220, 50, 50);

    var button3 = Scene.createItem("Hemiellipsoid", 4.9, 4.7, 0);
    button3.setScale(0.35);
    button3.setColor(220, 50, 50);

    Scene.renderShadows(false);

    //variables storing buzzer sounds
    var lowTone = Scene.loadSound("aEbSltGR9p8Qm9g3P9JlHu4WnJ1WQULmzyPkyjr4Enx");
    var mediumTone = Scene.loadSound("aEbSltGR9p8Qm9g3P9JlHu4WnJ1WQULmzyPkyjr4Enx");
    var highTone = Scene.loadSound("6avUTYwJnXIWjTA98PgCH87DQzBg9fpwLCYlH7tqR24");

    //the big, BIG handler
    Scene.scheduleRepeating(function() {
        button.onActivate(function() {
            if (cubePos.x >= 1 && cubePos.x <= 2 && cubePos.y >= 0 && cubePos.y <= 1) {
                if (resistorPos.x >= 1.5 && resistorPos.x <= 2.5 && resistorPos.y >= 1 && resistorPos.y <= 2) {
                    if (speakerPos.x >= 1.5 && speakerPos.x <= 2.5 && speakerPos.y >= 2.5 && speakerPos.y <= 3.5) {
                            speaker.say("I'm on!");
                            var electricity = Scene.createItem("LP_Lightning", speakerPos.x, speakerPos.y, speakerPos.z+0.5);
                            lowTone.play(false);
                            Scene.schedule(lowTone.stop, 1); //stops tone after 1 second
                    }
                }
            }
        });
        button2.onActivate(function() {
            if (cubePos.x >= 1 && cubePos.x <= 2 && cubePos.y >= 0 && cubePos.y <= 1) {
                if (r2Pos.x >= 3 && r2Pos.x <= 4 && r2Pos.y >= 1 && r2Pos.y <= 2) {
                    if (speaker2Pos.x >= 3 && speaker2Pos.x <= 4 && speaker2Pos.y >= 2.5 && speaker2Pos.y <= 3.5) {
                        speaker2.say("I'm on!");
                        var electricity2 = Scene.createItem("LP_Lightning", speaker2Pos.x, speaker2Pos.y, speaker2Pos.z+0.5);
                        mediumTone.play(false);
                        Scene.schedule(mediumTone.stop, 1); //stops tone after 1 second
                    }
                }
            }
        });
        button3.onActivate(function() {
            if (cubePos.x >= 1 && cubePos.x <= 2 && cubePos.y >= 0 && cubePos.y <= 1) {
                if (r3Pos.x >= 4.5 && r3Pos.x <= 5.5 && r3Pos.y >= 1 && r3Pos.y <= 2) {
                    if (speaker3Pos.x >= 4.5 && speaker3Pos.x <= 5.5 && speaker3Pos.y >= 2.5 && speaker3Pos.y <= 3.5) {
                        speaker3.say("I'm on!");
                        var electricity3 = Scene.createItem("LP_Lightning", speaker3Pos.x, speaker3Pos.y, speaker3Pos.z+0.5);
                        highTone.play(false);
                        Scene.schedule(highTone.stop, 1); //stops tone after 1 second
                    }
                }
            }
        });           
    }, 0);
}

Scene.schedule(delay, 2); //calling function from earlier 2 seconds after program initiates
//this gives the user time to get into VR mode and be able to click on Scene items
//otherwise, onActivate won't work
