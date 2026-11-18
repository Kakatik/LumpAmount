Game.registerMod("SugarLumpEditor", {
    init: function () {
        const stats = document.getElementById("statsButton");

        const button = document.createElement("div");
        button.id = "sugarLumpEditorButton";
        button.className = "option";
        button.textContent = "Sugar Lumps";

        const rect = stats.getBoundingClientRect();

        button.style.position = "fixed";
        button.style.left = (rect.right + 5) + "px";
        button.style.top = rect.top + "px";
        button.style.zIndex = "100000";

        button.onclick = function () {
            const amount = prompt("How many sugar lumps do you want?");

            if (amount !== null && amount.trim() !== "" && Number.isFinite(Number(amount)) && Number(amount) >= 0) {
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
