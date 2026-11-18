Game.registerMod("SugarLumpEditor", {
    init: function () {
        const button = document.createElement("div");
        button.id = "sugarLumpEditorButton";
        button.className = "option";
        button.textContent = "Sugar Lumps";

        button.onclick = function () {
            const amount = prompt("How many sugar lumps do you want?");

            if (amount !== null && !isNaN(amount) && amount.trim() !== "") {
                Game.lumps = Number(amount);
                Game.Notify("Sugar Lumps", "Sugar lumps updated!", []);
            }
        };

        document.getElementById("statsButton").after(button);
    },

    save: function () {
        return "";
    },

    load: function (str) {
    }
});
