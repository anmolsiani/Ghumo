const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export interface UnsplashImage {
  url: string;
  urlFull: string;
  alt: string;
  photographer: string;
}

const STATE_KEYWORDS: Record<string, string> = {
  'himachal-pradesh': 'manali snow mountains kullu valley india',
  'goa': 'beach sunset palm trees india coastal',
  'leh-ladakh': 'pangong lake blue mountains desert india',
  'darjeeling-sikkim': 'tea gardens kanchenjunga misty hills darjeeling',
  'uttarakhand': 'rishikesh ganges river auli snow india',
  'kerala': 'backwaters houseboat lush greenery kerala',
  'rajasthan': 'jaisalmer fort desert sand dunes golden india',
  'kashmir': 'dal lake shikara saffron fields kashmir'
};

export async function fetchStateImages(stateId: string, query?: string, count: number = 5): Promise<UnsplashImage[]> {
  if (!UNSPLASH_ACCESS_KEY || UNSPLASH_ACCESS_KEY === 'mock-unsplash-key-provide-real-key-here') {
    // Return placeholders if no key
    return Array(count).fill(null).map((_, i) => ({
      url: `https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80`, // generic india placeholder
      urlFull: `https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1400&q=80`,
      alt: `Placeholder for ${stateId}`,
      photographer: "Unsplash"
    }));
  }

  const searchQuery = query || STATE_KEYWORDS[stateId.toLowerCase()] || stateId;
  
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=${count}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        },
        next: { revalidate: 86400 } // cache for 24h
      }
    );
    
    const data = await response.json();
    return data.results.map((img: any) => ({
      url: img.urls.regular,
      urlFull: img.urls.full,
      alt: img.alt_description || stateId,
      photographer: img.user.name,
    }));
  } catch (error) {
    console.error("Error fetching Unsplash images:", error);
    return [];
  }
}
