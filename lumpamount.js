Game.registerMod("SugarLumpEditor", {
    init: function () {
        const button = document.createElement("div");
        button.id = "sugarLumpEditorButton";
        button.className = "option";
        button.textContent = "Sugar Lumps";

        button.onclick = function () {
            const amount = prompt("How many sugar lumps do you want?");

            if (amount !== null && amount.trim() !== "" && !isNaN(amount)) {
                Game.lumps = Number(amount);
                Game.Notify("Sugar Lumps", "Sugar lumps updated!", []);
            }
        };

        const statsButton = document.getElementById("statsButton");

        if (statsButton) {
            statsButton.parentNode.insertBefore(button, statsButton.nextSibling);
        }
    },

    save: function () {
        return "";
    },

    load: function (str) {}
});
