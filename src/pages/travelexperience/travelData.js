const travelData = [
    {
      id: 1,
      title: "Exploring the Wilderness",
      description: "Embark on a thrilling adventure through untamed wilderness. Experience the thrill of discovering hidden treasures in the vast expanse of unexplored landscapes. Get up close and personal with nature as you encounter majestic wildlife, breathtaking landscapes, and stunning natural wonders. From dense jungles to sprawling savannahs, the wilderness offers a plethora of exciting activities, including wildlife safaris, trekking, and camping under the starry night sky. Whether you're an adrenaline junkie seeking heart-pounding escapades or a nature enthusiast yearning for a deep connection with the wild, this expedition promises an unforgettable journey filled with wonder and awe.",
      image_url: ["https://tour.epesicloud.com/app/storage/uploads/37/1667984120_34_Flamingo-Hill-Camp-27.jpg"],
      user_id: 1,
    },
    {
      id: 2,
      title: "Relaxing Beach Getaway",
      description: "Unwind and enjoy the serene beaches under the sun. Picture yourself lying on soft, sandy shores with the gentle sound of waves lapping at your feet. Feel the warmth of the sun on your skin as you bask in the tranquil ambiance of the coastal paradise. Indulge in leisurely strolls along the shoreline, take a refreshing dip in crystal-clear waters, or simply lounge under swaying palm trees. Whether you're seeking a romantic retreat, a family-friendly vacation, or a solo escape, the beach offers an idyllic setting to rejuvenate your mind, body, and soul. So, leave your worries behind and immerse yourself in the soothing embrace of a relaxing beach getaway.",
      image_url: ["https://tour.epesicloud.com/app/storage/uploads/37/1671626873_61_Dream_of_Africa_2019_01.jpg"],
      user_id: 2,
    },
    {
      id: 3,
      title: "City Escapade",
      description: "Experience the bustling city life with its vibrant culture. Step into a world of excitement and endless possibilities as you explore the dynamic energy of vibrant cities. Immerse yourself in the rich tapestry of cultures, traditions, and cuisines that make each city unique. Wander through bustling markets, visit iconic landmarks, and embrace the diversity of urban landscapes. From historical wonders to modern architectural marvels, the cityscape offers a blend of old-world charm and contemporary marvels. Whether you're a history buff, a foodie, or an art enthusiast, the city has something special to offer to everyone. Uncover the hidden gems, forge lasting memories, and let the city's pulsating rhythm captivate your heart on this exhilarating escapade.",
      image_url: ["https://tour.epesicloud.com/app/storage/uploads/37/1671095042_80_table-mountain-cable-car.jpg"],
      user_id: 3,
    },
    {
      id: 4,
      title: "Mountain Hiking Expedition",
      description: "Challenge yourself with a thrilling hike to the mountain peak. Lace up your boots and prepare for an adrenaline-pumping adventure to conquer the soaring heights of majestic mountains. Whether you're a seasoned hiker or a novice explorer, the mountains offer an unparalleled sense of achievement and awe-inspiring beauty. Ascend through lush forests, traverse rocky terrains, and be rewarded with breathtaking panoramic views from the summit. Discover a world of tranquility above the clouds, and embrace the serenity of nature's untouched beauty. Join like-minded adventurers, forge strong bonds, and create memories that will last a lifetime on this unforgettable mountain hiking expedition.",
      image_url: ["https://tour.epesicloud.com/app/storage/uploads/37/1667979745_16_KEN_490403_Swimming-Pool-with-View-of-Mt-Kenya.jpg"],
      user_id: 4,
    },
    {
        id: 5,
        title: "Exploring the Wilderness",
        description: "Embark on a thrilling adventure through untamed wilderness. Experience the thrill of discovering hidden treasures in the vast expanse of unexplored landscapes. Get up close and personal with nature as you encounter majestic wildlife, breathtaking landscapes, and stunning natural wonders. From dense jungles to sprawling savannahs, the wilderness offers a plethora of exciting activities, including wildlife safaris, trekking, and camping under the starry night sky. Whether you're an adrenaline junkie seeking heart-pounding escapades or a nature enthusiast yearning for a deep connection with the wild, this expedition promises an unforgettable journey filled with wonder and awe.",
        image_url: ["https://tour.epesicloud.com/app/storage/uploads/37/1667984120_34_Flamingo-Hill-Camp-27.jpg"],
        user_id: 5,
      },
      {
        id: 6,
        title: "Relaxing Beach Getaway",
        description: "Unwind and enjoy the serene beaches under the sun. Picture yourself lying on soft, sandy shores with the gentle sound of waves lapping at your feet. Feel the warmth of the sun on your skin as you bask in the tranquil ambiance of the coastal paradise. Indulge in leisurely strolls along the shoreline, take a refreshing dip in crystal-clear waters, or simply lounge under swaying palm trees. Whether you're seeking a romantic retreat, a family-friendly vacation, or a solo escape, the beach offers an idyllic setting to rejuvenate your mind, body, and soul. So, leave your worries behind and immerse yourself in the soothing embrace of a relaxing beach getaway.",
        image_url: ["https://tour.epesicloud.com/app/storage/uploads/37/1671626873_61_Dream_of_Africa_2019_01.jpg"],
        user_id: 6,
      },
      {
        id: 7,
        title: "City Escapade",
        description: "Experience the bustling city life with its vibrant culture. Step into a world of excitement and endless possibilities as you explore the dynamic energy of vibrant cities. Immerse yourself in the rich tapestry of cultures, traditions, and cuisines that make each city unique. Wander through bustling markets, visit iconic landmarks, and embrace the diversity of urban landscapes. From historical wonders to modern architectural marvels, the cityscape offers a blend of old-world charm and contemporary marvels. Whether you're a history buff, a foodie, or an art enthusiast, the city has something special to offer to everyone. Uncover the hidden gems, forge lasting memories, and let the city's pulsating rhythm captivate your heart on this exhilarating escapade.",
        image_url: ["https://tour.epesicloud.com/app/storage/uploads/37/1671095042_80_table-mountain-cable-car.jpg"],
        user_id: 7,
      },
      {
        id: 8,
        title: "Mountain Hiking Expedition",
        description: "Challenge yourself with a thrilling hike to the mountain peak. Lace up your boots and prepare for an adrenaline-pumping adventure to conquer the soaring heights of majestic mountains. Whether you're a seasoned hiker or a novice explorer, the mountains offer an unparalleled sense of achievement and awe-inspiring beauty. Ascend through lush forests, traverse rocky terrains, and be rewarded with breathtaking panoramic views from the summit. Discover a world of tranquility above the clouds, and embrace the serenity of nature's untouched beauty. Join like-minded adventurers, forge strong bonds, and create memories that will last a lifetime on this unforgettable mountain hiking expedition.",
        image_url: ["https://tour.epesicloud.com/app/storage/uploads/37/1667979745_16_KEN_490403_Swimming-Pool-with-View-of-Mt-Kenya.jpg"],
        user_id: 8,
      },
      {
        id: 9,
        title: "Exploring the Wilderness",
        description: "Embark on a thrilling adventure through untamed wilderness. Experience the thrill of discovering hidden treasures in the vast expanse of unexplored landscapes. Get up close and personal with nature as you encounter majestic wildlife, breathtaking landscapes, and stunning natural wonders. From dense jungles to sprawling savannahs, the wilderness offers a plethora of exciting activities, including wildlife safaris, trekking, and camping under the starry night sky. Whether you're an adrenaline junkie seeking heart-pounding escapades or a nature enthusiast yearning for a deep connection with the wild, this expedition promises an unforgettable journey filled with wonder and awe.",
        image_url: ["https://tour.epesicloud.com/app/storage/uploads/37/1667984120_34_Flamingo-Hill-Camp-27.jpg"],
        user_id: 9,
      },
  ];
  
  export default travelData;
  