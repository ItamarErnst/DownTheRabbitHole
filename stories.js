export let stories = [
    {
        id: "story1",
        title: "The Curious Frog",
        image: "images/frog.jpg",
        text: [
            "Once upon a time in a peaceful pond, there lived a curious little frog named Freddie.",
            "Freddie loved exploring the world around him and discovering new things.",
            "One day, while hopping through the tall grass, he stumbled upon a mysterious ",
            {
                type: "clickable",
                content: "object.",
                connectedStory: "story2"
            },
            " It was a shiny golden key hidden beneath a pile of leaves.",
            "Intrigued by the key, Freddie's heart raced with excitement as he wondered what it could unlock."
        ]
    },
    {
        id: "story2",
        title: "The Secret Door",
        image: "images/door.jpg",
        text: [
            "Determined to unravel the mystery, Freddie embarked on a quest to find the lock that the golden key belonged to.",
            "He hopped from tree to tree, searching for clues that would lead him to the hidden door.",
            "After days of searching, Freddie's persistence paid off as he discovered a moss-covered rock with a small ",
            {
                type: "clickable",
                content: "keyhole.",
                connectedStory: "story3"
            },
        ]
    },
    {
        id: "story3",
        title: "The Enchanted Garden",
        image: "images/garden.jpg",
        text: [
            "With a sense of anticipation, Freddie inserted the golden key into the keyhole, and to his amazement, a hidden door appeared before him.",
            "He cautiously pushed it open and found himself in a magnificent ",
            {
                type: "clickable",
                content: "enchanted garden.",
                connectedStory: "story4"
            },
            " The garden was a magical paradise filled with vibrant flowers, singing birds, and fluttering butterflies."
        ]
    },
    {
        id: "story4",
        title: "The Lost Treasure",
        image: "images/treasure.jpg",
        text: [
            "As Freddie explored the enchanted garden, he noticed a peculiar word engraved on a tree trunk: 'whisper'.",
            "Intrigued by its meaning, he followed the whispers that guided him deeper into the garden.",
            "To his astonishment, Freddie discovered a hidden treasure chest concealed beneath a bed of roses.",
            "With his heart pounding, he wondered what mysteries and ",
            {
                type: "clickable",
                content: "riches",
                connectedStory: "story5"
            },
            " lay inside.",
        ]
    },
    {
        id: "story5",
        title: "The Magical Journey",
        image: "images/journey.jpg",
        text: [
            "With trembling hands, Freddie opened the treasure chest and found a delicate, ancient map.",
            "The map revealed a series of destinations and clues that promised a magical journey beyond imagination.",
            "With the word ",
            {
                type: "clickable",
                content: "'whisper'",
                connectedStory: "story1"
            }
            ," echoing in his heart, Freddie set off on a new adventure, eager to uncover more secrets and experience the wonders that awaited him."
        ]
    }
];
