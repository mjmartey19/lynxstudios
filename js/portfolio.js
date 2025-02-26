     document.addEventListener("DOMContentLoaded", function () {
            /**
             * Creates a portfolio item DOM element.
             *
             * @param {string} src - The image source URL.
             * @param {string} alt - Alternate text for the image.
             * @param {string} additionalClass - Additional class (e.g., "mil-square" or "mil-port").
             * @returns {HTMLElement} - The portfolio item element.
             */
            function createPortfolioItem(src, alt, additionalClass) {
                // Create the card container
                var cardDiv = document.createElement("div");
                cardDiv.className = "mil-work-card mil-stl mil-mb30";

                // Create the cover div with an additional style class (square/portrait)
                var coverDiv = document.createElement("div");
                coverDiv.className = "mil-cover " + additionalClass + " mil-up";

                // Create the hover frame
                var hoverDiv = document.createElement("div");
                hoverDiv.className = "mil-hover-frame";

                // Create the image element and set its attributes
                var imgEl = document.createElement("img");
                imgEl.src = src;
                imgEl.alt = alt;
                imgEl.className = "mil-scale-img";
                imgEl.setAttribute("data-value-1", "1.15");
                imgEl.setAttribute("data-value-2", "1");

                // Build the element hierarchy
                hoverDiv.appendChild(imgEl);
                coverDiv.appendChild(hoverDiv);
                cardDiv.appendChild(coverDiv);

                return cardDiv;
            }

            /**
             * Distributes portfolio items into two columns.
             *
             * @param {HTMLElement} container - The row container where columns will be appended.
             * @param {HTMLElement[]} items - An array of portfolio item elements.
             */
            function distributeItems(container, items) {
                // Create two column containers using Bootstrap's grid system
                var col1 = document.createElement("div");
                col1.className = "col-md-6";
                var col2 = document.createElement("div");
                col2.className = "col-md-6";

                // Alternate appending items to each column
                items.forEach(function (item, index) {
                    if (index % 2 === 0) {
                        col1.appendChild(item);
                    } else {
                        col2.appendChild(item);
                    }
                });
                container.appendChild(col1);
                container.appendChild(col2);
            }

            // Generate an array for 39 design images.
            var designImages = [];
            for (var i = 1; i <= 33; i++) {
                // Alternate styles: odd images use "mil-square", even images use "mil-port".
                var style = (i % 2 === 0) ? "mil-port" : "mil-square";
                designImages.push({
                    src: "img/works/design/" + i + ".jpg",
                    alt: "Design Work " + i,
                    style: style
                });
            }

            // Generate an array for 70 photography images
            var photographyImages = [];
            for (var j = 1; j <= 22; j++) {
                var style = (j % 2 === 0) ? "mil-port" : "mil-square";
                photographyImages.push({
                    src: "img/works/photography/" + j + ".jpg",
                    alt: "Photography Work " + j,
                    style: style
                });
            }

            // Create portfolio items for Design images
            var designItems = designImages.map(function (item) {
                return createPortfolioItem(item.src, item.alt, item.style);
            });
            var designContainer = document.getElementById("design-row");
            distributeItems(designContainer, designItems);

            // Create portfolio items for Photography images
            var photographyItems = photographyImages.map(function (item) {
                return createPortfolioItem(item.src, item.alt, item.style);
            });
            var photographyContainer = document.getElementById("photography-row");
            distributeItems(photographyContainer, photographyItems);
        });