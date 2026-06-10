async function loadDiary() {

    const response =
        await fetch("diary.json");

    const data =
        await response.json();

    const gallery =
        document.getElementById("gallery");

    const days =
        Object.keys(data.days)
              .sort()
              .reverse();

    for (const day of days) {

        const section =
            document.createElement("div");

        section.className = "day";

        section.innerHTML =
            `<h2>${day}</h2>`;

        const photos =
            document.createElement("div");

        photos.className =
            "photos";

        for (const file of data.days[day]) {

            const img =
                document.createElement("img");

            img.src =
                `diary/${day}/thumb/${file}`;

            img.onclick = () => {

                window.open(
                    `diary/${day}/full/${file}`,
                    "_blank"
                );

            };

            photos.appendChild(img);
        }

        section.appendChild(photos);

        gallery.appendChild(section);
    }
}

loadDiary();