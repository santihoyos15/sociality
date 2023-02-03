import './App.css';
import { Post } from './components/Post';
import { Feed } from './components/Feed';
import { Props } from './components/Post/types';
import { DeleteModal } from './components/DeleteModal';
import { useState } from 'react';

export const App = () => {
  const replies = [
    {
      id: 31,
      username: 'santihoyos15',
      createdAt: new Date(),
      likes: 15,
      own: true,
      content: `I'm a reply!`,
    },
    {
      id: 32,
      username: 'santihoyos15',
      createdAt: new Date(),
      likes: 15,
      own: true,
      content: `I'm another reply!`,
    },
  ];

  const posts = [
    <Post
      key={1}
      id={1}
      username="jmbcourt"
      createdAt={new Date()}
      likes={15}
      content="Lorem ipsum, dolor sit amet consectetur adipi sicing elit. Odio, labore!
	Facilis consequuntur maiores qui id beatae aperiam deserunt veritatis
        totam earum fuga cupiditate perspiciatis voluptatum explicabo ab iure,
        voluptatem aut."
    />,
    <Post
      key={2}
      id={2}
      username="santihoyos15"
      createdAt={new Date()}
      likes={15}
      own={true}
      content="Lorem ipsum, dolor sit amet consectetur adipi sicing elit. Odio, labore!
        Facilis consequuntur maiores qui id beatae aperiam deserunt veritatis
        totam earum fuga cupiditate perspiciatis voluptatum explicabo ab iure,
        voluptatem aut."
    />,
    <Post
      key={3}
      id={3}
      username="danielagonx"
      createdAt={new Date()}
      likes={15}
      replies={replies}
      content="Lorem ipsum, dolor sit amet consectetur adipi sicing elit. Odio, labore!
        Facilis consequuntur maiores qui id beatae aperiam deserunt veritatis
        totam earum fuga cupiditate perspiciatis voluptatum explicabo ab iure,
        voluptatem aut."
    />,
  ];

  // TODO Probably implement useContext to make modal actions available everywhere
  // TODO Probably learn how to make animations
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(true);

  return (
    <>
      <Feed>{posts}</Feed>
      <DeleteModal open={isDeleteModalOpen} />
    </>
  );
};
