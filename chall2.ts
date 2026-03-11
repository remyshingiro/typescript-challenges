

let songs: string[] = ['Intro', 'Echo', 'Sunrise'];
interface Lister {
    name: string;
    age: number;
    isPremium: boolean;
}

let listener: Lister = {
    name: 'Maya',
    age: 22,
    isPremium: true,
};
const firstSong = (song: string) => song[0];
const firstSongg = (song: string) => song[2];
const listenerName = listener.name;
const listenerBoolean = listener.isPremium;


console.log(firstSong(songs))
console.log(firstSongg(songs))
console.log(listenerName)
console.log(listenerBoolean)
