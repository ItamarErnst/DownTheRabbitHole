import { stories } from './stories.js';

document.addEventListener("DOMContentLoaded", function() {
    // Function to render the story based on the given story index
    function renderStory(storyIndex) {
        const story = stories[storyIndex];
        document.getElementById("story-title").textContent = story.title;
        document.getElementById("story-image").src = story.image;

        const storyContainer = document.getElementById("story-container");
        storyContainer.innerHTML = ""; // Clear the story container before rendering

        const paragraph = document.createElement("p");
        story.text.forEach(segment => {
            if (typeof segment === "string") {
                paragraph.appendChild(document.createTextNode(segment));
            } else if (segment.type === "clickable") {
                const clickableWord = document.createElement("a");
                clickableWord.textContent = segment.content;
                clickableWord.className = "clickable-word";
                clickableWord.setAttribute("data-connected-story", segment.connectedStory);

                clickableWord.addEventListener("click", function() {
                    const connectedStoryIndex = stories.findIndex(s => s.id === segment.connectedStory);
                    renderStory(connectedStoryIndex);
                });

                paragraph.appendChild(clickableWord);
            }
        });

        storyContainer.appendChild(paragraph);
    }

    // Render the initial story (index 0) when the page loads
    renderStory(0);
});
