export const siteData = {
  "users": [
    {
      "id": "1",
      "username": "johnsmith",
      "displayName": "John Smith",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      "bio": "Software developer and coffee enthusiast",
      "followers": 1250,
      "following": 340,
      "verified": false,
      "joinDate": "2023-01-15"
    },
    {
      "id": "2",
      "username": "sarahjohnson",
      "displayName": "Sarah Johnson",
      "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b302?w=100&h=100&fit=crop&crop=face",
      "bio": "Digital artist and creative director",
      "followers": 2100,
      "following": 180,
      "verified": true,
      "joinDate": "2022-08-22"
    }
  ],
  "posts": [
    {
      "id": "1",
      "userId": "1",
      "content": "Beautiful sunset from my hiking trip today! Nature never ceases to amaze me. 🌅",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "likes": 45,
      "comments": 12,
      "shares": 3,
      "timestamp": "2024-01-15T18:30:00Z",
      "hashtags": [
        "nature",
        "hiking",
        "sunset"
      ]
    },
    {
      "id": "2",
      "userId": "2",
      "content": "Just finished working on a new digital art piece! What do you think? Feedback welcome! 🎨",
      "image": "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      "likes": 89,
      "comments": 23,
      "shares": 7,
      "timestamp": "2024-01-15T16:45:00Z",
      "hashtags": [
        "digitalart",
        "creativity",
        "design"
      ]
    }
  ],
  "conversations": [
    {
      "id": "1",
      "participants": [
        "1",
        "2"
      ],
      "lastMessage": "Hey! How was your hiking trip?",
      "timestamp": "2024-01-15T19:15:00Z",
      "unreadCount": 2
    }
  ],
  "notifications": [
    {
      "id": "1",
      "type": "like",
      "userId": "2",
      "postId": "1",
      "message": "Sarah Johnson liked your post",
      "timestamp": "2024-01-15T18:35:00Z",
      "read": false
    },
    {
      "id": "2",
      "type": "follow",
      "userId": "2",
      "message": "Sarah Johnson started following you",
      "timestamp": "2024-01-15T17:20:00Z",
      "read": false
    }
  ],
  "trendingTopics": [
    {
      "tag": "photography",
      "posts": 1250,
      "growth": "+15%"
    },
    {
      "tag": "travel",
      "posts": 890,
      "growth": "+8%"
    },
    {
      "tag": "technology",
      "posts": 2100,
      "growth": "+22%"
    }
  ],
  "settings": {
    "appName": "SocialConnect",
    "description": "Modern social media platform for connecting and sharing with friends",
    "version": "1.0.0",
    "theme": "auto",
    "notifications": {
      "likes": true,
      "comments": true,
      "follows": true,
      "messages": true
    },
    "privacy": {
      "profileVisibility": "public",
      "allowTagging": true,
      "showOnlineStatus": true
    }
  }
};

export const navigation = {
  "main": [
    {
      "name": "Home",
      "route": "/",
      "icon": "home",
      "badge": false
    },
    {
      "name": "Explore",
      "route": "/explore",
      "icon": "search",
      "badge": false
    },
    {
      "name": "Messages",
      "route": "/messages",
      "icon": "message-circle",
      "badge": true
    },
    {
      "name": "Notifications",
      "route": "/notifications",
      "icon": "bell",
      "badge": true
    },
    {
      "name": "Profile",
      "route": "/profile",
      "icon": "user",
      "badge": false
    }
  ],
  "footer": [
    {
      "name": "About",
      "route": "/about"
    },
    {
      "name": "Privacy",
      "route": "/privacy"
    },
    {
      "name": "Terms",
      "route": "/terms"
    },
    {
      "name": "Help",
      "route": "/help"
    }
  ]
};