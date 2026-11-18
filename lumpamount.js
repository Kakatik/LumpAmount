Game.registerMod("SugarLumpEditor", {
    init: function () {
        const button = document.createElement("div");
        button.id = "sugarLumpEditorButton";
        button.className = "option";
        button.textContent = "Sugar Lumps";

        button.style.position = "absolute";
        button.style.left = "310px";
        button.style.top = "0px";
        button.style.zIndex = "100";

        button.onclick = function () {
            const amount = prompt("How many sugar lumps do you want?");

            if (amount !== null && amount.trim() !== "" && !isNaN(amount)) {
                Game.lumps = Number(amount);
                Game.Notify("Sugar Lumps", "Sugar lumps updated!", []);
            }
        };

        document.body.appendChild(button);
    },

    save: function () {
        return "";
    },

    load: function (str) {}
});
