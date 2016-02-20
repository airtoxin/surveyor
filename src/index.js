import menubar from "menubar";
import zpad from "zpad"
import { exec } from "child_process";

const FILE_DIR = "~/Desktop/sc/"

const mb = menubar({
    icon: `${process.cwd()}/icon.png`
});

let counter = 0;
const takeScreenshot = () => {
    counter++;
    console.log(`screencapture -x -t jpg ${FILE_DIR}test_${zpad(counter, 3)}.jpg`);
};

mb.on("ready", () => {
    setInterval(takeScreenshot, 1000);
});

// create mov
// ffmpeg -r 10 -i test_%3d.jpg test.mp4
