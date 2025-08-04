// Gallery Configuration and Data
const galleryConfig = {
  imagesPath: "images/",
  loadingDelay: 500,
  animationDelay: 100,
};

// Gallery data with categorized images and descriptions
const galleryData = [
  {
    filename: "theroots_cafe_1544871097_1934841461435929347_8682245756.jpg",
    title: "Cozy Coffee Corner",
    description:
      "Start your day with our freshly brewed specialty coffee in our warm, welcoming atmosphere.",
    category: "atmosphere",
    date: "2018-12-15",
  },
  {
    filename: "theroots_cafe_1544888934_1934991089993206577_8682245756.jpg",
    title: "Morning Coffee Ritual",
    description:
      "The perfect way to begin your morning with our signature blend.",
    category: "food",
    date: "2018-12-15",
  },
  {
    filename: "theroots_cafe_1547214505_1954499386383021546_8682245756.jpg",
    title: "Artisan Breakfast Delights",
    description:
      "Handcrafted breakfast items made with locally sourced ingredients.",
    category: "food",
    date: "2019-01-11",
  },
  {
    filename: "theroots_cafe_1548321688_1963787117047223644_8682245756.jpg",
    title: "Premium Coffee Selection",
    description: "Explore our curated selection of single-origin coffee beans.",
    category: "food",
    date: "2019-01-24",
  },
  {
    filename: "theroots_cafe_1548687787_1966858178718370743_8682245756.jpg",
    title: "Weekend Vibes",
    description:
      "Relaxing weekend atmosphere perfect for catching up with friends.",
    category: "atmosphere",
    date: "2019-01-28",
  },
  {
    filename: "theroots_cafe_1549308362_1972063939253875265_8682245756.jpg",
    title: "Community Gathering",
    description: "Where friends meet and stories are shared over great coffee.",
    category: "atmosphere",
    date: "2019-02-05",
  },
  {
    filename: "theroots_cafe_1549360839_1972504144226135684_8682245756.jpg",
    title: "Coffee Art Mastery",
    description:
      "Our baristas create beautiful latte art that's almost too pretty to drink.",
    category: "food",
    date: "2019-02-05",
  },
  {
    filename: "theroots_cafe_1549880875_1976866520111213683_8682245756.jpg",
    title: "February Special",
    description:
      "Seasonal menu featuring winter comfort foods and warm beverages.",
    category: "food",
    date: "2019-02-11",
  },
  {
    filename: "theroots_cafe_1551181607_1987777854260526671_8682245756.jpg",
    title: "Fresh Pastries Daily",
    description: "Baked fresh every morning with love and attention to detail.",
    category: "food",
    date: "2019-02-26",
  },
  {
    filename: "theroots_cafe_1551945135_1994182787759123572_8682245756.jpg",
    title: "March Madness",
    description: "Spring excitement with new menu items and fresh energy.",
    category: "events",
    date: "2019-03-07",
  },
  {
    filename: "theroots_cafe_1552215354_1996449549779289138_8682245756.jpg",
    title: "Spring Awakening",
    description:
      "Fresh ingredients and vibrant flavors welcome the spring season.",
    category: "food",
    date: "2019-03-10",
  },
  {
    filename: "theroots_cafe_1553265816_2005261469781324786_8682245756.jpg",
    title: "Weekend Brunch Special",
    description:
      "Join us for our famous weekend brunch featuring seasonal ingredients.",
    category: "events",
    date: "2019-03-22",
  },
  {
    filename: "theroots_cafe_1554218630_2013254246480689689_8682245756.jpg",
    title: "April Showers Comfort",
    description:
      "Warm up on rainy days with our hearty soups and hot beverages.",
    category: "food",
    date: "2019-04-02",
  },
  {
    filename: "theroots_cafe_1554467033_2015338003870131905_8682245756.jpg",
    title: "Easter Celebration",
    description: "Special Easter treats and spring-themed decorations.",
    category: "events",
    date: "2019-04-05",
  },
  {
    filename: "theroots_cafe_1554577712_2016266444635228174_8682245756.jpg",
    title: "Spring Garden Menu",
    description: "Fresh salads and light meals inspired by spring gardens.",
    category: "food",
    date: "2019-04-06",
  },
  {
    filename: "theroots_cafe_1555334355_2022613627267476017_8682245756.jpg",
    title: "Barista Craftsmanship",
    description:
      "Watch our skilled baristas create coffee art that tastes as good as it looks.",
    category: "food",
    date: "2019-04-15",
  },
  {
    filename: "theroots_cafe_1555342488_2022681851447377225_8682245756.jpg",
    title: "Mid-April Special",
    description:
      "Celebrating the beautiful spring weather with outdoor seating.",
    category: "atmosphere",
    date: "2019-04-15",
  },
  {
    filename: "theroots_cafe_1555605683_2024889694359421518_8682245756.jpg",
    title: "Spring Festival",
    description: "Community event celebrating the arrival of spring.",
    category: "events",
    date: "2019-04-18",
  },
  {
    filename: "theroots_cafe_1555952691_2027800603822170240_8682245756.jpg",
    title: "April Closing",
    description: "Wrapping up a wonderful month with grateful hearts.",
    category: "atmosphere",
    date: "2019-04-22",
  },
  {
    filename: "theroots_cafe_1556884390_2035616264938262246_8682245756.jpg",
    title: "May Day Celebration",
    description: "Welcoming May with fresh flowers and seasonal menu updates.",
    category: "events",
    date: "2019-05-03",
  },
  {
    filename: "theroots_cafe_1557583825_2041483552291574052_8682245756.jpg",
    title: "Intimate Dining Experience",
    description:
      "Perfect spot for intimate conversations and memorable moments.",
    category: "atmosphere",
    date: "2019-05-11",
  },
  {
    filename: "theroots_cafe_1557598124_2041603501274373924_8682245756.jpg",
    title: "Mother's Day Prep",
    description: "Getting ready for our special Mother's Day celebration.",
    category: "events",
    date: "2019-05-11",
  },
  {
    filename: "theroots_cafe_1557746152_2042845245533853435_8682245756.jpg",
    title: "Spring Coffee Collection",
    description: "Light roasts and floral notes perfect for spring weather.",
    category: "food",
    date: "2019-05-13",
  },
  {
    filename: "theroots_cafe_1557834425_2043585740442723221_8682245756.jpg",
    title: "Afternoon Delight",
    description: "Perfect afternoon spot for coffee and contemplation.",
    category: "atmosphere",
    date: "2019-05-14",
  },
  {
    filename: "theroots_cafe_1558191086_2046577625524545742_8682245756.jpg",
    title: "Weekend Crowd",
    description: "Bustling weekend atmosphere with families and friends.",
    category: "atmosphere",
    date: "2019-05-18",
  },
  {
    filename: "theroots_cafe_1558630970_2050267638263055444_8682245756.jpg",
    title: "Late May Special",
    description: "Celebrating the end of May with community appreciation.",
    category: "events",
    date: "2019-05-24",
  },
  {
    filename: "theroots_cafe_1558697210_2050823298717413320_8682245756.jpg",
    title: "Memorial Day Weekend",
    description: "Honoring those who served with a special weekend menu.",
    category: "events",
    date: "2019-05-24",
  },
  {
    filename: "theroots_cafe_1559549366_2057971704787217515_8682245756.jpg",
    title: "June Opening",
    description: "Starting summer right with fresh energy and new offerings.",
    category: "atmosphere",
    date: "2019-06-03",
  },
  {
    filename: "theroots_cafe_1560004090_2061786205793977613_8682245756.jpg",
    title: "Summer Refreshers",
    description:
      "Cool down with our signature iced beverages and summer treats.",
    category: "food",
    date: "2019-06-08",
  },
  {
    filename: "theroots_cafe_1560183774_2063293500960871507_8682245756.jpg",
    title: "Mid-June Vibes",
    description: "Summer is in full swing with longer days and cooler drinks.",
    category: "atmosphere",
    date: "2019-06-10",
  },
  {
    filename: "theroots_cafe_1561207385_2071880175379210228_8682245756.jpg",
    title: "Father's Day Special",
    description: "Celebrating all the amazing fathers in our community.",
    category: "events",
    date: "2019-06-22",
  },
  {
    filename: "theroots_cafe_1561232145_2072087878764386923_8682245756.jpg",
    title: "Summer Solstice",
    description: "Celebrating the longest day of the year with special treats.",
    category: "events",
    date: "2019-06-22",
  },
  {
    filename: "theroots_cafe_1561306748_2072713692191153509_8682245756.jpg",
    title: "Late June Gathering",
    description: "Community comes together to enjoy the beautiful weather.",
    category: "atmosphere",
    date: "2019-06-23",
  },
  {
    filename: "theroots_cafe_1561320935_2072832703939910660_8682245756.jpg",
    title: "Sunday Brunch",
    description: "Lazy Sunday brunch with all your favorite comfort foods.",
    category: "food",
    date: "2019-06-23",
  },
  {
    filename: "theroots_cafe_1561373095_2073270248255289386_8682245756.jpg",
    title: "June Finale",
    description: "Ending June on a high note with gratitude and joy.",
    category: "atmosphere",
    date: "2019-06-24",
  },
  {
    filename: "theroots_cafe_1561455380_2073960512255138653_8682245756.jpg",
    title: "Summer Kick-off",
    description:
      "Starting summer vacation season with family-friendly offerings.",
    category: "events",
    date: "2019-06-25",
  },
  {
    filename: "theroots_cafe_1561747531_2076411252009554926_8682245756.jpg",
    title: "Independence Week",
    description:
      "Preparing for Fourth of July celebrations with patriotic spirit.",
    category: "events",
    date: "2019-06-28",
  },
  {
    filename: "theroots_cafe_1561831243_2077113479875284537_8682245756.jpg",
    title: "Month End Reflection",
    description: "Taking time to appreciate our wonderful community.",
    category: "atmosphere",
    date: "2019-06-29",
  },
  {
    filename: "theroots_cafe_1562056408_2079002293765946443_8682245756.jpg",
    title: "July 4th Prep",
    description: "Getting ready for Independence Day with special decorations.",
    category: "events",
    date: "2019-07-02",
  },
  {
    filename: "theroots_cafe_1562660832_2084072568861756516_8682245756.jpg",
    title: "Live Music Night",
    description:
      "Experience local talent during our monthly live music events.",
    category: "events",
    date: "2019-07-09",
  },
  {
    filename: "theroots_cafe_1562860709_2085749265289988069_8682245756.jpg",
    title: "Summer Heat Relief",
    description: "Cool treats and iced drinks to beat the summer heat.",
    category: "food",
    date: "2019-07-11",
  },
  {
    filename: "theroots_cafe_1562952426_2086518636925032781_8682245756.jpg",
    title: "Mid-July Special",
    description: "Celebrating the height of summer with seasonal favorites.",
    category: "food",
    date: "2019-07-12",
  },
  {
    filename: "theroots_cafe_1563354793_2089893937411507682_8682245756.jpg",
    title: "Summer Festival",
    description:
      "Community summer festival with food, drinks, and entertainment.",
    category: "events",
    date: "2019-07-17",
  },
  {
    filename: "theroots_cafe_1563361388_2089949260281272168_8682245756.jpg",
    title: "Festival Aftermath",
    description: "Celebrating a successful community event with our neighbors.",
    category: "events",
    date: "2019-07-17",
  },
  {
    filename: "theroots_cafe_1563720652_2092962987578247679_8682245756.jpg",
    title: "Late July Vibes",
    description: "Enjoying the laid-back atmosphere of late summer.",
    category: "atmosphere",
    date: "2019-07-21",
  },
  {
    filename: "theroots_cafe_1564149499_2096560417406267275_8682245756.jpg",
    title: "August Preview",
    description: "Getting ready for August with exciting new menu items.",
    category: "food",
    date: "2019-07-26",
  },
  {
    filename: "theroots_cafe_1564497565_2099480209666704479_8682245756.jpg",
    title: "Summer's End Approach",
    description: "Making the most of the remaining summer days.",
    category: "atmosphere",
    date: "2019-07-30",
  },
  {
    filename: "theroots_cafe_1566067546_2112650164171991520_8682245756.jpg",
    title: "Autumn Coffee Collection",
    description:
      "Seasonal flavors that capture the essence of fall in every cup.",
    category: "food",
    date: "2019-08-17",
  },
  {
    filename: "theroots_cafe_1566845785_2119178502818690454_8682245756.jpg",
    title: "Late August Special",
    description: "Transitioning from summer to fall with seasonal adjustments.",
    category: "food",
    date: "2019-08-26",
  },
  {
    filename: "theroots_cafe_1566992631_2120410338907596742_8682245756.jpg",
    title: "Back to School Prep",
    description: "Preparing for the busy back-to-school season.",
    category: "events",
    date: "2019-08-28",
  },
  {
    filename: "theroots_cafe_1567085713_2121191162477095432_8682245756.jpg",
    title: "September Welcome",
    description: "Welcoming September with fall flavors and cozy atmosphere.",
    category: "atmosphere",
    date: "2019-08-29",
  },
  {
    filename: "theroots_cafe_1567253099_2122595304005406981_8682245756.jpg",
    title: "Labor Day Weekend",
    description: "Celebrating the end of summer with a special weekend menu.",
    category: "events",
    date: "2019-08-31",
  },
  {
    filename: "theroots_cafe_1568313794_2131493059196904287_8682245756.jpg",
    title: "September Comfort",
    description: "Cozy comfort foods perfect for the changing season.",
    category: "food",
    date: "2019-09-12",
  },
  {
    filename: "theroots_cafe_1568461764_2132734315592079562_8682245756.jpg",
    title: "Autumn Ambiance",
    description: "Creating the perfect fall atmosphere with warm lighting.",
    category: "atmosphere",
    date: "2019-09-14",
  },
  {
    filename: "theroots_cafe_1568893798_2136358481767540594_8682245756.jpg",
    title: "Rustic Interior Design",
    description:
      "Our carefully curated space blends modern comfort with rustic charm.",
    category: "atmosphere",
    date: "2019-09-19",
  },
  {
    filename: "theroots_cafe_1569840972_2144303949504037548_8682245756.jpg",
    title: "October Opening",
    description: "Starting October with pumpkin spice and everything nice.",
    category: "food",
    date: "2019-09-30",
  },
  {
    filename: "theroots_cafe_1569921046_2144975660721245238_8682245756.jpg",
    title: "Fall Festival Prep",
    description: "Getting ready for our annual fall festival celebration.",
    category: "events",
    date: "2019-10-01",
  },
  {
    filename: "theroots_cafe_1570189118_2147224414203594151_8682245756.jpg",
    title: "Columbus Day Special",
    description: "Celebrating with exploration-themed treats and drinks.",
    category: "events",
    date: "2019-10-05",
  },
  {
    filename: "theroots_cafe_1570275561_2147949548287560726_8682245756.jpg",
    title: "Mid-October Warmth",
    description: "Warming hearts and souls with our fall comfort menu.",
    category: "food",
    date: "2019-10-05",
  },
  {
    filename: "theroots_cafe_1570720114_2151678727621671950_8682245756.jpg",
    title: "Autumn Colors",
    description:
      "Celebrating the beautiful fall foliage with seasonal decorations.",
    category: "atmosphere",
    date: "2019-10-10",
  },
  {
    filename: "theroots_cafe_1570801429_2152360847499215222_8682245756.jpg",
    title: "Harvest Time",
    description: "Celebrating the harvest season with local produce specials.",
    category: "food",
    date: "2019-10-11",
  },
  {
    filename: "theroots_cafe_1571684050_2159764811454642590_8682245756.jpg",
    title: "Halloween Celebration",
    description:
      "Special themed treats and decorations for the spookiest season.",
    category: "events",
    date: "2019-10-21",
  },
  {
    filename: "theroots_cafe_1571767759_2160467016176540634_8682245756.jpg",
    title: "Halloween Week",
    description:
      "Continuing the Halloween spirit with costume-friendly atmosphere.",
    category: "events",
    date: "2019-10-22",
  },
  {
    filename: "theroots_cafe_1571854886_2161197886516576009_8682245756.jpg",
    title: "Post-Halloween",
    description: "Transitioning from Halloween to Thanksgiving preparations.",
    category: "atmosphere",
    date: "2019-10-23",
  },
  {
    filename: "theroots_cafe_1572160350_2163760302324599200_8682245756.jpg",
    title: "November Welcome",
    description: "Welcoming November with gratitude and thanksgiving spirit.",
    category: "atmosphere",
    date: "2019-10-27",
  },
  {
    filename: "theroots_cafe_1572253454_2164541322279865835_8682245756.jpg",
    title: "Thanksgiving Prep",
    description:
      "Getting ready for Thanksgiving with special menu preparations.",
    category: "events",
    date: "2019-10-28",
  },
  {
    filename: "theroots_cafe_1572330546_2165188011101769929_8682245756.jpg",
    title: "Gratitude Menu",
    description: "Special thanksgiving-themed menu items and drinks.",
    category: "food",
    date: "2019-10-29",
  },
  {
    filename: "theroots_cafe_1572431310_2166033286854774958_8682245756.jpg",
    title: "November Special",
    description:
      "Celebrating November with seasonal favorites and warm atmosphere.",
    category: "food",
    date: "2019-10-30",
  },
  {
    filename: "theroots_cafe_1573068648_2171379657874941078_8682245756.jpg",
    title: "Mid-November Comfort",
    description: "Providing comfort and warmth during the cooler days.",
    category: "atmosphere",
    date: "2019-11-06",
  },
  {
    filename: "theroots_cafe_1573213676_2172596244439271034_8682245756.jpg",
    title: "Pre-Thanksgiving Rush",
    description: "Busy times before the thanksgiving holiday.",
    category: "atmosphere",
    date: "2019-11-08",
  },
  {
    filename: "theroots_cafe_1573371467_2173919891963546152_8682245756.jpg",
    title: "Thanksgiving Week",
    description: "Special thanksgiving week menu and decorations.",
    category: "events",
    date: "2019-11-10",
  },
  {
    filename: "theroots_cafe_1573569519_2175581272865696551_8682245756.jpg",
    title: "Gratitude Gathering",
    description: "Community gathering to share what we're thankful for.",
    category: "events",
    date: "2019-11-12",
  },
  {
    filename: "theroots_cafe_1574255352_2181334453843363322_8682245756.jpg",
    title: "Post-Thanksgiving",
    description: "Getting back to normal after the thanksgiving celebrations.",
    category: "atmosphere",
    date: "2019-11-20",
  },
  {
    filename: "theroots_cafe_1574876399_2186544171838805656_8682245756.jpg",
    title: "December Arrival",
    description: "Welcoming December with holiday cheer and winter warmth.",
    category: "atmosphere",
    date: "2019-11-27",
  },
  {
    filename: "theroots_cafe_1575140301_2188757947577105865_8682245756.jpg",
    title: "Holiday Decorations",
    description: "Transforming our space with beautiful holiday decorations.",
    category: "atmosphere",
    date: "2019-11-30",
  },
  {
    filename: "theroots_cafe_1575542947_2192135584634725317_8682245756.jpg",
    title: "Holiday Special Menu",
    description:
      "Festive flavors and warm beverages to celebrate the holiday season.",
    category: "events",
    date: "2019-12-05",
  },
  {
    filename: "theroots_cafe_1575728773_2193694406213944714_8682245756.jpg",
    title: "Christmas Spirit",
    description: "Spreading Christmas joy with special holiday treats.",
    category: "events",
    date: "2019-12-07",
  },
  {
    filename: "theroots_cafe_1575975171_2195761342875931555_8682245756.jpg",
    title: "Holiday Party Season",
    description: "Perfect venue for holiday parties and celebrations.",
    category: "events",
    date: "2019-12-10",
  },
  {
    filename: "theroots_cafe_1576607106_2201062402511172025_8682245756.jpg",
    title: "Christmas Week",
    description: "Celebrating Christmas week with our community family.",
    category: "events",
    date: "2019-12-17",
  },
  {
    filename: "theroots_cafe_1576687557_2201737266662252908_8682245756.jpg",
    title: "Pre-Christmas Rush",
    description: "Busy but joyful times leading up to Christmas.",
    category: "atmosphere",
    date: "2019-12-18",
  },
  {
    filename: "theroots_cafe_1576920530_2203691585942901927_8682245756.jpg",
    title: "Christmas Eve",
    description: "Celebrating Christmas Eve with warmth and gratitude.",
    category: "events",
    date: "2019-12-21",
  },
  {
    filename: "theroots_cafe_1577443316_2208077038502735778_8682245756.jpg",
    title: "New Year Prep",
    description:
      "Getting ready to welcome the new year with hope and excitement.",
    category: "events",
    date: "2019-12-27",
  },
  {
    filename: "theroots_cafe_1578662853_2218307257167518215_8682245756.jpg",
    title: "New Year Resolution",
    description: "Starting 2020 with fresh goals and renewed energy.",
    category: "atmosphere",
    date: "2020-01-10",
  },
  {
    filename: "theroots_cafe_1579954211_2229139953745913562_8682245756.jpg",
    title: "January Special",
    description: "Warming up January with hearty comfort foods.",
    category: "food",
    date: "2020-01-25",
  },
  {
    filename: "theroots_cafe_1580462903_2233407170218007444_8682245756.jpg",
    title: "Winter Warmth",
    description:
      "Cozy up with our hearty winter menu and signature hot drinks.",
    category: "food",
    date: "2020-01-31",
  },
  {
    filename: "theroots_cafe_1581168314_2239324584101104911_8682245756.jpg",
    title: "Valentine's Prep",
    description: "Getting ready for Valentine's Day with romantic atmosphere.",
    category: "events",
    date: "2020-02-08",
  },
  {
    filename: "theroots_cafe_1581534395_2242395491975790845_8682245756.jpg",
    title: "Love is in the Air",
    description: "Celebrating love and friendship during Valentine's season.",
    category: "events",
    date: "2020-02-12",
  },
  {
    filename: "theroots_cafe_1582561309_2251009874779881348_8682245756.jpg",
    title: "March Arrival",
    description: "Welcoming March with hopes of spring's return.",
    category: "atmosphere",
    date: "2020-02-24",
  },
  {
    filename: "theroots_cafe_1583505793_2258932783066179312_8682245756.jpg",
    title: "Spring Anticipation",
    description: "Looking forward to spring with seasonal menu updates.",
    category: "food",
    date: "2020-03-06",
  },
  {
    filename: "theroots_cafe_1584430801_2266692311149095643_8682245756.jpg",
    title: "Community Support",
    description: "Supporting our community during challenging times.",
    category: "atmosphere",
    date: "2020-03-17",
  },
  {
    filename: "theroots_cafe_1588096924_2297445976637918057_8682245756.jpg",
    title: "Takeout Excellence",
    description:
      "Bringing The Roots experience to your home with our takeout service.",
    category: "food",
    date: "2020-04-28",
  },
  {
    filename: "theroots_cafe_1588358995_2299644389479449508_8682245756.jpg",
    title: "Adaptation Success",
    description: "Successfully adapting to new ways of serving our community.",
    category: "atmosphere",
    date: "2020-05-01",
  },
  {
    filename: "theroots_cafe_1591039541_2322130438763851497_8682245756.jpg",
    title: "June Resilience",
    description: "Showing resilience and strength in the face of challenges.",
    category: "atmosphere",
    date: "2020-06-01",
  },
  {
    filename: "theroots_cafe_1592652712_2335662699916372014_8682245756.jpg",
    title: "Summer Safety",
    description: "Enjoying summer while maintaining safety for everyone.",
    category: "atmosphere",
    date: "2020-06-20",
  },
  {
    filename: "theroots_cafe_1593519714_2342935639334633258_8682245756.jpg",
    title: "Safe Dining Experience",
    description:
      "Maintaining our high standards while ensuring customer safety.",
    category: "atmosphere",
    date: "2020-06-30",
  },
  {
    filename: "theroots_cafe_1593864208_2345825458352067678_8682245756.jpg",
    title: "July 4th Celebration",
    description:
      "Celebrating Independence Day with patriotic spirit and safety.",
    category: "events",
    date: "2020-07-04",
  },
  {
    filename: "theroots_cafe_1593958537_2346616754679338114_8682245756.jpg",
    title: "Summer Adjustment",
    description: "Adjusting to new summer routines while maintaining quality.",
    category: "atmosphere",
    date: "2020-07-05",
  },
  {
    filename: "theroots_cafe_1594645236_2352377197691683008_8682245756.jpg",
    title: "Mid-Summer Strength",
    description: "Finding strength and joy in the middle of summer challenges.",
    category: "atmosphere",
    date: "2020-07-13",
  },
  {
    filename: "theroots_cafe_1595614746_2360510040582362522_8682245756.jpg",
    title: "August Perseverance",
    description: "Persevering through difficult times with community support.",
    category: "atmosphere",
    date: "2020-07-25",
  },
  {
    filename: "theroots_cafe_1603804219_2429208318307623231_8682245756.jpg",
    title: "October Gratitude",
    description: "Expressing gratitude for our loyal customers and community.",
    category: "atmosphere",
    date: "2020-10-27",
  },
  {
    filename: "theroots_cafe_1605345730_2442139448681723954_8682245756.jpg",
    title: "Thanksgiving Reflection",
    description: "Reflecting on the year with gratitude and hope.",
    category: "events",
    date: "2020-11-14",
  },
  {
    filename: "theroots_cafe_1623747093_2596501270217144010_8682245756.jpg",
    title: "Summer Reopening",
    description:
      "Celebrating our return with new safety measures and the same great taste.",
    category: "events",
    date: "2021-06-15",
  },
  {
    filename: "theroots_cafe_1624872016_2605937807665342447_8682245756.jpg",
    title: "Late June Recovery",
    description: "Getting back to normal operations with renewed energy.",
    category: "atmosphere",
    date: "2021-06-28",
  },
  {
    filename: "theroots_cafe_1624954732_2606631682298023808_8682245756.jpg",
    title: "July Excitement",
    description: "Excitement builds as we welcome more customers back.",
    category: "atmosphere",
    date: "2021-06-29",
  },
  {
    filename: "theroots_cafe_1625129435_2608097199797957350_8682245756.jpg",
    title: "Independence Celebration",
    description: "Celebrating independence and freedom with our community.",
    category: "events",
    date: "2021-07-01",
  },
  {
    filename: "theroots_cafe_1626265965_2617631100715381906_8682245756.jpg",
    title: "Mid-July Joy",
    description: "Finding joy in serving our community once again.",
    category: "atmosphere",
    date: "2021-07-14",
  },
  {
    filename: "theroots_cafe_1630939517_2656835699531639712_8682245756.jpg",
    title: "Back to School Special",
    description: "Student-friendly menu and study-friendly atmosphere.",
    category: "events",
    date: "2021-09-06",
  },
  {
    filename: "theroots_cafe_1633606507_2679208029993924315_8682245756.jpg",
    title: "October Revival",
    description: "Reviving our full menu and services for the fall season.",
    category: "atmosphere",
    date: "2021-10-07",
  },
  {
    filename: "theroots_cafe_1636451976_2703077550686981962_8682245756.jpg",
    title: "November Comeback",
    description: "Strong comeback with full operations and happy customers.",
    category: "atmosphere",
    date: "2021-11-09",
  },
  {
    filename: "theroots_cafe_1637757107_2714025788976780138_8682245756.jpg",
    title: "Thanksgiving Joy",
    description: "Celebrating Thanksgiving with overwhelming gratitude.",
    category: "events",
    date: "2021-11-24",
  },
  {
    filename: "theroots_cafe_1638108257_2716971448256458530_8682245756.jpg",
    title: "December Hope",
    description: "Entering December with hope and holiday spirit.",
    category: "atmosphere",
    date: "2021-11-28",
  },
  {
    filename: "theroots_cafe_1645467022_2778701239456036324_8682245756.jpg",
    title: "Valentine's Return",
    description: "Celebrating Valentine's Day with full romantic atmosphere.",
    category: "events",
    date: "2022-02-21",
  },
  {
    filename: "theroots_cafe_1646164264_2784550131053518490_8682245756.jpg",
    title: "Spring Awakening",
    description:
      "Fresh spring menu featuring locally sourced seasonal ingredients.",
    category: "food",
    date: "2022-03-01",
  },
  {
    filename: "theroots_cafe_1646733835_2789328041752883395_8682245756.jpg",
    title: "March Renewal",
    description: "Renewing our commitment to excellence in spring.",
    category: "atmosphere",
    date: "2022-03-08",
  },
  {
    filename: "theroots_cafe_1651314273_2827751538891768581_8682245756.jpg",
    title: "Mother's Day Celebration",
    description: "Special brunch menu honoring the mothers in our community.",
    category: "events",
    date: "2022-05-01",
  },
  {
    filename: "theroots_cafe_1651314273_2827751538908673772_8682245756.jpg",
    title: "Mother's Day Special",
    description: "Extended celebration for all the amazing mothers.",
    category: "events",
    date: "2022-05-01",
  },
  {
    filename: "theroots_cafe_1651314273_2827751539009373480_8682245756.jpg",
    title: "Mother's Day Brunch",
    description: "Beautiful brunch spread celebrating motherhood.",
    category: "food",
    date: "2022-05-01",
  },
  {
    filename: "theroots_cafe_1651314273_2827751539034424765_8682245756.jpg",
    title: "Mother's Day Treats",
    description: "Special treats and desserts for Mother's Day.",
    category: "food",
    date: "2022-05-01",
  },
  {
    filename: "theroots_cafe_1651314273_2827751539059679043_8682245756.jpg",
    title: "Mother's Day Memories",
    description: "Creating lasting memories for families on Mother's Day.",
    category: "events",
    date: "2022-05-01",
  },
  {
    filename: "theroots_cafe_1660308458_2903200225767690476_8682245756.jpg",
    title: "Summer Peak",
    description: "Enjoying the peak of summer with full energy and enthusiasm.",
    category: "atmosphere",
    date: "2022-08-12",
  },
  {
    filename: "theroots_cafe_1662382854_2920601524742044496_8682245756.jpg",
    title: "September Success",
    description: "Celebrating successful operations and happy customers.",
    category: "atmosphere",
    date: "2022-09-05",
  },
  {
    filename: "theroots_cafe_1671441391_2996590039589688763_8682245756.jpg",
    title: "Year-End Gratitude",
    description: "Thanking our community for another wonderful year together.",
    category: "events",
    date: "2022-12-19",
  },
  {
    filename: "theroots_cafe_1671441391_2996590039606393204_8682245756.jpg",
    title: "Holiday Finale",
    description: "Ending the year with holiday cheer and gratitude.",
    category: "events",
    date: "2022-12-19",
  },
  {
    filename: "theroots_cafe_1671441391_2996590039706911761_8682245756.jpg",
    title: "New Year Preparation",
    description: "Preparing for the new year with excitement and hope.",
    category: "atmosphere",
    date: "2022-12-19",
  },
];

