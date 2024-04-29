import {
    @SliderProperty,
    @SwitchProperty,
    @Vigilant
} from 'Vigilance/index';

@Vigilant('ChocoClicker')
class Settings {
    @SwitchProperty({
        name: "Toggle",
        description: "Turn it on and off",
        category: "General"
    })
    enabled = false;

    @SwitchProperty({
        name: "Auto Upgrade Employees",
        description: "Will automatically update employees when you have enough money",
        category: "General"
    })
    auto_upgrade = false;

    @SwitchProperty({
        name: "Auto Chocolate",
        description: "Automatically click the chocolate factory",
        category: "General"
    })
    auto_chocolate = false;

    @SliderProperty({
        name: "Clicking Delay",
        description: "ms / click",
        category: "General",
        min: 50,
        max: 5000
    })
    delay = 75;

    constructor() {
        this.initialize(this);
        this.addDependency("Clicking Delay", "Auto Chocolate")
    }
}

export default new Settings;
