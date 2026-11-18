Game.registerMod("SugarLumpEditor", {
    init: function () {
        const stats = document.getElementById("statsButton");

        const button = document.createElement("div");
        button.id = "sugarLumpEditorButton";
        button.className = "option";
        button.textContent = "Sugar Lumps";

        // Position next to Stats
        const rect = stats.getBoundingClientRect();

        button.style.position = "fixed";
        button.style.left = (rect.right + 5) + "px";
        button.style.top = rect.top + "px";
        button.style.zIndex = "100000";

        // Button appearance
        button.style.backgroundColor = "black";
        button.style.border = "1px solid yellow";
        button.style.color = "yellow";
        button.style.padding = "5px 10px";
        button.style.cursor = "pointer";
        button.style.textAlign = "center";

        // Hover effect
        button.onmouseenter = function () {
            button.style.backgroundColor = "#333";
        };

        button.onmouseleave = function () {
            button.style.backgroundColor = "black";
        };

        // Sugar lump editor
        button.onclick = function () {
            const amount = prompt("How many sugar lumps do you want?");

            if (
                amount !== null &&
                amount.trim() !== "" &&
                Number.isFinite(Number(amount)) &&
                Number(amount) >= 0
            ) {
                Game.lumps = Number(amount);

                Game.Notify(
                    "You cheater!",
                    "Do cheated sugar lumps taste any better now?",
                    []
                );
            }
        };

        document.body.appendChild(button);
    },

    save: function () {
        return "";
    },

    load: function (str) {}
});
