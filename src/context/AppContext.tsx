import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  likedByUser: boolean;
  group: string;
  timestamp: Date;
}

export interface CarGroup {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface AppState {
  posts: Post[];
  currentGroup: string | null;
  groups: CarGroup[];
}

type AppAction = 
  | { type: 'ADD_POST'; payload: Omit<Post, 'id' | 'likes' | 'likedByUser' | 'timestamp'> }
  | { type: 'TOGGLE_LIKE'; payload: { postId: string } }
  | { type: 'SET_CURRENT_GROUP'; payload: { groupId: string | null } };

const initialGroups: CarGroup[] = [
  { id: 'all', name: 'All Cars', icon: '🚗', color: 'primary' },
  { id: 'sports', name: 'Sports Cars', icon: '🏎️', color: 'racing' },
  { id: 'classic', name: 'Classic Cars', icon: '🚙', color: 'primary' },
  { id: 'electric', name: 'Electric Cars', icon: '⚡', color: 'electric' },
  { id: 'luxury', name: 'Luxury Cars', icon: '✨', color: 'primary' },
  { id: 'trucks', name: 'Trucks & SUVs', icon: '🚛', color: 'primary' },
];

const initialPosts: Post[] = [
  {
    id: '1',
    title: 'Just bought my dream Porsche 911!',
    content: 'After years of saving, I finally got my hands on a 2023 Porsche 911 Carrera S. The sound of that flat-six engine is pure music to my ears. Can\'t wait to take it to the track!',
    author: 'SpeedDemon92',
    likes: 24,
    likedByUser: false,
    group: 'sports',
    timestamp: new Date('2024-01-15T10:30:00'),
  },
  {
    id: '2',
    title: 'Restored 1969 Mustang Boss 429',
    content: 'Just finished a 3-year restoration project on this beautiful Boss 429. Every bolt has been restored to factory spec. The Cobra Jet engine purrs like a kitten but roars like a lion!',
    author: 'ClassicCarLover',
    likes: 42,
    likedByUser: true,
    group: 'classic',
    timestamp: new Date('2024-01-14T15:45:00'),
  },
  {
    id: '3',
    title: 'Tesla Model S Plaid: 0-60 in 1.99 seconds!',
    content: 'Had the chance to test drive the new Model S Plaid today. The acceleration is absolutely insane - it literally pins you to your seat. The future of performance cars is electric!',
    author: 'ElectricFuture',
    likes: 18,
    likedByUser: false,
    group: 'electric',
    timestamp: new Date('2024-01-13T09:15:00'),
  },
  {
    id: '4',
    title: 'Best modifications for daily driving?',
    content: 'Looking to modify my Honda Civic Type R for better daily usability without losing too much performance. What are your recommendations for suspension, exhaust, and interior upgrades?',
    author: 'DailyDriver',
    likes: 7,
    likedByUser: false,
    group: 'sports',
    timestamp: new Date('2024-01-12T14:20:00'),
  },
];

const initialState: AppState = {
  posts: initialPosts,
  currentGroup: 'all',
  groups: initialGroups,
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_POST':
      const newPost: Post = {
        ...action.payload,
        id: Date.now().toString(),
        likes: 0,
        likedByUser: false,
        timestamp: new Date(),
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    
    case 'TOGGLE_LIKE':
      return {
        ...state,
        posts: state.posts.map(post => 
          post.id === action.payload.postId
            ? {
                ...post,
                likes: post.likedByUser ? post.likes - 1 : post.likes + 1,
                likedByUser: !post.likedByUser,
              }
            : post
        ),
      };
    
    case 'SET_CURRENT_GROUP':
      return {
        ...state,
        currentGroup: action.payload.groupId,
      };
    
    default:
      return state;
  }
};

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  filteredPosts: Post[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  const filteredPosts = state.currentGroup === 'all' 
    ? state.posts 
    : state.posts.filter(post => post.group === state.currentGroup);

  return (
    <AppContext.Provider value={{ state, dispatch, filteredPosts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};