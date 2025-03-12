document.addEventListener("DOMContentLoaded", function () {
    function createPortfolioItem(src, alt, additionalClass) {
        var cardDiv = document.createElement("div");
        cardDiv.className = "mil-work-card mil-stl mil-mb30";

        var coverDiv = document.createElement("div");
        coverDiv.className = "mil-cover " + additionalClass + " mil-up";

        var hoverDiv = document.createElement("div");
        hoverDiv.className = "mil-hover-frame";

        var imgEl = document.createElement("img");
        imgEl.src = src;
        imgEl.alt = alt;
        imgEl.className = "mil-scale-img";
        imgEl.setAttribute("data-value-1", "1.15");
        imgEl.setAttribute("data-value-2", "1");
        imgEl.setAttribute("loading", "lazy"); // Lazy load images

        hoverDiv.appendChild(imgEl);
        coverDiv.appendChild(hoverDiv);
        cardDiv.appendChild(coverDiv);

        return cardDiv;
    }

    function distributeItems(container, items) {
        var col1 = document.createElement("div");
        col1.className = "col-md-6";
        var col2 = document.createElement("div");
        col2.className = "col-md-6";

        var fragment1 = document.createDocumentFragment();
        var fragment2 = document.createDocumentFragment();

        items.forEach(function (item, index) {
            if (index % 2 === 0) {
                fragment1.appendChild(item);
            } else {
                fragment2.appendChild(item);
            }
        });

        col1.appendChild(fragment1);
        col2.appendChild(fragment2);
        container.appendChild(col1);
        container.appendChild(col2);
    }

    // Generate design images
    var designImages = [];
    for (var i = 1; i <= 33; i++) {
        var style = (i % 2 === 0) ? "mil-port" : "mil-square";
        designImages.push({
            src: "img/works/design/" + i + ".jpg",
            alt: "Design Work " + i,
            style: style
        });
    }

    // Generate photography images
    var photographyImages = [];
    for (var j = 1; j <= 22; j++) {
        var style = (j % 2 === 0) ? "mil-port" : "mil-square";
        photographyImages.push({
            src: "img/works/photography/" + j + ".jpg",
            alt: "Photography Work " + j,
            style: style
        });
    }

    // Create and distribute design items
    var designItems = designImages.map(function (item) {
        return createPortfolioItem(item.src, item.alt, item.style);
    });
    var designContainer = document.getElementById("design-row");
    distributeItems(designContainer, designItems);

    // Create and distribute photography items
    var photographyItems = photographyImages.map(function (item) {
        return createPortfolioItem(item.src, item.alt, item.style);
    });
    var photographyContainer = document.getElementById("photography-row");
    distributeItems(photographyContainer, photographyItems);
});