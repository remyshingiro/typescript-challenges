interface TextMessage {
    type: "text";
    content: string;
}
interface Imagemessage {
    type: "image";
    url: string;
    caption?: string;
}
interface VideoMessage {
    type: "video";
    url: string;
    duration: number;
}

type ChatMessage = TextMessage | Imagemessage | VideoMessage;

const formatMessage = (chat: ChatMessage): string => {
    switch(chat.type) {
        case "text":
            return `Text: ${chat.content}`;
        case "image":
            return `Image [ ${chat.caption}]: ${chat.url}`;
        case "video":
            return `Video (${chat.duration}s) + ${chat.url}`;
    }
}

const firstCall = formatMessage({ type: "text", content: "Hello, world!" });
const secondCall = formatMessage({ type: "image", url: "<https://example.com/image.jpg>", caption: "Sunset" });
const thirdCall = formatMessage({ type: "video", url: "<https://example.com/video.mp4>", duration: 120 });

console.log(firstCall)
console.log(secondCall)
console.log(thirdCall)

