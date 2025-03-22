function createCard() {
    let card = document.createElement("div");
    card.id = "card";

    let title = document.createElement("h2");
    title.textContent = "Javascript";

    let link = document.createElement("a");
    link.href = "https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md";
    link.textContent = "Go to profile";


    card.appendChild(title);
    card.appendChild(link);
    document.body.appendChild(card);
}

createCard();


