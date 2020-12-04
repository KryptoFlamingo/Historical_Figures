use project;

db.dropDatabase()

db.historical_figures.insertMany(
    [
        {name: "Thomas Edison",
         category: "science",
         born: {
             date: "1847-02-11",
             place: "Milan, Ohio"
         },
         died: {
            date: "1931-10-18",
            place: "West Orange, New Jersey"
         },
         bestKnownFor: "Inventing many useful items including the phonograph and a practical light bulb",
         occupation: "Businessman and Inventor",
         funFacts: [
            "His middle name was Alva and his family called him Al.",
            "His first two kids had the nicknames Dot and Dash.",
            "He set up his first lab in his parent's basement at the age of 10.",
            "He was partially deaf.",
            "His first invention was an electric vote recorder.",
            "His 1093 patents are the most on record.",
            " He said the words to 'Mary had a little lamb' as the first recorded voice on the phonograph"
         ],
         biography: "Thomas Edison may be the greatest inventor in history. He has over 1000 patents in his name. Many of his inventions still have a major effect on our lives today. He was also a business entrepreneur. Several of his inventions were group efforts in his large invention laboratory where he had lots of people working for him to help develop, build, and test his inventions. Edison used his inventions to form companies including General Electric, which is one of the biggest corporations in the world today.",
        },
        {name: "Cleopatra VII",
         category: "Ancient Egypt",
         born: {
             date: "69 BC",
             place: "Alexandria, Egypt"
         },
         died: {
            date: "August 30, 30 BC",
            place: "Unknown"
         },
         bestKnownFor: "The last pharaoh of Ancient Egypt",
         occupation: "Pharaoh of Egypt",
         funFacts: [
            "Cleopatra could speak at least seven languages including Greek and Egyptian.",
            "She claimed to be the reincarnation of the Egyptian god Isis.",
            "Marc Antony declared her son Caesarion as the legal heir of Julius Caesar.",
            "Octavian became the first Emperor of Rome and changed his name to Augustus.",
            "Cleopatra has been the subject of many movies and plays including the famous 1963 film starring Elizabeth Taylor."

         ],
         biography: "Cleopatra was born a princess of Egypt. Her father was the Pharaoh Ptolemy XII. Cleopatra was smart and cunning growing up. She was her father's favorite child and learned a lot about how the country was ruled from him.", 
        },
        {name: "Winston Churchill",
        category: "Leader",
        born: {
            date: "1874-11-30",
            place: "Oxfordshire, England"
        },
        died: {
           date: "1965-01-24",
           place: "London, England"
        },
        bestKnownFor: "Standing up to the Germans in World War II",
        occupation: "Prime Minister",
        funFacts: [
           "He wrote a number of historical books and won the Nobel Prize in Literature in 1953.",
           "He was named an honorary citizen of the United States.",
           "Churchill married Clementine Hozier in 1908.",
           "He had five children including four daughters and one son.",
           "Winston did not do well in school as a child.",
           "He also had trouble getting into the Royal Military College. Although, once in, he finished near the top of his class.",
           "He was not healthy during World War II. He had a heart attack in 1941 and pneumonia in 1943."
        ],
        biography: "Winston Churchill was one of the great world leaders of the 20th century. His leadership helped Britain to stand strong against Hitler and the Germans, even when they were the last country left fighting. He is also famous for his inspiring speeches and quotes.",
       },
       {name: "Frida Kahlo",
         category: "Artist",
         born: {
             date: "1907-07-6",
             place: "Mexico City, Mexico"
         },
         died: {
            date: "1954-07-13",
            place: "Mexico City, Mexico"
         },
         bestKnownFor: "Surrealism art",
         occupation: "Artist",
         funFacts: [
            "Her full name is Magdalena Carmen Frida Kahlo y Calderon.",
            "In 1984, Mexico declared the works of Frida Kahlo part of the country's national cultural heritage.",
            "Her painting The Frame was the first painting by a Mexican artist acquired by the Louvre.",
            "Her paintings often featured aspects of Aztec Mythology and Mexican folklore.",
            "The major motion picture Frida told the story of her life and earned 6 Academy Award nominations."
         ],
         biography: "Although Frida had some success as an artist during her lifetime, she was not internationally famous. It wasn't until the late 1970s that her artwork was rediscovered by art historians. Since that time, Frida has become so famous that the term 'Fridamania' has been used to describe her popularity.",
        },
        {name: "Henry Ford",
        category: "Inventor",
        born: {
            date: "1863-07-30",
            place: "Greenfield Township, Michigan"
        },
        died: {
           date: "1947-04-7",
           place: "Dearborn, Michigan"
        },
        bestKnownFor: "Founder of the Ford Motor Company and helped develop the assembly line for mass production",
        occupation: "Businessman and Inventor",
        funFacts: [
           "Henry worked as an engineer at the Edison Illumination Company where he met Thomas Edison.",
           "His first try at an automobile company was in collaboration with Thomas Edison and was called the Detroit Automobile Company.",
           "Ford had Edison's last breath saved in a test tube and you can still see the test tube at the Henry Ford Museum.",
           "In 1918 he ran for a US Senate seat, but lost.",
           "He was a race car driver early in his career."
        ],
        biography: "Henry Ford is most famous for founding the Ford Motor Company. Ford is still one of the world's largest producers of cars including brands such as Ford, Lincoln, Mercury, Volvo, Mazda, and Land Rover. Ford was a pioneer in manufacturing using the assembly line.",
       },
       {name: "",
       category: "",
       born: {
           date: "",
           place: ""
       },
       died: {
          date: "",
          place: ""
       },
       bestKnownFor: "",
       occupation: "",
       funFacts: [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
       ],
       biography: "",
      },
    ]
    )