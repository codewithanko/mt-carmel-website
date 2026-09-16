export type Ministry = {
  slug: string;
  name: string;
  leader: string;
  meets: string;
  summary: string;
  description: string;
};

export const ministries: Ministry[] = [
  {
    slug: "mens-ministry",
    name: "Men's Ministry",
    leader: "Bro. Placeholder Name",
    meets: "Second Saturday, 9:00 AM",
    summary: "Building men of integrity who lead their homes and workplaces with the fear of God.",
    description:
      "A brotherhood for fathers, sons and single men of every age. We meet for teaching, accountability, practical skills and community outreach around Kabowa.",
  },
  {
    slug: "womens-ministry",
    name: "Women's Ministry",
    leader: "Sis. Placeholder Name",
    meets: "Third Saturday, 10:00 AM",
    summary: "A place for women to grow in the Word, in prayer and in genuine friendship.",
    description:
      "Through Bible study, mentorship circles and hospitality, the women of Mt Carmel encourage one another in faith, family life and business.",
  },
  {
    slug: "youth-ministry",
    name: "Youth Ministry",
    leader: "Pastor Aaron",
    meets: "Saturday, 3:00 PM",
    summary:
      "A welcoming home for every teenager and young adult — whatever season you're walking through.",
    description:
      "Whatever you're going through, you don't have to carry it alone. Led by Pastor Aaron, our Youth Ministry is a space to worship freely, ask real questions, build genuine friendships and be walked through life's ups and downs by people who care. Come as you are, every Saturday at 3:00 PM.",
  },
  {
    slug: "childrens-ministry",
    name: "Children's Ministry",
    leader: "Placeholder Name",
    meets: "Sundays during both services",
    summary: "Safe, joyful, age-appropriate teaching for our youngest worshippers.",
    description:
      "Children from 3–12 learn scripture through stories, songs and crafts in a secure, well-supervised space while their parents worship.",
  },
  {
    slug: "choir-media-ministry",
    name: "Choir & Media Ministry",
    leader: "Placeholder Name",
    meets: "Thursday rehearsal, 6:00 PM",
    summary: "Leading the congregation in worship and carrying the message beyond our walls.",
    description:
      "Singers, instrumentalists, sound engineers, camera operators and editors serving together so every service is worshipful and well captured.",
  },
  {
    slug: "outreach-ministry",
    name: "Outreach & Missions",
    leader: "Placeholder Name",
    meets: "Monthly, last Sunday",
    summary: "Taking the gospel and practical help into Kabowa and beyond.",
    description:
      "Street evangelism, hospital visits, food drives and support for families in need across the neighbourhood.",
  },
];

export type Program = {
  slug: string;
  name: string;
  schedule: string;
  description: string;
};

export const programs: Program[] = [
  {
    slug: "sunday-celebration",
    name: "Sunday Celebration Service",
    schedule: "Sundays, 8:00 AM & 10:30 AM",
    description:
      "Our main gathering — worship, the reading of scripture, teaching from the Word and prayer for the week ahead.",
  },
  {
    slug: "midweek-teaching",
    name: "Midweek Bible Teaching",
    schedule: "Wednesdays, 6:00 PM",
    description:
      "A verse-by-verse study for believers who want to go deeper, with time for questions and discussion.",
  },
  {
    slug: "prayer-night",
    name: "Mt Carmel Prayer Night",
    schedule: "Fridays, 9:00 PM",
    description:
      "An all-night altar of intercession for families, the nation and the mission of the church.",
  },
  {
    slug: "new-members-class",
    name: "New Members Class",
    schedule: "Wednesdays, 6:00 PM (4-week cycle)",
    description:
      "For anyone new to the campus — who we are, what we believe, and how to find your place in the family.",
  },
  {
    slug: "marriage-clinic",
    name: "Marriage & Family Clinic",
    schedule: "First Sunday of the month, 2:00 PM",
    description: "Practical, scripture-rooted counsel for couples, engaged partners and parents.",
  },
  {
    slug: "community-outreach",
    name: "Kabowa Community Outreach",
    schedule: "Last Sunday of the month",
    description:
      "Door-to-door evangelism paired with practical service — food parcels, clean-ups and school support.",
  },
];

export type ChurchEvent = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  location: string;
  category: string;
  excerpt: string;
  description: string;
  past?: boolean;
};