// Global variables
let currentImageIndex = 0;
let filteredGallery = [...galleryData];
let isLightboxOpen = false;

// DOM Elements
const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxDate = document.getElementById("lightboxDate");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const loadingSpinner = document.getElementById("loadingSpinner");
const backToTop = document.getElementById("backToTop");
const filterButtons = document.querySelectorAll(".filter-btn");

// Initialize Gallery
document.addEventListener("DOMContentLoaded", function () {
  showLoadingSpinner();
  setTimeout(() => {
    initializeGallery();
    hideLoadingSpinner();
    setupEventListeners();
    setupScrollEffects();
  }, galleryConfig.loadingDelay);
});

// Show loading spinner
function showLoadingSpinner() {
  loadingSpinner.style.display = "flex";
}

// Hide loading spinner
function hideLoadingSpinner() {
  loadingSpinner.style.display = "none";
}

// Initialize gallery with all images
function initializeGallery() {
  renderGallery(galleryData);
}

// Render gallery items
function renderGallery(items) {
  galleryGrid.innerHTML = "";

  items.forEach((item, index) => {
    const galleryItem = createGalleryItem(item, index);
    galleryGrid.appendChild(galleryItem);
  });

  // Animate items
  animateGalleryItems();
}

// Create individual gallery item
function createGalleryItem(item, index) {
  const div = document.createElement("div");
  div.className = `gallery-item ${item.category}`;
  div.setAttribute("data-category", item.category);
  div.setAttribute("data-index", index);

  const formattedDate = formatDate(item.date);
  const categoryLabel = getCategoryLabel(item.category);

  div.innerHTML = `
        <img src="${galleryConfig.imagesPath}${item.filename}" 
             alt="${item.title}" 
             class="gallery-image"
             loading="lazy">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="gallery-date">${formattedDate}</div>
            </div>
        </div>
        <div class="category-badge">${categoryLabel}</div>
    `;

  // Add click event
  div.addEventListener("click", () => openLightbox(index));

  return div;
}

