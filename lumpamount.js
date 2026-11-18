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

        button.style.backgroundColor = "black";
        button.style.border = "1px solid yellow";
        button.style.color = "yellow";
        button.style.padding = "5px 10px";
        button.style.cursor = "pointer";
        button.style.textAlign = "center";

        button.onmouseenter = function () {
            button.style.backgroundColor = "#333";
        };

        button.onmouseleave = function () {
            button.style.backgroundColor = "black";
        };

        // Menu
        button.onclick = function () {
            let menu = document.getElementById("sugarLumpMenu");

            if (menu) {
                menu.remove();
                return;
            }

            menu = document.createElement("div");
            menu.id = "sugarLumpMenu";

            menu.style.position = "fixed";
            menu.style.left = (rect.right + 5) + "px";
            menu.style.top = (rect.bottom + 5) + "px";
            menu.style.backgroundColor = "black";
            menu.style.border = "1px solid yellow";
            menu.style.color = "yellow";
            menu.style.padding = "10px";
            menu.style.zIndex = "100001";
            menu.style.fontSize = "12px";
            menu.style.minWidth = "180px";

            // Sugar lump amount
            const amountButton = document.createElement("div");
            amountButton.textContent = "Set Sugar Lumps";
            amountButton.style.cursor = "pointer";
            amountButton.style.marginBottom = "10px";

            amountButton.onclick = function () {
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

            menu.appendChild(amountButton);

            // Cooldown checkbox
            const label = document.createElement("label");
            label.style.cursor = "pointer";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            checkbox.onchange = function () {
                if (checkbox.checked) {
                    Game.lumpRefill = 0;

                    Game.Notify(
                        "Cooldown reset!",
                        "Sugar Lump cooldown has been refilled.",
                        []
                    );
                }
            };

            label.appendChild(checkbox);
            label.appendChild(
                document.createTextNode(" Refill Sugar Lump Cooldown")
            );

            menu.appendChild(label);

            document.body.appendChild(menu);
        };

        document.body.appendChild(button);
    },

    save: function () {
        return "";
    },

    load: function (str) {}
});