export const events: ChurchEvent[] = [
  {
    slug: "night-of-worship",
    title: "Mt Carmel Night of Worship",
    date: "2026-10-09",
    displayDate: "Fri, 9 October 2026",
    time: "9:00 PM – 12:00 AM",
    location: "Main Auditorium, Kabowa",
    category: "Worship",
    excerpt:
      "A heartwarming night of praise and worship, where we press in for a divine encounter with God.",
    description:
      "Bring your family and a friend for three hours of unhurried, heartfelt worship led by the Mt Carmel choir — a space to lay everything down and simply encounter God together as one family.",
  },
  {
    slug: "personal-prayer-hour",
    title: "Personal Prayer Hour",
    date: "2026-10-25",
    displayDate: "Sun, 25 October 2026",
    time: "11:00 AM",
    location: "Church Grounds",
    category: "Prayer",
    excerpt: "A quiet hour set aside for you to meet with God, one on one.",
    description:
      "A dedicated time for individual prayer — no crowd, no rush, just you and God. Come as you are to seek Him, pour out your heart and be still in His presence, with prayer partners nearby if you'd like company.",
  },
  {
    slug: "youth-camp",
    title: "Youth Camp 2026",
    date: "2026-12-04",
    displayDate: "Fri, 4 – Sun, 6 December 2026",
    time: "Residential weekend",
    location: "Camp Site, Wakiso",
    category: "Youth",
    excerpt: "A weekend where every teenager and young adult is welcomed, seen and cared for.",
    description:
      "A residential weekend built around scripture, mentorship and friendship — with Pastor Aaron and the youth team on hand to walk with you through whatever you're facing. Transport departs from the church at 8:00 AM.",
  },
  {
    slug: "Testimony",
    title: "Testimonials time",
    date: "2026-12-20",
    displayDate: "Sun, 20 December 2026",
    time: "6:00 PM",
    location: "Church Grounds",
    category: "Community",
    excerpt: "An open-air celebration of the birth of Christ with the whole of Kabowa invited.",
    description:
      "Carols, a short gospel message, children's items and refreshments. Invite your neighbours — entry is free.",
  },
  {
    slug: "leaders-retreat",
    title: "Leaders' Retreat",
    date: "2027-01-16",
    displayDate: "Sat, 16 January 2027",
    time: "9:00 AM – 4:00 PM",
    location: "Mt Carmel Hall",
    category: "Leadership",
    excerpt: "A day of vision casting and refreshing for every serving leader.",
    description:
      "Department heads, ushers, choir, media and cell leaders gather to plan the year and be ministered to.",
  },
  {
    slug: "harvest-thanksgiving",
    title: "Harvest & Thanksgiving Sunday",
    date: "2026-08-30",
    displayDate: "Sun, 30 August 2026",
    time: "10:30 AM",
    location: "Main Auditorium",
    category: "Celebration",
    excerpt: "We returned thanks to God for a faithful year of provision.",
    description:
      "A joyful service of testimony, giving and celebration, closing with a shared meal on the grounds.",
    past: true,
  },
  {
    slug: "medical-camp",
    title: "Free Community Medical Camp",
    date: "2026-06-14",
    displayDate: "Sat, 14 June 2026",
    time: "8:00 AM – 3:00 PM",
    location: "Church Grounds",
    category: "Outreach",
    excerpt: "Over 300 neighbours received free screening and consultation.",
    description:
      "Run with volunteer medical professionals from the congregation, offering screening, counselling and referrals.",
    past: true,
  },
];

export type Sermon = {
  slug: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  scripture: string;
  excerpt: string;
  notes: string;
  /**
   * YouTube video ID (the part after "v=" in a YouTube URL, or after "youtu.be/").
   * Leave undefined or empty for sermons that don't have a video uploaded yet.
   * Tip: upload as "Unlisted" on YouTube if you don't want it appearing in public search.
   */
  youtubeId?: string;
};