// Get category label for display
function getCategoryLabel(category) {
  const labels = {
    food: "Food & Drinks",
    atmosphere: "Atmosphere",
    events: "Events",
  };
  return labels[category] || category;
}

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Animate gallery items
function animateGalleryItems() {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.animationDelay = `${index * 0.1}s`;
    }, index * galleryConfig.animationDelay);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => handleFilterClick(button));
  });

  // Lightbox controls
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  lightboxNext.addEventListener("click", () => navigateLightbox(1));

  // Lightbox background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", handleKeyboardNavigation);

  // Back to top button
  backToTop.addEventListener("click", scrollToTop);
}

// Handle filter button clicks
function handleFilterClick(button) {
  // Remove active class from all buttons
  filterButtons.forEach((btn) => btn.classList.remove("active"));

  // Add active class to clicked button
  button.classList.add("active");

  // Get filter value
  const filter = button.getAttribute("data-filter");

  // Filter and render gallery
  filterGallery(filter);
}

// Filter gallery by category
function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");

  // Add fade-out animation
  items.forEach((item) => {
    item.classList.add("filter-hidden");
  });

  setTimeout(() => {
    if (category === "all") {
      filteredGallery = [...galleryData];
    } else {
      filteredGallery = galleryData.filter(
        (item) => item.category === category
      );
    }

    renderGallery(filteredGallery);
  }, 300);
}

