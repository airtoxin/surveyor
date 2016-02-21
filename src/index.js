import menubar from "menubar";

const mb = menubar({
    icon: `${process.cwd()}/icon.png`
});

mb.on("ready", () => {
    // setInterval(takeScreenshot, 1000);
});

mb.on("after-create-window", () => {
    mb.window.openDevTools();
});

// create mov
// ffmpeg -r 10 -i test_%3d.jpg test.mp4
