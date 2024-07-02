const cards = [
    {
      imgSrc: "./img/banner-desktop-boosted-box.webp",
      altText: "Image 1 description",
      title: "Lemon Casino Welcome Bonus - 100% NON-STICKY up to €300 + 100 Free Some more text",
      description: "Only in Lemon Casino Extra Bonuses hidden in mysterious Boxes: No deposit Bonus, Cash or Freespins. Here we got 3 lines of text maximum!!!!",
      buttons: ["Info", "Deposit"]
    },
    {
      imgSrc: "./img/banner-desktop-promo-page-terms-1248x224-UPDATED_Cashback.webp",
      altText: "Image 1 description",
      title: "Winter WinFest €200 000!",
      description: "Endless joys unearthed!",
      buttons: ["Info"]
    },
    {
      imgSrc: "./img/Lemon WO main.webp",
      altText: "Image 2 description",
      title: "100% Fazi Reload Bonus up to €60!",
      description: "May the party commence!",
      buttons: ["Info", "Deposit"]
    },
    {
      imgSrc: "./img/Live Casino WO.webp",
      altText: "Image 2 description",
      title: "This Promo Title Header can have Maximum Two Lines of Text and Limited some more text",
      description: "This container has fixed height and regardless text length the CTA buttons below are always in the same positions. This description can have maximum 3 lines!",
      buttons: ["Info", "Deposit"]
    },
    {
      imgSrc: "./img/Live Casino.webp",
      altText: "Image 2 description",
      title: "More",
      description: "This container has fixed height and regardless text length the CTA buttons below are always in the same positions. This description can have maximum 3 lines!",
      buttons: ["Info", "Deposit"]
    },
    {
      imgSrc: "./img/Treasure Boxes.webp",
      altText: "Image 2 description",
      title: "Lemon Casino Welcome Bonus - 100% NON-STICKY up to €300 + 100 Free Some more text",
      description: "Only in Lemon Casino Extra Bonuses hidden in mysterious Boxes: No deposit Bonus, Cash or Freespins. Here we got 3 lines of text maximum!!!!",
      buttons: ["Info", "Deposit"]
    }
  ];
  
  const cardContainer = document.getElementById('card-container');
  
  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
  
    const imgElement = document.createElement('img');
    imgElement.src = card.imgSrc;
    imgElement.alt = card.altText;
    cardElement.appendChild(imgElement);
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardElement.appendChild(cardContent);
  
    const titleElement = document.createElement('h3');
    titleElement.textContent = card.title;
    cardContent.appendChild(titleElement);
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = card.description;
    cardContent.appendChild(descriptionElement);
  
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    cardContent.appendChild(buttonContainer);
  
    card.buttons.forEach(buttonText => {
      const buttonElement = document.createElement('button');
      buttonElement.textContent = buttonText;
      if (buttonText === 'Info') {
        buttonElement.classList.add('transparent');
      }
      buttonContainer.appendChild(buttonElement);
    });
  
    cardContainer.appendChild(cardElement);
  });
  