// Open lightbox
function openLightbox(index) {
  currentImageIndex = index;
  isLightboxOpen = true;

  const item = filteredGallery[index];

  lightboxImage.src = `${galleryConfig.imagesPath}${item.filename}`;
  lightboxTitle.textContent = item.title;
  lightboxDescription.textContent = item.description;
  lightboxDate.textContent = formatDate(item.date);

  lightbox.style.display = "block";
  document.body.style.overflow = "hidden";

  // Update navigation buttons
  updateLightboxNavigation();
}

// Close lightbox
function closeLightbox() {
  isLightboxOpen = false;
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
}

// Navigate lightbox
function navigateLightbox(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = filteredGallery.length - 1;
  } else if (currentImageIndex >= filteredGallery.length) {
    currentImageIndex = 0;
  }

  const item = filteredGallery[currentImageIndex];

  lightboxImage.src = `${galleryConfig.imagesPath}${item.filename}`;
  lightboxTitle.textContent = item.title;
  lightboxDescription.textContent = item.description;
  lightboxDate.textContent = formatDate(item.date);

  updateLightboxNavigation();
}

// Update lightbox navigation buttons
function updateLightboxNavigation() {
  lightboxPrev.style.display = filteredGallery.length > 1 ? "block" : "none";
  lightboxNext.style.display = filteredGallery.length > 1 ? "block" : "none";
}

