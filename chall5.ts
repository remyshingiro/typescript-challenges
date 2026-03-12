type Notification = string | {
    title: string;
    body: string;
}

const formatNotification = (notification: Notification): string => {
    if(typeof notification === "string") return `Notification: ${notification}`;
    else if ('title' in notification) return `${notification.title}: ${notification.body}`;
}

console.log(formatNotification("Hello, world!"));

console.log(
  formatNotification({
    title: "URGENT",
    body: "Server is down"
  })
);