export const sermons: Sermon[] = [
  {
    slug: "the-altar-of-carmel",
    title: "The Altar of Carmel",
    speaker: "Pastor Placeholder Name",
    date: "7 September 2026",
    series: "Fire on the Mountain",
    scripture: "1 Kings 18:30–39",
    excerpt: "Before the fire fell, the altar had to be repaired. God still answers rebuilt altars.",
    notes:
      "Elijah did not pray for fire until the broken altar was restored. This message walks through the discipline of repair...",
    youtubeId: "P_CB20IW8U0",
  },
  {
    slug: "carrying-the-word",
    title: "Carrying the Word Into Monday",
    speaker: "Pastor Placeholder Name",
    date: "31 August 2026",
    series: "Everyday Faith",
    scripture: "James 1:22–25",
    excerpt: "Sunday is not the finish line. The Word is proven in the ordinary week.",
    notes:
      "Practical teaching on turning what we hear into what we do — at work, in business and in the family.",
    youtubeId: "YKZVF2d8fdo",
  },
  {
    slug: "a-house-of-prayer",
    title: "A House of Prayer",
    speaker: "Pastor Placeholder Name",
    date: "24 August 2026",
    series: "Fire on the Mountain",
    scripture: "Isaiah 56:6–7",
    excerpt: "What God calls His house tells us what He expects to find in it.",
    notes: "An examination of the priority of prayer in the life of a congregation.",
    youtubeId: "M1ZUKzkjh2U",
  },
  {
    slug: "the-generous-life",
    title: "The Generous Life",
    speaker: "Guest Minister Placeholder",
    date: "17 August 2026",
    series: "Stewards",
    scripture: "2 Corinthians 9:6–11",
    excerpt: "Generosity is not a reaction to abundance; it is a decision of the heart.",
    notes: "Teaching on cheerful giving, sowing, and the promises attached to open hands.",
    youtubeId: "YzdVsb7ANQU",
  },
  {
    slug: "raising-a-godly-home",
    title: "Raising a Godly Home",
    speaker: "Pastor Placeholder Name",
    date: "10 August 2026",
    series: "Everyday Faith",
    scripture: "Deuteronomy 6:4–9",
    excerpt: "The family altar is the smallest and strongest church in the nation.",
    notes: "Counsel for parents on teaching scripture at home with consistency and warmth.",
    youtubeId: "xvRUU-Kln2o",
  },
  {
    slug: "when-heaven-is-silent",
    title: "When Heaven Seems Silent",
    speaker: "Guest Minister Placeholder",
    date: "3 August 2026",
    series: "Stewards",
    scripture: "Psalm 13",
    excerpt: "Faith that waits is still faith. A message for those in a long season.",
    notes: "Encouragement for believers in delay, drawn from the lament psalms.",
    youtubeId: "8i4b6hJh8QQ",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "five-ways-to-pray-for-your-city",
    title: "Five Ways to Pray for Your City",
    category: "Prayer",
    author: "Pastoral Team",
    date: "5 September 2026",
    excerpt:
      "Kabowa is not just where we meet — it is the field we have been given. Here is how to pray for it well.",
    body: [
      "Scripture repeatedly ties the welfare of God's people to the welfare of the place they live. Jeremiah told exiles in a foreign city to seek its peace and pray for it, because in its peace they would find their own.",
      "Start with the households on your own street. Pray by name where you can. Ask God for peace in homes, for marriages under strain and for children walking to school each morning.",
      "Pray for those who carry authority — local council leaders, police, teachers and health workers. Their decisions shape daily life for thousands of our neighbours.",
      "Pray for the businesses and markets of Kabowa: honest trade, fair prices and the dignity of work for every young person looking for a place to start.",
      "Finally, pray for the church itself — that we would be a house known for prayer, integrity and open doors, and that the gospel would be heard clearly here.",
    ],
  },
  {
    slug: "what-baptism-means",
    title: "What Baptism Means and Why It Matters",
    category: "Teaching",
    author: "Pastoral Team",
    date: "28 August 2026",
    excerpt: "A short guide for anyone considering water baptism at our next service.",
    body: [
      "Baptism is a public declaration of a private decision. It does not save — it testifies that you have been saved.",
      "In the New Testament, baptism follows belief. It marks the end of an old life and the beginning of a new one lived under the Lordship of Christ.",
      "Our baptism services are held on the last Sunday of each month, with a preparation class on the Wednesday before. Speak to any member of the pastoral team to register.",
    ],
  },
  {
    slug: "sunday-fellowship-lunch",
    title: "The Joy of Sunday Fellowship",
    category: "Community",
    author: "Placeholder Author",
    date: "19 August 2026",
    excerpt: "There's nothing quite like the laughter and stories shared over a meal after service.",
    body: [
      "Church was never meant to end when the final song is sung. Some of the deepest friendships at Mt Carmel are formed not in the pews, but around a shared plate of food after service.",
      "Every week, families and singles alike linger on the grounds — swapping stories from the week, laughing over lunch, and welcoming newcomers into the circle. No agenda, just genuine connection.",
      "If you've never stayed back after a service, we'd love to have you. Bring your appetite and your story — someone would love to hear it.",
    ],
  },
  {
    slug: "a-note-on-stewardship",
    title: "A Note on Stewardship",
    category: "Stewardship",
    author: "Pastoral Team",
    date: "11 August 2026",
    excerpt: "Everything we hold belongs to God. Stewardship is simply how we hold it.",
    body: [
      "Stewardship begins with a settled conviction: the earth is the Lord's, and everything in it. We are managers, not owners.",
      "That conviction reaches further than money. It touches how we spend our hours, how we use our skills and how we treat what we have been entrusted with.",
      "Read more on our Stewardship page, where we walk through time, talent and treasure in turn.",
    ],
  },
];