// Handle keyboard navigation
function handleKeyboardNavigation(e) {
  if (!isLightboxOpen) return;

  switch (e.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowLeft":
      navigateLightbox(-1);
      break;
    case "ArrowRight":
      navigateLightbox(1);
      break;
  }
}

// Setup scroll effects
function setupScrollEffects() {
  window.addEventListener("scroll", () => {
    // Back to top button
    if (window.pageYOffset > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }

    // Parallax effect for header
    const header = document.querySelector(".gallery-header");
    if (header) {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      header.style.transform = `translateY(${parallax}px)`;
    }
  });
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Touch/swipe support for mobile
let touchStartX = null;
let touchStartY = null;

document.addEventListener("touchstart", (e) => {
  if (!isLightboxOpen) return;

  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

document.addEventListener("touchend", (e) => {
  if (!isLightboxOpen || !touchStartX || !touchStartY) return;

  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;

  const deltaX = touchStartX - touchEndX;
  const deltaY = touchStartY - touchEndY;

  // Only handle horizontal swipes
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    if (deltaX > 0) {
      navigateLightbox(1); // Swipe left - next image
    } else {
      navigateLightbox(-1); // Swipe right - previous image
    }
  }

  touchStartX = null;
  touchStartY = null;
});

// Lazy loading for better performance
function setupLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// Error handling for missing images
document.addEventListener(
  "error",
  (e) => {
    if (e.target.tagName === "IMG") {
      e.target.src = "images/logo.jpg"; // Fallback to logo
      e.target.alt = "Image not available";
    }
  },
  true
);

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handler for better performance
const debouncedScrollHandler = debounce(() => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
}, 100);

window.addEventListener("scroll", debouncedScrollHandler);
