import styles from './BookmarkList.module.css';
import styled from 'styled-components';

const ActionButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  background-color: purple;
  color: white;
`;

const BookmarkItem = props => {
  return (
    <li className={`${styles['bookmark-item']} ${props.isFavorite ? styles.favorite : ''}`}>
      <div>
        <h3>{props.title}</h3>
        <span
          style={{
            color: props.isFavorite ? 'purple' : 'grey',
            fontWeight: props.isFavorite ? 'bold' : 'normal'
          }}
        >{props.category}</span>
      </div>

      <p>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.url}
        </a>
      </p>

      <div>
        <button className={styles['favorite-button']} onClick={() => props.onToggleFavorite(props.id)}>
          {props.isFavorite ? '★ Favorited' : '☆ Favorite'}
        </button>

        <ActionButton onClick={() => props.onDelete(props.id)}>
          Delete
        </ActionButton>
      </div>
    </li>
  );
};

export default BookmarkItem;