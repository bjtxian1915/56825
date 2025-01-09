// Select the custom cursor element directly from the DOM
/*const cursor = document.querySelector('.cursor');
const cursor = document.createElement('div');*/

// Listen for the mousemove event to update the cursor position
document.addEventListener('mousemove', (event) => {
    // Get the mouse's position relative to the viewport
    const cursorX = event.clientX + window.scrollX; // Add scroll offset for X
    const cursorY = event.clientY + window.scrollY; // Add scroll offset for Y

    // Update the cursor's position based on the mouse
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
});


document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("commentForm");
    if (commentForm) { // Add a check here to ensure the element exists
        const commentsContainer = document.querySelector(".comments");

        // Event listener for form submission
        commentForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from reloading the page

            // Get the comment text from the input field
            const commentInput = document.getElementById("comment");
            const commentText = commentInput.value.trim();

            if (commentText !== "") {
                // Create a new comment element
                const newComment = document.createElement("div");
                newComment.classList.add("comment");

                newComment.innerHTML = `
                    <div id="WanimeUser"><img src="img/Rectangle 5.png" alt="User Icon"/></div>
                    <div class="text-area">
                        <div id="comment-author">Guest</div>
                        <div id="comment-text">${commentText}</div>
                    </div>
                `;

                // Append the new comment to the comments container
                commentsContainer.appendChild(newComment);

                // Clear the input field
                commentInput.value = "";
            }
        });
    } else {
        console.error("commentForm element not found. Please check the HTML structure.");
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const notionBoard = document.getElementById("notion-info");
    const buttons = document.querySelectorAll(".info-btn");

    // Content arrays for each section
    const contentData = {
        latest: [
            { date: "2024-11-07", content: "最新公告 1" },
            { date: "2024-11-07", content: "最新公告 1" },
            { date: "2024-11-07", content: "最新公告 1" },
            { date: "2024-11-07", content: "最新公告 1" },
            { date: "2024-11-06", content: "請擲骰！異世界TRPG冒險《異世界小白 ─以 HP1 的狀態最強最快攻略迷宮─》確定改編電視動畫！" },
            { date: "2024-11-06", content: "操心女子與受傷男子的清純戀愛喜劇《矢野同學的普通日常》確定動畫化！" },
            // Add more items as needed
        ],
        newRelease: [
            { date: "2024-11-07", content: "新番介紹 1" },
            { date: "2024-11-06", content: "新番介紹 2" },
            // Add more items as needed
        ],
        event: [
            { date: "2024-11-07", content: "展場活動 1" },
            { date: "2024-11-06", content: "展場活動 2" },
            // Add more items as needed
        ],
        announcementBTN: [
            { date: "2024-11-07", content: "公告內容 1" },
            { date: "2024-11-06", content: "公告內容 2" },
            // Add more items as needed
        ]
    };

    function updateContent(type) {
        notionBoard.innerHTML = ""; // Clear previous content
        contentData[type].forEach(item => {
            const announcementDiv = document.createElement("div");
            announcementDiv.classList.add("announcement");
            announcementDiv.innerHTML = `<li>${item.date} 公告內容</li><p>${item.content}</p>`;
            notionBoard.appendChild(announcementDiv);
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Update content based on button ID
            updateContent(button.id);

            // Remove active class from all buttons and add it to the clicked one
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Load the default content (e.g., 'latest')
    updateContent("latest");
    document.getElementById("latest").classList.add("active");
});


document.addEventListener("DOMContentLoaded", () => {
    const indexBgImage = document.getElementById("indexbg1");
    const imageArray = [
        "img/img3.png", // Image 1
        "img/img5.png", // Image 2 (replace with your image paths)
        "img/img7.png", // Image 3
        // Add more images as needed
    ];

    let currentIndex = 0;

    // Function to change the image with a fade effect
    function changeImage() {
        // Fade out the current image
        indexBgImage.style.opacity = 0;

        // Wait for the fade-out to complete before changing the image
        setTimeout(() => {
            // Update the image source
            indexBgImage.src = imageArray[currentIndex];

            // Wait for the new image to load before fading it in
            indexBgImage.onload = () => {
                // Fade in the new image
                indexBgImage.style.opacity = 1;
            };

            // Update the index for the next image
            currentIndex = (currentIndex + 1) % imageArray.length; // Loop back to the first image when the end is reached
        }, 1000); // Time duration for fade-out (matches the CSS transition time)
    }

    // Change image every 5 seconds (5000 milliseconds)
    setInterval(changeImage, 5000);

    // Optionally, call changeImage once on load to display the first image immediately
    changeImage();
});

document.addEventListener("DOMContentLoaded", () => {
    const indexBgImage = document.getElementById("indexbg2");
    const imageArray = [
        "img/img4.png", // Image 1
        "img/img6.png", // Image 2 (replace with your image paths)
        "img/img8.png", // Image 3
        // Add more images as needed
    ];

    let currentIndex = 0;

    // Function to change the image with a fade effect
    function changeImage() {
        // Fade out the current image
        indexBgImage.style.opacity = 0;

        // Wait for the fade-out to complete before changing the image
        setTimeout(() => {
            // Update the image source
            indexBgImage.src = imageArray[currentIndex];

            // Wait for the new image to load before fading it in
            indexBgImage.onload = () => {
                // Fade in the new image
                indexBgImage.style.opacity = 1;
            };

            // Update the index for the next image
            currentIndex = (currentIndex + 1) % imageArray.length; // Loop back to the first image when the end is reached
        }, 1000); // Time duration for fade-out (matches the CSS transition time)
    }

    // Change image every 5 seconds (5000 milliseconds)
    setInterval(changeImage, 5000);

    // Optionally, call changeImage once on load to display the first image immediately
    changeImage();
});


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-btn');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
  
        // Add active class to the clicked link
        e.target.classList.add('active');
      });
    });
  });
  
  