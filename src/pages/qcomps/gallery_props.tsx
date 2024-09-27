import {GalleryProps} from "@/types/gallery";
import {ListItemProps} from "@/types/listItem";

function ListItem({label, content}: ListItemProps) {
    return (
        <li>
            <b>{label}</b>
            {content}
        </li>
    );
}
function Profile({scientist, size=100}: GalleryProps) {
    return (
        <section className="profile">
            <h2>{scientist.name}</h2>
            <img
                className="avatar"
                src={'https://i.imgur.com/'+ scientist.imageId + 's.jpg'}
                alt={scientist.name}
                width={size}
                height={size}
            />
            <ul>
                <ListItem label="Profession: " content={scientist.profession}/>
                <ListItem label={`Awards: ${scientist.awards.split(",").length}`}
                          content={` (${scientist.awards})`}/>
                <ListItem label="Discovered: " content={scientist.discovery}/>
            </ul>
        </section>
    );
}

export default function Gallery() {
    const scientists = [
        {
            name: "Maria Skłodowska-Curie",
            imageId: "szV5sdG",
            profession: "physicist and chemist",
            awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
            discovery: "polonium (element)",
        },
        {
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
            profession: "geochemist",
            awards: "Miyake Prize for geochemistry, Tanaka Prize",
            discovery: "a method for measuring carbon dioxide in seawater",
        }
    ]
  return (
    <div>
      <h1>Notable Scientists</h1>
        <Profile scientist={scientists[0]}/>
        <Profile scientist={scientists[1]}/>
    </div>
  );
}
