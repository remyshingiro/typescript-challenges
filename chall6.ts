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