import './App.css';
import { Post } from './components/Post';
import { Feed } from './components/Feed';
import { Props } from './components/Post/types';

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
  return <Feed>{posts}</Feed>;
};
