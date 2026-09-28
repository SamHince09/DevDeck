import { useState } from 'react';
import './App.css';
// Importing components
import BookmarkInput from './components/BookmarkInput';
import BookmarkList from './components/BookmarkList';

const INITIAL_BOOKMARKS = [
  { id: 'b1', title: 'React Documentation', url: 'https://react.dev', category: 'Documentation', isFavorite: true },
  { id: 'b2', title: 'Vite Guide', url: 'https://vite.dev', category: 'Tools', isFavorite: false },
  { id: 'b3', title: 'MDN Web Docs', url: 'https://developer.mozilla.org', category: 'Documentation', isFavorite: false }
];

const App = () => {
  const [bookmarks, setBookmarks] = useState(INITIAL_BOOKMARKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addBookmarkHandler = (title, url, category) => {
    const newBookmark = {
      id: Math.random().toString(),
      title,
      url,
      category,
      isFavorite: false
    };
    setBookmarks(prev => [newBookmark, ...prev]);
  };

  const toggleFavoriteHandler = id => {
    setBookmarks(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const deleteBookmarkHandler = id => {
    setBookmarks(prev => prev.filter(item => item.id !== id));
  };

  const filteredBookmarks = selectedCategory === 'All'
    ? bookmarks
    : bookmarks.filter(b => b.category === selectedCategory);

  return (
    <div>
      <header>
        <h1>DevDeck</h1>
        <p>Your Developer Resource Hub</p>
      </header>

      <main>
        <section>
          <BookmarkInput onAddBookmark={addBookmarkHandler} />
        </section>

        <section>
          <div>
            <label>Filter by Category: </label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Documentation">Documentation</option>
              <option value="Tools">Tools</option>
              <option value="Tutorials">Tutorials</option>
            </select>
          </div>

          <BookmarkList
            items={filteredBookmarks}
            onToggleFavorite={toggleFavoriteHandler}
            onDelete={deleteBookmarkHandler}
          />
        </section>
      </main>
    </div>
  );
};

export default App;

// ChatGPT(Sep 2026)
// Prompt: Provided is the orginial bug code and the other is my code. Looking at the provided are all the errors cleared compared to the original, if not what is the error and explain how to fix it?
// Student Review: I reviewed the suggested fixes and compared them with my code. I teested the changes in my application to make sure the errors were resolved and the application worked correctly. 

// ChatGPT(Sep 2026)
// Prompt: I need to use css modules, dynamic css classes, inline styling, and styled components in my project. Looking at my code does it make those requiredment and if not what changes can I make?
// Student Review: I reviewed the examples provided and fixed and tested one of my designs that wasn't working properly.

// ChatGPT(Sep 2026)
// Prompt: I need help improving my spacing between the labels, inputs, and buttons in my code. Explain what changes I can make to make it cleaner. 
// Student Review: I reviewed the CSS changes and added margins to improce the spacing. I tested the changes and ajusted them alittle more. With using fourth different methods for styling I really struggled figuring out which design help a specific css style.

