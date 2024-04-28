let prefix = "§l§4[§l§cChocoClicker§l§4]§b "
let delay = 75;
let onDelay = false;

register("command", (arg1) => {
    if(!arg1) return ChatLib.chat(prefix + "Invalid Syntax!");
    if(!parseInt(arg1)) return ChatLib.chat(prefix + "Invalid Syntax!");
    else delay = parseInt(arg1)

    ChatLib.chat(prefix + "New Delay: " + arg1 + "ms/click")
}).setName("setchocodelay")

register("tick", () => {
    if(!Player?.getContainer().getName().toLowerCase().includes("chocolate factory")) return;
    //if(!Player.getInventory().getItems().slice(0, 9).findIndex(a => a?.getName()?.includes("Treecapitator")))
    if(onDelay) return;
    onDelay = true;

    Player.getContainer().click(13, false, ClickAction.ClickType.MIDDLE)
    setTimeout(() => {
        onDelay = false;
    }, delay);
})