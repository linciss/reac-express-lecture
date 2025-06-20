import { useContext } from 'react';
import { MessageCard } from './MessageCard';
import { MessageContext } from '../context/useMessages';

export const MessageBoard = () => {
  const { messages } = useContext(MessageContext);

  return (
    <div className=' text-white mx-auto mt-20'>
      <div className='flex flex-col gap-4'>
        {messages &&
          messages.map((message) => {
            return (
              <MessageCard
                key={message._id}
                title={message.title}
                message={message.message}
                createdAt={message.createdAt}
                initialCount={message.upvotes - message.downvotes}
                id={message._id}
                userVote={message.userVote}
              />
            );
          })}
      </div>
    </div>
  );
};