export type Leader = {
  name: string;
  title: string;
  bio: string;
};

export const leaders: Leader[] = [
  {
    name: "Pastor Placeholder Name",
    title: "Campus Pastor",
    bio: "Leads the Mt Carmel Campus alongside his family, with a heart for expository teaching and community mission.",
  },
  {
    name: "Placeholder Name",
    title: "Associate Pastor",
    bio: "Oversees discipleship, new members and pastoral care across the campus.",
  },
  {
    name: "Placeholder Name",
    title: "Worship & Media Director",
    bio: "Coordinates the choir, instrumentalists and the media team that captures each service.",
  },
  {
    name: "Placeholder Name",
    title: "Youth Pastor",
    bio: "Shepherds teenagers and young adults through weekly gatherings, camps and mentorship.",
  },
  {
    name: "Placeholder Name",
    title: "Children's Ministry Lead",
    bio: "Builds safe, joyful spaces where children encounter scripture at their own level.",
  },
  {
    name: "Placeholder Name",
    title: "Administrator",
    bio: "Keeps the campus running — facilities, finance records, scheduling and volunteer rosters.",
  },
];

export type Belief = {
  title: string;
  body: string;
};

export const beliefs: Belief[] = [
  {
    title: "The Scriptures",
    body: "We believe the Bible is the inspired, infallible Word of God and the final authority for faith and conduct.",
  },
  {
    title: "The Trinity",
    body: "We believe in one God eternally existing in three persons: Father, Son and Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    body: "We believe in the deity, virgin birth, sinless life, atoning death, bodily resurrection and return of Jesus Christ.",
  },
  {
    title: "Salvation",
    body: "We believe salvation is by grace through faith in Christ alone, evidenced by a transformed life.",
  },
  {
    title: "The Holy Spirit",
    body: "We believe in the present ministry of the Holy Spirit, empowering believers for godly living and service.",
  },
  {
    title: "The Church",
    body: "We believe the church is the body of Christ, called to worship, discipleship, fellowship and mission.",
  },
];

export type StewardshipPillar = {
  title: string;
  body: string;
};

export const stewardshipPillars: StewardshipPillar[] = [
  {
    title: "Time",
    body: "Our days are numbered and given. Stewarding time means ordering the week around what God has called us to — worship, family, honest work and rest — rather than letting it be spent by default.",
  },
  {
    title: "Talent",
    body: "Every believer has been given something to contribute. Whether you teach, sing, build, cook, drive or code, your skill has a place in the life of this campus.",
  },
  {
    title: "Treasure",
    body: "Giving is worship before it is finance. Tithes and offerings sustain the ministry, care for those in need and carry the gospel beyond our walls.",
  },
  {
    title: "Testimony",
    body: "Your story is entrusted to you for someone else's benefit. Stewarding testimony means telling the truth about what God has done, in season and out.",
  },
  {
    title: "The Earth",
    body: "Caring for our building, our grounds and our neighbourhood is part of faithful management of what we have been given.",
  },
];

export type GivingCategory = {
  value: string;
  label: string;
  blurb: string;
};

export const givingCategories: GivingCategory[] = [
  { value: "tithe", label: "Tithe", blurb: "A tenth returned in obedience and trust." },
  { value: "offering", label: "Offering", blurb: "Given freely beyond the tithe, as worship." },
  {
    value: "thanksgiving",
    label: "Thanksgiving",
    blurb: "A response to specific answered prayer.",
  },
  { value: "seed", label: "Seed", blurb: "Sown in faith toward a specific expectation." },
  {
    value: "other",
    label: "Other / Special Giving",
    blurb: "Building fund, missions, benevolence and more.",
  },
];