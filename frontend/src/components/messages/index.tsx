import UserMessage from "@/components/user-message";
import SeechoMessage from "@/components/seecho-message";
import ChatInput from "@/components/chat-input";

export default function Messages() {
    return (
        <div className="flex flex-col border-2 border-yellow-400 lg:w-1/2 h-1/2 lg:h-full">
            <div className="overflow-y-auto">
                <UserMessage>
                    Hello Seecho!
                </UserMessage>
                <UserMessage>
                    What makes a Cookie parameter in FastAPI? How do I know if I'm passing a cookie parameter when sending a request?
                </UserMessage>
                <UserMessage>
                    What's the difference between a session and a cookie?
                </UserMessage>
                <UserMessage>
                    What exactly is a session? How is it different from token authentication?

                    Also, can you use tokens to create a session? Is session in this context the same?
                </UserMessage>
                <SeechoMessage>
                    Hello Denise!
                </SeechoMessage>
                <SeechoMessage>
                    A random message will go here.
                </SeechoMessage>
                <SeechoMessage>
                    In FastAPI, a cookie parameter is a type of parameter that can be defined in your API route
                    function to receive values from cookies sent in an HTTP request. Cookies are small pieces of
                    data stored by a web browser and sent back to the server with each subsequent request.
                </SeechoMessage>
                <UserMessage>
                    Hello Seecho!
                </UserMessage>
                <UserMessage>
                    What makes a Cookie parameter in FastAPI? How do I know if I'm passing a cookie parameter when sending a request?
                </UserMessage>
                <UserMessage>
                    What's the difference between a session and a cookie?
                </UserMessage>
                <UserMessage>
                    What exactly is a session? How is it different from token authentication?

                    Also, can you use tokens to create a session? Is session in this context the same?
                </UserMessage>
                <SeechoMessage>
                    Hello Denise!
                </SeechoMessage>
                <SeechoMessage>
                    A random message will go here.
                </SeechoMessage>
                <SeechoMessage>
                    In FastAPI, a cookie parameter is a type of parameter that can be defined in your API route
                    function to receive values from cookies sent in an HTTP request. Cookies are small pieces of
                    data stored by a web browser and sent back to the server with each subsequent request.
                </SeechoMessage>
            </div>
            <ChatInput />
        </div>
    );
}
