Game.registerMod("SugarLumpEditor", {
    init: function () {
        const stats = document.getElementById("statsButton");

        const button = document.createElement("div");
        button.id = "sugarLumpEditorButton";
        button.className = "option";
        button.textContent = "Sugar Lumps";

        const rect = stats.getBoundingClientRect();

        Object.assign(button.style, {
            position: "fixed",
            left: (rect.right + 5) + "px",
            top: rect.top + "px",
            zIndex: "100000",
            backgroundColor: "black",
            border: "1px solid yellow",
            color: "yellow",
            padding: "5px 10px",
            cursor: "pointer",
            textAlign: "center"
        });

        button.onmouseenter = () => button.style.backgroundColor = "#333";
        button.onmouseleave = () => button.style.backgroundColor = "black";

        let cooldownEnabled = false;

        // Keep cooldown reset while enabled
        Game.registerHook("logic", function () {
            if (cooldownEnabled) {
                Game.lumpRefill = 0;
            }
        });

        button.onclick = function () {
            let menu = document.getElementById("sugarLumpMenu");

            if (menu) {
                menu.remove();
                return;
            }

            menu = document.createElement("div");
            menu.id = "sugarLumpMenu";

            Object.assign(menu.style, {
                position: "fixed",
                left: (rect.right + 5) + "px",
                top: (rect.bottom + 5) + "px",
                backgroundColor: "black",
                border: "1px solid yellow",
                color: "yellow",
                padding: "10px",
                zIndex: "100001",
                fontSize: "12px",
                minWidth: "180px"
            });

            // Sugar lump amount
            const amountButton = document.createElement("div");
            amountButton.textContent = "Set Sugar Lumps";
            amountButton.style.cursor = "pointer";
            amountButton.style.marginBottom = "10px";

            amountButton.onclick = function () {
                const amount = prompt("How many sugar lumps do you want?");

                if (amount !== null && amount.trim() !== "" &&
                    Number.isFinite(Number(amount)) && Number(amount) >= 0) {
                    Game.lumps = Number(amount);

                    Game.Notify(
                        "You cheater!",
                        "Do cheated sugar lumps taste any better now?",
                        []
                    );
                }
            };

            menu.appendChild(amountButton);

            // Permanent cooldown checkbox
            const label = document.createElement("label");
            label.style.cursor = "pointer";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            checkbox.onchange = function () {
                cooldownEnabled = checkbox.checked;

                if (cooldownEnabled) {
                    Game.lumpRefill = 0;
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
