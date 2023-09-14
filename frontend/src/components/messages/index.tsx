import UserMessage from "@/components/user-message";
import SeechoMessage from "@/components/seecho-message";
import ChatInput from "@/components/chat-input";

export default function Messages() {
    return (
        <div className="overflow-x-hidden overflow-y-auto h-1/2 lg:w-1/2 lg:h-full">
            <UserMessage contd={false}>
                Hello Seecho!
            </UserMessage>
            <UserMessage contd={true}>
                What makes a Cookie parameter in FastAPI? How do I know if I'm passing a cookie parameter when sending a request?
            </UserMessage>
            <UserMessage contd={true}>
                What's the difference between a session and a cookie?
            </UserMessage>
            <UserMessage contd={true}>
                What exactly is a session? How is it different from token authentication?

                Also, can you use tokens to create a session? Is session in this context the same?
            </UserMessage>
            <SeechoMessage contd={false}>
                Hello Denise!
            </SeechoMessage>
            <SeechoMessage contd={true}>
                A random message will go here.
            </SeechoMessage>
            <SeechoMessage contd={true}>
                In FastAPI,      a cookie parameter is a type of 
                
                parameter that can be defined in your API route
                function to receive values from cookies sent in an HTTP request. Cookies are small pieces of
                data stored by a web browser and sent back to the server with each subsequent request.
            </SeechoMessage>
            <UserMessage contd={false}>
                Hello Seecho!
            </UserMessage>
            <UserMessage contd={true}>
                What makes a Cookie parameter in FastAPI? How do I know if I'm passing a cookie parameter when sending a request?
            </UserMessage>
            <UserMessage contd={true}>
                What's the difference between a session and a cookie?
            </UserMessage>
            <UserMessage contd={true}>
                What exactly is a session? How is it different from token authentication?

                Also, can you use tokens to create a session? Is session in this context the same?
            </UserMessage>
            <SeechoMessage contd={false}>
                Hello Denise!
            </SeechoMessage>
            <SeechoMessage contd={true}>
                A random message will go here.
            </SeechoMessage>
            <SeechoMessage contd={true}>
                In FastAPI, a cookie parameter is a type of parameter that can be defined in your API route
                function to receive values from cookies sent in an HTTP request. Cookies are small pieces of
                data stored by a web browser and sent back to the server with each subsequent request.
            </SeechoMessage>
            <ChatInput />
        </div>
    );
}
