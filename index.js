import Settings from "./config";

let prefix = "§l§4[§l§cChocoClicker§l§4]§b "
let delayMultiplier = 1;
let onDelay = false;
let clicks = 0;
let slowed = false;
let realClicks = 0;

register("command", () => Settings.openGUI()).setName("chococlicker")

register("step", () => {
    if(!Settings.enabled) return;
    if(!Player?.getContainer().getName().toLowerCase().includes("chocolate factory")) return;
    if(onDelay) return;
    onDelay = true;
    
    let clickme = Player.getContainer().getItems().findIndex(a => a?.getName()?.toLowerCase()?.includes("click me!"))
    
    if(clickme !== -1) {
        Player.getContainer().click(clickme, false, ClickAction.ClickType.RIGHT)
        onDelay = false;
        return;
    }

    Player.getContainer().click(13, false, ClickAction.ClickType.RIGHT)

    clicks++
    realClicks++

    if(clicks > 500 && !slowed) {
        ChatLib.chat(prefix + "Temporarily Slowing Clicks By 33%")
        delayMultiplier = 1.33
        slowed = true;
        clicks = 0;
    } else if(clicks > 500 && slowed) {
        ChatLib.chat(prefix + "Reverting Temporary Slowed Clicks")
        delayMultiplier = 1
        slowed = false;
        clicks = 0;
    }

    ChatLib.clearChat(6)
    ChatLib.chat(new Message(new TextComponent(prefix + "Click Amount: " + realClicks)).setChatLineId(6))

    setTimeout(() => {
        onDelay = false;
    }, Settings.delay*delayMultiplier+(Math.floor(Math.random() * 10) + 1));
})
